# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts. 

You can directly write your answers in your branch following the questions. 

## Section 1: Architectural Design

*Please answer at lease one of the following questions.*

* Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and envovling the infrastructures?

* Assume that you are building a backend service for a medical company. When a request come in, this service needs to take the user input, pass it to a pre-trained computational model, and return the output to the user. The service needs to handle a high request frequency with uncertian average traffic volumne, and the computational model needs to process large amount of data in parallel. How would you design this service and choose the building blocks to achieve the above requirements?


* Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?


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
沒有什麼過於偉大的原因，就只是單純想學它覺得它挺潮的，順便回歸自大學時期學完就沒再碰過的 C, C++ 等低階語言的懷抱，也希望未來能為自己開出一扇系統性面向或 WASM 的大門。

* What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

* If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collabration process?
