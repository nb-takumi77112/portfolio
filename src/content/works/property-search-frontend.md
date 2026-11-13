---
title: 事業用不動産の物件検索・会員サイトのフロントエンドリニューアル
summary: 約26万件の物件から目的の物件に迷わずたどり着けるよう、物件検索・会員マイページ・管理画面のフロントエンドを作り直しました。
start: "2022-04"
end: "2023-07"
domain: 不動産（事業用）
role: PL
teamSize: 12
category: Webサービス
tech: [Next.js, React 18, TypeScript, Tailwind CSS, Zod, Mantine, TipTap, AWS Lambda, CloudFront, Cognito, ElastiCache Redis, Aurora PostgreSQL, Turborepo, pnpm, GitHub Actions]
thumbnail: ../../assets/works/property-search-frontend.svg
thumbnailAlt: オフィスビルと、検索条件・物件一覧の画面を表した図
---

## 概要

オフィス・店舗・物流施設などの物件検索、会員向けマイページ、コラム・イベント配信を担う利用者向けサイトと管理画面のフロントエンドリニューアルです。モノレポ環境で、フロントエンドの実装と Next.js の API 層の設計・組み込みを担当しました。

## 技術的な課題

- Next.js の SSR/ISR を AWS Lambda 上で動かす構成のため、コンテナ間でキャッシュが共有されず、ページ再生成の負荷が集中する
- 利用者向けと管理者向けで別々の Cognito ユーザープールを使いつつ、JWT 検証と API の権限制御を共通ライブラリで統一する必要がある
- 物件種別ごとに異なる検索条件（エリア・路線・坪数・賃料など）を扱う検索画面と一覧表示

## 担当したこと

- Turborepo + pnpm で、利用者サイト・管理画面・共有パッケージの型定義を共通化
- 物件検索・マイページ・お問い合わせフォームの実装と、API 認可層の共通化
- 2 つの Cognito ユーザープールを前提にした認証基盤（httpOnly Cookie + JWT 検証、ミドルウェアによるルート保護、期限切れ時のリダイレクト）
- ElastiCache Redis による Next.js のデータキャッシュの Lambda 間共有と、管理画面の更新時にキャッシュを無効化する仕組み

## 成果

本番稼働中です。約26万件の物件データを扱いながら、快適な速度で検索・一覧表示できる状態を安定して提供しています。
