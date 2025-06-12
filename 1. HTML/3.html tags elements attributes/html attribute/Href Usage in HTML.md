
The `href` attribute stands for **"Hypertext REFerence"** and is used in HTML to specify the **URL** or **path** to a resource (such as a webpage, file, or email address) that an element links to.

### 🔹 Commonly Used With:

The most common use of `href` is in the `<a>` (anchor) tag to create hyperlinks.

* * *

### ✅ **Basic Syntax**

```html
<a href="https://example.com">Visit Example</a>
```

🡺 Clicking the text "Visit Example" takes you to [https://example.com](https://example.com).

* * *

### 🔹 Examples of `href` Usage

| Use Case | Example Code |
| --- | --- |
| Link to external website | `<a href="https://google.com">Google</a>` |
| Link to internal page | `<a href="/about.html">About Us</a>` |
| Link to section on the same page | `<a href="#contact">Go to Contact</a>` |
| Link to email | `<a href="mailto:info@example.com">Email Us</a>` |
| Link to phone number | `<a href="tel:+911234567890">Call Us</a>` |
| Downloadable file link | `<a href="files/brochure.pdf" download>Download Brochure</a>` |
| JavaScript action (not ideal) | `<a href="javascript:void(0)">Do Nothing</a>` |

* * *

### 🔹 Notes:

*   If `href` is **missing**, the `<a>` tag is **not clickable**.
    
*   `href="#"` is often used as a placeholder (not recommended for accessibility).
    
*   `target="_blank"` can be added to open the link in a **new tab**.
    

```html
<a href="https://example.com" target="_blank">Open in New Tab</a>
```

* * *



