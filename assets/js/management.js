var vm = new Vue({
  el: "#managementMenu",
  data: {
    // ■サロンマネジメントを学ぶ
    salonManagementMenus: [
      // 70
      {
        id: 1,
        salon: "Cocoon",
        stylist: "VAN/SAKURA",
        genre: "リアリティ",
        text: "Cocconやお互いについて<br>深掘りしていく指定対談",
        thumbnail: "/service2/img/videoimg/REALITY_Cocoon_VAN_SAKURA.jpg",
        imgBefore: "assets/images/talks/kmx-70-cocoon.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
      // 71
      {
        id: 2,
        salon: "VeLO",
        stylist: "鳥羽 直泰/赤松 美和",
        genre: "リアリティ",
        text: "二人の世界観を<br>紐解くパートナー対談",
        thumbnail: "service2/img/videoimg/REALITY_VeLO_TOBA_AKAMATSU.jpg",
        imgBefore: "assets/images/talks/kmx-71-velo.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
      // 72
      {
        id: 3,
        salon: "SHIMA",
        stylist: "神納 裕貴/金田 和樹",
        genre: "リアリティ",
        text: "「SHIMA」の強さをテーマに、<br>それぞれの思いや考え方を<br>語り合うスタイリスト対談",
        thumbnail: "service2/img/videoimg/REALITY_SHIMA_KANNO_KANETA.jpg",
        imgBefore: "assets/images/talks/kmx-72-shima.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ],
    // ■セルフマネジメントを学ぶ
    selfManagementMenus: [
      // 73
      {
        id: 1,
        salon: "SIX",
        stylist: "久保 雄司",
        genre: "リアリティ",
        text: "#クボイズム 美容師の可能性",
        thumbnail: "service2/img/videoimg/REALITY_SIX_KUBO_YUJI.jpg",
        imgBefore: "assets/images/talks/kmx-73-shimasix-kubo.png",
        // imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ],
  },
});
