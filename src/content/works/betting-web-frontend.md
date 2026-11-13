---
title: 公営競技の Web 投票・チャージシステムのフロントエンド
summary: 初心者からベテランまで使いやすい投票体験を目指し、55 を超える画面を持つ統合サイトのフロントエンドを開発しました。
start: "2018-11"
end: "2019-03"
domain: 公営競技
role: フロントエンドエンジニア
teamSize: 15
category: Webサービス
tech: [Next.js, React, TypeScript, styled-components, TanStack Query, openapi-typescript, Jest, Storybook]
thumbnail: ../../assets/works/betting-web-frontend.svg
thumbnailAlt: 組み合わせを選ぶ投票画面と、投票券・チャージを表した図
---

## 概要

ファンが投票・チャージ・会員管理をスムーズに行えるよう、統合サイトのフロントエンドを担当しました。55 を超える画面を、OpenAPI 仕様のバックエンド API と連携して実装しています。

## 技術的な課題

- 複数の賭式にまたがる投票カートの配分・組み合わせ計算と、払戻計算の正確さ
- 4 種類の決済手段の統合
- OpenAPI 仕様からの型の自動生成を含む、型安全な API 呼び出しの基盤

## 担当したこと

- Next.js + styled-components による画面実装
- openapi-typescript による型の自動生成と、API 呼び出しの共通化
- 投票カート・払戻計算の実装と Jest によるテスト
- 4 種類の決済連携、LINE ログイン、本人確認書類のアップロード
- GitHub Actions による CI と Storybook の運用

## 成果

55 を超える画面のリニューアルを完了し、本番稼働中です。
