function parseShopInfo(source) {
  const parseDataMap = [
    {title: "店舗名: ", "from": '<h1 id="pageTitle" class="innerWrap">', to: '</h1>'},
    {title: "待ち時間(分): ", "from": '<span class="num" data-airwait="waitTime">', to: '</span>'},
    {title: "待ち組数: ", "from": '<span class="num" data-airwait="waitCount">', to: '</span>'},
  ];

  let resultTxt = "";
  parseDataMap.forEach(function(mp) {
    resultTxt += mp.title;
    resultTxt += Parser.data(source).from(mp.from).to(mp.to).build();
    resultTxt += "\n";
  })
  return resultTxt;
}