# Burgundy Festival Theme

A lightweight CDN-based festival theme loader for adding seasonal or event-based UI effects to your website dynamically.

## 🚀 Installation

Include the Burgundy festival loader via CDN in your index.html :


```html
<script src="https://event-festival.github.io/burgundy/festival-loader.js"></script>
```

## 📦 Usage

After including the script, you can control the festival theme globally via the `window.Festival` object.

```javascript
// 'Function for enabling themes.'
window.Festival.enable();

// 'Function to disable the theme.'
window.Festival.disable();

// 'Function for using length with expand.'
window.Festival.expand();

// 'Function for using length with collapse.'
window.Festival.collapse();

```

## 🛠️ Development

For local development or testing with a custom theme configuration, define the config URL before loading the script :

```html
<script>
    window.FESTIVAL_CONFIG_URL = 'http://localhost:4200/theme-config.json';
</script>
```

## 📁 Configuration

The theme behavior is driven by a JSON configuration file (theme-config.json) which defines:

- **Available themes** – List of supported festival themes  
- **CSS / JS assets** – Resources used for each theme  
- **Active date ranges for each theme** – Defines when each theme is applied  

## 🏗️ Architecture (Zero-Cache Auto Update)

This project uses a **Bootstrap Script + Cache Busting** architecture to ensure users always receive the latest festival updates without needing to clear their browser cache or press `Ctrl + F5`.

1. **`festival-loader.js` (Entry Point):** Acts as a proxy script that is safe to be cached. It dynamically injects the core script with a timestamp to bypass CDN caching.
2. **`festival-core.js` (Logic):** The main engine that always loads fresh. It fetches the latest `theme-config.json` using timestamp cache-busting.
3. **`theme-config.json` (Versioning):** Controls the assets. When the `version` bumps, the core script automatically fetches the new `.css` and `.js` files.