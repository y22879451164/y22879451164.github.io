// 创建一个新的 style 元素
const style = document.createElement('style');

// 定义美化 CSS 的样式字符串
const css = `
/* 调整整体布局 */
body {
    font-family: Arial, sans-serif;
}

/* 美化头部 */
#header {
    background-color: #fff;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

#header h1 a {
    font-weight: bold;
}

.SideNav {
    background-color: #fff;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.SideNav-item {
    margin-bottom: 8px;
    padding: 8px;
    transition: background-color 0.3s;
}

.SideNav-item:hover {
    background-color: #f0f0f0;
}

/* 美化标签 */
.Label {
    padding: 4px 8px;
    border-radius: 40px;
    margin-right: 4px;
}
`;

// 将样式字符串插入到 style 元素中
style.textContent = css;
document.head.appendChild(style);
