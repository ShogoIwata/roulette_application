# 社員当番ルーレットアプリケーション

公平な方法で社員の当番を決定できる、シンプルで直感的なルーレットアプリです。  
掃除当番や朝会担当など、任意のタスクに対応可能です。

![スクリーンショット](./screenshot.png)

---

## 概要

このアプリケーションは、社員リストを元にルーレットを回し、1人をランダムに選出します。  
選出された社員には「任務名（当番タイトル）」が割り当てられ、結果は演出付きで表示されます。

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
│   │   ├── TitleInput.tsx         # 任務名の入力
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

3. ビルド
npm run build
