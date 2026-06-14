# 公考知识分享平台 - 使用说明

## 📁 项目结构

```
kaogong/                    # 项目根目录
├── index.html             # 首页（主页面）
├── css/                   # CSS样式文件夹
│   └── style.css         # 主样式文件
├── js/                    # JavaScript文件夹
│   └── main.js           # 主脚本文件
└── pages/                 # 页面文件夹
    ├── chengyu.html      # 成语查询页面
    ├── gaopin.html       # 高频词语页面
    └── ziliao.html       # 资料下载页面
```

## 🚀 快速开始

### 方法一：直接打开
直接双击 `index.html` 文件即可在浏览器中打开网站。

### 方法二：本地服务器（推荐）
使用任意本地服务器工具（如 VS Code 的 Live Server 插件）打开项目文件夹。

## 📝 如何修改内容

### 1. 修改首页（index.html）

#### 修改网站标题和介绍文字
```html
<!-- 找到这段代码，修改为你的内容 -->
<h1 style="font-size: 48px; margin-bottom: 20px;">
    📖 公考知识分享平台  <!-- 修改这里 -->
</h1>
<p style="font-size: 20px; margin-bottom: 30px; opacity: 0.95;">
    无论你是初出茅庐的应届生...  <!-- 修改这里 -->
</p>
```

#### 修改联系方式
```html
<!-- 在页脚部分找到 -->
<div class="footer-section">
    <h4>联系我们</h4>
    <p>邮箱: contact@example.com</p>        <!-- 修改邮箱 -->
    <p>网站: www.example.com</p>           <!-- 修改网站 -->
</div>
```

#### 修改平台特点介绍
```html
<!-- 找到特点卡片区域，修改三个特点 -->
<div class="card" style="text-align: center;">
    <div style="font-size: 60px; margin-bottom: 20px;">💡</div>  <!-- 修改图标 -->
    <h3 style="font-size: 24px; margin-bottom: 15px;">精准定位，高效备考</h3>  <!-- 修改标题 -->
    <p style="color: #666; line-height: 1.8;">
        内容融合了...  <!-- 修改描述 -->
    </p>
</div>
```

### 2. 修改成语数据（js/main.js）

在 `js/main.js` 文件中找到 `chengyuData` 数组：

```javascript
const chengyuData = [
    { 
        word: "爱不释手",           // 成语
        pinyin: "ài bù shì shǒu",  // 拼音
        解释: "形容十分喜爱,舍不得放手",  // 解释
        example: "这本书写得真好,让我爱不释手。"  // 例句
    },
    // 在这里添加更多成语...
];
```

**添加新成语：**
```javascript
const chengyuData = [
    // ... 其他成语
    { 
        word: "新成语", 
        pinyin: "xīn chéng yǔ", 
        解释: "成语解释", 
        example: "例句" 
    }
];
```

### 3. 修改高频词语（js/main.js）

找到 `gaopinWords` 数组：

```javascript
const gaopinWords = [
    { 
        word: "贯彻",           // 词语
        meaning: "彻底实现"     // 含义
    },
    // 在这里添加更多词语...
];
```

**添加新词语：**
```javascript
const gaopinWords = [
    // ... 其他词语
    { 
        word: "新词语", 
        meaning: "词语含义" 
    }
];
```

### 4. 修改资料下载链接（js/main.js）

找到 `ziliaoData` 数组：

```javascript
const ziliaoData = [
    {
        title: "2024年国考行测真题卷",      // 资料标题
        description: "包含完整答案解析",    // 资料描述
        type: "历年真题",                   // 分类
        downloadUrl: "https://pan.baidu.com/s/example1",  // 网盘链接
        password: "abcd"                    // 提取码
    },
    // 在这里添加更多资料...
];
```

**添加新资料：**
```javascript
const ziliaoData = [
    // ... 其他资料
    {
        title: "新资料标题",
        description: "资料描述",
        type: "分类",
        downloadUrl: "网盘链接",
        password: "提取码"
    }
];
```

### 5. 修改功能入口（js/main.js）

找到 `toolsData` 数组：

```javascript
const toolsData = [
    { 
        name: "成语查询",           // 工具名称
        icon: "📚",                 // 图标（emoji）
        description: "查询成语释义和例句",  // 描述
        url: "pages/chengyu.html"   // 链接地址
    },
    // 在这里添加更多工具...
];
```

## 🎨 修改样式（css/style.css）

### 修改主题颜色
在文件开头找到 `:root` 选择器：

```css
:root {
    /* 主色调 - 蓝色系 */
    --primary-color: #4a90e2;        /* 主色 */
    --primary-dark: #357abd;         /* 深色 */
    --primary-light: #7eb3f3;        /* 浅色 */
    
    /* 辅助色 - 渐变效果 */
    --gradient-start: #667eea;        /* 渐变起始色 */
    --gradient-end: #764ba2;          /* 渐变结束色 */
    
    /* 修改这里可以改变整个网站的主题色 */
}
```

### 修改字体大小
```css
body {
    font-size: 16px;  /* 基础字体大小 */
}
```

### 修改圆角大小
```css
:root {
    --border-radius: 12px;      /* 大圆角 */
    --border-radius-sm: 8px;    /* 小圆角 */
}
```

## 🌐 添加新页面

1. 在 `pages/` 文件夹中创建新的 HTML 文件
2. 参考现有页面的结构编写代码
3. 在导航栏中添加链接

**示例：创建"关于页面"**

```html
<!-- pages/about.html -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>关于我们 - 公考知识分享平台</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- 复制导航栏代码 -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">📚 公考知识库</div>
            <div class="nav-links">
                <a href="../index.html">首页</a>
                <a href="chengyu.html">成语查询</a>
                <a href="gaopin.html">高频词语</a>
                <a href="ziliao.html">资料下载</a>
                <a href="about.html">关于我们</a>  <!-- 新增 -->
            </div>
        </div>
    </nav>

    <main class="main-content">
        <div class="container">
            <div class="page-header">
                <h1>关于我们</h1>
                <p>了解我们更多信息</p>
            </div>
            
            <!-- 添加你的内容 -->
            <div class="card">
                <h2>我们的使命</h2>
                <p>帮助更多人实现公考梦想...</p>
            </div>
        </div>
    </main>

    <script src="../js/main.js"></script>
</body>
</html>
```

## 📱 响应式设计说明

网站已经内置了响应式设计，会自动适配不同设备：

- **电脑端（> 768px）**：显示顶部导航栏
- **手机端（≤ 768px）**：显示底部导航栏，隐藏顶部导航

如需调整断点，修改 `css/style.css` 中的：

```css
@media (max-width: 768px) {
    /* 平板设备的样式 */
}

@media (max-width: 480px) {
    /* 手机设备的样式 */
}
```

## ❓ 常见问题

### Q: 如何添加更多成语？
A: 打开 `js/main.js`，在 `chengyuData` 数组中添加新的成语对象。

### Q: 如何修改下载链接？
A: 打开 `js/main.js`，在 `ziliaoData` 数组中修改 `downloadUrl` 和 `password` 字段。

### Q: 如何改变网站主题色？
A: 修改 `css/style.css` 中 `:root` 选择器的颜色变量。

### Q: 网站能否上传到服务器？
A: 可以！这是一个纯静态网站，可以上传到任意静态服务器或托管平台（如 GitHub Pages、阿里云OSS等）。

### Q: 如何添加用户登录功能？
A: 当前版本是静态网站，不支持后端功能。如需登录功能，需要配合后端服务（PHP、Node.js等）。

## 🎯 下一步建议

1. **替换示例数据**：将示例成语、词语和资料替换为你的真实内容
2. **自定义样式**：根据需要调整颜色和布局
3. **添加新功能**：可以添加更多学习工具或页面
4. **部署上线**：选择合适的平台部署你的网站

## 📞 获取帮助

如果在使用过程中遇到问题：
- 检查浏览器控制台（F12）是否有错误信息
- 确保文件路径正确
- 确认 HTML 语法没有错误

祝使用愉快！🚀
