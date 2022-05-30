var vm = new Vue({
  el: "#creativeMenu",
  data: {
    // ■クリエイティブワークを理解する
    creativeMenus: [
      // 58
      {
        id: 1,
        salon: "STRAMA",
        stylist: "豊田 永秀",
        genre: "スタディ",
        text: "クリエイティブワークで魅せるビックシルエット",
        thumbnail: "service2/img/videoimg/TREND_STRAMA_TOYODANAGAHIDE.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_58-before.png",
        imgAfter: "assets/images/before-after/kmax_before&after_58-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample11.html",
      },
      // 59
      {
        id: 2,
        salon: "PEEK-A-BOO",
        stylist: "福井 達真",
        genre: "スタディ",
        text: "レイヤーボブ×クリエイティブワーク",
        thumbnail: "service2/img/videoimg/TREND_PEEK-A-BOO_FUKUITATSUMASA.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_21-before.png",
            imgAfter: "assets/images/before-after/kmax_before&after_21-after.png",
        url: "https://kamismax.kamisma.com/service2/video/sample14.html",
      },
      // 60
      {
        id: 3,
        salon: "LONESS",
        stylist: "片山 良平",
        genre: "スタディ",
        text: "リアルヘアメイク・撮影チームと創るクリエイティブワークの現場",
        thumbnail: "service2/img/videoimg/TREND_LONESS_KATAYAMARYOHEI.jpg",
        imgBefore: "assets/images/before-after/kmax_before&after_60-before.png",
        imgAfter: null,
        url: "https://kamismax.kamisma.com/service2/video/sample03.html",
      },
    ]
  },
});
