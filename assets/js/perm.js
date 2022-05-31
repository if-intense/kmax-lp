var vm = new Vue({
  el: "#permMenu",
  data: {
    // ■パーマテクニックを学習する
    permTechniques: [
      {
        id: 1,
        salon: "パーマ理論",
        stylist: null,
        genre: "スタディ",
        text: null,
        thumbnail: "service2/img/videoimg/STUDY_HAIR_PERM.jpg",
        imgBefore: null,
        imgAfter: null,
        url: "#",
      },
      // 43
      {
        id: 2,
        salon: "LOAVE",
        stylist: "佐脇 正徳",
        genre: "スタディ",
        text: "カット×パーマでつくる<br>柔らか外国人風スタイル",
        thumbnail: "service2/img/videoimg/TREND_LOAVE_SAWAKIMASANORI.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_43-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_43-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample13.html",
      },
      // 44
      {
        id: 3,
        salon: "ANTI",
        stylist: "CHO",
        genre: "スタディ",
        text: "ANTI流、ブリーチパーマでつくる<br>トレンドスタイル",
        thumbnail: "service2/img/videoimg/TREND_ANTI_CHO.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_44-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_44-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample29.html",
      },
    ],
    // ■デジタルパーマを学習する
    digitalPerms: [
      {
        id: 1,
        salon: "パーマ理論",
        stylist: null,
        genre: "スタディ",
        text: null,
        thumbnail: "service2/img/videoimg/STUDY_HAIR_PERM.jpg",
        imgBefore: null,
        imgAfter: null,
        url: "#",
      },
      // 46
      {
        id: 2,
        salon: "MINX",
        stylist: "中野 太郎",
        genre: "スタディ",
        text: "デジタルパーマでつくる<br>ゆるふわレイヤースタイル",
        thumbnail: "service2/img/videoimg/TREND_MINX_NAKANOTARO.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_46-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_46-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample26.html",
      },
      // 47
      {
        id: 3,
        salon: "apish ginZa",
        stylist: "藤原 駿",
        genre: "スタディ",
        text: "ヒットヘア！<br>韓国風リバーススタイルで<br>学ぶカット＆パーマ",
        thumbnail: "service2/img/videoimg/STUDY_apishginZa_FUJIWARASHUN.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_47-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_47-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample15.html",
      },
      // 48
      {
        id: 4,
        salon: "MINX",
        stylist: "歳嶋 建国",
        genre: "スタディ",
        text: "提案の幅が圧倒的に増える、<br>つけデジでつくる<br>ショートパーマデザイン",
        thumbnail: "service2/img/videoimg/STUDY_MINX_TOSHIJIMATAKEKUNI.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_48-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_48-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample20.html",
      },
    ],
    // ■毛髪診断からデジタルパーマ提案を学習する
    checkupPermMenus: [
      // 49
      {
        id: 1,
        salon: "パーマ理論",
        stylist: null,
        genre: "スタディ",
        text: null,
        thumbnail: "service2/img/videoimg/STUDY_HAIR_PERM.jpg",
        imgBefore: null,
        imgAfter: null,
        url: "#",
      },
      // 50
      {
        id: 2,
        salon: "apish ginZa",
        stylist: "藤原 駿",
        genre: "スタディ",
        text: "ヒットヘア！<br>韓国風リバーススタイルで<br>学ぶカット＆パーマ",
        thumbnail: "service2/img/videoimg/STUDY_apishginZa_FUJIWARASHUN.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_47-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_47-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample15.html",
      },
      // 51
      {
        id: 3,
        salon: "MINX",
        stylist: "歳嶋 建国",
        genre: "スタディ",
        text: "提案の幅が圧倒的に増える、<br>つけデジでつくる<br>ショートパーマデザイン",
        thumbnail: "service2/img/videoimg/STUDY_MINX_TOSHIJIMATAKEKUNI.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_48-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_48-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample20.html",
      },
    ],
    // ■外国人風パーマを理解する
    foreignerPermMenus: [
      // 52
      {
        id: 1,
        salon: "パーマ理論",
        stylist: null,
        genre: "スタディ",
        text: null,
        thumbnail: "service2/img/videoimg/STUDY_HAIR_PERM.jpg",
        imgBefore: null,
        imgAfter: null,
        url: "#",
      },
      // 53
      {
        id: 2,
        salon: "LOAVE",
        stylist: "佐脇 正徳",
        genre: "スタディ",
        text: "カット×パーマでつくる<br>柔らか外国人風スタイル",
        thumbnail: "service2/img/videoimg/TREND_LOAVE_SAWAKIMASANORI.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_53-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_53-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample13.html",
      },
    ],
    // ■メンズパーマを学習する
    mensPermMenus: [
      // 54
      {
        id: 1,
        salon: "パーマ理論",
        stylist: null,
        genre: "スタディ",
        text: null,
        thumbnail: "service2/img/videoimg/STUDY_HAIR_PERM.jpg",
        imgBefore: null,
        imgAfter: null,
        url: "#",
      },
      // 55
      {
        id: 2,
        salon: "Men's Lapis",
        stylist: "KUNI",
        genre: "スタディ",
        text: "スキンフェードとダレルパーマでつくる<br>フルバックショート",
        thumbnail: "service2/img/videoimg/STUDY_MensLapis_KUNI.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_55-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_55-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample28.html",
      },
    ],
  },
});
