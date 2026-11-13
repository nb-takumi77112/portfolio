# ポートフォリオサイト

Astro で作った静的サイトです。GitHub Pages で公開します。

## 内容を更新する

見た目のコードには触れず、次のファイルだけを編集すれば更新できます。

| 変えたいもの | 編集するファイル |
|---|---|
| 名前、キャッチコピー、要約、強み、スキル、経歴、資格、連絡先 | `src/data/profile.json` |
| 実績（1件 = 1ファイル） | `src/content/works/*.md` |

### 実績を追加する

`src/content/works/` に Markdown を1つ追加します。ファイル名がそのまま URL になります（例: `new-project.md` → `/works/new-project`）。

```md
---
title: 案件名（社名・サービス名は書かない）
summary: 一覧に出す1〜2行の要約
start: "2025-04"        # 開始年月
end: "2025-12"          # 終了年月（継続中なら行ごと消す）
domain: 業界
role: 担当した役割
teamSize: 4             # 任意
category: Webサービス    # Webサービス / 業務システム / API・基盤 / モバイル / Webサイト
tech: [TypeScript, AWS]
thumbnail: ../../assets/works/new-project.png   # 任意。省略すると分類名の図柄を表示
thumbnailAlt: 画像の説明                         # 任意
order: 1                # 任意。小さいほど上に並ぶ（トップページの最初の6件もこの順）
---

## 概要
## 技術的な課題
## 担当したこと
## 成果
```

項目の定義は `src/content.config.ts` にあります。必須項目が欠けているとビルドがエラーで止まるので、記入漏れに気づけます。

### サムネイル画像を差し替える

`src/assets/works/` に画像を置き、実績の `thumbnail` にそのパスを書きます。SVG・PNG・JPG・WebP が使えます。PNG・JPG はビルド時に自動で縮小・WebP 化されます。比率は 16:10 で表示されます（はみ出た部分は切り取られます）。

### プロフィール写真を差し替える

`src/assets/profile.png` を置き換えます。トップページでは縦長（4:5）に切り抜いて表示します。

### トップページの実績表示

トップページでは、並び順の先頭から6件を表示し、スクロールすると3件ずつフェードインで追加表示して、最後まで全件を見られます。件数は `src/pages/index.astro` の `<WorkList works={works} initial={6} step={3} />` で変えられます。JavaScript が無効な環境では最初から全件を表示します。

### 公開前の下書きを置きたいとき

`drafts/` フォルダは `.gitignore` に入っているので、ここに置いたファイルは GitHub に上がらず、サイトにも出ません。公開するときに `src/content/works/` へ移してください。

## ローカルで確認する

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run preview  # ビルド結果を確認
```

## GitHub Pages で公開する

1. GitHub にリポジトリを作る
   - `<ユーザー名>.github.io` という名前にすると `https://<ユーザー名>.github.io/` で公開される
   - ほかの名前なら `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される（サブパスは自動で設定される）
2. このフォルダを push する（`main` ブランチ）
3. リポジトリの Settings → Pages → Build and deployment → Source を **GitHub Actions** にする
4. 以降は `main` に push するたびに `.github/workflows/deploy.yml` が自動で公開する

## 公開前のチェック

リポジトリは公開されます。次の点を確認してください。

- 住所・電話番号・生年月日を書いていない
- 職務経歴書や履歴書の PDF をそのまま置いていない
- 画像の位置情報（EXIF）を消してある
- コミットの作者メールアドレスが公開されてもよいもの（気になる場合は GitHub の noreply アドレスを使う）

## 構成

```
src/
├─ content.config.ts       実績データの型
├─ content/works/*.md      実績
├─ assets/works/           実績のサムネイル
├─ assets/profile.png      プロフィール写真
├─ data/profile.json       プロフィール・スキル・経歴
├─ components/             Header, Footer, WorkList, Thumbnail, SkillList, CareerTimeline, ContactBlock
├─ layouts/BaseLayout.astro 共通の head（OGP など）
├─ lib/                    URL 生成、実績の並び替え・期間表示
├─ pages/                  / , /works , /works/[slug] , /about , /contact , 404
└─ styles/global.css       色・文字・共通部品
drafts/                    公開前の下書き置き場（GitHub には上げない）
```
