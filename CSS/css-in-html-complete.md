
# CSS in HTML: Inline, Internal, and External

This guide shows how to apply CSS in three different ways: **inline**, **internal**, and **external**, all demonstrated together.

---

## 🧾 Complete HTML Example Using All CSS Methods

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Integration Example</title>

  <!-- External CSS -->
  <link rel="stylesheet" href="style.css">

  <!-- Internal CSS -->
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }

    h1 {
      color: green;
      text-align: center;
    }

    .internal-style {
      font-size: 18px;
      color: gray;
    }
  </style>
</head>
<body>

  <!-- Inline CSS -->
  <h1 style="border-bottom: 2px solid black;">This is a Heading with Inline CSS</h1>

  <p class="internal-style">This paragraph is styled using internal CSS.</p>

  <h2>This heading is styled using external CSS.</h2>

</body>
</html>
```

---

## 🗂 External CSS File (style.css)

Create a file named `style.css` and include the following content:

```css
h2 {
  color: darkred;
  text-align: left;
}

body {
  margin: 40px;
}
```

---

## 🔄 CSS Precedence Order

1. **Inline CSS** – Highest priority
2. **Internal CSS**
3. **External CSS** – Lowest priority

> If multiple rules target the same element, the one with higher specificity or that appears last wins.

---

## 🧠 Bonus Tips

### 🔗 Importing CSS File into Another CSS

```css
@import url("reset.css");
```

### 📱 Media Query for Responsiveness

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

---

✅ Now you can use all 3 methods of CSS styling efficiently in your HTML projects!
