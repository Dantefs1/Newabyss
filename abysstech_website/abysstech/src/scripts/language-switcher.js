// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 支持的语言列表
    const supportedLanguages = {
        'en': 'English',
        'zh': '中文',
        'ja': '日本語',
        'ru': 'Русский',
        'fr': 'Français',
        'de': 'Deutsch',
        'es': 'Español',
        'vi': 'Tiếng Việt',
        'ar': 'العربية'
    };

    // 当前语言，默认为英语
    let currentLang = localStorage.getItem('abysstech-language') || 'en';
    
    // 创建语言切换器
    const createLanguageSwitcher = () => {
        const langSwitcher = document.getElementById('language-switcher');
        if (!langSwitcher) return;
        
        // 清空现有内容
        langSwitcher.innerHTML = '';
        
        // 创建当前语言显示
        const currentLangDisplay = document.createElement('div');
        currentLangDisplay.className = 'current-lang';
        currentLangDisplay.textContent = supportedLanguages[currentLang];
        currentLangDisplay.addEventListener('click', () => {
            langSwitcher.classList.toggle('active');
        });
        langSwitcher.appendChild(currentLangDisplay);
        
        // 创建语言选项容器
        const langOptions = document.createElement('div');
        langOptions.className = 'lang-options';
        
        // 添加所有语言选项
        Object.entries(supportedLanguages).forEach(([code, name]) => {
            const option = document.createElement('div');
            option.className = 'lang-option';
            option.textContent = name;
            option.dataset.lang = code;
            
            if (code === currentLang) {
                option.classList.add('active');
            }
            
            option.addEventListener('click', () => {
                if (code !== currentLang) {
                    localStorage.setItem('abysstech-language', code);
                    loadLanguageContent(code);
                }
                langSwitcher.classList.remove('active');
            });
            
            langOptions.appendChild(option);
        });
        
        langSwitcher.appendChild(langOptions);
        
        // 点击外部关闭语言选择器
        document.addEventListener('click', (e) => {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('active');
            }
        });
    };

    // 加载语言内容
    const loadLanguageContent = async (lang) => {
        try {
            const response = await fetch(`/content/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${response.status}`);
            }
            
            const content = await response.json();
            updatePageContent(content);
            
            // 更新当前语言
            currentLang = lang;
            
            // 更新语言切换器
            createLanguageSwitcher();
            
            // 如果是阿拉伯语，添加RTL支持
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            
            // 保存用户语言偏好
            localStorage.setItem('abysstech-language', lang);
        } catch (error) {
            console.error('Error loading language content:', error);
            // 如果加载失败，回退到英语
            if (lang !== 'en') {
                loadLanguageContent('en');
            }
        }
    };

    // 更新页面内容
    const updatePageContent = (content) => {
        // 更新导航菜单
        updateNavigation(content.nav);
        
        // 更新英雄区域
        updateHero(content.hero);
        
        // 更新产品部分
        updateProduct(content.product);
        
        // 更新代币经济学部分
        updateTokenomics(content.tokenomics);
        
        // 更新路线图部分
        updateRoadmap(content.roadmap);
        
        // 更新团队部分
        updateTeam(content.team);
        
        // 更新社区部分
        updateCommunity(content.community);
        
        // 更新页脚
        updateFooter(content.footer);
    };

    // 更新导航菜单
    const updateNavigation = (navContent) => {
        document.querySelectorAll('[data-i18n="nav.home"]').forEach(el => el.textContent = navContent.home);
        document.querySelectorAll('[data-i18n="nav.product"]').forEach(el => el.textContent = navContent.product);
        document.querySelectorAll('[data-i18n="nav.tokenomics"]').forEach(el => el.textContent = navContent.tokenomics);
        document.querySelectorAll('[data-i18n="nav.roadmap"]').forEach(el => el.textContent = navContent.roadmap);
        document.querySelectorAll('[data-i18n="nav.team"]').forEach(el => el.textContent = navContent.team);
        document.querySelectorAll('[data-i18n="nav.community"]').forEach(el => el.textContent = navContent.community);
    };

    // 更新英雄区域
    const updateHero = (heroContent) => {
        document.querySelectorAll('[data-i18n="hero.title"]').forEach(el => el.textContent = heroContent.title);
        document.querySelectorAll('[data-i18n="hero.subtitle"]').forEach(el => el.textContent = heroContent.subtitle);
        document.querySelectorAll('[data-i18n="hero.description"]').forEach(el => el.textContent = heroContent.description);
        document.querySelectorAll('[data-i18n="hero.cta"]').forEach(el => el.textContent = heroContent.cta);
    };

    // 更新产品部分
    const updateProduct = (productContent) => {
        document.querySelectorAll('[data-i18n="product.title"]').forEach(el => el.textContent = productContent.title);
        document.querySelectorAll('[data-i18n="product.description"]').forEach(el => el.textContent = productContent.description);
        
        // 更新产品特点
        const featureElements = document.querySelectorAll('.feature');
        if (featureElements.length === productContent.features.length) {
            featureElements.forEach((el, index) => {
                el.querySelector('[data-i18n^="product.features"]').textContent = productContent.features[index].title;
                el.querySelector('[data-i18n^="product.features"]').nextElementSibling.textContent = productContent.features[index].description;
            });
        }
    };

    // 更新代币经济学部分
    const updateTokenomics = (tokenomicsContent) => {
        document.querySelectorAll('[data-i18n="tokenomics.title"]').forEach(el => el.textContent = tokenomicsContent.title);
        document.querySelectorAll('[data-i18n="tokenomics.description"]').forEach(el => el.textContent = tokenomicsContent.description);
        document.querySelectorAll('[data-i18n="tokenomics.copyText"]').forEach(el => el.textContent = tokenomicsContent.copyText);
        
        // 更新代币分配
        document.querySelectorAll('[data-i18n="tokenomics.distribution.title"]').forEach(el => el.textContent = tokenomicsContent.distribution.title);
        
        const categoryElements = document.querySelectorAll('.token-category');
        if (categoryElements.length === tokenomicsContent.distribution.categories.length) {
            categoryElements.forEach((el, index) => {
                const category = tokenomicsContent.distribution.categories[index];
                el.querySelector('.category-name').textContent = category.name;
                el.querySelector('.category-description').textContent = category.description;
                el.querySelector('.category-percentage').textContent = `${category.percentage}%`;
            });
        }
    };

    // 更新路线图部分
    const updateRoadmap = (roadmapContent) => {
        document.querySelectorAll('[data-i18n="roadmap.title"]').forEach(el => el.textContent = roadmapContent.title);
        
        const phaseElements = document.querySelectorAll('.roadmap-phase');
        if (phaseElements.length === roadmapContent.phases.length) {
            phaseElements.forEach((el, index) => {
                const phase = roadmapContent.phases[index];
                el.querySelector('.phase-title').textContent = phase.title;
                
                const itemsList = el.querySelector('.phase-items');
                if (itemsList && phase.items.length > 0) {
                    itemsList.innerHTML = '';
                    phase.items.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        itemsList.appendChild(li);
                    });
                }
            });
        }
    };

    // 更新团队部分
    const updateTeam = (teamContent) => {
        document.querySelectorAll('[data-i18n="team.title"]').forEach(el => el.textContent = teamContent.title);
        document.querySelectorAll('[data-i18n="team.description"]').forEach(el => el.textContent = teamContent.description);
        
        const memberElements = document.querySelectorAll('.team-member');
        if (memberElements.length === teamContent.members.length) {
            memberElements.forEach((el, index) => {
                const member = teamContent.members[index];
                el.querySelector('.member-name').textContent = member.name;
                el.querySelector('.member-role').textContent = member.role;
                el.querySelector('.member-bio').textContent = member.bio;
            });
        }
    };

    // 更新社区部分
    const updateCommunity = (communityContent) => {
        document.querySelectorAll('[data-i18n="community.title"]').forEach(el => el.textContent = communityContent.title);
        document.querySelectorAll('[data-i18n="community.description"]').forEach(el => el.textContent = communityContent.description);
        
        document.querySelectorAll('[data-i18n="community.platforms.telegram"]').forEach(el => el.textContent = communityContent.platforms.telegram);
        document.querySelectorAll('[data-i18n="community.platforms.twitter"]').forEach(el => el.textContent = communityContent.platforms.twitter);
        document.querySelectorAll('[data-i18n="community.platforms.github"]').forEach(el => el.textContent = communityContent.platforms.github);
        document.querySelectorAll('[data-i18n="community.platforms.discord"]').forEach(el => el.textContent = communityContent.platforms.discord);
    };

    // 更新页脚
    const updateFooter = (footerContent) => {
        document.querySelectorAll('[data-i18n="footer.copyright"]').forEach(el => el.textContent = footerContent.copyright);
        document.querySelectorAll('[data-i18n="footer.links.privacy"]').forEach(el => el.textContent = footerContent.links.privacy);
        document.querySelectorAll('[data-i18n="footer.links.terms"]').forEach(el => el.textContent = footerContent.links.terms);
        document.querySelectorAll('[data-i18n="footer.links.contact"]').forEach(el => el.textContent = footerContent.links.contact);
    };

    // 初始化语言切换器
    createLanguageSwitcher();
    
    // 加载初始语言内容
    loadLanguageContent(currentLang);
});
