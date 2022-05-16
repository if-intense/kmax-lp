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
        text: "一流のブローテクニック ウィッグ編",
        thumbnail: "service2/img/videoimg/TREND_syn_SAITOSYOTA.jpg",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
      // 57
      {
        id: 2,
        salon: "SUNVALLEY",
        stylist: "朝日 光輝",
        text: "一流のブローテクニック 実践編",
        thumbnail: "service2/img/videoimg/STUDY_SUNVALLEY_ASAHIMITSUTERU.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_57-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_57-before.png",
        url: "#",
      },
    ],
  },
});
