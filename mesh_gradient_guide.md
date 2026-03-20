# 🎨 Mesh Gradient Background (Soft Glass Style)

## Overview

This background uses a **multi-layer radial gradient** to simulate a soft, pastel mesh gradient (similar to modern UI cards).

---

## 🎯 Color Palette

| Area        | Color   |
| ----------- | ------- |
| Lavender    | #C9B6E4 |
| Coral       | #F28B7A |
| Blush Pink  | #E6B7D2 |
| Soft Orange | #F5A36C |

---

## 💻 CSS Implementation

```css
.mesh-gradient {
  background: radial-gradient(circle at 20% 20%, #c9b6e4, transparent 40%),
              radial-gradient(circle at 80% 20%, #f28b7a, transparent 40%),
              radial-gradient(circle at 20% 80%, #e6b7d2, transparent 40%),
              radial-gradient(circle at 80% 80%, #f5a36c, transparent 40%);
  background-blend-mode: screen;

  /* Optional styling */
  border-radius: 20px;
  padding: 20px;
}
```

---

## 🧊 Glass Effect (Optional)

```css
.glass {
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
```

---

## ⚛️ React Example

```jsx
export default function Card() {
  return (
    <div className="mesh-gradient glass">
      <h3>Prioritized tasks</h3>
      <h1>83%</h1>
      <p>Avg. Completed</p>
    </div>
  );
}
```

---

## 🎨 Notes

* Adjust gradient positions (`20%`, `80%`) to change color flow
* Increase `transparent 40%` → `60%` for smoother blending
* Works best on light UI themes
* Pair with blur for a modern **glassmorphism** look

---

## 🚀 Quick Tip

If you want a more "Figma-like" result:

* Add **more gradient layers**
* Use **lower opacity colors**
* Slightly increase blur (`backdrop-filter`)
