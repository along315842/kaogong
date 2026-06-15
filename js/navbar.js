/**
 * 公考知识库 - 公共导航栏组件
 * 
 * 功能：所有子页面统一引用此文件，自动显示顶部导航栏
 * 使用方法：在HTML文件的 </body> 标签前添加 <script src="js/navbar.js"></script>
 * 
 * 注意：此文件必须在所有页面最后加载，以确保DOM元素已创建
 */

// 获取当前页面的目录深度
function getPathDepth() {
    const path = window.location.pathname;
    // 计算路径中有多少个斜杠（排除根目录的斜杠）
    const depth = path.split('/').filter(p => p && !p.includes('.html')).length;
    return depth;
}

// 根据目录深度生成相对路径前缀
function getBasePath() {
    const depth = getPathDepth();
    // depth 为 0 表示在根目录，depth 为 1 表示在 pages/ 或其他一级目录
    // depth 为 2 表示在二级目录如 pages/xingce/
    // depth 为 3 表示在三级目录如 pages/xingce/tuixing/
    if (depth <= 1) {
        return ''; // 根目录页面
    } else {
        return '../'.repeat(depth - 1);
    }
}

const basePath = getBasePath();

// 定义导航栏HTML结构
const navbarHTML = `
<nav class="navbar">
    <div class="container">
        <!-- Logo区域 -->
        <div class="logo">
            📚 公考知识库
        </div>
        
        <!-- 导航链接 -->
        <div class="nav-links">
            <a href="${basePath}index.html">首页</a>
            <a href="${basePath}pages/news.html">新闻联播</a>
            <a href="${basePath}pages/xingce.html">行测</a>
            <a href="${basePath}pages/shenlun.html">申论学习</a>
            <a href="${basePath}pages/gaopin.html">高频词语</a>
            <a href="${basePath}pages/ziliao.html">资料下载</a>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="menu-toggle" onclick="toggleMobileMenu()">☰</div>
        
        <!-- 移动端下拉菜单 -->
        <div class="mobile-menu" id="mobileMenu">
            <a href="${basePath}index.html" onclick="closeMobileMenu()">首页</a>
            <a href="${basePath}pages/news.html" onclick="closeMobileMenu()">新闻联播</a>
            <a href="${basePath}pages/xingce.html" onclick="closeMobileMenu()">行测</a>
            <a href="${basePath}pages/shenlun.html" onclick="closeMobileMenu()">申论学习</a>
            <a href="${basePath}pages/gaopin.html" onclick="closeMobileMenu()">高频词语</a>
            <a href="${basePath}pages/ziliao.html" onclick="closeMobileMenu()">资料下载</a>
        </div>
    </div>
</nav>
`;

// 在DOM加载完成后插入导航栏
function initNavbar() {
    // 在 body 开始后立即插入导航栏
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // 高亮当前页面链接
    highlightCurrentPage();
}

// 高亮当前页面链接
function highlightCurrentPage() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.navbar .nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const currentPath = window.location.pathname;
        
        // 检查当前路径是否包含链接路径
        if (currentPath.includes(href) || 
            (currentPath.endsWith('/') && href.endsWith('index.html')) ||
            (currentPath === '/' && href === 'index.html') ||
            (currentPath.endsWith('/index.html') && href.endsWith('index.html'))) {
            link.classList.add('active');
        }
    });
}

// 移动端菜单控制函数（全局函数，供导航栏点击调用）
window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
};

window.closeMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
};

// 添加活跃链接的样式
const style = document.createElement('style');
style.textContent = `
    .navbar .nav-links a.active {
        color: white !important;
        border-bottom: 2px solid white;
    }
`;
document.head.appendChild(style);

// 确保DOM加载完成后再初始化导航栏
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
