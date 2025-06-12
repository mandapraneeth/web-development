# CSS Units Overview

In HTML and CSS, **`rem`**, **`px`**, and **`%`** are units used for sizing elements like fonts, margins, padding, width, height, etc. Here's a breakdown of each with examples and use-cases:

* * *

### 🔹 1. `px` (Pixels)

*   **Absolute unit** – doesn't scale based on user settings or screen size.
    
*   1 `px` = 1 device pixel (but can vary with screen DPI on modern displays).
    

**Use When:** You want fixed, precise control (e.g., border thickness, icon size).

```css
p {
  font-size: 16px;
  padding: 20px;
}
```

* * *

### 🔹 2. `rem` (Root em)

*   **Relative to the root `<html>` element's `font-size`.**
    
*   `1rem = font-size of the <html>` element (default is usually 16px).
    

**Use When:** You want scalable and consistent sizing, especially for responsive designs and accessibility.

```css
html {
  font-size: 16px;
}
h1 {
  font-size: 2rem;  /* 2 × 16px = 32px */
}
```

* * *

### 🔹 3. `%` (Percentage)

*   **Relative to the parent element's size** (context-sensitive).
    
*   Used for width, height, padding, margin, etc.
    

**Use When:** You need elements to scale with their container (e.g., fluid layouts).

```css
div {
  width: 50%;  /* Half the width of the parent element */
  padding: 10%;
}
```

* * *

### 🧠 Comparison Table:

| Unit | Scales With | Common Use | Responsive |
| --- | --- | --- | --- |
| `px` | Nothing (absolute) | Icons, borders, fine controls | ❌ No |
| `rem` | Root font size | Fonts, spacing (accessibility) | ✅ Yes |
| `%` | Parent element's dimension | Fluid layouts, containers | ✅ Yes |

* * *

### ✅ Recommended Practice

1.  Use `rem` for **font sizes**, **margins**, and **padding** for consistent scaling.
    
2.  Use `%` for **container widths** or responsive layouts.
    
3.  Use `px` sparingly for things that need exact precision (e.g., borders or pixel-perfect spacing).
    

* * *

### 🧪 Practice Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    html {
      font-size: 16px;
    }
    body {
      margin: 0;
    }
    .container {
      width: 80%;
      padding: 2rem;
      background-color: #f0f0f0;
    }
    .box {
      width: 50%;
      padding: 20px;
      font-size: 1.5rem;
      background-color: #d0e0ff;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">This box is responsive!</div>
  </div>
</body>
</html>
```

Would you like an interactive playground or downloadable `.html` file with exercises to practice `rem`, `px`, and `%`?

## Response:
Your interactive HTML file is ready for download:

👉 Click here to download `rem-px-percent-practice.html`

You can open it in any browser and practice modifying `rem`, `px`, and `%` units as described in the exercises. Let me know if you want a version with live controls (sliders, buttons) to experiment dynamically!
