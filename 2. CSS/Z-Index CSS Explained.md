# Z-Index CSS Explained


## Response:
### ✅ **Z-Index in CSS: Clear Explanation + Best Practices**

* * *

### 🔷 **What is `z-index`?**

`z-index` is a CSS property that controls the **stacking order** of elements along the **z-axis (depth)** — i.e., which element appears **in front** or **behind** another when they overlap.

* * *

### 🔷 **Syntax**

```css
selector {
  z-index: value;
}
```

*   **Value**: Can be a number (positive, negative, or zero), `auto`, or `inherit`.
    

* * *

### 🔷 **When `z-index` works**

✅ `z-index` **only applies to elements that have a position** other than `static`:

*   `relative`
    
*   `absolute`
    
*   `fixed`
    
*   `sticky`
    

* * *

### 🔷 **Stacking Contexts (Important)**

A **stacking context** is a three-dimensional conceptual layer where elements are stacked. A new stacking context is formed by:

*   An element with a `position` other than `static` **and** a `z-index` other than `auto`.
    
*   Elements with `opacity` less than `1`.
    
*   CSS properties like `transform`, `filter`, `will-change`, `mix-blend-mode`, `isolation: isolate`, etc.
    

> Each stacking context is **independent** — child elements' `z-index` values don’t affect elements outside their stacking context.

* * *

### 📘 **Visual Example**

```html
<div class="box red"></div>
<div class="box blue"></div>
```

```css
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50px;
  left: 50px;
}

.red {
  background-color: red;
  z-index: 1;
}

.blue {
  background-color: blue;
  z-index: 2;
}
```

🔵 Blue will appear on top of 🔴 red because it has a **higher z-index**.

* * *

### ✅ **Best Practices for `z-index`**

| Practice | Description |
| --- | --- |
| 🔢 Use small numeric ranges | Keep values like `1-10` for common UI parts. Only use large values (`9999`) for extreme overlays (e.g., modals). |
| 📦 Use stacking contexts wisely | Use `z-index` in combination with `position` to isolate sections of your page. |
| ❌ Avoid magic numbers like `99999` everywhere | These make the layers hard to manage. Use context-based layering instead. |
| 🧼 Reset default stacking issues | Browsers sometimes give form controls (like select boxes) higher stacking. Use `z-index: 0` or wrap them in a stacking context. |
| 🔍 Use browser DevTools to debug | Chrome/Firefox DevTools lets you inspect stacking contexts and see `z-index` in action. |
| 📚 Document your layers | Keep a list of `z-index` ranges for sections: header (10), modal (100), tooltip (200), etc. |

* * *

### 🔄 **Common UI Z-Index Layering (Example Plan)**

| Component | z-index |
| --- | --- |
| Base content | 1 |
| Header/Navbar | 10 |
| Sidebar | 20 |
| Dropdown | 50 |
| Modal/Popup | 100 |
| Overlay/Backdrop | 99 |
| Toast Notification | 200 |

* * *

### ⚠️ **Common Pitfalls**

| Mistake | Fix |
| --- | --- |
| `z-index` not working | Ensure `position` is set (e.g., `relative` or `absolute`). |
| Child not appearing on top | May be trapped in its parent's stacking context. |
| High `z-index` not enough | Sibling elements in other stacking contexts can override it. |

* * *

### 🎨 **Interactive Tip**

Try this:

```css
.parent {
  position: relative;
  z-index: 1;
  transform: scale(1); /* creates a stacking context */
}

.child {
  position: absolute;
  z-index: 999;
}
```

Here, even though `.child` has a high `z-index`, it **cannot escape the `.parent` context**. So it may appear under something outside `.parent`.

* * *

### 🎁 Bonus: Simple Demo Code

```html
<div class="box red">Red (z-index: 1)</div>
<div class="box green">Green (z-index: 3)</div>
<div class="box blue">Blue (z-index: 2)</div>
```

```css
.box {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.7;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.red {
  background: red;
  top: 50px;
  left: 50px;
  z-index: 1;
}

.green {
  background: green;
  top: 80px;
  left: 80px;
  z-index: 3;
}

.blue {
  background: blue;
  top: 110px;
  left: 110px;
  z-index: 2;
}
```

* * *

Would you like a downloadable file with a **z-index stacking demo** and comments for learning?

## Response:
Absolutely! Let’s dive **deeper into how `z-index` works**, clear some confusion, and expand on advanced topics like **stacking context inheritance**, **default stacking order**, and **real-world use cases**.

* * *

🔄 1. **The Default Stacking Order (Without z-index)**
------------------------------------------------------

Even if you **don’t use `z-index`**, elements can still overlap. Here’s how browsers decide the default stacking:

#### Default stack order:

From bottom to top:

1.  **Background** (body background, etc.)
    
2.  **Non-positioned elements** (no `position` set — default is `static`)
    
3.  **Positioned elements (relative, absolute, fixed, sticky)** in HTML order
    
4.  **Floating elements**
    
5.  **Elements with `z-index`**
    

So without `z-index`, later elements in the HTML will appear **on top of** earlier elements **if they overlap**.

```html
<!-- Green will be on top of red -->
<div class="red"></div>
<div class="green"></div>
```

* * *

⚙️ 2. **How `position` and `z-index` work together**
----------------------------------------------------

| Position | z-index usable? | Notes |
| --- | --- | --- |
| `static` | ❌ No | Default position. `z-index` is ignored. |
| `relative` | ✅ Yes | Common for stacking inline or local changes. |
| `absolute` | ✅ Yes | Good for overlays, tooltips, dropdowns. |
| `fixed` | ✅ Yes | Useful for sticky headers, modals. |
| `sticky` | ✅ Yes | Context-aware stickiness (e.g., section titles). |

**Key rule**: `z-index` **only works** when the element has a `position` value other than `static`.

* * *

🧠 3. **Understanding Stacking Contexts**
-----------------------------------------

> A **stacking context** is a self-contained z-index universe.

### 🔹 What creates a new stacking context?

| CSS Feature | Example |
| --- | --- |
| `z-index` on a positioned element | `position: relative; z-index: 1;` |
| `opacity < 1` | `opacity: 0.9;` |
| `transform` | `transform: scale(1);` |
| `filter`, `perspective` | `filter: blur(0);` |
| `will-change`, `isolation` | `isolation: isolate;` |

Each stacking context **isolates its children**. A child with `z-index: 999` cannot surpass a parent with `z-index: 1` **if the parent is in a different context**.

### 🔸 Example

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

```css
.outer {
  position: relative;
  z-index: 1;
  transform: scale(1); /* creates a stacking context */
}

.inner {
  position: absolute;
  z-index: 9999;
}
```

Even though `.inner` has a high `z-index`, it **can’t appear above** anything **outside** `.outer` that has `z-index: 2` or higher.

* * *

🔐 4. **z-index Best Practice: Layer Mapping**
----------------------------------------------

To avoid chaos, define a **z-index scale system**:

```css
/* z-index layer plan */
$z-index-base: 1;
$z-index-header: 10;
$z-index-dropdown: 100;
$z-index-modal: 1000;
$z-index-tooltip: 2000;
```

Use these values in your styles so every dev knows which layer is on top.

* * *

🔍 5. **Debugging z-index Issues**
----------------------------------

If `z-index` seems to not work:

*   ✅ Is the element **positioned**?
    
*   ✅ Is it inside a **stacking context**?
    
*   ✅ Are there **other elements with higher z-index** in other contexts?
    

### 🔧 Browser Tools

**Chrome DevTools** > Elements tab > Computed styles:

*   Hover over element → Check `z-index` and `stacking context`.
    
*   Use "Paint Flashing" or "Layer Borders" in DevTools > Rendering to see overlapping.
    

* * *

🎯 6. **Real-World Use Cases**
------------------------------

| Use Case | z-index Strategy |
| --- | --- |
| Navbar over content | `position: fixed; z-index: 100;` |
| Modal popup over all | `position: fixed; z-index: 1000;` |
| Tooltip over modal | `position: absolute; z-index: 2000;` |
| Sidebar over content, under modal | `z-index: 50;` |
| Backdrop under modal | `z-index: 999;` |

* * *

💡 7. **Pro Tips**
------------------

✅ Always start with `position: relative` and `z-index: 1` when unsure.  
✅ Use **`isolation: isolate;`** to create isolated stacking contexts (very useful in component systems like React).  
✅ Use named classes like `.modal`, `.overlay`, `.tooltip` to assign structured `z-index`.

* * *

📁 Want a Demo File?
--------------------

Would you like a downloadable HTML+CSS file with:

*   Stacking contexts
    
*   z-index effects
    
*   Modal/backdrop layering
    
*   Tooltips and dropdown layering
    

➡️ I can generate and provide it for you.

Would you like that now?

## Response:
Update memory?

“Wants examples and step-by-step explanations of co...”

Yes

No

Great! Let’s break this down into **5 key sections** based on your request, each with:

*   ✅ **Code**
    
*   🧠 **Explanation**
    
*   📝 **Comments**
    
*   📐 **How layering / positioning / z-index / flex / grid / transform** are used
    

* * *

✅ 1. **Overlapping Cards with Slide Effect**
--------------------------------------------

```html
<section class="card-stack">
  <div class="card card-1">Card 1</div>
  <div class="card card-2">Card 2</div>
  <div class="card card-3">Card 3</div>
</section>

<style>
.card-stack {
  position: relative;
  width: 400px;
  height: 250px;
  margin: 40px auto;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  background: lightblue;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
}

.card-1 {
  background: #00aaff;
  z-index: 3;
  transform: translateY(0);
}

.card-2 {
  background: #0077cc;
  z-index: 2;
  transform: translateY(20px);
}

.card-3 {
  background: #004488;
  z-index: 1;
  transform: translateY(40px);
}

.card-stack:hover .card-1 {
  transform: translateY(-20px);
}
.card-stack:hover .card-2 {
  transform: translateY(0);
}
.card-stack:hover .card-3 {
  transform: translateY(20px);
}
</style>
```

### 🔍 Explanation:

*   `position: absolute` stacks the cards in the same space.
    
*   `z-index` orders them from top to bottom.
    
*   On hover, each card **slides upward**, creating a layered animation.
    

* * *

✅ 2. **Hero Section with Shapes (Layered Elements)**
----------------------------------------------------

```html
<section class="hero">
  <div class="shapes"></div>
  <h1>Welcome to the Future</h1>
</section>

<style>
.hero {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #111, #444);
  color: white;
  text-align: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero h1 {
  position: relative;
  z-index: 2;
  font-size: 2.5rem;
}

.shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1), transparent 40%),
    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05), transparent 40%);
}
</style>
```

### 🔍 Explanation:

*   `shapes` are layered backgrounds using **radial gradients**.
    
*   They sit **behind the heading** (`z-index: 1` vs `2`).
    
*   No images used; only CSS gradients.
    

* * *

✅ 3. **Image with Small Overlay Image**
---------------------------------------

```html
<div class="image-box">
  <img src="https://via.placeholder.com/300x200" alt="Main" />
  <img src="https://via.placeholder.com/80" class="overlay" />
</div>

<style>
.image-box {
  position: relative;
  display: inline-block;
  margin: 30px;
}

.image-box img {
  border-radius: 8px;
}

.overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
</style>
```

### 🔍 Explanation:

*   One image is placed **over** another using `position: absolute`.
    
*   The overlay image is styled as a **circular profile** using `border-radius: 50%`.
    

* * *

✅ 4. **Testimonial Card with BG and Profile**
---------------------------------------------

```html
<div class="testimonial">
  <div class="profile-pic">
    <img src="https://via.placeholder.com/80" />
  </div>
  <div class="text">
    <p>"Great service and amazing quality!"</p>
    <strong>Jane Doe</strong><br />
    <span>CEO, Example Inc.</span>
  </div>
</div>

<style>
.testimonial {
  position: relative;
  background: url('https://via.placeholder.com/400x200') no-repeat center/cover;
  width: 400px;
  padding: 60px 20px 20px;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  margin: 20px auto;
}

.profile-pic {
  position: absolute;
  top: -40px;
  left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.profile-pic img {
  width: 100%;
}

.text p {
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.text strong {
  font-size: 1.2rem;
}
.text span {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
```

### 🔍 Explanation:

*   A card with a **background image**.
    
*   A **circular image** overlaps at the top.
    
*   Text is styled below it. Layout uses absolute + padding.
    

* * *

✅ 5. **Side-by-Side Sections with Image in Center Overlap**
-----------------------------------------------------------

```html
<section class="double-section">
  <div class="text-box">
    <h2>Our Mission</h2>
    <p>To deliver outstanding solutions with passion and precision.</p>
  </div>
  <div class="center-image">
    <img src="https://via.placeholder.com/150" />
  </div>
  <div class="text-box">
    <h2>Our Vision</h2>
    <p>To be a globally recognized leader in innovation and growth.</p>
  </div>
</section>

<style>
.double-section {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px 20px;
  background: #f5f5f5;
  gap: 80px;
}

.text-box {
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.center-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.center-image img {
  width: 120px;
  border-radius: 50%;
  border: 6px solid white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>
```

### 🔍 Explanation:

*   Two `text-box` sections are side-by-side using `flex`.
    
*   A central image is **absolutely positioned**, centered with `transform`.
    
*   Overlaps between sections are controlled using `z-index`.
    

* * *

✅ Summary Table
---------------

| Section | Feature | Techniques Used |
| --- | --- | --- |
| 1\. Card Stack | Slide + Layered Cards | `position: absolute`, `z-index`, `transform` |
| 2\. Hero with Shapes | Layered BG effects | `radial-gradient`, `z-index` |
| 3\. Image Overlay | Profile on Image | `position: absolute`, border styling |
| 4\. Testimonial | Card with BG + Face | Background image + overlapping circle |
| 5\. Dual Sections | Center image overlap | `flex`, `absolute center`, `transform` |

* * *

Would you like all of this exported as a single downloadable HTML/CSS file?

## Response:
Here is the **complete HTML and CSS code** combining all 5 sections you requested — all in **one file** with clear comments and structure.

* * *

✅ Full HTML + CSS Code:
-----------------------

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CSS Overlap Layout Showcase</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #f0f0f0;
      color: #333;
    }

    h1, h2 {
      margin: 0;
    }

    /* 1. Overlapping Slide Cards */
    .card-stack {
      position: relative;
      width: 400px;
      height: 250px;
      margin: 60px auto;
    }

    .card {
      position: absolute;
      width: 100%;
      height: 100%;
      background: lightblue;
      color: white;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.4s ease;
    }

    .card-1 {
      background: #00aaff;
      z-index: 3;
      transform: translateY(0);
    }

    .card-2 {
      background: #0077cc;
      z-index: 2;
      transform: translateY(20px);
    }

    .card-3 {
      background: #004488;
      z-index: 1;
      transform: translateY(40px);
    }

    .card-stack:hover .card-1 {
      transform: translateY(-20px);
    }

    .card-stack:hover .card-2 {
      transform: translateY(0);
    }

    .card-stack:hover .card-3 {
      transform: translateY(20px);
    }

    /* 2. Hero Section with Background Shapes */
    .hero {
      position: relative;
      height: 300px;
      background: linear-gradient(135deg, #111, #444);
      color: white;
      text-align: center;
      padding-top: 80px;
      overflow: hidden;
    }

    .hero h1 {
      position: relative;
      z-index: 2;
      font-size: 2.5rem;
    }

    .shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background:
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1), transparent 40%),
        radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05), transparent 40%);
    }

    /* 3. Image with Small Overlay */
    .image-box {
      position: relative;
      display: inline-block;
      margin: 40px;
    }

    .image-box img {
      border-radius: 8px;
      display: block;
    }

    .overlay {
      position: absolute;
      bottom: 10px;
      right: 10px;
      border: 3px solid #fff;
      border-radius: 50%;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    /* 4. Testimonial Card with Background */
    .testimonial {
      position: relative;
      background: url('https://via.placeholder.com/400x200') no-repeat center/cover;
      width: 400px;
      padding: 60px 20px 20px;
      color: #fff;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      margin: 60px auto;
    }

    .profile-pic {
      position: absolute;
      top: -40px;
      left: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid white;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .profile-pic img {
      width: 100%;
      height: 100%;
    }

    .text p {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    .text strong {
      font-size: 1.2rem;
    }

    .text span {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    /* 5. Side-by-Side Sections with Center Image */
    .double-section {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 100px 20px;
      background: #ffffff;
      gap: 80px;
    }

    .text-box {
      width: 250px;
      background: #fafafa;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    }

    .center-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }

    .center-image img {
      width: 120px;
      border-radius: 50%;
      border: 6px solid white;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>
<body>

  <!-- 1. Overlapping Cards with Slide -->
  <section class="card-stack">
    <div class="card card-1">Card 1</div>
    <div class="card card-2">Card 2</div>
    <div class="card card-3">Card 3</div>
  </section>

  <!-- 2. Hero Banner with Shapes -->
  <section class="hero">
    <div class="shapes"></div>
    <h1>Welcome to the Future</h1>
  </section>

  <!-- 3. Image with Overlay -->
  <div class="image-box">
    <img src="https://via.placeholder.com/300x200" alt="Main" />
    <img src="https://via.placeholder.com/80" class="overlay" />
  </div>

  <!-- 4. Testimonial Card -->
  <div class="testimonial">
    <div class="profile-pic">
      <img src="https://via.placeholder.com/80" />
    </div>
    <div class="text">
      <p>"Great service and amazing quality!"</p>
      <strong>Jane Doe</strong><br />
      <span>CEO, Example Inc.</span>
    </div>
  </div>

  <!-- 5. Side-by-Side Sections with Center Overlap -->
  <section class="double-section">
    <div class="text-box">
      <h2>Our Mission</h2>
      <p>To deliver outstanding solutions with passion and precision.</p>
    </div>
    <div class="center-image">
      <img src="https://via.placeholder.com/150" />
    </div>
    <div class="text-box">
      <h2>Our Vision</h2>
      <p>To be a globally recognized leader in innovation and growth.</p>
    </div>
  </section>

</body>
</html>
```

* * *

### ✅ How to Use:

1.  Copy the above code.
    
2.  Paste it into an `index.html` file.
    
3.  Open it in your browser.
    
4.  Hover over the cards to see the slide effect. Scroll to see all sections.
    

* * *

Let me know if you want:

*   A downloadable `.zip` with this file.
    
*   TailwindCSS or Bootstrap versions.
    
*   A responsive/mobile version.

## Response:
The `z-index` property in CSS is used to **control the stack order** (layering) of overlapping elements on a web page. It determines **which element appears in front of or behind others** when elements occupy the same space.

* * *

### ✅ Syntax:

```css
element {
  position: relative; /* or absolute/fixed/sticky */
  z-index: 10;
}
```

* * *

### 🧠 Key Points:

| Property | What it Means |
| --- | --- |
| `z-index: auto` (default) | Follows natural HTML order |
| `z-index: 0` | Base layer |
| Higher `z-index` | Element appears **on top** |
| Lower `z-index` | Element goes **behind** |
| Works only with `position` values: `relative`, `absolute`, `fixed`, or `sticky` |  |

* * *

### 🔍 Example:

```html
<div class="box box1">Box 1</div>
<div class="box box2">Box 2</div>

<style>
.box {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50px;
  left: 50px;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box1 {
  background: blue;
  z-index: 1;
}

.box2 {
  background: red;
  left: 100px;
  z-index: 2;
}
</style>
```

📌 In this example:

*   **Box 1** (blue) has `z-index: 1`
    
*   **Box 2** (red) has `z-index: 2`, so it **appears on top**
    

* * *

### ✅ Best Practices:

*   Always use `z-index` **with positioning**.
    
*   Avoid very high numbers (like 99999) unless necessary.
    
*   Keep stacking logic **clean and predictable** (e.g., header `z-index: 10`, modal `z-index: 100`).
    
*   Use z-index **layers by roles**, like:
    
    *   Base content → `z-index: 1`
        
    *   Dropdowns → `z-index: 10`
        
    *   Modal → `z-index: 100`
        
    *   Alerts → `z-index: 999`
        

* * *

Let me know if you'd like a visual diagram or animation to show stacking order interactively.

## Response:
Yes, `z-index` **can accept negative values** like `-1`, `-2`, etc., and they work **perfectly fine** — but only under certain conditions.

* * *

### ✅ When Negative `z-index` Works:

To make `z-index: -1` or `-2` work:

*   The element **must have a `position` set** (like `relative`, `absolute`, `fixed`, or `sticky`)
    
*   It will place the element **behind** other elements with:
    
    *   `z-index: 0` or higher
        
    *   No `z-index` (default is `auto` which is like `z-index: 0`)
        

* * *

### 🧪 Example:

```html
<div class="box base">Base</div>
<div class="box behind">Behind</div>

<style>
.box {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 200px;
  height: 200px;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.base {
  background: blue;
  z-index: 0;
}

.behind {
  background: red;
  z-index: -1;
  left: 100px;
}
</style>
```

📌 In this example:

*   The red box has `z-index: -1`, so it **appears behind** the blue one with `z-index: 0`.
    

* * *

### ⚠️ Caution:

1.  If your element has `z-index: -1` and it's not visible:
    
    *   Make sure no parent container is hiding it due to overflow or stacking context.
        
    *   Ensure it's still inside the **viewport**.
        
2.  Negative z-index elements **can go behind** backgrounds or even be unclickable if layered too deep.
    

* * *

### ✅ Use Cases for Negative `z-index`:

*   Background image layers
    
*   Decorative SVG or shapes behind content
    
*   Sending a box "below" others without touching background
    

* * *
