function notifySlack(results) {
  const token = PropertiesService.getScriptProperties().getProperty("SLACK_OAUTH_TOKEN");
  const slackApp = SlackApp.create(token);
  const channel = "#sawayaka_wait_time";
  slackApp.postMessage(channel, results.join("\n"));
}