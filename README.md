# Kento Ohashi Portfolio — GitHub Pages first pass

Google Sites版の文章を変えず、Apple系の大きな余白・タイポグラフィ・固定ナビ・スクロール表示を意識して組み直した静的サイトです。

## 公開方法
1. このフォルダの中身を `KentoOhashi256.github.io` リポジトリ直下へコピー
2. GitHub Desktopで Commit → Push
3. GitHubの Settings → Pages → Deploy from a branch → main / (root)
4. `https://kentoohashi256.github.io/` を開く

## ファイル構成
- `index.html`: ホーム
- `profile/`: プロフィール
- `flying-usb/`: Flying USB
- `comical-comic/`: コミカルコミック
- `yorite/`: 寄手
- `plucktheeyes/`: PluckTheEyes
- `assets/css/style.css`: 全体デザイン
- `assets/js/main.js`: スクロール表示・進捗バー

## 画像について
この初稿では、現在のGoogle Sitesで使われているGoogleusercontent画像URLを参照しています。
もしGitHub Pages上で画像だけ表示されない場合は、元画像を `assets/images/` に保存して、各HTMLの `src=` をローカルパスへ置き換えるのが安定です。
YouTube埋め込みは既存動画IDをそのまま使用しています。
