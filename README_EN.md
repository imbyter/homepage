[简体中文](./README.md) | English

## imbyter - Personal Homepage

The source code of the homepage website I use myself has a simple interface, but it includes a rich and sufficient number of modules:

![imbyter](/screenshots/light.jpg)
![imbyter](/screenshots/dark.jpg)

> The original project author is [@ZYYO666](https://github.com/ZYYO666). Most of the functions were completed by the original author, and I([@imbyter](https://github.com/imbyter)) only made secondary optimizations to the interface details and organized the code format based on the original version

Final effect: [https://imbyter.com](https://imbyter.com)

### 🎉 Functional & Characteristics

- [x] Pure static page (HTML+CSS+JS)
- [x] Responsive Page
- [x] Built in 5 optional themes
- [x] Supports switching between light and dark modes
- [x] Compact in size, with compression (including images) of only 2.52 MB

### ⚙️ Deploy & Use

Because the project is a purely static page, after downloading, you can directly open the root directory `index. html` to access it.

- No dependency environment is required for server deployment😀.

### 🥝 Else

- The image of the **technology stack** module at the bottom of the page can be used with [skill-icons](https://github.com/tandpfun/skill-icons) directly generate. It can also be saved offline in the format of `svg` after its generation.

- Dynamic loading of background images in `\static\js\script.js`:
  - When opening a page on the mobile side (judged by the `isMobile` function), it is displayed directly in dark mode without loading a large background image.
  - When the page is opened on the PC side, it defaults to a bright color mode and actively loads a large background image.

- The page on the PC side defaults to displaying a light and dark mode switch button, while the mobile side hides a light and dark mode switch button. You can customize and modify it in `\static\css\style.css`.

- The page on PC side has 5 themes to choose from, which can be freely switched in `\static\css\theme.css` (switching is not supported on the mobile side)