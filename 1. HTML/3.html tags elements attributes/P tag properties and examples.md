
The `<p>` tag in HTML defines a **paragraph**. While it has no special attributes that are unique to it beyond global HTML attributes, the **visual appearance** and behavior of `<p>` elements are mainly controlled using **CSS properties**.

Here’s a complete list of commonly used **HTML and CSS properties** applicable to the `<p>` tag, including values and examples:

* * *

✅ **HTML Global Attributes (Applicable to `<p>` tag)**
------------------------------------------------------

These are universal across most HTML elements.

| **Attribute** | **Values** | **Description** |
| --- | --- | --- |
| `id` | Any unique string | Assigns a unique ID. |
| `class` | Space-separated classes | Applies CSS classes. |
| `style` | CSS inline styles | Adds inline CSS. |
| `title` | Text | Tooltip on hover. |
| `hidden` | `hidden` | Hides the element. |
| `dir` | `ltr`, `rtl`, `auto` | Text direction. |
| `lang` | Language code (e.g., `en`) | Sets the language. |
| `tabindex` | Number | Tab order. |
| `contenteditable` | `true`, `false` | Makes content editable. |

**Example:**

```html
<p id="intro" class="lead" lang="en" title="This is a paragraph" style="color:blue;">
  Hello, world!
</p>
```

* * *

🎨 **CSS Properties for `<p>` (Most Common)**
---------------------------------------------

### 📌 **Text & Font**

| **Property** | **Example Value** | **What It Does** |
| --- | --- | --- |
| `color` | `red`, `#333`, `rgb(0,0,0)` | Text color. |
| `font-size` | `16px`, `1.2em`, `large` | Size of text. |
| `font-family` | `"Arial", sans-serif` | Font style. |
| `font-weight` | `normal`, `bold`, `600` | Thickness of text. |
| `font-style` | `normal`, `italic` | Italicize text. |
| `text-align` | `left`, `center`, `right` | Horizontal alignment. |
| `text-decoration` | `none`, `underline` | Decoration line (like underline). |
| `letter-spacing` | `2px`, `normal` | Space between letters. |
| `word-spacing` | `5px` | Space between words. |
| `line-height` | `1.5`, `150%`, `20px` | Space between lines. |
| `text-transform` | `uppercase`, `lowercase` | Changes letter casing. |

### 📦 **Box Model**

| **Property** | **Example Value** | **What It Does** |
| --- | --- | --- |
| `margin` | `10px`, `0 auto` | Space outside the element. |
| `padding` | `10px 20px` | Space inside the element. |
| `border` | `1px solid black` | Border around the element. |
| `width` | `100%`, `200px` | Element’s width. |
| `height` | `auto`, `50px` | Element’s height. |
| `background` | `#f0f0f0` | Background color/image. |

### 📐 **Positioning & Display**

| **Property** | **Example Value** | **What It Does** |
| --- | --- | --- |
| `display` | `block`, `inline`, `none` | Element display behavior. |
| `position` | `relative`, `absolute` | Positioning type. |
| `top`, `left` | `10px`, `5%` | Offset (with position). |
| `z-index` | `1`, `999` | Stacking order. |
| `float` | `left`, `right`, `none` | Floats the element. |
| `clear` | `both`, `left` | Clears floated elements. |

* * *

🧪 **Examples**
---------------

### 🔹 Basic Paragraph

```html
<p>This is a normal paragraph.</p>
```

### 🔹 Styled with CSS

```html
<p style="color: navy; font-size: 18px; line-height: 1.6; text-align: justify;">
  This paragraph is styled using inline CSS.
</p>
```

### 🔹 With Class

```html
<style>
  .highlight {
    background: #f9f9f9;
    border-left: 4px solid orange;
    padding: 10px;
  }
</style>

<p class="highlight">This is an important note.</p>
```

* * *

🔍 **Special Tips**
-------------------

*   By default, browsers add **margin-top and margin-bottom** to paragraphs — you can reset with `margin: 0`.
    
*   `<p>` **cannot contain block-level elements** like `<div>`, `<section>`, etc. It will break your layout.
    
*   For responsive text, prefer `em`, `rem`, or `%` for sizing.
    

* * *

Would you like this as a downloadable `.html` or `.pdf` file with live code examples too?

