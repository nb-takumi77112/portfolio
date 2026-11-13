---
title: オンライン講座のライブ配信・受講管理 API
summary: 受講予約、ライブ中のリアルタイムチャット、出席管理を一つにまとめるバックエンド API と管理画面を開発しました。
start: "2024-03"
end: "2024-09"
domain: 教育（オンライン講座）
role: PL
teamSize: 10
category: API・基盤
tech: [Node.js 20, TypeScript, NestJS, Socket.IO, PostgreSQL, Redis, React, AWS ECS Fargate, AWS ElastiCache, GitHub Actions]
thumbnail: ../../assets/works/live-class-api.svg
thumbnailAlt: ライブ配信の画面と、横に流れるチャットを表した図
---

## 概要

オンライン講座の運営者が、ライブ配信中の質問対応と受講予約の管理を別々のツールで行っていた負担をなくすためのシステムです。受講予約・ライブ中のリアルタイムチャット・出席管理を提供するバックエンド API と管理画面を、要件整理から運用まで担当しました。

## 技術的な課題

- 配信中に多くの受講者が同時に接続しても、チャットの遅れや抜け落ちを抑える接続管理
- 定員・キャンセル待ち・直前キャンセルを含む予約状態の整合性
- 受講者・講師・運営の権限に応じた、チャットとデータの閲覧制御

## 担当したこと

- NestJS（TypeScript）による予約・出席管理の REST API の設計・実装
- Socket.IO と Redis によるリアルタイムチャットと、複数サーバー間のメッセージ同期
- PostgreSQL のスキーマ設計とマイグレーション運用、定員制御のトランザクション処理
- 運営向け管理画面（React）と、GitHub Actions による CI/CD

## 成果

本番稼働中です。ライブ中の質問対応と予約・出席の管理を一つに集約し、運営側の問い合わせ対応の手間を減らしました。
