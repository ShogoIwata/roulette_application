# 当番ルーレットアプリケーション

社内の当番を決めるルーレットアプリケーションです。

![スクリーンショット](./screenshot.png)

---

## 概要

このアプリケーションは、社員リストを元にルーレットを回し、1人をランダムに選出します。  
選出された社員には当番が割り当てられ、結果は演出付きで表示されます。
Reactで作成されており、各コンポーネントに当番名の入力、社員名の追加、リスト表示、ルーレット、結果発表などを実装しています。

---

## 使用技術

| 項目 | 技術 |
|------|------|
| フレームワーク | [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) |
| ビルドツール | [Vite](https://vitejs.dev/) |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) |
| 状態管理 | React Context API |
| アイコン | [Lucide](https://lucide.dev/) |
| 演出 | カスタム `confetti` エフェクト |

---

## ディレクトリ構成

```bash
.
├── index.html                 # エントリーポイント (ルートDOM: #root)
├── src/
│   ├── App.tsx               # アプリのレイアウト・全体構造
│   ├── main.tsx             # ReactDOM に App をマウント
│   ├── components/          # UIコンポーネント群
│   │   ├── TitleInput.tsx         # 当番名の入力
│   │   ├── EmployeeForm.tsx       # 社員名の追加フォーム
│   │   ├── EmployeeList.tsx       # 社員一覧表示・削除
│   │   ├── RouletteWheel.tsx      # 抽選ルーレット
│   │   └── ResultDisplay.tsx      # 結果表示 + リセット
│   ├── context/
│   │   └── RouletteContext.tsx    # グローバル状態管理
│   ├── types/
│   │   └── index.ts               # 型定義（Employee型など）
│   ├── utils/
│   │   └── confetti.ts            # 当選時のエフェクト


## 使用方法

1. クローン & セットアップ
コードをコピーする
git clone 
npm install

2. 開発モードで起動
npm run dev


