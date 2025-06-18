# CSS Transformations and Effects


## Response:
Here’s a detailed explanation of each of the listed CSS visual properties:

* * *

### 🎯 **1\. `transform`**

Used to apply 2D or 3D transformations to an element.

📌 **Common values:**

*   `scale()` – Resizes element
    
*   `rotate()` – Rotates element
    
*   `translate()` – Moves element
    
*   `skew()` – Skews element
    

📦 **Example:**

```css
.box {
  transform: rotate(45deg) scale(1.2) translateX(50px);
}
```

* * *

### 🔍 **2\. `scale()` (inside `transform`)**

Scales the element's size.

📌 **Syntax:**

```css
transform: scale(2);        /* Scales 2x both X and Y */
transform: scale(2, 0.5);   /* Scales X by 2 and Y by 0.5 */
```

* * *

### 🔄 **3\. `rotate()` (inside `transform`)**

Rotates the element around its origin.

📌 **Syntax:**

```css
transform: rotate(90deg);      /* 2D rotation */
transform: rotateX(45deg);     /* 3D rotation on X-axis */
```

* * *

### 🚚 **4\. `translate()` (inside `transform`)**

Moves an element from its current position.

📌 **Syntax:**

```css
transform: translate(50px, 100px);
```

✅ You can also use:

```css
translateX(50px)
translateY(-20%)
```

* * *

### 🌈 **5\. `filter`**

Applies visual effects like blur, brightness, contrast, etc.

📌 **Syntax:**

```css
filter: blur(5px) brightness(120%) contrast(150%);
```

📦 **Common filters:**

*   `blur(px)`
    
*   `brightness(%)`
    
*   `contrast(%)`
    
*   `grayscale(%)`
    
*   `sepia(%)`
    
*   `drop-shadow(x y blur color)`
    

* * *

### 🔲 **6\. `backdrop-filter`**

Applies filter **behind** the element (usually with transparency).

📌 **Syntax:**

```css
.backdrop {
  backdrop-filter: blur(10px) brightness(80%);
  background: rgba(255, 255, 255, 0.3); /* translucent background */
}
```

📝 Works best with:

```css
-webkit-backdrop-filter: ...;
```

* * *

### 👓 **7\. `perspective`**

Defines the perspective for 3D transformed children.

📌 **Syntax:**

```css
.parent {
  perspective: 800px;
}
.child {
  transform: rotateY(45deg);
}
```

✅ Smaller values = more dramatic 3D effect.

* * *

### ✂️ **8\. `clip-path`**

Clips an element to a defined shape.

📌 **Syntax:**

```css
clip-path: circle(50% at center);             /* Circle */
clip-path: ellipse(60% 40% at 50% 50%);       /* Ellipse */
clip-path: polygon(0 0, 100% 0, 50% 100%);    /* Triangle */
```

✅ Use with SVGs or complex shapes.

* * *

### 🔄 Combined Example

```css
.box {
  transform: rotate(45deg) scale(1.5) translate(50px, 0);
  filter: brightness(110%) contrast(120%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

* * *

