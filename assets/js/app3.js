var vm = new Vue({
    el: '#cutMenu',
    data: {
      menus: [
        {
            id: 1,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            genre: "スタディ",
            text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/STUDY_ABBEY_ODASHIMANOBUTO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
            url: "#"
           },
           {
            id: 2,
            salon: "ABBEY",
            stylist: "松永 英樹",
            genre: "スタディ",
            text: "スタイルチェンジのポイント理解！<br>重めのグラボブからショートグラに簡単チェンジ",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/STUDY_ABBEY_MATSUNAGAHIDEKI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_02-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_02-before.png",
            url: "#"
           },
           {
            id: 3,
            salon: "PEEK-A -BOO",
            stylist: "堀内 邦雄",
            genre: "スタディ",
            text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/TREND_PEEK-A-BOO_HORIUCHIKUNIO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_03-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_03-before.png",
            url: "#"
           }
      ],
      designMenus: [
        // 4
        {
            id: 1,
            salon: "grico",
            stylist: "エザキ ヨシタカ",
            genre: "スタディ",
            text: "後頭部のフォルムを自然に見せる<br>簡単ショートヘア",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/TREND_grico_EZAKIYOSHITAKA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_04-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-before.png",
            url: "#"
           },
          //  5
           {
            id: 2,
            salon: "ANNE.",
            stylist: "澤野 秀樹",
            genre: "スタディ",
            text: "骨格をキレイにみせるマッシュショート",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/TREND_ANNE_SAWANOHIDEKI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_05-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_05-before.png",
            url: "#"
           },
          //  6
           {
            id: 3,
            salon: "GOALD",
            stylist: "中村 トメ吉",
            genre: "スタディ",
            text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/STUDY_GOALD_NAKAMURATOMEKITI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
            url: "#"
           }
      ],
    //   ■ミディアムのカットを学習する
      mediumCuts: [
        // 7
        {
            id: 1,
            salon: "SHEA.",
            stylist: "坂狩 トモタカ",
            genre: "スタディ",
            text: "長さを変えずに女性像を変える必見テクニック",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/TREND_SHEA_SAKAGARITOMOTAKA.jpg",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           },
          //  8
           {
            id: 2,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            genre: "スタディ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            thumbnail: "https://kamismax.kamisma.com/service2/img/videoimg/STUDY_suburbia_ISHIKAWAHIDENORI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_08-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-before.png",
            url: "#"
           },
      ],
    //   ■ロングのカットを学習する
      longCuts: [
        // 9
        {
            id: 1,
            salon: "NORA Journey",
            stylist: "田中 衛",
            genre: "スタディ",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_09-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-before.png",
            url: "#"
           },
          //  10
           {
            id: 2,
            salon: "C・crew",
            stylist: "森田 怜",
            genre: "スタディ",
            text: "人気の顔まわりスタイル・前髪から繋ぐ<br>レイヤーカット&アレンジ",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           },
      ],
    //   ■カウンセリングを活かしたカット技術を学ぶ
      counselingCuts: [
        // 11
        {
            id: 1,
            salon: "Cocoon",
            stylist: "SAKURA",
            genre: "スタディ",
            text: "ネガティブ要素を取り除く、<br>スタイル提案の極意！",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_11-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_11-before.png",
            url: "#"
           },
          //  12
           {
            id: 2,
            salon: "NORA Journey",
            stylist: "田中 衛",
            genre: "スタディ",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_09-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-before.png",
            url: "#"
           },
      ],
    //   ■似合わせカットを学習する
      matchingCuts: [
        {
            id: 1,
            salon: "VeLO",
            stylist: "赤松 美和",
            genre: "スタディ",
            text: "コンプレックスをプラスに変える、<br>似合わせテクニック",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_13-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_13-before.png",
            url: "#"
           },
           {
            id: 2,
            salon: "salon dakota",
            stylist: "小谷 英智香",
            genre: "スタディ",
            text: "トータルコーディネイトで魅せる<br>オマージュスタイル",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_14-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_14-before.png",
            url: "#"
           },
      ],
    //   ■外国人風スタイルのカット技術を理解する
      fstyleCuts: [
        // 15
        {
            id: 1,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            genre: "スタディ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_08-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-before.png",
            url: "#"
           },
          //  16 (10)
           {
            id: 2,
            salon: "C・crew",
            stylist: "森田 怜",
            genre: "スタディ",
            text: "人気の顔まわりスタイル・前髪から<br>繋ぐレイヤーカット&アレンジ",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           },
      ],
    //   ■ニースタンダードなカット技術を学習する
      newstandardCuts: [
        // 17
        {
            id: 1,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            genre: "スタディ",
            text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
            url: "#"
           },
          //  18
           {
            id: 2,
            salon: "JENO",
            stylist: "堀江 昌樹",
            genre: "スタディ",
            text: "カット×「TOKIKATA」でつくる<br>モード可愛いミニボブスタイル",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_18-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_18-before.png",
            url: "#"
           },
          //  19
           {
            id: 3,
            salon: "Cocoon",
            stylist: "VAN",
            genre: "スタディ",
            text: "ノンブローカットでつくるシースルーマッシュ",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_19-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_19-before.png",
            url: "#"
           },
      ],
    //   ■リアリティブなレイヤーカットを学ぶ
      layerCuts: [
        // 20
        {
            id: 1,
            salon: "ABBEY",
            stylist: "松永 英樹",
            genre: "スタディ",
            text: "ウルフレイヤーで魅せる技術と思考",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "assets/images/before-after/kmax_before&after_20-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_20-before.png",
            url: "#"
           },
          //  21
           {
            id: 2,
            salon: "PEEK-A-BOO",
            stylist: "福井 達真",
            genre: "スタディ",
            text: "レイヤーボブ×クリエイティブワーク",
            thumbnail: "https://kamismax.kamisma.com",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           }
        ],
        // ■リアリティブなショートカットを学ぶ
        shortCuts: [
          // 22
            {
                id: 1,
                salon: "CARNIVAL",
                stylist: "kazu",
                genre: "スタディ",
                text: "なじみ感・フィット感をつくりだす、<br>一発切りショートスタイル",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_22-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_22-before.png",
                url: "#"
               },
              //  23
               {
                id: 2,
                salon: "MINX",
                stylist: "池戸 裕二",
                genre: "スタディ",
                text: "カットで魅せる「トーキョージェンダーレス」",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_23-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_23-before.png",
                url: "#"
               },
        ],
        // "■フォルムコントロールを学ぶ	"
        formControls: [
          // 24
            {
                id: 1,
                salon: "grico",
                stylist: "エザキ ヨシタカ",
                genre: "スタディ",
                text: "後頭部のフォルムを自然に見せる<br>簡単ショートヘア",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_04-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-before.png",
                url: "#"
               },
              //  25
               {
                id: 2,
                salon: "ABBEY",
                stylist: "小田嶋 信人",
                genre: "スタディ",
                text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
                url: "#"
               }
        ],
        // "■骨格を補正するカット技術を学ぶ	"
        structuralCuts: [
          // 26
            {
                id: 1,
                salon: "ANNE",
                stylist: "澤野 秀樹",
                genre: "スタディ",
                text: "骨格をキレイにみせるマッシュショート",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_05-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_05-before.png",
                url: "#"
               },
              //  27
               {
                id: 2,
                salon: "PEEK-A-BOO",
                stylist: "堀内 邦雄",
                genre: "スタディ",
                text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_27-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_27-before.png",
                url: "#"
               },
              //  28
               {
                id: 3,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                genre: "スタディ",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
                url: "#"
               },
        ],
        // ■メンズカットを学習する
        mensCuts: [
          // 29
            {
                id: 1,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                genre: "スタディ",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
                url: "#"
               },
              //  30
               {
                id: 2,
                salon: "Men's Lapis",
                stylist: "KUNI",
                genre: "スタディ",
                text: "スキンフェードとダレルパーマでつくる<br>フルバックショート",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_55-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_55-before.png",
                url: "#"
               },
              //  31
               {
                id: 3,
                salon: "syn",
                stylist: "齋藤 正太",
                genre: "スタディ",
                text: "トータルケアで創り上げる<br>ジェンダーレススタイル",
                thumbnail: "https://kamismax.kamisma.com",
                imgBefore: "assets/images/before-after/kmax_before&after_31-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_31-before.png",
                url: "#"
               }
        ]
    }
});