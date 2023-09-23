# さわやかの混雑状況を毎時間Slackに通知するbot
さわやかに行ってみたい・・・！でもどれだけ待つんだろう？と気になって待ち時間と、待ち組数を通知する Slack bot を作成しました。

設定必要な項目としては、
- ライブラリの追加
  - Parserの追加( スクリプトID: 1Mc8BthYthXx6CoIz90-JiSzSafVnT6U3t0z_W3hLTAX5ek4w0G_EIrNw )
  - SlackAppの追加( スクリプトID: 1on93YOYfSmV92R5q59NpKmsyWIQD8qnoLYk-gkQBI92C58SPyA2x1-bq )
- スクリプトプロパティの設定
  - PHANTOMJSCLOUD_ID に PhantomJsCloud api key の値
  - SLACK_OAUTH_TOKEN に Slack の OAuth token の値
- Slack API との連携
です。

これらを適切に設定すると、 `main.gs` を実行することで、「さわやか 浜松高塚店」と「さわやか浜松遠鉄店」の混雑状況が取得できます。(※他の店舗を追加する際は、shopURLListsに公式ページの店舗URLを追加すると動作する想定ですが、動作未検証です。)

また、 GAS の設定で定期実行を設定することで、毎時間混雑状況を通知することも可能です。

<img width="1152" alt="image" src="https://github.com/Atsuyoshi-N/sawayaka_wait_notify/assets/26040501/a98981de-2a55-4512-9ba1-ff0e7ff51fca">

## 参考文献
### 使用したさわやかの公式ページ
- [さわやか 浜松高塚店](https://www.genkotsu-hb.com/shop/takatsuka.php)
- [さわやか 浜松遠鉄店](https://www.genkotsu-hb.com/shop/entetsu.php)

### GAS の初期設定
- [【初心者向け】GASでニュース記事をSlackに通知するアプリを作ってみた～前編～](https://qiita.com/sakauchi_riki/items/3194e6ae2fdb7916784a)

### スクレイピング
待ち時間・待ち組数が動的に変化する仕様だったため、 PhantomJsCloud を使用してスクレイピングを行いました。

- [GASとPhantomJsCloudで動的なWebページをスクレイピング(Javascriptページに対応)](https://auto-worker.com/blog/?p=1974)
- [PhantomJsCloud](https://phantomjscloud.com/index.html)
- [【Google App Script】Parserライブラリでwebスクレイピングする方法](https://qiita.com/tk226/items/c806fc2fdff9115d4473)
- [【GAS】Parserライブラリの使い方｜インストール手順と使用方法](https://tetsuooo.net/gas/1944/)
- [【GAS】スプレッドシートでスクレイピングしてシートにまとめる](https://qiita.com/e__ri/items/71cc640ec5383ec5e3b3)
- [【一番簡単】GASでWebスクレイピングしよう](https://tetsuooo.net/gas/82/)

### スクリプトプロパティ（環境変数)
- [GASのスクリプトエディタ(新IDE)にスクリプトプロパティのGUI設定が復活！](https://auto-worker.com/blog/?p=5608)

### Slack API 連携
- [【初心者向け】GASでニュース記事をSlackに通知するアプリを作ってみた～後編～](https://qiita.com/nahiro_tus/items/144754ab51df97bafe97)
- [【2021年版】GASとSlack APIでボットを作成しチャンネルにメッセージを自動投稿する方法](https://auto-worker.com/blog/?p=2904)

### 定期実行
- [【サンプルコードあり】Google Apps Script（GAS）の業務活用例5選](https://liskul.com/utilization-of-gas-89348#:~:text=%E6%94%B9%E8%A1%8C%E3%81%97%E3%81%9F%E3%81%84%E4%BD%8D%E7%BD%AE%E3%81%AB%5Cn%E3%82%92%E5%85%A5%E3%82%8C%E3%82%8B%E3%81%A8%E6%94%B9%E8%A1%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82&text='text'%3A%20text%2C,%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)

### GitHub との連携
- [GASとGitHubを連携させる拡張機能【GitHub アシスタント】の導入方法](https://pineplanter.moo.jp/non-it-salaryman/2022/12/22/gas-github/)
