Here’s a **comprehensive breakdown** of all the major **HTML document metadata tags** that go inside the `<head>` section, including:

*   ✅ Full tag syntax
    
*   🔧 Common attributes
    
*   💡 Example usage
    

* * *

🔹 Full List of Document Metadata Tags
--------------------------------------

### 1\. `<html>`

Defines the root of an HTML document.

```html
<html lang="en" dir="ltr">
```

**Attributes:**

*   `lang`: Language of the document (e.g., `en`, `fr`)
    
*   `dir`: Text direction (`ltr`, `rtl`)
    

* * *

### 2\. `<head>`

Contains metadata and links to scripts/styles.

```html
<head>
  <!-- Metadata goes here -->
</head>
```

**Attributes:** _(Rarely used, typically none in modern usage)_

* * *

### 3\. `<title>`

Sets the title of the web page (shown in browser tab).

```html
<title>My Web Page</title>
```

**Attributes:** None

* * *

### 4\. `<base>`

Sets the base URL for all relative URLs in the document.

```html
<base href="https://www.example.com/" target="_blank">
```

**Attributes:**

*   `href`: Base URL
    
*   `target`: Default target for links/forms (`_blank`, `_self`, etc.)
    

* * *

### 5\. `<link>`

Used to link external resources like stylesheets, icons, etc.

```html
<link rel="stylesheet" href="styles.css" type="text/css">
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

**Attributes:**

*   `rel`: Relationship (`stylesheet`, `icon`, `preload`, etc.)
    
*   `href`: URL of the linked resource
    
*   `type`: MIME type
    
*   `media`: Media query (e.g., `screen`, `print`)
    
*   `sizes`: Icon sizes (e.g., `32x32`)
    
*   `as`: Resource type (used with `rel="preload"`, e.g., `script`, `font`)
    

* * *

### 6\. `<meta>`

Provides metadata such as charset, description, viewport, etc.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Free web tutorials">
<meta name="author" content="John Doe">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

**Attributes:**

*   `charset`: Character encoding (e.g., `UTF-8`)
    
*   `name`: Name of metadata (e.g., `viewport`, `description`)
    
*   `content`: Content of metadata
    
*   `http-equiv`: Used for HTTP headers (e.g., `refresh`, `X-UA-Compatible`)
    

* * *

### 7\. `<style>`

Embeds internal CSS styles.

```html
<style type="text/css">
  body { font-family: Arial, sans-serif; }
</style>
```

**Attributes:**

*   `type`: MIME type (commonly `text/css`)
    
*   `media`: Media query (optional, e.g., `screen`, `print`)
    
*   `scoped` _(deprecated)_: Limit styles to a specific section
    

* * *

✅ Summary Table
---------------

| Tag | Purpose | Common Attributes |
| --- | --- | --- |
| `<html>` | Root of HTML document | `lang`, `dir` |
| `<head>` | Container for metadata | (none) |
| `<title>` | Page title | (none) |
| `<base>` | Base URL for relative links | `href`, `target` |
| `<link>` | Link to external resources | `rel`, `href`, `type`, `media`, `sizes`, `as` |
| `<meta>` | Metadata like charset, description | `charset`, `name`, `content`, `http-equiv` |
| `<style>` | Embedded internal CSS styles | `type`, `media` |

* * *


