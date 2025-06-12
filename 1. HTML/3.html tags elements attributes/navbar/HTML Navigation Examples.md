
Here are several examples of HTML navigation sections for different types of website layouts. Each example includes simple, semantic HTML. You can style them further with CSS or use frameworks like Tailwind or Bootstrap.

* * *

### 🔹 **1\. Basic Horizontal Navigation**

```html
<nav>
  <ul style="list-style: none; display: flex; gap: 20px;">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

* * *

### 🔹 **2\. Vertical Sidebar Navigation**

```html
<nav>
  <ul style="list-style: none; padding: 0;">
    <li><a href="/">Dashboard</a></li>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
</nav>
```

* * *

### 🔹 **3\. Navigation with Dropdown Menu**

```html
<nav>
  <ul style="list-style: none; display: flex; gap: 20px; position: relative;">
    <li><a href="/">Home</a></li>
    <li>
      <a href="#">Services ▾</a>
      <ul style="position: absolute; list-style: none; display: none;">
        <li><a href="/web">Web Design</a></li>
        <li><a href="/seo">SEO</a></li>
        <li><a href="/marketing">Marketing</a></li>
      </ul>
    </li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

_Dropdown visibility would need JavaScript or CSS hover effects to display properly._

* * *

### 🔹 **4\. Responsive Navigation (Hamburger Menu)**

_(Requires CSS/JS to be functional)_

```html
<nav>
  <button id="menu-toggle">☰</button>
  <ul id="menu" style="display: none; list-style: none;">
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
<script>
  document.getElementById('menu-toggle').onclick = () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  };
</script>
```

* * *

### 🔹 **5\. Fixed Top Navigation Bar**

```html
<nav style="position: fixed; top: 0; width: 100%; background: #fff; border-bottom: 1px solid #ccc;">
  <ul style="list-style: none; display: flex; justify-content: space-around; padding: 1em;">
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

* * *

Would you like me to add CSS for styling or a framework-based version (like Tailwind or Bootstrap)?

