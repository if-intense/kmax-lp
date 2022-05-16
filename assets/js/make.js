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
        study: "スタディ",
        text: 'キレイさ倍増！"魅力”を引き出す血色メイク',
        thumbnail: "service2/img/videoimg/STUDY_SUNVALLEY_ASAHIMITSUTERU2.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_61-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_61-before.png",
        url: "#",
      },
    ],
    // ■サロンスタイルのヘアメイクを学習する
    salonstyleMenus: [
      // 62
      {
        id: 2,
        salon: "SYAN",
        stylist: "野々口 祐子",
        study: "スタディ",
        text: "スマホ撮影で可愛く見せるカットとヘアメイク",
        thumbnail: "service2/img/videoimg/TREND_SYAN_NONOGUCHIYUKO.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_62-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_62-before.png",
        url: "#",
      },
      // 63 (7)
      {
        id: 3,
        salon: "SHEA.",
        stylist: "坂狩 トモタカ",
        study: "スタディ",
        text: "長さを変えずに女性像を変える必見テクニック",
        thumbnail: "service2/img/videoimg/TREND_SHEA_SAKAGARITOMOTAKA.jpg",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ],
  },
});
