# Img Tag Attributes

**User:** Anonymous (dream.praneeth72@gmail.com)  
**Created:** 6/18/2025 14:00  
**Updated:** 6/18/2025 14:07  
**Exported:** 6/18/2025 14:09  

## Response:
The HTML `<img>` tag is used to embed images in a webpage. It has several **attributes (options/properties)** that control its behavior, appearance, and accessibility.

* * *

### ✅ Basic Attributes of `<img>`

| Attribute | Description |
| --- | --- |
| `src` | The path (URL) to the image file (required). |
| `alt` | Alternate text displayed if the image fails to load (for accessibility & SEO). |
| `width` | Sets the width of the image (in pixels or percentage). |
| `height` | Sets the height of the image (in pixels or percentage). |
| `title` | Tooltip text when hovering over the image. |
| `loading` | Lazy-load behavior (`lazy`, `eager`, or `auto`). |
| `referrerpolicy` | Controls referrer info sent when fetching the image. |
| `crossorigin` | Handles CORS settings (`anonymous`, `use-credentials`). |
| `usemap` | Refers to a `<map>` element for image maps. |
| `decoding` | Suggests how the browser decodes the image (`sync`, `async`, `auto`). |
| `sizes` | Specifies image display size for responsive images (used with `srcset`). |
| `srcset` | Provides multiple image sources for different screen resolutions. |
| `ismap` | Boolean attribute; marks the image as a server-side image map. |

* * *

### 💡 Common Example

```html
<img
  src="image.jpg"
  alt="A scenic mountain view"
  width="300"
  height="200"
  loading="lazy"
  title="Click to enlarge"
/>
```

* * *

### 🧠 Responsive Image Example (with `srcset`)

```html
<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
  alt="A responsive image example"
/>
```

* * *

### 📝 Notes

*   If you use **`width` and `height` together**, it keeps the image ratio fixed.
    
*   **`alt` is important** for SEO and screen readers.
    
*   Use **`loading="lazy"`** to defer off-screen images for better performance.
    
*   `srcset` + `sizes` is great for **responsive design**.
    

* * *

Would you like a downloadable cheat sheet or interactive example?

## Response:
Sure! Here's a **complete list** of `<img>` tag **attributes**, including basic, advanced, accessibility-related, and performance-related options — with detailed explanations and examples:

* * *

🔹 Basic Attributes
-------------------

| Attribute | Description | Example |
| --- | --- | --- |
| `src` | Source URL of the image (required). | `src="images/photo.jpg"` |
| `alt` | Alternate text if image can't be displayed (important for SEO & accessibility). | `alt="Company logo"` |
| `title` | Tooltip text on hover. | `title="Our Team"` |
| `width` | Width of image in px or %. | `width="400"` |
| `height` | Height of image in px or %. | `height="300"` |

* * *

🔸 Responsive & Performance Attributes
--------------------------------------

| Attribute | Description | Example |
| --- | --- | --- |
| `srcset` | List of image sources for different devices/resolutions. | `srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"` |
| `sizes` | Defines which image to use from `srcset` based on screen size. | `sizes="(max-width: 600px) 480px, 768px"` |
| `loading` | Defers image loading until needed. Improves speed. | `loading="lazy"` |
| `decoding` | Suggests how to decode the image: `async`, `sync`, or `auto`. | `decoding="async"` |
| `fetchpriority` | Suggests fetch priority: `high`, `low`, or `auto`. | `fetchpriority="high"` |

* * *

🔹 Cross-Origin & Security Attributes
-------------------------------------

| Attribute | Description | Example |
| --- | --- | --- |
| `crossorigin` | Handles CORS requests. Values: `anonymous`, `use-credentials`. | `crossorigin="anonymous"` |
| `referrerpolicy` | Controls referrer info sent with the image request. | `referrerpolicy="no-referrer"` |

* * *

🔸 Image Maps (Rare Use Case)
-----------------------------

| Attribute | Description | Example |
| --- | --- | --- |
| `usemap` | Links image to a client-side image map (`<map>`). | `usemap="#imagemap"` |
| `ismap` | Marks image as a server-side map (clickable coordinates sent to server). | `ismap` (used with `<a>`) |

* * *

🧑‍🦽 Accessibility Tips
------------------------

| Attribute | Usage |
| --- | --- |
| `alt` | Always use meaningful alternative text. |
| `role="presentation"` or `aria-hidden="true"` | For decorative images (ignored by screen readers). |
| `longdesc` (deprecated) | Older method for long description. Use captioning or `<figure>` now. |

* * *

🧪 Bonus HTML5 Usage with `<figure>` and `<figcaption>`
-------------------------------------------------------

```html
<figure>
  <img src="nature.jpg" alt="A peaceful forest trail" width="600" loading="lazy" />
  <figcaption>Morning walk in the forest.</figcaption>
</figure>
```

* * *

✅ Complete Example with Everything
----------------------------------

```html
<img
  src="image.jpg"
  alt="A man climbing a mountain"
  title="Mountain Adventure"
  width="600"
  height="400"
  loading="lazy"
  decoding="async"
  srcset="image-480.jpg 480w, image-800.jpg 800w"
  sizes="(max-width: 600px) 480px, 800px"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

* * *

Would you like this as a **downloadable HTML cheat sheet**, or do you want an **interactive demo page** to play with these attributes live?

## Response:
To make images **more responsive**, especially for modern, mobile-friendly web design, you can use **CSS** and **HTML techniques** together. Below are multiple approaches with **examples and explanations**.

* * *

✅ 1. **CSS-Only Responsive Image**
----------------------------------

### Method: `max-width: 100%; height: auto;`

```html
<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>

<img src="image.jpg" alt="Responsive Example" />
```

✅ **Effect**: The image **scales down** with its parent container but never stretches beyond its original size. Works in most layouts.

* * *

✅ 2. **Responsive with `width: 100%` in a Container**
-----------------------------------------------------

```html
<div style="width: 50%;">
  <img src="image.jpg" alt="Scaled" style="width: 100%; height: auto;" />
</div>
```

✅ **Effect**: The image fits **within 50%** of the screen/container width and scales accordingly.

* * *

✅ 3. **HTML5: `srcset` + `sizes` (Responsive Image for Devices)**
-----------------------------------------------------------------

```html
<img
  src="default.jpg"
  srcset="
    small.jpg 480w,
    medium.jpg 768w,
    large.jpg 1200w
  "
  sizes="(max-width: 600px) 480px, (max-width: 1024px) 768px, 1200px"
  alt="Responsive image"
/>
```

✅ **Effect**: Browser loads the right image **based on screen size and resolution**.

* * *

✅ 4. **Responsive Images in Grid or Flex Layouts**
--------------------------------------------------

```html
<div style="display: flex; gap: 20px;">
  <img src="1.jpg" style="flex: 1; max-width: 100%; height: auto;" alt="Img 1" />
  <img src="2.jpg" style="flex: 1; max-width: 100%; height: auto;" alt="Img 2" />
</div>
```

✅ **Effect**: Images scale **fluidly within a layout system**.

* * *

✅ 5. **Use `picture` Element for Format and Resolution Control**
----------------------------------------------------------------

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="fallback.jpg" alt="Responsive picture" style="width: 100%; height: auto;" />
</picture>
```

✅ **Effect**: Provides format fallback and device-optimized sources.

* * *

✅ 6. **Make Image a Full-Width Hero Section**
---------------------------------------------

```html
<style>
  .hero {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
  }
</style>

<img src="banner.jpg" alt="Hero Banner" class="hero" />
```

✅ **Effect**: Full screen-width image (banner style), cropped to fill container.

* * *

🧠 Tips for Best Results
------------------------

*   Use **WebP** or **AVIF** for performance.
    
*   Always include `alt` for accessibility and SEO.
    
*   Use **lazy loading**: `loading="lazy"` for better page speed.
    
*   Combine with **media queries** if needed for breakpoints.
    

* * *

Would you like a ready-made HTML template with all responsive image examples?

## Response:
Absolutely! Combining **responsive images** with **media queries** gives you full control over how images behave at different screen sizes.

* * *

✅ Why Use Media Queries?
------------------------

While attributes like `srcset` help with responsive images, **media queries** let you:

*   Change **image styles** (size, layout, shape) at breakpoints
    
*   Show/hide images based on screen width
    
*   Apply different **cropping, padding, margins, borders**, etc.
    

* * *

✅ Example: Media Queries for Image Responsiveness
-------------------------------------------------

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Image with Media Queries</title>
  <style>
    img.responsive {
      width: 100%;
      height: auto;
      border-radius: 0;
      transition: all 0.3s ease;
    }

    /* Small devices: phones */
    @media (max-width: 600px) {
      img.responsive {
        border-radius: 10px;
        padding: 10px;
      }
    }

    /* Medium devices: tablets */
    @media (min-width: 601px) and (max-width: 992px) {
      img.responsive {
        border-radius: 20px;
        padding: 20px;
      }
    }

    /* Large devices: desktops */
    @media (min-width: 993px) {
      img.responsive {
        border-radius: 30px;
        padding: 30px;
      }
    }
  </style>
</head>
<body>

  <h2>Responsive Image with Media Queries</h2>
  <img src="https://via.placeholder.com/800x400" alt="Responsive Example" class="responsive" />

</body>
</html>
```

* * *

✅ What’s Happening?
-------------------

*   ✅ **`width: 100%`** keeps the image fluid in its container.
    
*   ✅ **Media queries** control styling like:
    
    *   Rounded corners (`border-radius`)
        
    *   Padding (spacing)
        
    *   Could be extended to change `display`, `opacity`, `position`, etc.
        

* * *

✅ Example: Switch Between Multiple Images
-----------------------------------------

```html
<style>
  .mobile-img {
    display: none;
  }

  .desktop-img {
    display: block;
  }

  @media (max-width: 768px) {
    .mobile-img {
      display: block;
    }

    .desktop-img {
      display: none;
    }
  }
</style>

<img src="desktop.jpg" class="desktop-img" alt="For desktop" />
<img src="mobile.jpg" class="mobile-img" alt="For mobile" />
```

✅ **Effect**: The browser loads **different images based on screen width**.

* * *

🧠 Best Practice Combo:
-----------------------

*   Use `srcset` + `sizes` for **performance-based responsive loading**
    
*   Use **media queries** for **layout and style-based control**
    

* * *

Would you like a downloadable zip or live CodePen with all these responsive examples combined?

## Response:
Using an **image as a background** is a common and powerful technique in web design. It gives you more flexibility than an `<img>` tag—like layering content on top, setting repeat rules, or covering a full screen section.

* * *

✅ Basic Syntax (CSS Background Image)
-------------------------------------

```css
.selector {
  background-image: url("image.jpg");
}
```

* * *

✅ Full Example – Background Image in a Section
----------------------------------------------

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Background Image Example</title>
  <style>
    .hero {
      background-image: url("https://via.placeholder.com/1600x600");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  </style>
</head>
<body>

  <section class="hero">
    <h1>Welcome to Our Website</h1>
  </section>

</body>
</html>
```

* * *

🎯 Common `background-*` Properties
-----------------------------------

| Property | What It Does | Example |
| --- | --- | --- |
| `background-image` | Sets the image | `url("img.jpg")` |
| `background-size` | `cover`, `contain`, or fixed value | `cover` fills the area |
| `background-position` | Controls placement | `center`, `top left` |
| `background-repeat` | Repeat behavior | `no-repeat`, `repeat-x` |
| `background-attachment` | Scrolling behavior | `fixed` (parallax effect) |

* * *

✅ Background with Overlay Text & Color
--------------------------------------

```css
.overlay {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), 
    url("bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

🧠 **Overlay technique** is great for improving text readability.

* * *

✅ Responsive Background Image with Media Queries
------------------------------------------------

```css
.hero {
  background-image: url("large.jpg");
}

@media (max-width: 768px) {
  .hero {
    background-image: url("small.jpg");
  }
}
```

🧠 This lets you **load smaller images on mobile** for faster performance.

* * *

✅ Fullscreen Fixed Background (Parallax Style)
----------------------------------------------

```css
.parallax {
  background-image: url("bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
```

* * *

🧪 Bonus: Shorthand `background` Property
-----------------------------------------

```css
.element {
  background: url("img.jpg") center/cover no-repeat fixed;
}
```

🧠 This is a shorthand for:

*   `background-image`
    
*   `background-position`
    
*   `background-size`
    
*   `background-repeat`
    
*   `background-attachment`
    

* * *

Would you like a **downloadable template** or demo with a background image + button + heading layered together?

## Response:
Here is a **complete list of all `background-*` properties and their possible values** in CSS, explained with examples.

* * *

🎨 `background` (Shorthand Property)
------------------------------------

```css
background: [color] [image] [position] / [size] [repeat] [attachment] [origin] [clip];
```

🔹 It combines multiple background properties into one line.

```css
.example {
  background: #000 url("img.jpg") no-repeat center/cover fixed padding-box content-box;
}
```

* * *

🔹 1. `background-color`
------------------------

Sets the **background color** of an element.

### ✅ Values:

*   Color names: `red`, `blue`
    
*   HEX: `#ff0000`
    
*   RGB: `rgb(255, 0, 0)`
    
*   RGBA: `rgba(255, 0, 0, 0.5)`
    
*   HSL: `hsl(0, 100%, 50%)`
    
*   Transparent: `transparent`
    

```css
background-color: #f5f5f5;
```

* * *

🔹 2. `background-image`
------------------------

Sets one or more background images.

### ✅ Values:

*   `url("image.jpg")`
    
*   `none`
    
*   `linear-gradient(...)`, `radial-gradient(...)`
    
*   Multiple: `url(img1.jpg), url(img2.jpg)`
    

```css
background-image: url("bg.jpg");
background-image: linear-gradient(to right, #ff0000, #0000ff);
```

* * *

🔹 3. `background-repeat`
-------------------------

Defines whether/how background image should **repeat**.

### ✅ Values:

*   `repeat` (default)
    
*   `no-repeat`
    
*   `repeat-x` (only horizontal)
    
*   `repeat-y` (only vertical)
    
*   `space` (equal spacing)
    
*   `round` (scaled to fit without clipping)
    

```css
background-repeat: no-repeat;
```

* * *

🔹 4. `background-position`
---------------------------

Sets the **starting position** of a background image.

### ✅ Values:

*   Keywords: `left`, `right`, `top`, `bottom`, `center`
    
*   Coordinates: `10px 20px`, `50% 100%`
    
*   Combinations: `left top`, `center bottom`
    

```css
background-position: center center;
```

* * *

🔹 5. `background-size`
-----------------------

Specifies the **scaling size** of the background image.

### ✅ Values:

*   `auto` (default)
    
*   `cover` (fills entire area, crops if needed)
    
*   `contain` (fits image completely inside)
    
*   `length`/`percentage`: `100px 200px`, `100% 50%`
    

```css
background-size: cover;
```

* * *

🔹 6. `background-attachment`
-----------------------------

Controls the **scrolling behavior** of the background image.

### ✅ Values:

*   `scroll` (default, moves with content)
    
*   `fixed` (background stays in place – parallax effect)
    
*   `local` (scrolls with the element)
    

```css
background-attachment: fixed;
```

* * *

🔹 7. `background-origin`
-------------------------

Defines where the **background image is positioned from**.

### ✅ Values:

*   `padding-box` (default)
    
*   `border-box`
    
*   `content-box`
    

```css
background-origin: content-box;
```

* * *

🔹 8. `background-clip`
-----------------------

Defines how far the **background extends within the box model**.

### ✅ Values:

*   `border-box`
    
*   `padding-box` (default)
    
*   `content-box`
    
*   `text` (only for `background-clip` with `-webkit-` in WebKit browsers)
    

```css
background-clip: border-box;
```

* * *

✅ Summary Table of `background-*` Properties
--------------------------------------------

| Property | Description |
| --- | --- |
| `background` | Shorthand for all |
| `background-color` | Background fill color |
| `background-image` | Background image or gradient |
| `background-repeat` | Repeat behavior |
| `background-position` | Starting position of image |
| `background-size` | Image scaling method |
| `background-attachment` | Scroll behavior |
| `background-origin` | Background positioning origin |
| `background-clip` | Background drawing area |

* * *

🧪 Bonus: Multiple Background Layers
------------------------------------

```css
background-image: url("top.png"), url("bottom.jpg");
background-position: center top, center bottom;
background-repeat: no-repeat, repeat;
background-size: 100px, cover;
```

Each layer is separated by a comma, and the **first image is on top**.

* * *

Would you like a downloadable **interactive cheat sheet** or a **demo page** with all these in action?

## Response:
### ✅ `background-clip` in CSS — Explained with All Values and Examples

The `background-clip` property **controls how far the background (color or image) extends inside an element’s box model** (border-box, padding-box, or content-box).

* * *

🔹 Syntax
---------

```css
background-clip: value;
```

* * *

🔹 Possible Values
------------------

| Value | What It Means |
| --- | --- |
| `border-box` | Background extends **under the border** (default for images, not color). |
| `padding-box` | Background clips to the **edge of the padding**. Does not go under the border. |
| `content-box` | Background only appears **behind the content**, excluding padding and border. |
| `text` | Background is clipped to the **foreground text** (requires `-webkit-` prefix). |

* * *

🔸 1. `background-clip: border-box;` (Default)
----------------------------------------------

```css
.box {
  background-color: orange;
  border: 10px dashed red;
  background-clip: border-box;
}
```

✅ **Background is painted under the border**.

* * *

🔸 2. `background-clip: padding-box;`
-------------------------------------

```css
.box {
  background-color: lightblue;
  padding: 20px;
  border: 10px solid gray;
  background-clip: padding-box;
}
```

✅ **Background is clipped at the padding edge**, not visible behind the border.

* * *

🔸 3. `background-clip: content-box;`
-------------------------------------

```css
.box {
  background-color: lightgreen;
  padding: 30px;
  border: 10px solid black;
  background-clip: content-box;
}
```

✅ **Background shows only behind the content**, excluding padding and border.

* * *

🔸 4. `background-clip: text;` (Fancy text fill)
------------------------------------------------

```html
<style>
  .text-clip {
    font-size: 80px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(to right, #f00, #00f);
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>

<div class="text-clip">CLIPPED TEXT</div>
```

✅ **Gradient fills the text**, not the background box. Works only with `-webkit-background-clip: text` in most browsers.

* * *

🔹 Complete Example (With Borders and Boxes)
--------------------------------------------

```html
<style>
  .box {
    width: 300px;
    height: 150px;
    margin: 20px;
    border: 10px solid black;
    padding: 20px;
    background-color: skyblue;
  }

  .clip-border { background-clip: border-box; }
  .clip-padding { background-clip: padding-box; }
  .clip-content { background-clip: content-box; }
</style>

<div class="box clip-border">Border Box</div>
<div class="box clip-padding">Padding Box</div>
<div class="box clip-content">Content Box</div>
```

* * *

🧠 Tips
-------

*   Works with `background-color`, `background-image`, and gradients.
    
*   Use `-webkit-background-clip: text` for stylish text effects.
    
*   Best when you have visible **border and padding** to see the difference.
    

* * *

Would you like a CodePen demo or a downloadable HTML with all `background-clip` values shown visually?

## Response:
Here's a complete **Advanced Guide to the `<img>` tag in HTML**, covering all attributes, best practices, responsive techniques, SEO, accessibility, and performance features.

* * *

✅ Basic Syntax
--------------

```html
<img src="image.jpg" alt="Description of image" />
```

* * *

🧠 Advanced Attributes & Usage
------------------------------

### 1\. **`src`**

*   URL of the image.
    
*   Can be relative (`images/pic.jpg`) or absolute (`https://...`).
    

### 2\. **`alt`** (✔️ Mandatory for accessibility and SEO)

*   Describes the image for screen readers and when the image fails to load.
    

```html
<img src="logo.png" alt="Company Logo" />
```

* * *

🔹 Advanced & Responsive Attributes
-----------------------------------

### 3\. **`srcset` + `sizes`** (Responsive Image Loading)

```html
<img
  src="default.jpg"
  srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1024px) 768px, 1200px"
  alt="Responsive Image"
/>
```

🔸 **Purpose**: Browser picks the best image based on screen size & resolution.

* * *

### 4\. **`loading` (Lazy Loading)**

```html
<img src="img.jpg" alt="..." loading="lazy" />
```

*   `lazy`: Loads image **only when it enters the viewport**.
    
*   Improves **page load speed**.
    

* * *

### 5\. **`decoding`**

```html
<img src="img.jpg" decoding="async" />
```

*   `async`: Decode image asynchronously.
    
*   `sync`: Decode immediately.
    
*   `auto`: Let browser decide (default).
    

✅ Improves performance and rendering control.

* * *

### 6\. **`width` & `height` (Recommended for CLS Prevention)**

```html
<img src="img.jpg" width="800" height="600" />
```

*   Always declare **actual dimensions** to reduce layout shift.
    

* * *

### 7\. **`referrerpolicy`**

```html
<img src="img.jpg" referrerpolicy="no-referrer" />
```

*   Controls how much referrer info is sent with the request.
    
*   Values: `no-referrer`, `origin`, `unsafe-url`, etc.
    

* * *

### 8\. **`crossorigin`**

```html
<img src="external.jpg" crossorigin="anonymous" />
```

*   Used when loading images from **external domains**.
    
*   Needed for CORS and Canvas manipulation.
    
*   Values: `anonymous`, `use-credentials`.
    

* * *

🎯 Styling Tips with CSS
------------------------

### Responsive Image with CSS:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

* * *

🔸 `<picture>` Element (Art Direction)
--------------------------------------

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="fallback.jpg" alt="Smart Image" />
</picture>
```

🔹 Browser picks the **first compatible format**. Great for **format fallbacks** (WebP, AVIF).

* * *

✅ Best Practices for `<img>`
----------------------------

| Goal | Best Practice |
| --- | --- |
| SEO | Use descriptive `alt` text |
| Accessibility | Always provide `alt` or `role="presentation"` |
| Performance | Use `loading="lazy"`, compressed images |
| Responsiveness | Use `srcset`, `sizes`, and CSS |
| Layout stability | Set `width` and `height` explicitly |
| Cross-browser support | Use `<picture>` for format fallbacks |

* * *

🧪 Bonus: Decorative Image (Ignored by screen readers)
------------------------------------------------------

```html
<img src="decorative.jpg" alt="" role="presentation" />
```

* * *

✅ Summary Table of Attributes
-----------------------------

| Attribute | Description |
| --- | --- |
| `src` | Image source URL |
| `alt` | Alt text for screen readers |
| `srcset` | List of image sources for responsive loading |
| `sizes` | Slot sizes for each image in `srcset` |
| `loading` | Lazy load (`lazy`, `eager`) |
| `width/height` | Image dimensions |
| `decoding` | `sync`, `async`, or `auto` |
| `crossorigin` | External image handling |
| `referrerpolicy` | Control referrer info |
| `usemap` | Connect image to a `<map>` |
| `ismap` | Server-side clickable image |

* * *

Would you like a **sample HTML page** with all advanced `<img>` techniques implemented?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)