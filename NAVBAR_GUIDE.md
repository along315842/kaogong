# 公共导航栏组件使用指南

## 🎯 功能说明

为了解决每次创建子页面时需要重复添加导航栏代码的问题，我们创建了一个**公共导航栏组件**（`js/navbar.js`）。

现在，你只需要在一个文件中修改导航栏内容，**所有页面会自动同步更新**！

---

## 📝 使用方法

### 方式一：在新页面中引用（推荐）

在你创建的任何新页面的 `</body>` 标签前添加一行代码即可：

```html
<!-- 引入公共导航栏组件 -->
<script src="js/navbar.js"></script>
```

**示例：**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新页面</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    <!-- 你的页面内容 -->
    <main>
        <h1>欢迎来到新页面</h1>
        <p>这里放你的内容...</p>
    </main>

    <!-- 引入公共导航栏组件 -->
    <script src="js/navbar.js"></script>
</body>
</html>
```

---

## 📂 路径说明

### 1. 根目录页面（如 `index.html`）

```html
<script src="js/navbar.js"></script>
```

### 2. 一级子目录页面（如 `pages/xingce.html`）

```html
<script src="../js/navbar.js"></script>
```

### 3. 二级子目录页面（如 `pages/xingce/tuixing/weizhi.html`）

```html
<script src="../../../js/navbar.js"></script>
```

### 4. 三级子目录页面（如更深层级）

```html
<script src="../../../../js/navbar.js"></script>
```

**快捷方法**：数一数你的页面在第几层目录，然后在前面加几个 `../`

| 目录层级 | 示例路径 | 引用代码 |
|---------|---------|---------|
| 根目录 | `index.html` | `<script src="js/navbar.js">` |
| 一级 | `pages/xxx.html` | `<script src="../js/navbar.js">` |
| 二级 | `pages/xingce/xxx.html` | `<script src="../../js/navbar.js">` |
| 三级 | `pages/xingce/tuixing/xxx.html` | `<script src="../../../js/navbar.js">` |

---

## ✨ 智能特性

公共导航栏组件具有以下智能特性：

### 1. **自动路径调整**

无论页面在哪个目录，导航栏中的链接都能正确指向目标页面：

- 根目录页面：`index.html` → `pages/news.html`
- 二级页面：`pages/xingce/tuixing/weizhi.html` → `../../index.html`

### 2. **自动高亮当前页面**

当前页面在导航栏中会显示高亮效果（白色下划线）。

### 3. **响应式设计**

导航栏会自动适配电脑端和手机端：

- **电脑端**：水平显示所有导航链接
- **手机端**：显示汉堡菜单按钮，点击展开下拉菜单

### 4. **移动端菜单**

点击手机端菜单按钮会展开/收起导航菜单。

---

## 🎨 自定义导航栏

如果你想修改导航栏的样式或内容，只需要编辑一个文件：

**文件位置：** `js/navbar.js`

### 修改样式

在 CSS 文件（`css/style.css`）中查找 `.navbar` 相关的样式进行修改：

```css
/* 导航栏容器 */
.navbar {
    background: linear-gradient(135deg, #667eea, #764ba2);  /* 修改背景色 */
    color: #fff;  /* 修改文字颜色 */
    padding: 15px 0;  /* 修改内边距 */
    /* ...其他样式 */
}

/* 导航链接 */
.navbar .nav-links a {
    color: #fff;  /* 修改链接颜色 */
    font-size: 16px;  /* 修改字体大小 */
    /* ...其他样式 */
}
```

### 修改链接

在 `js/navbar.js` 中找到 `navbarHTML` 变量，修改其中的链接：

```javascript
// 在 navbarHTML 变量中修改
<div class="nav-links">
    <a href="${basePath}index.html">首页</a>
    <a href="${basePath}pages/news.html">新闻联播</a>
    <!-- 添加新链接 -->
    <a href="${basePath}pages/your-page.html">新页面</a>
</div>
```

---

## 🔧 技术原理

公共导航栏组件使用了以下技术：

1. **JavaScript DOM 操作**：使用 `document.body.insertAdjacentHTML()` 在页面加载时动态插入导航栏
2. **路径计算**：通过分析 URL 路径自动确定相对路径前缀
3. **事件处理**：自动绑定移动端菜单的点击事件
4. **样式注入**：自动添加当前页面链接的高亮样式

---

## ✅ 优势

使用公共导航栏组件的好处：

| 优势 | 说明 |
|------|------|
| 🚀 **开发效率** | 不需要重复编写导航栏代码 |
| 🎯 **统一风格** | 所有页面导航栏样式完全一致 |
| 🔧 **易于维护** | 修改一个文件，所有页面自动更新 |
| 🐛 **减少错误** | 不容易出现链接路径错误 |
| 📱 **响应式** | 自动适配电脑和手机端 |

---

## 📞 需要帮助？

如果你遇到任何问题：

1. 检查页面是否正确引用了 `navbar.js`
2. 确认引用路径是否正确（`../` 的数量是否正确）
3. 检查浏览器控制台（F12）是否有错误信息
4. 确保 `css/style.css` 文件存在且被正确引入

---

**祝你使用愉快！** 🎉
