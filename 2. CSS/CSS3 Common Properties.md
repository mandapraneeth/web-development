# CSS3 Common Properties

Here's a **comprehensive list of common CSS3 properties** that apply to **most or all HTML elements**, along with their **default values**, **possible values**, and **usage** explained clearly. This will help you write consistent, well-structured, and responsive CSS.

* * *

🧱 1. **Box Model Properties**
------------------------------

### `margin`

*   **Usage**: Controls the space **outside** an element.
    
*   **Values**:
    
    *   `auto` – center the element
        
    *   `px`, `em`, `%` – spacing units
        
    *   `margin: 10px 20px 30px 40px;` → Top, Right, Bottom, Left
        

### `padding`

*   **Usage**: Controls the space **inside** an element, between content and border.
    
*   **Same value types as margin**
    

### `border`

*   **Usage**: Adds border around an element.
    
*   **Values**:
    
    *   `border: 1px solid black;`
        
    *   Variants: `border-top`, `border-right`, etc.
        

### `width` & `height`

*   **Usage**: Set element dimensions.
    
*   **Values**:
    
    *   `auto` (default)
        
    *   Units: `px`, `%`, `em`, `vh`, `vw`
        

* * *

🎨 2. **Color and Background Properties**
-----------------------------------------

### `color`

*   **Usage**: Text color.
    
*   **Values**: Named (`red`), HEX, RGB, RGBA, HSL
    

### `background-color`

*   **Usage**: Sets background color.
    
*   **Example**: `background-color: #f9f9f9;`
    

### `background`

*   **Shorthand**: Combines color, image, position, size, repeat, attachment
    
*   **Example**:
    
    ```css
    background: url('image.jpg') no-repeat center/cover;
    ```
    

### `opacity`

*   **Usage**: Transparency of the element (0–1)
    
*   **Example**: `opacity: 0.5;`
    

* * *

🖋 3. **Font and Text Properties**
----------------------------------

### `font-family`

*   **Usage**: Sets font type
    
*   **Example**: `font-family: 'Arial', sans-serif;`
    

### `font-size`

*   **Units**: `px`, `em`, `rem`, `%`
    
*   **Example**: `font-size: 16px;`
    

### `font-weight`

*   **Values**: `normal`, `bold`, `lighter`, `bolder`, or `100–900`
    

### `font-style`

*   **Values**: `normal`, `italic`, `oblique`
    

### `text-align`

*   **Usage**: Aligns text inside the element.
    
*   **Values**: `left`, `right`, `center`, `justify`
    

### `text-decoration`

*   **Values**: `none`, `underline`, `overline`, `line-through`
    

### `line-height`

*   **Usage**: Spacing between lines
    
*   **Values**: unitless (`1.5`), `px`, `em`
    

* * *

🧭 4. **Display and Positioning**
---------------------------------

### `display`

*   **Controls**: Layout of the element
    
*   **Values**:
    
    *   `block`, `inline`, `inline-block`
        
    *   `flex`, `grid`, `none`
        

### `position`

*   **Values**:
    
    *   `static` (default), `relative`, `absolute`, `fixed`, `sticky`
        

### `top`, `right`, `bottom`, `left`

*   **Usage**: Moves positioned elements
    
*   **Units**: `px`, `%`, `em`, `vh`
    

### `z-index`

*   **Usage**: Layer order (higher number = front)
    

* * *

🔁 5. **Flexbox (for layout)**
------------------------------

### `display: flex;`

*   Enables flex container
    

### `flex-direction`

*   `row`, `row-reverse`, `column`, `column-reverse`
    

### `justify-content`

*   `flex-start`, `center`, `space-between`, `space-around`, `space-evenly`
    

### `align-items`

*   `stretch`, `center`, `flex-start`, `flex-end`, `baseline`
    

### `gap`

*   Space between items
    

* * *

🎯 6. **Grid (for layout)**
---------------------------

### `display: grid;`

### `grid-template-columns`

*   Example: `grid-template-columns: 1fr 2fr;`
    

### `grid-gap` / `gap`

*   Space between rows/columns
    

* * *

🧩 7. **Box Sizing**
--------------------

### `box-sizing`

*   **Values**:
    
    *   `content-box` – default (padding and border not included in width)
        
    *   `border-box` – includes padding/border in width/height
        

* * *

🌀 8. **Overflow & Visibility**
-------------------------------

### `overflow`

*   **Values**: `visible`, `hidden`, `scroll`, `auto`
    

### `visibility`

*   `visible`, `hidden`, `collapse`
    

* * *

🔁 9. **Transform & Transition**
--------------------------------

### `transform`

*   Example: `transform: rotate(45deg);`
    

### `transition`

*   Smooth animation of property changes  
    `transition: all 0.3s ease;`
    

* * *

🎭 10. **Animations**
---------------------

### `animation`

*   `animation: slide 3s ease infinite;`
    

### `@keyframes`

```css
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

* * *

✳️ 11. **Visibility and Interaction**
-------------------------------------

### `cursor`

*   `pointer`, `default`, `text`, `not-allowed`, etc.
    

### `pointer-events`

*   `auto`, `none` (disables click)
    

### `user-select`

*   `none`, `text`, `all` (controls text selection)
    

* * *

🌐 12. **Media and Responsive**
-------------------------------

### `@media`

```css
@media (max-width: 768px) {
  div {
    display: block;
  }
}
```

* * *

✅ Bonus Shorthand Properties
----------------------------

| **Property** | **Shorthand For** |
| --- | --- |
| `margin` | margin-top/right/bottom/left |
| `padding` | padding-top/right/bottom/left |
| `font` | font-style, font-weight, font-size, line-height, font-family |
| `border` | border-width, border-style, border-color |
| `background` | background-color, background-image, background-position, background-size, background-repeat |

* * *

📘 Tips
-------

*   Use `rem` for scalable, accessible font sizes.
    
*   Always use `box-sizing: border-box` for layout consistency.
    
*   Combine `flex` and `grid` for responsive, modern layouts.
    
*   Use `:hover`, `:focus`, `:active` for interactive states.
    

* * *

Would you like this content as a downloadable `.html` or `.css` reference file or a printable PDF cheat sheet?

## Response:
Absolutely! Here's a **clean and clear list of common CSS3 properties with values, examples, and explanations**, grouped by category. This is ideal for beginners and advanced users who want a strong reference.

* * *

🧱 **1\. Box Model Properties**
-------------------------------

### 🔹 `margin`

*   **What it does**: Adds space **outside** the element (creates distance from other elements).
    
*   **Syntax**:
    

```css
margin: 20px; /* All sides */
margin: 10px 15px; /* Top/Bottom 10px, Left/Right 15px */
```

*   **Values**: `px`, `em`, `%`, `auto`
    

* * *

### 🔹 `padding`

*   **What it does**: Adds space **inside** the element (between border and content).
    

```css
padding: 10px; /* Same padding on all sides */
padding: 10px 15px 5px 20px; /* Top Right Bottom Left */
```

* * *

### 🔹 `border`

*   **What it does**: Draws a border around the element.
    

```css
border: 2px solid black;
border: 1px dashed red;
```

*   **Shorthand**: `border-width` + `border-style` + `border-color`
    

* * *

### 🔹 `width` / `height`

*   **Controls the size** of the element.
    

```css
width: 300px;
height: 150px;
width: 50%; /* 50% of parent */
```

* * *

🎨 **2\. Color and Background**
-------------------------------

### 🔹 `color`

*   **Sets text color**.
    

```css
color: blue;
color: #ff6600;
color: rgba(255, 0, 0, 0.6);
```

* * *

### 🔹 `background-color`

*   **Sets background color** of the element.
    

```css
background-color: #f0f0f0;
```

* * *

### 🔹 `background`

*   **Shorthand** for all background styles.
    

```css
background: url('image.jpg') no-repeat center/cover;
```

* * *

### 🔹 `opacity`

*   **Controls transparency**.
    

```css
opacity: 1;   /* Fully visible */
opacity: 0.5; /* 50% transparent */
opacity: 0;   /* Invisible */
```

* * *

🖋 **3\. Font and Text**
------------------------

### 🔹 `font-family`

*   **Sets the font** of text.
    

```css
font-family: 'Arial', sans-serif;
```

* * *

### 🔹 `font-size`

*   **Size of the text**.
    

```css
font-size: 16px;
font-size: 1.2em;
```

* * *

### 🔹 `font-weight`

*   **Boldness of the font**.
    

```css
font-weight: normal;
font-weight: bold;
font-weight: 400;
```

* * *

### 🔹 `text-align`

*   **Aligns text horizontally**.
    

```css
text-align: left;
text-align: center;
text-align: justify;
```

* * *

### 🔹 `line-height`

*   **Space between lines of text**.
    

```css
line-height: 1.5;
line-height: 24px;
```

* * *

### 🔹 `text-decoration`

*   **Text styles** like underline, line-through.
    

```css
text-decoration: underline;
text-decoration: none;
```

* * *

🧭 **4\. Layout and Positioning**
---------------------------------

### 🔹 `display`

*   **Controls element display behavior**.
    

```css
display: block;
display: inline;
display: flex;
display: none;
```

* * *

### 🔹 `position`

*   **Positions elements relative to their container or viewport**.
    

```css
position: relative;
position: absolute;
position: fixed;
```

* * *

### 🔹 `top`, `left`, `right`, `bottom`

*   **Used with `position` to move the element**.
    

```css
position: absolute;
top: 10px;
left: 20px;
```

* * *

### 🔹 `z-index`

*   **Layering of elements** (higher = in front).
    

```css
z-index: 5;
```

* * *

🔄 **5\. Flexbox Layout**
-------------------------

### 🔹 `display: flex`

```css
display: flex;
```

### 🔹 `justify-content`

*   **Horizontal alignment**.
    

```css
justify-content: center;
justify-content: space-between;
```

### 🔹 `align-items`

*   **Vertical alignment**.
    

```css
align-items: center;
```

* * *

🌐 **6\. Responsive Design**
----------------------------

### 🔹 `@media`

*   **Applies CSS conditionally** based on screen size.
    

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

* * *

🎯 **7\. Transformation & Animation**
-------------------------------------

### 🔹 `transform`

*   **Rotates, scales, moves elements**.
    

```css
transform: rotate(45deg);
transform: scale(1.2);
```

* * *

### 🔹 `transition`

*   **Animates changes** in property values.
    

```css
transition: all 0.3s ease-in-out;
```

* * *

### 🔹 `animation` + `@keyframes`

```css
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

div {
  animation: bounce 1s infinite;
}
```

* * *

🛡 **8\. Box Behavior**
-----------------------

### 🔹 `box-sizing`

*   **Controls how width/height is calculated**.
    

```css
box-sizing: content-box; /* default */
box-sizing: border-box;  /* recommended */
```

* * *

### 🔹 `overflow`

*   **How content is handled when too big**.
    

```css
overflow: hidden;
overflow: scroll;
overflow: auto;
```

* * *

🧠 Quick Summary Table
----------------------

| Property | Example Value | What It Does |
| --- | --- | --- |
| `margin` | `10px` | Outer spacing |
| `padding` | `15px` | Inner spacing |
| `border` | `1px solid black` | Adds a border |
| `color` | `#333` | Text color |
| `background-color` | `lightgray` | Background color |
| `font-size` | `16px` | Text size |
| `display` | `flex` | Display mode |
| `position` | `relative` | Layout position |
| `transform` | `scale(1.2)` | Transform effect |
| `transition` | `0.3s ease-in-out` | Smooth animation |

* * *

Would you like this in:

*   ✅ `.html` demo file
    
*   ✅ `.css` cheat sheet
    
*   ✅ Printable `.pdf`
    

Let me know your preference and I’ll generate it!

## Response:
Here’s a **live working HTML + CSS demo** that shows **how each property behaves visually**, along with example elements and styles.

* * *

### ✅ **Complete Demo with All CSS3 Common Properties**

> You can copy-paste this into any `.html` file and open it in a browser to see the effects in action.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CSS3 Common Properties Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f5f5f5;
    }

    .section {
      margin-bottom: 40px;
      padding: 20px;
      border: 2px solid #ccc;
      background-color: white;
      border-radius: 10px;
    }

    .box-model {
      margin: 20px;
      padding: 20px;
      border: 2px dashed #888;
      background-color: #e3f2fd;
    }

    .text-style {
      font-family: 'Georgia', serif;
      font-size: 20px;
      font-weight: bold;
      color: darkgreen;
      text-align: center;
      text-decoration: underline;
      line-height: 1.8;
    }

    .display-demo {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      background-color: #e8f5e9;
    }

    .display-demo div {
      width: 100px;
      height: 100px;
      background-color: #4db6ac;
      color: white;
      text-align: center;
      line-height: 100px;
      margin: 5px;
      border-radius: 8px;
    }

    .position-box {
      position: relative;
      height: 150px;
      background: #fff3e0;
      margin-top: 20px;
    }

    .positioned {
      position: absolute;
      top: 20px;
      left: 30px;
      background: #ffb74d;
      padding: 10px;
      color: white;
    }

    .transform-box {
      margin-top: 20px;
      width: 100px;
      height: 100px;
      background-color: #ba68c8;
      color: white;
      text-align: center;
      line-height: 100px;
      transform: rotate(15deg);
      transition: transform 0.5s ease;
    }

    .transform-box:hover {
      transform: rotate(0deg) scale(1.2);
    }

    .animation-box {
      width: 80px;
      height: 80px;
      background-color: #f06292;
      animation: bounce 1s infinite;
      border-radius: 50%;
      margin-top: 20px;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    .box-sizing-demo {
      width: 200px;
      padding: 20px;
      border: 5px solid red;
      box-sizing: border-box;
      background-color: #ffe082;
      margin-top: 20px;
    }

    .overflow-demo {
      width: 200px;
      height: 100px;
      overflow: auto;
      background-color: #e0f7fa;
      padding: 10px;
      margin-top: 20px;
    }

    .media-demo {
      background: #c5cae9;
      padding: 20px;
      color: #1a237e;
    }

    @media (max-width: 600px) {
      .media-demo {
        background: #ffccbc;
        color: #bf360c;
        font-size: 20px;
      }
    }

  </style>
</head>
<body>

  <h1>🔧 CSS3 Common Properties Demo</h1>

  <div class="section box-model">
    <h2>1. Box Model</h2>
    <p>This box has <strong>margin, padding, and border</strong>.</p>
  </div>

  <div class="section text-style">
    <h2>2. Font & Text</h2>
    <p>Styled with font-size, weight, line-height, text-align, and text-decoration.</p>
  </div>

  <div class="section display-demo">
    <div>Box 1</div>
    <div>Box 2</div>
    <div>Box 3</div>
  </div>

  <div class="section position-box">
    <h2>3. Positioning</h2>
    <div class="positioned">I'm positioned absolutely inside relative box</div>
  </div>

  <div class="section transform-box">
    4. Hover Me!
  </div>

  <div class="section animation-box"></div>
  <p>5. Animation using <code>@keyframes</code></p>

  <div class="section box-sizing-demo">
    6. Box Sizing: Border-box<br>
    Width includes padding & border
  </div>

  <div class="section overflow-demo">
    <p>
      7. Overflow demo. This box has fixed height and scrolls when content is too long.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pharetra sapien, at lacinia ex.
    </p>
  </div>

  <div class="section media-demo">
    <h2>8. Responsive Media Query</h2>
    <p>Resize the browser window to see the background and font change!</p>
  </div>

</body>
</html>
```

* * *

### 🔍 Features Included in This Demo:

| Feature | Example Element |
| --- | --- |
| Box model | `.box-model` |
| Text styles | `.text-style` |
| Display: Flex | `.display-demo` |
| Position (absolute) | `.positioned` |
| Transform + Hover | `.transform-box` |
| Animation + Keyframes | `.animation-box` |
| Box Sizing | `.box-sizing-demo` |
| Overflow Scroll | `.overflow-demo` |
| Media Queries | `.media-demo` |

* * *
