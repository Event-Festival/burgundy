# Burgundy Festival Theme

A lightweight CDN-based festival theme loader for adding seasonal or event-based UI effects to your website dynamically.

## 🚀 Installation

Include the Burgundy festival loader via CDN in your index.html :


```html
<script src="https://event-festival.github.io/burgundy/festival-loader.js"></script>
```

## 📦 Usage

After including the script, you can control the festival theme globally via the window.Festival object.

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

