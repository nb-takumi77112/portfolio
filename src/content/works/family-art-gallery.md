---
title: 家族向け作品ギャラリー・コンクール応募プラットフォーム
summary: 子どもの作品を家族の間だけで共有し、コンクール応募や AI による評価コメントを受け取れる Web アプリを開発しました。
start: "2022-01"
end: "2022-06"
domain: 教育・子育て
role: フロントエンドエンジニア
teamSize: 6
category: Webサービス
tech: [Vue 3, TypeScript, Pinia, Vite, Tailwind CSS, Laravel 9, PHP 8.0, MySQL 8, Cloud Storage, Cloud Run, Firebase Cloud Messaging, OpenAI API（GPT-3）, Square, Docker]
thumbnail: ../../assets/works/family-art-gallery.svg
thumbnailAlt: 額に入った子どもの絵と、AI の評価コメントを表した図
---

## 概要

子どもの作品を大切に残したい家族が、プライバシーを保ったまま家族の間で共有し、コンクールへの応募や AI による評価コメントを受け取れる Web アプリです。絵画・工作などの作品を家族単位で保管し、ポイントによる「いいね」機能も提供しています。

## 技術的な課題

- OpenAI API の応答が遅いときのタイムアウト制御（2 段階のリトライ）と、処理中の表示による評価の重複防止
- 作品画像のアップロード時に 4 サイズを生成・保存し、データベースの更新と整合させる
- 家族・子ども・作品単位の権限判定（コンクールの応募状態に応じた閲覧制御を含む）

## 担当したこと

- Laravel による REST API（作品・コンクール応募・家族管理・チャット・通知）
- Vue 3 + TypeScript + Pinia による SPA（作品投稿・一覧、決済、AI 評価、コンクール応募）
- 作品画像のマルチサイズ変換と Cloud Storage へのアップロード
- Square によるポイント購入・応募料・商品購入の決済
- LINE・Google・Facebook・Yahoo! のソーシャルログインと家族招待の流れ
- Cloud Run へのデプロイ構成、Firebase によるプッシュ通知

## 成果

本番稼働中です。家族限定の共有と AI 評価・決済を組み込んだ、継続して使われるサービスとしてリリースしました。
