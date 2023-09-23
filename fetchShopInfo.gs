function fetchShopInfo(shopURL) {
  const key = PropertiesService.getScriptProperties().getProperty("PHANTOMJSCLOUD_ID");
  const option = {
    url: shopURL,
    renderType: "HTML",
    outputAsJson: true
  };

  let payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  const apiUrl = "https://phantomjscloud.com/api/browser/v2/" + key + "/?request=" + payload;
  const response = UrlFetchApp.fetch(apiUrl);
  const json = JSON.parse(response.getContentText());
  const source = json["content"]["data"];

  return source;
}