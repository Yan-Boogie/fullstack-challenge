# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts.

You can directly write your answers in your branch following the questions.

## Section 1: Architectural Design

*Please answer at lease one of the following questions.*

```
Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?
```

The options we have:

* Vertical scaling
* 讀寫分離：製作 read-replica ，透過 WAL 處理 stale read 問題
* 橫切分表：Partitioning & Sharding

### 1. Vertical Scaling

最基本的暴力解——升級自家硬體設備。
Pros：不會異動無論是程式碼或是架構，以金錢換取時間的概念。
Cons：除了最直觀的預算限制之外，單純的硬體設備升級也會遇到升級天花板。若是架設在一些雲端服務的項目中也要將 ready queue 所導致的 downtime 考慮進來，另外雲端服務上的硬體設備升級其金錢成本往往也是成指數型成長的。

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

## Section 2: Distributed Systems and Web3

*Please answer at lease one of the following questions.*

* Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized and scalable, while enabling other developers to build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

* Assume you are to design a product for crowdfunding creative projects with NFTs, where the creator pre-sale the ownership of the final result as NFTs. From minting the tokens to delivering the final result, what are the UX and techonogical challenges you forsee, and what do you think it takes to solve these problems well?

## Section 3: Personal Passions and Communities

*Please answer at lease two of the following questions.*

* What are some technologies you are recently fascinated with, and why are they interesting to you?

去年下半年花了大半時間研究 WYSIWYG 領域相關，主要 focus 在前端的編輯器架構上並將整個研究結果整理成完整的系列文章參加 [2021 年的 13th IT 邦鐵人賽](https://ithelp.ithome.com.tw/users/20139359/ironman/4447)

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

一開始對這個題目的興趣起源於前公司的產品規劃，公司當時有一項開發 WYSIWYG editor 的 SAAS 計畫，也以此為契機接觸到了許多平時寫 Frontend 所不會接觸到的抽象畫概念。
選擇脫離對瀏覽器的依賴所對應的代價就是愈發複雜的狀態機管理，隨著功能規模的擴大要面對的議題也會增加，光是效能優化就是絕對無法逃避的課題了。
也因此從初期專案的架構規劃便要嚴陣以待，在考量到人力、成本、預算等前提下選擇依附的套件本身就是一門學問，如何拆分架構層與做好必要的去耦合讓專案在未來成長時能輕鬆順利地拔除依賴套件更是一門難題。
這些全都與純粹的前端畫面切排版相差甚遠，也埋下了我對專案的架構規劃上的興趣小種子，讓我樂於去挖掘大型專案底層的實作。

而最近除了開始近幾天 Facebook 開源了自家使用的 lexical library 自己有稍稍玩一下它之外，也花了一些時間去學習 Rust 這門語言。
沒有什麼過於偉大的原因，就只是單純想學它覺得它挺潮的，順便回歸自大學時期學完就沒再碰過的 C, C++ 等低階語言的懷抱，也希望未來能為自己開出一扇系統性面向或 WASM 又或者是 Solana 的大門。

* What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

* If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collabration process?
