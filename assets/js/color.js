var vm = new Vue({
    el: '#colorMenu',
    data: {
        // ■カラーテクニックを学習する
        colorTechniques: [
                // 32
                {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                genre: "スタディ",
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                thumbnail: "service2/img/videoimg/STUDY_HAIR_COLOR.jpg",
                imgBefore: null,
                imgAfter: null,
                url: "#"
               },
                // 33
               {
                id: 2,
                salon: "suburbia",
                stylist: "黒柳 剛",
                genre: "スタディ",
                text: "外国人風カラーのポイントがこれでわかる！<br>suburbia流ノウハウを完全公開！",
                thumbnail: "/service2/img/videoimg/STUDY_suburbia_KUROYANAGITSUYOSHI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_33-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_33-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample12.html"
               },
          ],
          designColors: [
               // 34
             {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                genre: "スタディ",
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                thumbnail: "service2/img/videoimg/STUDY_HAIR_COLOR.jpg",
                imgBefore: null,
                imgAfter: null,
                url: "#"
               },
                // 35
               {
                id: 2,
                salon: "Wille",
                stylist: "志賀 尚之",
                genre: "スタディ",
                text: "2.5Dカラーでつくる<br>アニメのキャラクタースタイル",
                thumbnail: "service2/img/videoimg/TREND_Wille_SHIGANAOYUKI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_35-before.png",
                imgAfter: "assets/images/before-after/kmax_before&after_35-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample24.html"
               },
                // 36
               {
                id: 3,
                salon: "SHACHU",
                stylist: "みやち のりよし",
                genre: "スタディ",
                text: "みやちのりよし流・<br>感覚でつくる新トレンドカラー",
                thumbnail: "service2/img/videoimg/TREND_SHACHU_MIYACHINORIYOSHI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_36-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_36-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample01.html"
               }
          ],
        //   ■ペール系の高明度カラーを学習する
        paleColors: [
             // 37
            {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                genre: "スタディ",
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                thumbnail: "service2/img/videoimg/STUDY_HAIR_COLOR.jpg",
                imgBefore: null,
                imgAfter: null,
                url: "#"
               },
                // 38
               {
                id: 2,
                salon: "Beleza",
                stylist: "RYUSEI",
                genre: "スタディ",
                text: "ワンブリーチ・リタッチで見せる<br>ハイトーン渋谷トレンド",
                thumbnail: "service2/img/videoimg/STUDY_Beleza_RYUSEI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_38-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_38-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample36.html"
               },
                // 39
               {
                id: 3,
                salon: "iLe",
                stylist: "酒井元樹",
                genre: "スタディ",
                text: "高明度カラーをMAXキレイに見せる<br>必見ブリーチテクニック",
                thumbnail: "service2/img/videoimg/STUDY_iLe_SAKAIMOTOKI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_39-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_39-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample39.html"
               }
        ],
        foreignerColors: [
            // 40
            {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                genre: "スタディ",
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                thumbnail: "service2/img/videoimg/STUDY_HAIR_COLOR.jpg",
                imgBefore: null,
                imgAfter: null,
                url: "#"
               },
            //    41
               {
                id: 2,
                salon: "suburbia",
                stylist: "黒柳 剛",
                genre: "スタディ",
                text: "外国人風カラーのポイントがこれでわかる！<br>suburbia流ノウハウを完全公開！",
                thumbnail: "service2/img/videoimg/STUDY_suburbia_KUROYANAGITSUYOSHI.jpg",
                imgBefore: "assets/images/before-after/kmax_before&after_33-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_33-after.png",
                url: "https://kamismax.kamisma.com/service2/video/sample12.html"
               }
        ]

    }
});