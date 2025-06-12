# CSS Grid Layout Guide

Here's a **complete guide to CSS Grid Layout**, covering all major concepts, properties with examples, and a downloadable HTML file at the end including assignments and solutions.

* * *

✅ **CSS Grid Layout Guide**
---------------------------

### 🔹 What is CSS Grid?

CSS Grid is a two-dimensional layout system for the web. It lets you control **rows** and **columns** together, making complex layouts easier.

* * *

🔸 Basic Setup
--------------

```css
.container {
  display: grid;
}
```

* * *

🔸 Grid Properties (Parent / Container)
---------------------------------------

### 1\. **`display: grid | inline-grid;`**

```css
.container {
  display: grid;
}
```

### 2\. **`grid-template-columns`**

Defines the number and size of columns.

```css
.container {
  grid-template-columns: 100px 200px auto;
}
```

#### Common values:

*   `px`, `fr`, `%`, `auto`
    
*   `repeat(3, 1fr)` = 3 equal columns
    
*   `minmax(100px, 1fr)` = responsive columns
    

* * *

### 3\. **`grid-template-rows`**

Same as columns but for rows.

```css
.container {
  grid-template-rows: 100px 200px;
}
```

* * *

### 4\. **`gap`, `row-gap`, `column-gap`**

Space between grid tracks.

```css
.container {
  gap: 10px;
  row-gap: 20px;
  column-gap: 30px;
}
```

* * *

### 5\. **`grid-template-areas`**

Named layout for template matching.

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}
```

### 6\. **`grid-auto-rows`, `grid-auto-columns`**

Size of implicitly added tracks.

```css
.container {
  grid-auto-rows: 100px;
}
```

* * *

### 7\. **`grid-auto-flow`**

How to place auto items (default: row)

```css
.container {
  grid-auto-flow: row | column | dense;
}
```

* * *

🔸 Grid Item Properties (Child)
-------------------------------

### 1\. **`grid-column-start` & `grid-column-end`**

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

or shorthand:

```css
.item {
  grid-column: 1 / 3;
}
```

### 2\. **`grid-row-start` & `grid-row-end`**

```css
.item {
  grid-row: 1 / 3;
}
```

* * *

### 3\. **`grid-area` (for named areas or shorthand)**

```css
.item {
  grid-area: header;
}
```

or shorthand:

```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

* * *

### 4\. **`justify-self`, `align-self`, `place-self`**

*   `justify-self`: align horizontally
    
*   `align-self`: align vertically
    
*   `place-self`: shorthand
    

```css
.item {
  justify-self: center;
  align-self: end;
}
```

* * *

### 5\. **`justify-items`, `align-items`, `place-items`**

For all grid children at once.

```css
.container {
  justify-items: start;
  align-items: stretch;
}
```

* * *

### 6\. **`justify-content`, `align-content`, `place-content`**

Aligns the grid itself inside the container.

```css
.container {
  justify-content: space-between;
  align-content: center;
}
```

* * *

💡 CSS Grid Example Layout
--------------------------

```html
<div class="container">
  <header class="item header">Header</header>
  <nav class="item sidebar">Sidebar</nav>
  <main class="item content">Content</main>
  <footer class="item footer">Footer</footer>
</div>
```

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```

* * *

🧠 Assignments
--------------

### 📘 Assignment 1: 3-Column Blog Layout

*   1 header
    
*   3 equal columns below
    
*   1 footer
    

#### Solution (shortened):

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "col1 col2 col3"
    "footer footer footer";
}
```

* * *

### 📘 Assignment 2: Image Gallery

*   Create a responsive 3-column gallery with gap.
    

#### Solution:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
```

* * *

### 📘 Assignment 3: Pricing Table

*   Use 3 columns for different pricing cards.
    

* * *

📦 Downloadable HTML File with All Examples + Assignments
---------------------------------------------------------

Click below to download:

➡️ Download Complete HTML File

File includes:

*   Grid layout examples
    
*   Property demonstrations
    
*   Assignment sections
    
*   Inline explanations
    

* * *

Would you like me to continue with **Grid vs Flexbox**, **advanced tricks**, or **real-world responsive layout** next?

## Response:
Your downloadable HTML file is ready:

👉 Click here to download **CSS\_Grid\_Guide\_With\_Examples\_Assignments.html**

This file includes:

*   Grid layout basics
    
*   All major properties in use
    
*   Assignment 1: Blog Layout
    
*   Assignment 2: Responsive Image Gallery
    
*   Neat structure and comments
    

Would you like additional assignments or Flexbox vs Grid comparison next?

## Response:
✅ The HTML file has been updated with:

*   ✅ **Assignment 3: Pricing Table (3 Cards)** – with solution
    
*   ✅ **CSS Grid vs Flexbox Comparison** – pros, use-cases, and visual example
    
*   ✅ **Flexbox Layout Example** – side-by-side layout
    

📥 Click here to download the updated file

Would you like me to include a real-world responsive website layout next using CSS Grid + Flexbox?

## Response:
🚀 The HTML file now includes a **Real-World Responsive Website Layout** using **CSS Grid for structure** and **Flexbox for card layout**.

📥 Download the final file here

Included:

*   Header, sidebar, content, footer via Grid
    
*   Responsive sidebar (collapses on mobile)
    
*   Flex-based card layout (3 per row on desktop, stacked on mobile)
    

Would you like me to add a sticky header or responsive mobile nav toggle next?
