var vm = new Vue({
  el: "#makeMenu",
  data: {
    // ■撮影現場で通用するヘアメイクを学習する
    locationMenus: [
      // 61
      {
        id: 1,
        salon: "SUNVALLEY",
        stylist: "朝日光輝",
        genre: "スタディ",
        text: 'キレイさ倍増！"魅力”を引き出す血色メイク',
        thumbnail: "service2/img/videoimg/STUDY_SUNVALLEY_ASAHIMITSUTERU2.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_61-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_61-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample33.html",
      },
    ],
    // ■サロンスタイルのヘアメイクを学習する
    salonstyleMenus: [
      // 62
      {
        id: 2,
        salon: "SYAN",
        stylist: "野々口 祐子",
        genre: "スタディ",
        text: "スマホ撮影で可愛く見せるカットとヘアメイク",
        thumbnail: "service2/img/videoimg/TREND_SYAN_NONOGUCHIYUKO.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_62-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_62-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample10.html",
      },
      // 63 (7)
      {
        id: 3,
        salon: "SHEA.",
        stylist: "坂狩 トモタカ",
        genre: "スタディ",
        text: "長さを変えずに女性像を変える必見テクニック",
        thumbnail: "service2/img/videoimg/TREND_SHEA_SAKAGARITOMOTAKA.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_7-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_7-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample16.html",
      },
    ],
  },
});
