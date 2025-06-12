
# HTML Document Metadata Tags Guide

## ✅ Purpose of Metadata Tags

| Tag         | Purpose |
|-------------|---------|
| `<html>`    | Root element with optional `lang` for language setting |
| `<head>`    | Container for metadata and links |
| `<title>`   | Sets the browser tab title |
| `<base>`    | Specifies base URL for relative links |
| `<link>`    | External resource like CSS, favicon |
| `<meta>`    | Provides metadata like charset, author, viewport |
| `<style>`   | Embeds internal CSS |

---

## 📘 Complete List of Common Metadata Tags

| Tag / Attribute | Description |
|------------------|-------------|
| `<meta charset="UTF-8">` | Character encoding |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Mobile responsiveness |
| `<meta name="description" content="...">` | SEO page description |
| `<meta name="keywords" content="...">` | SEO keywords |
| `<meta name="author" content="...">` | Author info |
| `<meta name="robots" content="index, follow">` | SEO crawler instructions |
| `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | Compatibility for IE |
| `<link rel="stylesheet" href="style.css">` | Link to CSS |
| `<link rel="icon" href="favicon.ico">` | Favicon icon |
| `<base href="https://example.com/">` | Base URL for relative paths |

---

## 💡 Interview Questions & Answers

### Beginner

**Q1: What is the purpose of the `<head>` tag?**  
A: It contains metadata, links, styles, and scripts used by browsers and search engines.

**Q2: What does `<meta charset="UTF-8">` do?**  
A: It sets the character encoding to support most characters and symbols globally.

**Q3: Why is the `<title>` tag important?**  
A: It names the browser tab and helps with SEO.

**Q4: What is the purpose of the `<link>` tag?**  
A: It links external resources like CSS files and favicons.

### Intermediate

**Q5: What is the use of the `viewport` meta tag?**  
A: It ensures proper scaling and rendering on mobile and tablets.

**Q6: How does `<base>` affect relative URLs?**  
A: It sets a default URL base so all relative links are resolved from it.

**Q7: What’s the difference between `<style>` and `<link>`?**  
A: `<style>` is for internal CSS; `<link>` references external files.

### Advanced

**Q8: What does `X-UA-Compatible` meta tag do?**  
A: It forces IE to use the latest rendering engine (for compatibility).

**Q9: How does metadata improve SEO?**  
A: Descriptive meta tags help search engines index pages effectively.

**Q10: Can metadata affect accessibility?**  
A: Yes, language tags and descriptive titles enhance screen reader usability.

---

## 🌐 Real-world Use Case (All Browsers & Devices)

```html
<head>
  <meta charset="UTF-8">
  <title>My Responsive Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Responsive web design example with metadata.">
  <meta name="author" content="John Doe">
  <meta name="robots" content="index, follow">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>
```
