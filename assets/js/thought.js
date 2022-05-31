var vm = new Vue({
  el: "#thoughtMenu",
  data: {
    // ■三つ星美容師の仕事観を学ぶ
    threeStarJobMenus: [
      // 64
      {
        id:1,
        salon: "OCEAN TOKYO",
        stylist: "高木 琢也",
        genre: "スペシャル",
        text: "「技術者」「経営者」の二つの顔を持つ<br>高木氏の仕事観に迫る<br>スペシャルインタビュー。",
        thumbnail: "service2/img/videoimg/SPECIAL_OCEANTOKYO_TAKAGITAKUYA.jpg",
        imgBefore: "assets/images/talks/kmx-64-ocean-tokyo.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "https://kamismax.kamisma.com/service2/video/special02.html",
      },
      // 65
      {
        id:2,
        salon: "SHIMA",
        stylist: "奈良 裕也",
        genre: "スペシャル",
        text: "美容師の枠を超えて活躍する<br>奈良氏の世界観を解き明かす<br>スペシャルインタビュー。",
        thumbnail: "service2/img/videoimg/SPECIAL_SHIMA_NARAYUYA.jpg",
        imgBefore: "assets/images/talks/kmx-65-shima.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "https://kamismax.kamisma.com/service2/video/special03.html",
      },
    ],
    // ■三つ星美容師のヒストリーを学ぶ
    threeStarHistoryMenus: [
      // 66
      {
        id: 1,
        salon: "MINX",
        stylist: '"岡村 享央/高橋 マサトモ"',
        genre: "スペシャル",
        text: "MINXと共に歩んできた<br>軌跡を辿るスペシャルインタビュー。<br>スペシャルゲストとの対談も必見。",
        thumbnail: "service2/img/videoimg/SPECIAL_MINX_OKAMURATAKAHISA.jpg",
        imgBefore: "assets/images/talks/kmx-66-minx.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "https://kamismax.kamisma.com/service2/video/special01.html",
      },
      // 67
      {
        id:2,
        salon: "AFLOAT",
        stylist: "宮村 浩気",
        genre: "スペシャル",
        text: "これまでの軌跡を辿りながら<br>活躍の要因を紐解く<br>スペシャルインタビュー。",
        thumbnail: "service2/img/videoimg/SPECIAL_AFLOAT_MIYAMURAHIROKI.jpg",
        imgBefore: "assets/images/talks/kmx-67-afloat.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "https://kamismax.kamisma.com/service2/video/special04.html",
      },
    ],
    // ■本音トークを楽しむ
    realTalkMenus: [
      // 68
      {
        id:1,
        salon: '"ABBEY2/SUNVALLEY/OCEAN TOKYO"',
        stylist: '"中村 章浩/朝日 光輝/高木 琢也"',
        genre: "バラエティ",
        text: "出会ったきっかけやお互いの<br>印象についてなど、<br>ざっくばらんに語り合う本音トーク編",
        thumbnail: "service2/img/videoimg/VARIETY_Nakamurakai_vol1.jpg",
        imgBefore: "assets/images/talks/kmx-68-abbey-sun-ocean.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "https://kamismax.kamisma.com/service2/video/variety01.html",
      },
      // 69
      {
        id: 2,
        salon: '"siika NIKAI/GARDEN Tokyo/Belle"',
        stylist: "サトーマリ/河野悌己/鈴木彩乃/堀内大介",
        genre: "バラエティ",
        text: "結婚や出産について<br>経営者・従業員・男女、<br>それぞれの目線で、<br>これからの在り方について<br>語り合う本音トーク編",
        thumbnail: "service2/img/videoimg/VARIETY_SiiKA_Vol1.jpg",
        imgBefore: "assets/images/talks/kmx-69-siika.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "https://kamismax.kamisma.com/service2/video/variety05.html",
      },
    ],
  },
});
