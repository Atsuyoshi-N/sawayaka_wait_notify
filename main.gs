function main() {
  // 浜松高塚店と浜松遠鉄店の2店舗を対象にする
  const shopURLLists = ["https://www.genkotsu-hb.com/shop/takatsuka.php", "https://www.genkotsu-hb.com/shop/entetsu.php"];

  let results = [];
  shopURLLists.forEach(function(shopURL) {
    // URLにアクセスして店舗のHTMLを取得
    const source = fetchShopInfo(shopURL);

    // HTMLをParseし、「店舗名」、「待ち時間」、「待ち組数」を取得し文字列に整形したのち、店舗URLを追加し、結果に追加
    results.push(parseShopInfo(source) + shopURL + "\n");
  });
  Logger.log(results[0]);
  // Slackに通知する
  notifySlack(results);
}