# ロゴファイル準備ガイド

## 📁 必要なファイル

以下のファイルを `public/assets/logo/` フォルダに配置してください：

```
public/assets/logo/
├── logo-light.svg     # 明るい背景用（黒いロゴ）⭐ ローディング画面で使用
├── logo-dark.svg      # 暗い背景用（白いロゴ）
├── favicon-light.svg  # ファビコン明るい背景用
└── favicon-dark.svg   # ファビコン暗い背景用
```

## 🎨 ロゴの色指定

### **logo-light.svg（黒いロゴ）**
- **背景**: 明るい色（白、薄いグレーなど）の上に表示
- **ロゴ色**: 黒、濃いグレー、ダークカラー
- **用途**: ローディング画面、ライトモードのヘッダーなど

### **logo-dark.svg（白いロゴ）**
- **背景**: 暗い色（黒、濃いグレーなど）の上に表示
- **ロゴ色**: 白、薄いグレー、ライトカラー
- **用途**: ダークモードのヘッダー、暗い背景セクションなど

## 🛠️ SVGファイルの作成方法

### **Adobe Illustrator / Figma / Sketch の場合**
1. ロゴデザインを作成
2. 2つのバージョンを作成（黒バージョン、白バージョン）
3. SVG形式でエクスポート
4. ファイル名を上記の命名規則に合わせる

### **既存のロゴがある場合**
現在の `favicon.svg` を複製して：
```bash
# 現在のファイルをコピー
cp public/assets/logo/favicon.svg public/assets/logo/logo-light.svg
cp public/assets/logo/favicon.svg public/assets/logo/logo-dark.svg
cp public/assets/logo/favicon.svg public/assets/logo/favicon-light.svg
cp public/assets/logo/favicon.svg public/assets/logo/favicon-dark.svg
```

その後、テキストエディタでSVGを開いて色を変更：
- **黒いロゴ**: `fill="#000000"` や `stroke="#333333"`
- **白いロゴ**: `fill="#ffffff"` や `stroke="#f0f0f0"`

## 💡 推奨サイズ

### **ロゴファイル（logo-*.svg）**
- **最小**: 100x100px
- **推奨**: 200x200px以上
- **形式**: ベクター（SVG）なのでサイズは自動調整

### **ファビコンファイル（favicon-*.svg）**
- **標準**: 32x32px、48x48px
- **高解像度対応**: 64x64px以上

## 🔄 現在の使用箇所

### **ローディング画面**
```typescript
// 明るい背景（白）→ 黒いロゴを使用
logoSrc: getLogoForBackground('light', 'logo')
// → '/assets/logo/logo-light.svg'
```

### **今後の使用予定**
- **ヘッダー**: 背景色に応じて自動選択
- **フッター**: 背景色に応じて自動選択
- **ダークモード**: 自動切り替え

## 🚀 ファイル配置後の確認

ファイルを配置したら、以下のURLで直接アクセスして確認：

- http://localhost:53513/assets/logo/logo-light.svg
- http://localhost:53513/assets/logo/logo-dark.svg
- http://localhost:53513/assets/logo/favicon-light.svg
- http://localhost:53513/assets/logo/favicon-dark.svg

## 🎯 現在のローディング画面

**使用ロゴ**: `/assets/logo/logo-light.svg`（明るい背景用の黒いロゴ）

ファイルを配置後、ローディング画面でロゴが正しく表示されることを確認してください！
