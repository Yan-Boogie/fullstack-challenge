# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts.

You can directly write your answers in your branch following the questions.

## Section 1: Architectural Design

> Q: Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?

The options we have:

* Vertical scaling
* 讀寫分離：製作 read-replica ，透過 WAL 處理 stale read 問題
* 橫切分表：Partitioning & Sharding

### 1. Vertical Scaling

最基本的暴力解——升級自家硬體設備。

* Pros：不會異動無論是程式碼或是架構，以金錢換取時間的概念。
* Cons：除了最直觀的預算限制之外，單純的硬體設備升級也會遇到升級天花板。若是架設在一些雲端服務的項目中也要將 ready queue 所導致的 downtime 考慮進來，另外雲端服務上的硬體設備升級其金錢成本往往也是成指數型成長的。

### 2. 讀寫分離：製作 Read-Replicas

![image1](https://i.imgur.com/ljpj9QM.png)

我們能以製作 Read-Replicas 的方式，降低單一 Database 的 reading throughput 來解決大量的讀取需求。
Cons：這樣的做法會因爲 Replication lag 而導致 stale reads 的狀況發生。我們能透過 Postgres WASL 來解決這項問題。

![image2](https://i.imgur.com/BlhtoDc.png)

透過 'streaming' 的方式 —— 建立 primary 與 replicas 之間的 open connection 來大幅縮短 WAL segmants 的傳遞。

### 3. 橫切分表：Partitioning & Sharding

橫切分表主要的目的為減少單張 table 的 row size 大小，解決 table index tree 過於肥大的問題。

我們能將相同結構的 row data 以跨表，甚至是跨 DB 的方式儲存來降低單張表所需花費的 access time 。

拆分的邏輯能視資料類型來決定，我們能以：

* Time-based 的方式拆出等量資料的 shards ，甚至是拆成冷熱資料建立 history table 。
* 以 hashed 或其他演算法形式拆成 shards。
* 另外建立 nickname column 將資料進行 cluster ，將屬性相同的存進同一組 shards 。

最後我們能搭配 Postgres10 新增的 **PARTITION** tag 處理跨表的 partition 以及 **FOREIGHN DATA WRAPPER** & **postgres_fdw** 將延伸出的作業處理放在資料層完成，也能選擇放在 application level 解決。
後者的自由度較大，卻也增加 app 層的專案規模與複雜度，除了要為 Client side 建立 Proxy service 之外，還有其他的延伸問題諸如：

* 跨 DB 的關聯查詢 —— join 的問題
* 跨 DB 的分散式事務處理
* 排序與分頁的相關問題
* 分散式的 ID 處理 —— 無法只靠 table id auto increment 作為 PK ，會出現 id 的重複。

---

## Section 2: Distributed Systems and Web3

> Q: Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized and scalable, while enabling other developers to build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

我認爲我們可以從兩個面向去探討這個問題，分別是：

1. 社群面向
2. 技術面向

### Community Aspect

#### 版本控管工具 —— Git

首先版本控管工具是必須的，除了選定使用的平台如：Github、Gitlab，遵循選定的 Workflow ，Branch ruling 等以外，下方我也條列出一些值得投資的細節：

* **Issues Template**

只要是知名的大型 Open-Source 專案幾乎都會要求社群上的共同開發者遵守 Template 格式發布 Issue，例如訂定 Issue types 、 Bug issues 要提供 reproduce 方法、預期結果與實際結果。
初期 Issues 還少時可能看不出差別甚至覺得多此一舉，但這就跟架專案一樣，隨著 Issues 的規模愈來愈龐大，加快理解單個 issue 的重要性會越來越高，也能更容易去辨認 duplicated issues 。

* **Version update 與 Breakchange rules**

除了說明清楚 Beta 與正式版本之間的差別以外，也可以另外拉出一個 Issue Template 專門發布 Break Change content ，細心一點也能去制定各個小數點間的 update 分別代表哪一個面向的更新。
往的經驗是如果沒有訂定清楚這些規範，專案版本就會一直在奇怪的數字上周旋，看到版本一大堆小數點只能苦笑，突然升級了一個版本又沒有清楚的告知做了哪些變動，兼容問題沒有處理好就代表工程師又要加班了。

* **Commit rule**

整理 commit 與 PR 規則也是很重要的一環。

可以依照目前主流的 angular commit message 套用現成的 implementation 如 Commitizen 搭配 Husky 做 pre-commit 之類。避免意義不明的 commit 出現。

![image3](https://i.imgur.com/SfGWbT8.jpg)

也能善用 git-rebase 的 commit squash 去壓縮每組 pr ，後續要搭配自動化更新 commit log 相關的工具時也會更好管理。

* **Communities communication**

以目前區塊鏈領域來說， Discord 社群基本上已經是必須的，這類型的平台提供了項目方拉近他們與社群間的距離，不論是能更直接的宣布事項或是能更直接地回答使用者一些基本的問題等，都凸顯了它的重要性。

### Technical Aspect

* **p2p/decentralized file system**

既然希望是去中心化的，那麼一個 p2p 的文件系統理所當然是必須的，而 IPFS 就是一個現成，也是目前主流的選項。

* **WYSIWYG editor 的選用與各類型檔案間的獨立處理**

因為平台的主要賣點是提供作家進行文字創作的地方，那麼編輯器自然得要有一定水平才行。
雖然考量到成本，不太可能一開始就從 0 尻出完整的編輯器，我們卻能從需求出發去尋找目前市場上現有的套件定好抽象化的架構做適當的的依附，未來產品擴張時再視需求展開拔除的計畫。
關於這項主題我們能在下一次的面試中做更詳細一點的討論。

---

## Section 3: Personal Passions and Communities

> What are some technologies you are recently fascinated with, and why are they interesting to you?

去年下半年花了大半時間研究 WYSIWYG 前端領域相關主題。

一開始對這個題目的興趣起源於前公司的產品規劃，公司當時有一項開發 WYSIWYG editor 的 SAAS 計畫，也以此為契機接觸到了許多平時寫 Frontend 所不會接觸到的抽象畫概念。
選擇脫離對瀏覽器的依賴所對應的代價就是愈發複雜的狀態機管理，隨著功能規模的擴大要面對的議題也會增加，光是效能優化就是絕對無法逃避的課題了。
也因此從初期專案的架構規劃便要嚴陣以待，在考量到人力、成本、預算等前提下選擇依附的套件本身就是一門學問，如何拆分架構層與做好必要的去耦合讓專案在未來成長時能輕鬆順利地拔除依賴套件更是一門難題。
這些全都與純粹的前端畫面切排版相差甚遠，也埋下了我對專案的架構規劃上的興趣小種子，讓我樂於去挖掘大型專案底層的實作。

而最近除了開始近幾天 Facebook 開源了自家使用的 lexical library 自己有稍稍玩一下它之外，也花了一些時間去學習 Rust 這門語言。
沒有什麼過於偉大的原因，就只是單純想學它覺得它挺潮的，順便回歸自大學時期學完就沒再碰過的 C, C++ 等低階語言的懷抱，也希望未來能為自己開出一扇系統性面向或 WASM 又或者是 Solana 的大門。

> What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

[slate.js](https://github.com/ianstormtaylor/slate)

主要為針對 architectural design 及其 implementation 的 source code study 。
去年將整個研究結果整理成完整的系列文章參加 [2021 年的 13th IT 邦鐵人賽](https://ithelp.ithome.com.tw/users/20139359/ironman/4447)

內容從整個歷史脈絡包含：

* Browser 內建的 'contenteditable' 語句
* 不同世代的編輯器 libraries 之間對於 'contenteditable' 的依賴程度
* 不同依賴程度所延伸出的痛點
* 為了解決世代間各自所遭遇的痛點所延伸出相異的解決方案與功能

到市場上知名的編輯器套件如： CKEditor 、 TinyMCE 、 Quill 、 Draft.js 、 slate.js 。之間的功能差異與用法概念、實作底層架構所選用的工具、 Pros 與 Cons 的 trade-off ，最後用 [圖表](https://ithelp.ithome.com.tw/articles/10270422) 做各項目的統整比較。

最後花了 20 篇文章的篇幅深入探討 slate-core package 底層各功能的實作：

* Interfaces 與延伸出來的 Custom-Types 的實作
* slate-core 與『遍歷』相關的功能，也一併介紹了 JS Iterator ＆ Iterable protocol 的背景知識
* JS Immutable 的議題以及 slate-core 與 immer.js 的搭配
* slate-core 'Operation' flow 以及架構上的拆分
* slate-core 的文本正規劃（ Normalize ）——相關的實作細節以及最後的 [完整運作流程圖](https://ithelp.ithome.com.tw/articles/10279617)

我喜歡參與或探討一些具有一定規模的專案的架構設計，包含工具的選用、制定規範、社群建立、抽象化架構層。 Github 上的 issue 也是我很常逛的地方，從討論串了解歷史脈絡的過程常常能激發許多不同的靈感，就算某個被提出的方案最後不被採納也能理解背後的原因。

我認為一個專案無論是否開源，只要預期規模超過一定程度，建立起社群的討論風氣就是必須的，畢竟一個人的思考是會有死角的。雖然寫 code（創作）的過程也很有趣，但親自與人討論，甚至只是作為一個第三者「在旁觀望」他人交流往往更容易引起我的興趣。
