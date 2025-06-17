# シンプルローディング画面の仕様

## 🎨 新しいデザイン

### **円周プログレス表示**
- ロゴを中央に配置
- ロゴの周りに円形のプログレス表示
- プログレスの進行に合わせて円が描画される

### **アニメーション効果**
- ロゴの呼吸アニメーション（ゆっくりとしたスケール変化）
- 円周プログレスのスムーズな進行
- フェードアウト効果

### **レイアウト**
```
┌─────────────────────┐
│                     │
│       ○ ← ロゴ      │
│     ◐   ← 円周       │
│                     │
│       85%           │
│    読み込み中...     │
│                     │
└─────────────────────┘
```

## ⚙️ カスタマイズ可能な要素

### **ロゴの指定**
```typescript
<ImagePreloader
  // ...existing props...
  loadingScreenProps={{
    logoSrc: '/path/to/your/logo.svg',
    logoAlt: 'あなたのブランド名',
    className: 'bg-white',
  }}
/>
```

### **使用可能なロゴフォーマット**
- SVG（推奨）: ベクターなので拡大してもクリア
- PNG: 透明背景対応
- JPG: 軽量だが透明背景不可

### **ロゴサイズ**
- デフォルト: 80x80px（w-20 h-20）
- 円の内側に収まるサイズに自動調整

## 🎯 技術仕様

### **円周プログレスの計算**
```typescript
const circumference = 2 * Math.PI * 50; // 半径50の円
const strokeDashoffset = circumference - (progress / 100) * circumference;
```

### **アニメーション**
- **ロゴ呼吸**: 2秒周期でscale(1.0 → 1.05 → 1.0)
- **円周進行**: 0.5秒のease-outトランジション
- **フェードアウト**: 0.5秒のopacityトランジション

### **カラーテーマ**
- **プログレス円**: `text-primary`（プロジェクトのプライマリカラー）
- **背景円**: `text-gray-200`（薄いグレー）
- **パーセント**: `text-gray-700`（濃いグレー）
- **メッセージ**: `text-gray-500`（中間グレー）

## 🚀 使用方法

### **基本的な使用**
```typescript
// デフォルトロゴ（favicon.svg）を使用
<ImagePreloader images={images} />
```

### **カスタムロゴの指定**
```typescript
<ImagePreloader
  images={images}
  loadingScreenProps={{
    logoSrc: '/assets/logo/custom-logo.svg',
    logoAlt: 'カスタムブランド',
  }}
/>
```

### **背景色の変更**
```typescript
<ImagePreloader
  images={images}
  loadingScreenProps={{
    className: 'bg-gray-100', // または任意の背景色
  }}
/>
```

## 📱 レスポンシブ対応

- **モバイル**: 円とロゴのサイズは自動調整
- **タブレット**: 標準サイズで表示
- **デスクトップ**: 標準サイズで表示

すべてのデバイスで中央配置され、適切に表示されます。

## 🎯 現在の設定

**サーバー**: http://localhost:53513

**テスト手順**:
1. シークレットウィンドウを開く
2. 開発者ツール → ネットワーク → Slow 4G + Disable cache
3. http://localhost:53513 にアクセス
4. 美しい円周プログレスローディングを確認！
