# Next.js 15 + i18next SSG サンプル

このプロジェクトは、Next.js 15のApp Routerとi18nextを使用した**静的サイト生成（SSG）**での国際化（i18n）実装のサンプルです。

[Locize.comの記事](https://www.locize.com/blog/i18n-next-app-router)に基づいて、最新のNext.js App Routerでの国際化のベストプラクティスを実装しています。

## 🌐 サポート言語

- 日本語（ja） - デフォルト言語
- 英語（en-US）

## 📁 サイトマップ

```
/ → トップページ（日本語、リダイレクトなし）
/ja → トップページ（日本語）
/en-US → トップページ（英語）
/foo → Fooページ（日本語、リダイレクトなし）
/foo/ja → Fooページ（日本語）
/foo/en-US → Fooページ（英語）
/events/[eventName] → イベントページ（動的ルーティング）
  - /events/furry-convention
  - /events/art-contest
/[lang]/events/[eventName] → 言語別イベントページ
```

## 🚀 特徴

- **Next.js 15** App Router使用
- **静的サイト生成（SSG）** - `output: "export"`
- **i18next** による国際化
- **TypeScript** 完全対応
- **Tailwind CSS** によるスタイリング
- **動的ルーティング** でのイベントページ
- **メタデータ** の多言語対応
- **404処理** の適切な実装

## 🛠 技術スタック

- [Next.js 15](https://nextjs.org/) - React フレームワーク
- [i18next](https://www.i18next.com/) - 国際化ライブラリ
- [react-i18next](https://react.i18next.com/) - React用i18next
- [TypeScript](https://www.typescriptlang.org/) - 型安全性
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS

## 📦 セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd kensho-ssg-i18n
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションが起動します。

### 4. 静的サイトのビルド

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成されます。

### 5. 静的サイトのプレビュー

```bash
npx serve out
```

## 📂 プロジェクト構造

```
app/
├── i18n/                    # 国際化設定
│   ├── settings.ts          # i18n基本設定
│   ├── i18next.ts          # i18next初期化
│   ├── index.ts            # サーバーサイドヘルパー
│   ├── client.ts           # クライアントサイドヘルパー
│   └── locales/            # 翻訳ファイル
│       ├── ja/
│       │   ├── home.json
│       │   ├── foo.json
│       │   └── events.json
│       └── en-US/
│           ├── home.json
│           ├── foo.json
│           └── events.json
├── [lang]/                 # 言語別ページ
│   ├── layout.tsx
│   ├── page.tsx
│   ├── foo/
│   └── events/[eventName]/
├── events/[eventName]/     # ルートイベントページ
├── foo/                    # ルートFooページ
├── layout.tsx              # ルートレイアウト
└── page.tsx                # ルートページ
```

## 🔧 設定ファイル

### `app/i18n/settings.ts`
```typescript
export const fallbackLng = 'ja'
export const languages = [fallbackLng, 'en-US']
export const defaultNS = 'home'
```

### `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: "export",        // SSG設定
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

## 💡 実装のポイント

### 1. SSG対応
- `headers()`の使用を避け、言語パラメーターを直接受け取る設計
- 静的生成に適した`generateStaticParams()`の活用

### 2. 翻訳の使用方法

**サーバーサイド:**
```typescript
import { getT } from './i18n'

const { t } = await getT('ja', 'home')
console.log(t('title')) // => "Create Next App"
```

**クライアントサイド:**
```typescript
import { useT } from './i18n/client'

const { t } = useT('home')
console.log(t('title')) // => "Create Next App"
```

### 3. 動的ルーティング
```typescript
// app/events/[eventName]/page.tsx
export async function generateStaticParams() {
  return ['furry-convention', 'art-contest'].map((eventName) => ({
    eventName
  }))
}
```

## 🌟 参考資料

このプロジェクトは以下の記事を参考に実装されています：

- [Simplifying i18next Setup in Next.js App Router](https://www.locize.com/blog/i18n-next-app-router) - Locize.com
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [i18next Documentation](https://www.i18next.com/)

## 📝 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します！

## 📞 サポート

質問や問題がある場合は、GitHubのIssuesでお気軽にお聞かせください。
