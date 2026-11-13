import { defineConfig } from 'astro/config';

// GitHub Actions では SITE_URL / BASE_PATH を actions/configure-pages の出力から渡す。
// ローカルでは未設定なのでルート（/）で動く。
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
