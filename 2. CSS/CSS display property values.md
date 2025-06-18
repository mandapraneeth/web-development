# CSS display property values

The `display` property in CSS is one of the most important layout properties. It determines **how an element is displayed** in the document flow.

* * *

### ✅ **List of All Possible Values for `display` Property (with Categories)**

* * *

🔹 1. **Normal Flow Layout Values**
-----------------------------------

| Value | Description |
| --- | --- |
| `block` | Element behaves like a block (starts on a new line, takes full width). |
| `inline` | Element behaves like inline (doesn’t start on a new line, only as wide as content). |
| `inline-block` | Like inline, but allows setting width/height. |
| `none` | Completely removes the element from the document flow. |

* * *

🔹 2. **Flexbox Values**
------------------------

| Value | Description |
| --- | --- |
| `flex` | Enables Flexbox layout. Parent becomes a flex container. |
| `inline-flex` | Flex container but behaves like inline element. |

* * *

🔹 3. **Grid Layout Values**
----------------------------

| Value | Description |
| --- | --- |
| `grid` | Enables CSS Grid layout. Parent becomes grid container. |
| `inline-grid` | Grid container but behaves like inline element. |
| `subgrid` | Child item inherits the grid from its parent. |

* * *

🔹 4. **Table Layout Values (Mimics `<table>` behavior)**
---------------------------------------------------------

| Value | Description |
| --- | --- |
| `table` | Acts like a `<table>` element. |
| `inline-table` | Acts like a `<table>` but inline. |
| `table-row-group` | Mimics `<tbody>`. |
| `table-header-group` | Mimics `<thead>`. |
| `table-footer-group` | Mimics `<tfoot>`. |
| `table-row` | Mimics `<tr>`. |
| `table-cell` | Mimics `<td>`. |
| `table-column-group` | Mimics `<colgroup>`. |
| `table-column` | Mimics `<col>`. |
| `table-caption` | Mimics `<caption>`. |

* * *

🔹 5. **Box Values (Rare/Experimental)**
----------------------------------------

| Value | Description |
| --- | --- |
| `contents` | The element box is removed, but children stay visible in normal flow. |
| `list-item` | Acts like a `<li>`, shows list marker. |
| `run-in` | Rarely used and not well supported (acts like inline or block depending on context). |

* * *

🔹 6. **Multi-keyword Display Values (Level 3 & 4 Spec)**
---------------------------------------------------------

These allow combining outer and inner display types:

| Value | Description |
| --- | --- |
| `block flow` | Default for block-level elements. |
| `inline flow` | Default for inline elements. |
| `block flex` | Block-level flex container. |
| `inline flex` | Inline-level flex container. |
| `block grid` | Block-level grid container. |
| `inline grid` | Inline-level grid container. |
| `block flow-root` | Like `block` with new block formatting context (BFC). |

> These are more formally defined in CSS Display Level 3 and 4.

* * *

🔹 7. **Global Values (Apply to all properties)**
-------------------------------------------------

| Value | Description |
| --- | --- |
| `inherit` | Inherits from parent. |
| `initial` | Resets to default value. |
| `unset` | Acts as `inherit` if possible, otherwise `initial`. |
| `revert` | Reverts to the user-agent or user-defined stylesheet. |

* * *

### ✅ Summary Table

| Category | Values |
| --- | --- |
| Normal Flow | `block`, `inline`, `inline-block`, `none` |
| Flexbox | `flex`, `inline-flex` |
| Grid | `grid`, `inline-grid`, `subgrid` |
| Table | `table`, `inline-table`, `table-row`, etc. |
| Box-related | `contents`, `list-item`, `run-in` |
| Multi-keyword | `block flow`, `inline flex`, etc. |
| Global | `inherit`, `initial`, `unset`, `revert` |

* * *

Would you like a **code example showing all these in use** or a **downloadable cheat sheet**?

## Response:
Here’s a **comprehensive list of `display` property sub-attributes (i.e., element-specific roles)** for each main display type, with **examples** and **what elements they apply to**.

* * *

🔷 1. `display: block`
----------------------

*   **Subtypes**: None, it's a primary type.
    
*   **Elements it applies to**: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<header>`, etc.
    

**Example:**

```html
<div style="display: block;">This is a block element</div>
```

* * *

🔷 2. `display: inline`
-----------------------

*   **Subtypes**: None
    
*   **Elements it applies to**: `<span>`, `<a>`, `<strong>`, `<em>`, etc.
    

**Example:**

```html
<span style="display: inline;">This is inline</span>
```

* * *

🔷 3. `display: inline-block`
-----------------------------

*   **Subtypes**: None
    
*   **Use case**: Behaves inline but can set width/height
    

**Example:**

```html
<div style="display: inline-block; width: 200px;">Inline block</div>
```

* * *

🔷 4. `display: none`
---------------------

*   **Subtypes**: None
    
*   **Use case**: Hides element from layout and visibility
    

**Example:**

```html
<p style="display: none;">This won't appear</p>
```

* * *

🔷 5. `display: flex` / `inline-flex`
-------------------------------------

**Sub-Attributes (Used with Flex containers):**

| Property | Description |
| --- | --- |
| `flex-direction` | row |
| `flex-wrap` | nowrap |
| `justify-content` | flex-start |
| `align-items` | stretch |
| `align-content` | stretch |

**Example:**

```html
<div style="display: flex; flex-direction: row; justify-content: space-between;">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

* * *

🔷 6. `display: grid` / `inline-grid`
-------------------------------------

**Sub-Attributes (Used with Grid containers):**

| Property | Description |
| --- | --- |
| `grid-template-columns` | Define columns |
| `grid-template-rows` | Define rows |
| `grid-column-gap` | Gap between columns |
| `grid-row-gap` | Gap between rows |
| `grid-template-areas` | Named grid areas |
| `grid-auto-rows` | Size of implicitly created rows |
| `grid-auto-columns` | Size of implicitly created columns |
| `justify-items`, `align-items` | Align items inside cells |

**Example:**

```html
<div style="display: grid; grid-template-columns: 1fr 2fr;">
  <div>Item A</div>
  <div>Item B</div>
</div>
```

* * *

🔷 7. `display: table` and Related Table Roles
----------------------------------------------

| Display Value | Resembles HTML tag |
| --- | --- |
| `table` | `<table>` |
| `inline-table` | Inline `<table>` |
| `table-row` | `<tr>` |
| `table-cell` | `<td>` |
| `table-column` | `<col>` |
| `table-column-group` | `<colgroup>` |
| `table-header-group` | `<thead>` |
| `table-footer-group` | `<tfoot>` |
| `table-row-group` | `<tbody>` |
| `table-caption` | `<caption>` |

**Example:**

```html
<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell;">Cell 1</div>
    <div style="display: table-cell;">Cell 2</div>
  </div>
</div>
```

* * *

🔷 8. `display: list-item`
--------------------------

*   Behaves like an `<li>`, shows bullet/marker  
    **Used for**: custom elements with list behavior
    

**Example:**

```html
<div style="display: list-item; list-style: disc; margin-left: 20px;">Custom List</div>
```

* * *

🔷 9. `display: contents`
-------------------------

*   Removes the box of the element, keeping only the children in the DOM layout.
    

**Example:**

```html
<div style="display: contents;">
  <span>This span is now directly part of the DOM flow.</span>
</div>
```

* * *

🔷 10. `display: run-in`
------------------------

*   Rare and inconsistent. Tries to merge element into next block-level element.
    

**Example:**

```html
<h2 style="display: run-in;">Heading</h2>
<p>Paragraph</p>
```

* * *

🔷 11. Multi-keyword display values
-----------------------------------

Defined as `display: <outside> <inside>`  
Examples:

*   `display: block flow` = normal block
    
*   `display: inline flex` = inline-level flex container
    
*   `display: block grid` = block-level grid
    

* * *

🔷 12. Global Values
--------------------

| Value | Description |
| --- | --- |
| `inherit` | Inherits from parent |
| `initial` | Resets to default value |
| `unset` | `inherit` if possible, else `initial` |
| `revert` | Reverts to browser/user stylesheet |

* * *

### ✅ Do you want a downloadable **HTML cheat sheet** with all of these and examples in one file?

Or I can generate a **visual guide with live boxes** to help you understand each display in action.

## Response:
Absolutely! Here's a **complete breakdown** of all CSS `display: flex` and `display: grid` **properties** with **descriptions** and **HTML+CSS examples** for each. This is perfect for mastering layout techniques.

* * *

✅ **1\. FLEXBOX: `display: flex`**
----------------------------------

### 🔷 Parent (Flex Container) Properties:

| Property | Values | Description |
| --- | --- | --- |
| `display` | `flex`, `inline-flex` | Makes element a flex container |
| `flex-direction` | `row` (default), `row-reverse`, `column`, `column-reverse` | Main axis direction |
| `flex-wrap` | `nowrap` (default), `wrap`, `wrap-reverse` | Wraps items if needed |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` | Aligns items horizontally |
| `align-items` | `stretch`, `center`, `flex-start`, `flex-end`, `baseline` | Aligns items vertically |
| `align-content` | `stretch`, `center`, `space-between`, `space-around`, `flex-start`, `flex-end` | Aligns rows when wrapped |

### 🔷 Child (Flex Item) Properties:

| Property | Values | Description |
| --- | --- | --- |
| `order` | Number | Controls item order |
| `flex-grow` | Number | How much item grows |
| `flex-shrink` | Number | How much item shrinks |
| `flex-basis` | Length/auto | Initial size |
| `flex` | shorthand | `flex-grow flex-shrink flex-basis` |
| `align-self` | `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch` | Overrides `align-items` |

* * *

### ✅ Flexbox Code Example (All Properties)

```html
<style>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  gap: 10px;
  height: 300px;
  border: 2px solid #333;
}

.flex-item {
  flex: 1 1 100px;
  align-self: stretch;
  background: #4fc3f7;
  color: white;
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>

<div class="flex-container">
  <div class="flex-item" style="order: 2;">Item 1</div>
  <div class="flex-item" style="order: 1;">Item 2</div>
  <div class="flex-item" style="order: 3;">Item 3</div>
</div>
```

* * *

✅ **2\. CSS GRID: `display: grid`**
-----------------------------------

### 🔷 Parent (Grid Container) Properties:

| Property | Description |
| --- | --- |
| `display: grid / inline-grid` | Makes element a grid container |
| `grid-template-columns` | Defines column structure |
| `grid-template-rows` | Defines row structure |
| `grid-template-areas` | Creates named layout areas |
| `gap`, `row-gap`, `column-gap` | Spacing between grid tracks |
| `justify-items` | Aligns items horizontally |
| `align-items` | Aligns items vertically |
| `justify-content` | Aligns grid horizontally |
| `align-content` | Aligns grid vertically |
| `grid-auto-rows` / `grid-auto-columns` | Size of implicitly created rows/cols |

### 🔷 Child (Grid Item) Properties:

| Property | Description |
| --- | --- |
| `grid-column`, `grid-row` | Shorthand for start / end lines |
| `grid-area` | Assign to named area |
| `justify-self`, `align-self` | Align individual items |

* * *

### ✅ Grid Code Example (All Properties)

```html
<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "header header header"
    "sidebar content content";
  gap: 10px;
  justify-items: center;
  align-items: center;
  height: 300px;
  border: 2px solid #333;
}

.grid-item {
  background: #66bb6a;
  color: white;
  text-align: center;
  padding: 20px;
  font-weight: bold;
}

.header { grid-area: header; background: #42a5f5; }
.sidebar { grid-area: sidebar; background: #ab47bc; }
.content { grid-area: content; background: #ffa726; }
</style>

<div class="grid-container">
  <div class="grid-item header">Header</div>
  <div class="grid-item sidebar">Sidebar</div>
  <div class="grid-item content">Content</div>
</div>
```

* * *

🧠 Summary Comparison:
----------------------

| Feature | Flexbox | Grid |
| --- | --- | --- |
| Axis | One-dimensional (row or column) | Two-dimensional (rows + columns) |
| Layout Control | Good for linear layouts | Good for structured, area-based layout |
| Best For | Toolbars, navs, alignment | Page layouts, dashboards, forms |

* * *

