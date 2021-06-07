# 都道府県別の総人口推移グラフ

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo URL

[https://jap-population-chart.web.app](https://jap-population-chart.web.app)

### `要求`

課題】
都道府県別の総人口推移グラフを表示する SPA(Single Page Application)を構築せよ
ワイヤーフレーム
https://www.notion.so/yumemi/7646721865fa47e7b2c9b2a52c8c40ac

＜内容＞

1. RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
4. 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

＜制約＞
・React/Vue.js/Angular のいずれかを用いて SPA を構築すること（バージョンはできるだけ最新版をご使用ください）
React（ https://reactjs.org/ ）
Vue（ https://vuejs.org/index.html ）
Angular（ https://angular.io/ ）Nuxt.js や Next.js などの、これらを内包したフレームワークの利用も許可する
Nuxt.js や Next.js などの、これらを内包したフレームワークの利用も許可する

・都道府県一覧および総人口情報は RESAS API のデータを用いること
・グラフは Highcharts や Rechart.js などのサードパーティ製のグラフライブラリを用いて描画すること
　ただし、グラフライブラリは上記のものに限らず、任意のものを用いてよい
・Google Chrome 最新版で正しく動くこと
・PC/スマートフォン表示に対応すること(レスポンシブデザイン対応)
　ただし実機でなく、Google Chrome の検証ツールで確認できればよい
・リンターやフォーマッターを適切に設定すること
　リンターには ESLint、フォーマッターには Prettier を使用すること
・style は自分で記述し、CSS・UI フレームワークなどは原則使用しないこと
　ただし、chart ライブラリ内包の style、リセット系の CSS ライブラリについてはこの限りではない
　また、css-in-js や css-modules、sass などのエコシステムの利用を妨げるものではなく、あくまで css の記述力を測る趣旨に留まる
・リードエンジニア・テックリード応募の場合は、以下も制約に加える
　 TypeScript で記述すること
・テストケース/テストコードを作成すること
　テストツールは任意のものを用いてよい
　テスト実行時にエラーが発生しないこと
