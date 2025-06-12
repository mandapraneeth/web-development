
Here's a **complete guide to the `<button>` element in HTML**, including **all standard attributes**, **values**, **explanations**, and **examples**:

* * *

🔘 `<button>` Element Overview
------------------------------

The `<button>` element defines a clickable button, used to submit forms or trigger custom JavaScript.

### ✅ Basic Syntax:

```html
<button>Click Me</button>
```

* * *

🔧 Global Attributes (Common to all HTML elements)
--------------------------------------------------

These can be used with `<button>`:

| Attribute | Description |
| --- | --- |
| `id` | Unique identifier for the button |
| `class` | CSS class(es) for styling |
| `style` | Inline CSS styles |
| `title` | Tooltip text on hover |
| `hidden` | Hides the button |
| `tabindex` | Specifies tab order |
| `accesskey` | Keyboard shortcut |
| `draggable` | Allows drag behavior |
| `contenteditable` | Makes button content editable |

```html
<button id="submitBtn" class="btn" style="color: red;" title="Submit form">Submit</button>
```

* * *

🧩 Button-Specific Attributes
-----------------------------

### 1\. `type`

Specifies the button type.

| Value | Description |
| --- | --- |
| `submit` | Default. Submits form data |
| `reset` | Resets form inputs |
| `button` | Just a clickable button, no default action |

**Example:**

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Clicked!')">Click Me</button>
```

* * *

### 2\. `name`

Used to reference the button’s data when submitting a form.

```html
<button type="submit" name="saveBtn">Save</button>
```

* * *

### 3\. `value`

Defines the value sent to the server when the button is clicked (used in form submissions).

```html
<button type="submit" name="action" value="save">Save</button>
```

* * *

### 4\. `disabled`

Disables the button (grayed out and unclickable).

```html
<button disabled>Can't Click Me</button>
```

* * *

### 5\. `autofocus`

Automatically focuses the button when the page loads.

```html
<button autofocus>Start Here</button>
```

* * *

### 6\. `form`

Specifies which form the button belongs to (used if button is outside `<form>` tag).

```html
<form id="myForm">
  <!-- form fields -->
</form>

<button type="submit" form="myForm">Submit Form</button>
```

* * *

### 7\. `formaction`

Overrides form’s `action` attribute when the button is clicked.

```html
<form action="/default-handler">
  <button type="submit" formaction="/save">Save</button>
  <button type="submit" formaction="/delete">Delete</button>
</form>
```

* * *

### 8\. `formenctype`

Overrides form `enctype`. Used with `type="submit"`.

| Value |
| --- |
| `application/x-www-form-urlencoded` |
| `multipart/form-data` |
| `text/plain` |

```html
<button type="submit" formenctype="multipart/form-data">Upload</button>
```

* * *

### 9\. `formmethod`

Overrides the form's HTTP method.

| Value |
| --- |
| `get` |
| `post` |

```html
<button type="submit" formmethod="post">Send</button>
```

* * *

### 10\. `formtarget`

Specifies where to display the response after form submission.

| Value | Description |
| --- | --- |
| `_self` | Default, same window |
| `_blank` | New tab/window |
| `_parent` | Parent frame |
| `_top` | Full body of the window |

```html
<button type="submit" formtarget="_blank">Open in New Tab</button>
```

* * *

### 11\. `formnovalidate`

Skips form validation when the button is used to submit.

```html
<button type="submit" formnovalidate>Skip Validation</button>
```

* * *

🔤 Example with All Attributes
------------------------------

```html
<form id="loginForm" action="/submit" method="post">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  
  <button
    id="loginBtn"
    class="btn primary"
    type="submit"
    name="action"
    value="login"
    title="Login now"
    autofocus
    formaction="/custom-login"
    formmethod="post"
    formtarget="_self"
    formenctype="application/x-www-form-urlencoded"
    formnovalidate
  >
    Login
  </button>
</form>
```

* * *

📌 Notes
--------

*   `<input type="button">`, `<input type="submit">`, and `<button>` can behave similarly, but `<button>` supports rich HTML inside (like icons, spans).
    
*   Avoid using `<button>` with just text inside forms without `type="button"`, as the default is `submit`.
    

* * *

Would you like a **downloadable `.html` file** or **practice exercises** with buttons as well?

## Response:
To **center a `<button>`** inside a `<div>` using **inline CSS**, and also add **arrows** and **different shapes**, here’s a complete breakdown:

* * *

✅ Center Button in `<div>` Using Inline CSS
-------------------------------------------

### 🔹 Horizontally & Vertically Centered Button (inline CSS)

```html
<div style="height: 300px; display: flex; justify-content: center; align-items: center; background: #f0f0f0;">
  <button style="padding: 12px 24px; font-size: 16px;">Centered Button</button>
</div>
```

*   `display: flex` + `justify-content: center` → centers horizontally
    
*   `align-items: center` → centers vertically
    
*   `height` is needed to vertically center within the div
    

* * *

🔽 Add Arrows to Button
-----------------------

Use **HTML entities** or **Unicode**:

### ➤ Arrows Examples:

```html
<!-- Right Arrow -->
<button style="padding: 12px 24px;">Next ➡️</button>

<!-- Left Arrow -->
<button style="padding: 12px 24px;">⬅️ Back</button>

<!-- Down Arrow -->
<button style="padding: 12px 24px;">More ⬇️</button>

<!-- Up Arrow -->
<button style="padding: 12px 24px;">Top ⬆️</button>
```

Or use **Font Awesome icons** (requires including Font Awesome CDN):

```html
<!-- Font Awesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Button with icon -->
<button style="padding: 10px 20px;">
  Next <i class="fas fa-arrow-right"></i>
</button>
```

* * *

🔷 Button Shapes with Inline CSS
--------------------------------

### 1\. 🟪 **Rectangle** (default)

```html
<button style="padding: 10px 20px;">Rectangle</button>
```

* * *

### 2\. 🟡 **Rounded Corners**

```html
<button style="padding: 10px 20px; border-radius: 12px;">Rounded</button>
```

* * *

### 3\. 🟠 **Pill Shape**

```html
<button style="padding: 10px 30px; border-radius: 50px;">Pill</button>
```

* * *

### 4\. ⚫ **Circle (icon button)**

```html
<button style="width: 50px; height: 50px; border-radius: 50%; font-size: 18px;">🔔</button>
```

* * *

### 🎯 Full Example: Centered Pill Button with Arrow

```html
<div style="height: 200px; display: flex; justify-content: center; align-items: center;">
  <button style="padding: 12px 30px; font-size: 16px; border-radius: 50px; background-color: #28a745; color: white; border: none;">
    Get Started ➡️
  </button>
</div>
```

* * *

Would you like this as a downloadable `.html` file with all variations pre-written?

## Response:
Absolutely! The entity `&#8594;` is → (Right Arrow), which is **thin** by default.

For **bolder or styled arrows**, here are options you can use — all are **HTML-safe** and can be copied directly into buttons or anywhere in your HTML:

* * *

🔸 Bold or Styled HTML Arrow Entities
-------------------------------------

| Arrow | Entity Code | Description |
| --- | --- | --- |
| ➡️ | `&#x27A1;` | **Black Rightwards Arrow** (bold, commonly used) |
| ⬅️ | `&#x2B05;` | **Black Leftwards Arrow** |
| ⬆️ | `&#x2B06;` | **Black Upwards Arrow** |
| ⬇️ | `&#x2B07;` | **Black Downwards Arrow** |
| ⮕ | `&#x2B95;` | **Rightwards Arrow with Tail** |
| ⏩ | `&#x23E9;` | **Fast-Forward Arrow** |
| ⏭ | `&#x23ED;` | **Next Track Arrow** |
| 🔜 | `&#x1F51C;` | **Soon Arrow Icon (Text inside Arrow)** |
| ➤ | `&#x27A4;` | **Black Right Arrowhead** |
| ➲ | `&#x27B2;` | **Curved Right Arrow** |
| ⇨ | `&#x21E8;` | **Rightwards White Arrow** (slightly thicker than default) |

* * *

🔹 Example in Button (inline CSS)
---------------------------------

```html
<button style="padding: 10px 20px; font-size: 16px;">
  Continue &#x27A1;
</button>
```

### You can try others like:

```html
<button>Back &#x2B05;</button>
<button>Submit &#x27A4;</button>
<button>Next &#x2B95;</button>
<button>Download &#x21E8;</button>
```

* * *

Would you like a ready-to-use HTML page with all these bold arrows in buttons?

## Response:
You're using `&#x279C;` → ➜ (**Heavy Round-Tipped Rightwards Arrow**), and you're looking for a **similar arrow with a longer tail**.

Here are the **closest Unicode arrows with a longer tail** or **more extended body**, suitable for buttons or UI:

* * *

🔸 Long-Tailed or Extended Arrows Similar to `&#x279C;`
-------------------------------------------------------

| Preview | Unicode | HTML Entity | Description |
| --- | --- | --- | --- |
| ⮕ | U+2B95 | `&#x2B95;` | **Rightwards Arrow with Tail** (✅ longer tail) |
| ➞ | U+279E | `&#x279E;` | **Three-Headed Right Arrow** |
| ➔ | U+2794 | `&#x2794;` | **Heavy Wide-Headed Right Arrow** |
| ⇨ | U+21E8 | `&#x21E8;` | **Rightwards White Arrow** (thin but long) |
| ⟶ | U+27F6 | `&#x27F6;` | **Long Rightwards Arrow** |
| ⟾ | U+27FE | `&#x27FE;` | **Long Rightwards Squiggle Arrow** |
| ⤏ | U+291F | `&#x291F;` | **Rightwards Arrow with Dotted Tail** |
| ⤑ | U+2911 | `&#x2911;` | **Right Arrow with Tail and Hook** |

* * *

✅ Best Long-Tailed Replacement for ➜ `&#x279C;`
-----------------------------------------------

### 🔹 Recommended:

```html
<button style="font-size: 18px;">Continue &#x2B95;</button> <!-- ⮕ -->
```

### 🔹 Alternative:

```html
<button style="font-size: 18px;">Continue &#x27F6;</button> <!-- ⟶ -->
```

* * *

✨ Preview Buttons
-----------------

```html
<button style="padding: 10px 20px; font-size: 18px;">Next ⮕</button> <!-- &#x2B95; -->
<button style="padding: 10px 20px; font-size: 18px;">Continue ⟶</button> <!-- &#x27F6; -->
<button style="padding: 10px 20px; font-size: 18px;">Submit ⇨</button> <!-- &#x21E8; -->
```
