import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 実績（works）
 * src/content/works/ に Markdown を 1 件 1 ファイルで置く。
 * ファイル名がそのまま URL（/works/<ファイル名>）になる。
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** 一覧に出す 1〜2 行の要約 */
      summary: z.string(),
      /** 例: "2024-04"。継続中なら end を省略 */
      start: z.string().regex(/^\d{4}-\d{2}$/),
      end: z.string().regex(/^\d{4}-\d{2}$/).optional(),
      /** 業界（社名・サービス名は書かない） */
      domain: z.string(),
      role: z.string(),
      teamSize: z.number().int().positive().optional(),
      /** 絞り込みに使う分類 */
      category: z.enum(['Webサービス', '業務システム', 'API・基盤', 'モバイル', 'Webサイト']),
      tech: z.array(z.string()).min(1),
      /**
       * サムネイル画像（Markdown ファイルからの相対パス）。
       * 例: ../../assets/works/foo.svg ／ PNG・JPG・WebP も可。
       * 省略すると分類ごとの図柄を表示する。
       */
      thumbnail: image().optional(),
      /** サムネイルの説明（画面読み上げ用） */
      thumbnailAlt: z.string().optional(),
      /** 並び順。小さいほど上（未指定なら開始月の新しい順）。トップページの最初の6件もこの順 */
      order: z.number().optional(),
      /** 公開リポジトリやサービスの URL（任意） */
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      /** true にするとビルド対象から外れる */
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
