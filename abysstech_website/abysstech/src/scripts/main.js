// Abysstech Main JavaScript

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化加载动画
    initLoader();
    
    // 初始化语言切换器
    initLanguageSwitcher();
    
    // 初始化代币分配图表
    initTokenomicsChart();
    
    // 初始化复制合约地址功能
    initCopyContractAddress();
    
    // 初始化平滑滚动
    initSmoothScroll();
    
    // 初始化自定义鼠标
    initCustomCursor();
});

// 加载动画
function initLoader() {
    const loader = document.querySelector('.loader');
    
    // 模拟加载过程
    setTimeout(() => {
        loader.classList.add('hidden');
        // 加载完成后移除加载器
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
}

// 语言切换器
function initLanguageSwitcher() {
    const languageSwitcherBtn = document.querySelector('.language-switcher-btn');
    const languageOptions = document.querySelector('.language-options');
    const languageOptionItems = document.querySelectorAll('.language-option');
    const currentLanguageText = document.querySelector('.language-switcher-btn span');
    
    // 点击语言切换器按钮
    languageSwitcherBtn.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });
    
    // 点击语言选项
    languageOptionItems.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            const selectedText = option.textContent;
            
            // 更新当前语言显示
            currentLanguageText.textContent = selectedText;
            
            // 切换语言 (这里只是UI示例，实际功能将在多语言支持实现中完成)
            console.log(`Language switched to: ${selectedLang}`);
            
            // 关闭语言选项菜单
            languageOptions.style.display = 'none';
        });
    });
    
    // 点击页面其他区域关闭语言选项菜单
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.language-switcher')) {
            languageOptions.style.display = 'none';
        }
    });
}

// 代币分配图表
function initTokenomicsChart() {
    const ctx = document.getElementById('tokenomicsChart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    '社区奖励 (30%)',
                    '团队与顾问 (20%)',
                    '生态系统发展 (15%)',
                    '流动性提供 (15%)',
                    '市场营销 (10%)',
                    '战略合作伙伴 (5%)',
                    '储备基金 (5%)'
                ],
                datasets: [{
                    data: [30, 20, 15, 15, 10, 5, 5],
                    backgroundColor: [
                        'rgba(0, 229, 255, 0.8)',
                        'rgba(0, 255, 157, 0.8)',
                        'rgba(157, 0, 255, 0.8)',
                        'rgba(255, 119, 0, 0.8)',
                        'rgba(255, 42, 42, 0.8)',
                        'rgba(42, 42, 90, 0.8)',
                        'rgba(26, 26, 58, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 229, 255, 1)',
                        'rgba(0, 255, 157, 1)',
                        'rgba(157, 0, 255, 1)',
                        'rgba(255, 119, 0, 1)',
                        'rgba(255, 42, 42, 1)',
                        'rgba(42, 42, 90, 1)',
                        'rgba(26, 26, 58, 1)'
                    ],
                    borderWidth: 2,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '65%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(10, 10, 26, 0.8)',
                        titleFont: {
                            family: "'Rajdhani', sans-serif",
                            size: 16,
                            weight: 'bold'
                        },
                        bodyFont: {
                            family: "'Inter', sans-serif",
                            size: 14
                        },
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: true
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
}

// 复制合约地址功能
function initCopyContractAddress() {
    const copyBtn = document.getElementById('copyContractBtn');
    const contractText = document.querySelector('.contract-address-text');
    
    if (copyBtn && contractText) {
        copyBtn.addEventListener('click', () => {
            // 创建临时文本区域
            const textarea = document.createElement('textarea');
            textarea.value = contractText.textContent;
            document.body.appendChild(textarea);
            
            // 选择并复制文本
            textarea.select();
            document.execCommand('copy');
            
            // 移除临时元素
            document.body.removeChild(textarea);
            
            // 更新按钮文本提示复制成功
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
            
            // 2秒后恢复按钮原始文本
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    }
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 计算目标位置，考虑导航栏高度
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                // 平滑滚动到目标位置
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 自定义鼠标
function initCustomCursor() {
    // 这里将在后续实现，需要先准备自定义鼠标图像
    console.log('Custom cursor will be implemented when cursor image is ready');
}

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.background = 'rgba(10, 10, 26, 0.8)';
    }
});

// 动画效果 - 滚动显示元素
window.addEventListener('load', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .team-member, .roadmap-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.85) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始样式
    const elements = document.querySelectorAll('.feature-card, .team-member, .roadmap-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    // 初始检查
    animateOnScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', animateOnScroll);
});
