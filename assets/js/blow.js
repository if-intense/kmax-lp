var vm = new Vue({
  el: "#blowMenu",
  data: {
    // ■ブロー技術をマスターする
    blowMenus: [
      // 56
      {
        id: 1,
        salon: "SUNVALLEY",
        stylist: "渋谷 謙太郎",
        genre: "スタディ",
        text: "一流のブローテクニック ウィッグ編",
        thumbnail: "service2/img/videoimg/STUDY_SUNVALLEY_SHIBUYAKENTARO.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_56-before.png",
        imgAfter: null,
        url: "https://kamismax.kamisma.com/service2/video/sample05.html",
      },
      // 57
      {
        id: 2,
        salon: "SUNVALLEY",
        stylist: "朝日 光輝",
        genre: "スタディ",
        text: "一流のブローテクニック 実践編",
        thumbnail: "service2/img/videoimg/STUDY_SUNVALLEY_ASAHIMITSUTERU.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_57-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_57-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample06.html",
      },
    ],
  },
});
