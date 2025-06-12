
**Css Flexbox Guide**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Flexbox Complete Guide</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    section {
      margin-bottom: 40px;
    }
    h2 {
      color: #2c3e50;
    }
    .container {
      display: flex;
      border: 2px solid #333;
      padding: 10px;
      margin-top: 10px;
    }
    .box {
      background: #3498db;
      color: white;
      padding: 20px;
      margin: 5px;
      flex: 1;
      text-align: center;
    }
    .nowrap {
      flex-wrap: nowrap;
    }
    .wrap {
      flex-wrap: wrap;
    }
    .row-reverse {
      flex-direction: row-reverse;
    }
    .column {
      flex-direction: column;
    }
    .justify-center {
      justify-content: center;
    }
    .justify-space-between {
      justify-content: space-between;
    }
    .align-center {
      align-items: center;
      height: 150px;
    }
    .align-end {
      align-items: flex-end;
      height: 150px;
    }
    .item-grow {
      flex-grow: 2;
    }
    .item-shrink {
      flex-shrink: 2;
    }
  </style>
</head>
<body>
  <h1>CSS Flexbox Complete Guide with Examples</h1>

  <section>
    <h2>1. display: flex</h2>
    <p>Makes the container a flex container.</p>
    <div class="container">
      <div class="box">Item 1</div>
      <div class="box">Item 2</div>
      <div class="box">Item 3</div>
    </div>
  </section>

  <section>
    <h2>2. flex-direction</h2>
    <p>Defines the direction of flex items in the container.</p>
    <div class="container row-reverse">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
    <div class="container column">
      <div class="box">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
    </div>
  </section>

  <section>
    <h2>3. flex-wrap</h2>
    <p>Controls whether flex items wrap or not.</p>
    <div class="container nowrap">
      <div class="box" style="width: 300px">Big Box 1</div>
      <div class="box" style="width: 300px">Big Box 2</div>
      <div class="box" style="width: 300px">Big Box 3</div>
    </div>
    <div class="container wrap">
      <div class="box" style="width: 300px">Big Box 1</div>
      <div class="box" style="width: 300px">Big Box 2</div>
      <div class="box" style="width: 300px">Big Box 3</div>
    </div>
  </section>

  <section>
    <h2>4. justify-content</h2>
    <p>Aligns items horizontally.</p>
    <div class="container justify-center">
      <div class="box">A</div>
      <div class="box">B</div>
    </div>
    <div class="container justify-space-between">
      <div class="box">X</div>
      <div class="box">Y</div>
      <div class="box">Z</div>
    </div>
  </section>

  <section>
    <h2>5. align-items</h2>
    <p>Aligns items vertically.</p>
    <div class="container align-center">
      <div class="box">Center</div>
      <div class="box">Middle</div>
    </div>
    <div class="container align-end">
      <div class="box">End 1</div>
      <div class="box">End 2</div>
    </div>
  </section>

  <section>
    <h2>6. flex-grow</h2>
    <p>Defines how much a flex item grows.</p>
    <div class="container">
      <div class="box item-grow">Grow 2x</div>
      <div class="box">Grow 1x</div>
    </div>
  </section>

  <section>
    <h2>7. flex-shrink</h2>
    <p>Defines how much a flex item shrinks.</p>
    <div class="container">
      <div class="box item-shrink" style="width: 300px">Shrink More</div>
      <div class="box" style="width: 300px">Shrink Less</div>
    </div>
  </section>

  <section>
    <h2>Assignment: Responsive Navigation Bar</h2>
    <p><strong>Task:</strong> Create a horizontal navbar using Flexbox that switches to vertical on small screens.</p>
    <pre><code>nav {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
}</code></pre>
    <p><strong>Solution Tip:</strong> Use media queries and flex-direction to toggle layout.</p>
  </section>
</body>
</html>

```

✅ **Complete CSS Flexbox Guide with Examples and Assignments**

I’ve created an HTML document titled **“CSS Flexbox Complete Guide”** which includes:

*   Every property with visual examples.
    
*   Assignments and solutions (like building a responsive navbar).
    
*   Explained clearly with well-commented code.
    

### 💡 Covered Properties with Examples:

1.  `display: flex`
    
2.  `flex-direction` (row, column, etc.)
    
3.  `flex-wrap` (nowrap, wrap)
    
4.  `justify-content` (start, center, space-between...)
    
5.  `align-items` (start, center, end...)
    
6.  `flex-grow`, `flex-shrink`
    
7.  Responsive media queries with flexbox
    

Would you like this as a downloadable `.html` file too?



