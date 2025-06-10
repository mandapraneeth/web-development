
# 📘 Complete List of HTML `<meta>` Tags

The `<meta>` tag provides metadata about the HTML document, such as character set, page description, keywords, author, and viewport settings.

---

## ✅ Basic Syntax

```html
<meta name="name" content="value">
```

or

```html
<meta charset="UTF-8">
```

---

## ✅ Commonly Used `<meta>` Tags

### 🔹 1. Character Encoding

```html
<meta charset="UTF-8">
```
- Sets character encoding to UTF-8.

---

### 🔹 2. Viewport (for responsive design)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Makes website mobile-friendly.

---

### 🔹 3. Page Description (important for SEO)

```html
<meta name="description" content="This is a sample website description.">
```

---

### 🔹 4. Keywords (less important now for SEO)

```html
<meta name="keywords" content="HTML, CSS, JavaScript, tutorial">
```

---

### 🔹 5. Author

```html
<meta name="author" content="Your Name">
```

---

### 🔹 6. Robots (control indexing/crawling)

```html
<meta name="robots" content="index, follow">
```

Options:
- `index`, `noindex`
- `follow`, `nofollow`

---

### 🔹 7. Refresh (auto-reload or redirect)

```html
<meta http-equiv="refresh" content="30">
```

Or for redirect:

```html
<meta http-equiv="refresh" content="5;url=https://example.com">
```

---

### 🔹 8. HTTP Equiv – Content-Type (older way to set charset)

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

---

### 🔹 9. Open Graph (for social media sharing, especially Facebook)

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page Description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com">
<meta property="og:type" content="website">
```

---

### 🔹 10. Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description.">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

---

### 🔹 11. Theme Color (for mobile browser address bar)

```html
<meta name="theme-color" content="#317EFB">
```

---

### 🔹 12. Application Name

```html
<meta name="application-name" content="App Name">
```

---

### 🔹 13. Cache-Control (discouraged; best handled via HTTP headers)

```html
<meta http-equiv="Cache-Control" content="no-cache">
```

---

## ✅ Example: Complete Head with Meta Tags

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Best tutorial site for web development.">
  <meta name="author" content="John Doe">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#ffffff">
  <meta property="og:title" content="Learn HTML">
  <meta property="og:description" content="Step-by-step guide to learn HTML.">
  <meta property="og:image" content="https://example.com/preview.jpg">
  <meta property="og:url" content="https://example.com">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

---

✅ Use meta tags wisely to improve **SEO**, **accessibility**, **social media presence**, and **user experience**.
