// 自定义鼠标样式功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建自定义光标元素
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // 创建光标跟随效果
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);
    
    // 鼠标移动时更新光标位置
    document.addEventListener('mousemove', (e) => {
        // 主光标位置
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // 光标轨迹跟随，带有轻微延迟
        setTimeout(() => {
            cursorTrail.style.left = `${e.clientX}px`;
            cursorTrail.style.top = `${e.clientY}px`;
        }, 50);
    });
    
    // 鼠标点击时添加动画效果
    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-active');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-active');
    });
    
    // 鼠标悬停在可点击元素上时的效果
    const clickableElements = document.querySelectorAll('a, button, .clickable, input[type="button"], input[type="submit"]');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorTrail.classList.add('trail-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorTrail.classList.remove('trail-hover');
        });
    });
    
    // 在移动设备上禁用自定义光标
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    
    if (isMobileDevice()) {
        cursor.style.display = 'none';
        cursorTrail.style.display = 'none';
    }
});
