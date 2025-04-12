# Abysstech - 去中心化匿名通讯平台

Abysstech是一个提供完全匿名、去中心化通讯的软件平台，基于Solana区块链构建。本项目是Abysstech的官方网站，展示产品信息、代币经济模型、路线图和团队信息。

## 功能特点

- **完全响应式设计**：适配桌面和移动设备
- **多语言支持**：支持英文、中文、越南语、日语、俄语、法语、德语、西班牙语、阿拉伯语
- **交互式功能**：
  - 代币合约地址一键复制
  - 自定义鼠标样式
  - 代币分配饼状图可视化
  - 动态背景效果
- **社交媒体链接**：X/Twitter、Telegram、GitHub、Discord等入口

## 技术栈

- HTML5
- CSS3 (动画、响应式设计)
- JavaScript (ES6+)
- Chart.js (用于代币分配饼状图)
- 无第三方依赖框架，纯原生开发

## 部署指南

### Vercel部署

1. 在GitHub上创建新仓库并上传此项目
2. 在Vercel上导入GitHub仓库
3. 部署设置中使用以下配置:
   - 构建命令: 无需构建命令
   - 输出目录: `src`
   - 环境变量: 无需特殊环境变量

### 域名配置 (abysstech.xyz)

1. 登录Porkbun域名管理面板
2. 进入DNS设置
3. 添加以下DNS记录:
   - 类型: `A`
   - 主机名: `@`
   - 值: Vercel提供的IP地址
   - TTL: `600`
4. 添加CNAME记录:
   - 类型: `CNAME`
   - 主机名: `www`
   - 值: `abysstech.xyz`
   - TTL: `600`
5. 在Vercel项目设置中添加自定义域名 `abysstech.xyz`

## 项目结构

```
abysstech/
├── src/                  # 网站源代码
│   ├── content/          # 多语言内容文件
│   │   ├── en.json       # 英文
│   │   ├── zh.json       # 中文
│   │   ├── ja.json       # 日文
│   │   ├── ru.json       # 俄文
│   │   ├── fr.json       # 法文
│   │   ├── de.json       # 德文
│   │   ├── es.json       # 西班牙语
│   │   ├── vi.json       # 越南语
│   │   └── ar.json       # 阿拉伯语
│   ├── scripts/          # JavaScript文件
│   │   ├── main.js       # 主要脚本
│   │   ├── language-switcher.js  # 语言切换功能
│   │   ├── contract-copy.js      # 合约地址复制功能
│   │   ├── custom-cursor.js      # 自定义鼠标功能
│   │   └── tokenomics-chart.js   # 代币分配图表
│   ├── styles/           # CSS样式文件
│   │   └── main.css      # 主样式表
│   ├── images/           # 图片资源
│   │   ├── backgrounds/  # 背景图片
│   │   ├── team/         # 团队成员头像
│   │   └── icons/        # 图标和小图片
│   └── index.html        # 主HTML文件
├── vercel.json           # Vercel配置文件
└── README.md             # 项目说明文档
```

## 自定义和扩展

- 更新团队成员: 修改 `content/*.json` 文件中的团队成员信息
- 更改代币合约地址: 修改 `content/*.json` 文件中的 `contractAddress` 字段
- 添加新语言: 在 `content/` 目录中添加新的语言JSON文件，并在 `language-switcher.js` 中更新语言列表

## 许可

© 2025 Abysstech. 保留所有权利。
