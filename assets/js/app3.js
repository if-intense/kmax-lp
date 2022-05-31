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
            thumbnail: "service2/img/videoimg/STUDY_ABBEY_ODASHIMANOBUTO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_01-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample04.html"
           },
           {
            id: 2,
            salon: "ABBEY",
            stylist: "松永 英樹",
            genre: "スタディ",
            text: "スタイルチェンジのポイント理解！<br>重めのグラボブからショートグラに簡単チェンジ",
            thumbnail: "service2/img/videoimg/STUDY_ABBEY_MATSUNAGAHIDEKI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_02-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_02-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample23.html"
           },
           {
            id: 3,
            salon: "PEEK-A -BOO",
            stylist: "堀内 邦雄",
            genre: "スタディ",
            text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
            thumbnail: "service2/img/videoimg/TREND_PEEK-A-BOO_HORIUCHIKUNIO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_03-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_03-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample25.html"
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
            thumbnail: "service2/img/videoimg/TREND_grico_EZAKIYOSHITAKA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_04-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample09.html"
           },
          //  5
           {
            id: 2,
            salon: "ANNE.",
            stylist: "澤野 秀樹",
            genre: "スタディ",
            text: "骨格をキレイにみせるマッシュショート",
            thumbnail: "service2/img/videoimg/TREND_ANNE_SAWANOHIDEKI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_05-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_05-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample30.html"
           },
          //  6
           {
            id: 3,
            salon: "GOALD",
            stylist: "中村 トメ吉",
            genre: "スタディ",
            text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
            thumbnail: "service2/img/videoimg/STUDY_GOALD_NAKAMURATOMEKITI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_06-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample21.html"
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
            thumbnail: "service2/img/videoimg/TREND_SHEA_SAKAGARITOMOTAKA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_7-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_7-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample16.html"
           },
          //  8
           {
            id: 2,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            genre: "スタディ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            thumbnail: "service2/img/videoimg/STUDY_suburbia_ISHIKAWAHIDENORI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_08-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample07.html"
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
            thumbnail: "service2/img/videoimg/STUDY_NORAJourney_TANAKAMAMORU.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_09-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample17.html"
           },
          //  10
           {
            id: 2,
            salon: "C・crew",
            stylist: "森田 怜",
            genre: "スタディ",
            text: "人気の顔まわりスタイル・前髪から繋ぐ<br>レイヤーカット&アレンジ",
            thumbnail: "service2/img/videoimg/TREND_Ccrew_MORITARYO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_10-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_10-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample22.html"
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
            thumbnail: "service2/img/videoimg/STUDY_Cocoon_SAKURA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_11-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_11-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample35.html"
           },
          //  12
           {
            id: 2,
            salon: "NORA Journey",
            stylist: "田中 衛",
            genre: "スタディ",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            thumbnail: "service2/img/videoimg/STUDY_NORAJourney_TANAKAMAMORU.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_09-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample17.html"
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
            thumbnail: "service2/img/videoimg/TREND_VeLO_AKAMATSUMIWA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_13-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_13-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample32.html"
           },
           {
            id: 2,
            salon: "salon dakota",
            stylist: "小谷 英智香",
            genre: "スタディ",
            text: "トータルコーディネイトで魅せる<br>オマージュスタイル",
            thumbnail: "service2/img/videoimg/TREND_salondakota_KOTANIHIDECHIKA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_14-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_14-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample02.html"
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
            thumbnail: "service2/img/videoimg/STUDY_suburbia_ISHIKAWAHIDENORI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_08-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample07.html"
           },
          //  16 (10)
           {
            id: 2,
            salon: "C・crew",
            stylist: "森田 怜",
            genre: "スタディ",
            text: "人気の顔まわりスタイル・前髪から<br>繋ぐレイヤーカット&アレンジ",
            thumbnail: "service2/img/videoimg/TREND_Ccrew_MORITARYO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_10-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_10-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample22.html"
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
            thumbnail: "service2/img/videoimg/STUDY_ABBEY_ODASHIMANOBUTO.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_01-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample04.html"
           },
          //  18
           {
            id: 2,
            salon: "JENO",
            stylist: "堀江 昌樹",
            genre: "スタディ",
            text: "カット×「TOKIKATA」でつくる<br>モード可愛いミニボブスタイル",
            thumbnail: "service2/img/videoimg/TREND_JENO_HORIEMASAKI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_18-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_18-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample34.html"
           },
          //  19
           {
            id: 3,
            salon: "Cocoon",
            stylist: "VAN",
            genre: "スタディ",
            text: "ノンブローカットでつくるシースルーマッシュ",
            thumbnail: "service2/img/videoimg/STUDY_Cocoon_VAN.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_19-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_19-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample27.html"
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
            thumbnail: "service2/img/videoimg/TREND_ABBEY_MATSUNAGAHIDEKI.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_20-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_20-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample08.html"
           },
          //  21
           {
            id: 2,
            salon: "PEEK-A-BOO",
            stylist: "福井 達真",
            genre: "スタディ",
            text: "レイヤーボブ×クリエイティブワーク",
            thumbnail: "service2/img/videoimg/TREND_PEEK-A-BOO_FUKUITATSUMASA.jpg",
            imgBefore: "assets/images/before-after/kmax_before&after_21-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_21-after.png",
            url: "https://kamismax.kamisma.com/service2/video/sample14.html"
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
                thumbnail: "service2/img/videoimg/TREND_CARNIVAL_kazu.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_22-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_22-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample18.html"
               },
              //  23
               {
                id: 2,
                salon: "MINX",
                stylist: "池戸 裕二",
                genre: "スタディ",
                text: "カットで魅せる「トーキョージェンダーレス」",
                thumbnail: "service2/img/videoimg/TREND_MINX_IKEDOYUJI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_23-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_23-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample19.html"
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
                thumbnail: "service2/img/videoimg/TREND_grico_EZAKIYOSHITAKA.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_04-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample09.html"
               },
              //  25
               {
                id: 2,
                salon: "ABBEY",
                stylist: "小田嶋 信人",
                genre: "スタディ",
                text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
                thumbnail: "service2/img/videoimg/STUDY_ABBEY_ODASHIMANOBUTO.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_01-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_01-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample04.html"
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
                thumbnail: "service2/img/videoimg/TREND_ANNE_SAWANOHIDEKI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_05-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_05-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample30.html"
               },
              //  27
               {
                id: 2,
                salon: "PEEK-A-BOO",
                stylist: "堀内 邦雄",
                genre: "スタディ",
                text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
                thumbnail: "service2/img/videoimg/TREND_PEEK-A-BOO_HORIUCHIKUNIO.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_27-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_27-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample25.html"
               },
              //  28
               {
                id: 3,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                genre: "スタディ",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                thumbnail: "service2/img/videoimg/STUDY_GOALD_NAKAMURATOMEKITI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_06-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample21.html"
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
                thumbnail: "service2/img/videoimg/STUDY_GOALD_NAKAMURATOMEKITI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_06-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample21.html"
               },
              //  30
               {
                id: 2,
                salon: "Men's Lapis",
                stylist: "KUNI",
                genre: "スタディ",
                text: "スキンフェードとダレルパーマでつくる<br>フルバックショート",
                thumbnail: "service2/img/videoimg/STUDY_MensLapis_KUNI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_55-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_55-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample28.html"
               },
              //  31
               {
                id: 3,
                salon: "syn",
                stylist: "齋藤 正太",
                genre: "スタディ",
                text: "トータルケアで創り上げる<br>ジェンダーレススタイル",
                thumbnail: "service2/img/videoimg/TREND_syn_SAITOSYOTA.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_31-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_31-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample37.html"
               }
        ]
    }
});