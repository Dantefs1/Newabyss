# Abysstech.xyz 域名配置指南

本文档提供了如何在Porkbun上配置abysstech.xyz域名，以便将其指向Vercel部署的网站。

## Porkbun DNS配置步骤

### 1. 登录Porkbun账户

1. 访问 [Porkbun官网](https://porkbun.com/)
2. 使用您的账户凭证登录
3. 在控制面板中找到并选择 `abysstech.xyz` 域名

### 2. 配置DNS记录

#### 添加A记录（指向Vercel）

1. 在域名管理页面，点击 "DNS Records" 或 "DNS设置"
2. 找到 "Add Record" 或 "添加记录" 按钮
3. 添加以下A记录:
   - **Type**: `A`
   - **Host**: `@` (这表示根域名)
   - **Answer/Value**: `76.76.21.21` (Vercel的IP地址)
   - **TTL**: `600` (或默认值)
4. 保存记录

#### 添加CNAME记录（用于www子域名）

1. 点击 "Add Record" 或 "添加记录" 按钮
2. 添加以下CNAME记录:
   - **Type**: `CNAME`
   - **Host**: `www`
   - **Answer/Value**: `cname.vercel-dns.com.` (确保包含最后的点)
   - **TTL**: `600` (或默认值)
3. 保存记录

### 3. 验证DNS配置

DNS更改可能需要一些时间才能完全生效（通常在几分钟到48小时之间）。您可以使用以下方法验证配置:

1. 使用命令行工具:
   ```
   dig abysstech.xyz
   dig www.abysstech.xyz
   ```

2. 或使用在线DNS查询工具，如 [MxToolbox](https://mxtoolbox.com/DNSLookup.aspx)

## Vercel配置步骤

### 1. 在Vercel中添加自定义域名

1. 登录您的Vercel账户
2. 选择已部署的Abysstech项目
3. 导航到 "Settings" > "Domains"
4. 点击 "Add Domain"
5. 输入 `abysstech.xyz`
6. 按照Vercel提供的指示进行操作
7. 重复上述步骤，添加 `www.abysstech.xyz`

### 2. 验证域名

1. Vercel会自动检查DNS配置是否正确
2. 如果一切配置正确，域名状态将显示为 "Valid Configuration"
3. 如果出现问题，Vercel会提供具体的错误信息和解决方案

## 故障排除

如果您遇到域名配置问题，请检查:

1. DNS记录是否正确输入
2. 是否等待了足够的时间让DNS更改生效
3. Vercel项目是否成功部署
4. 域名是否在Porkbun上处于活跃状态

## 其他注意事项

- 确保您的Porkbun账户中的域名未过期
- 考虑启用HTTPS（Vercel通常会自动处理）
- 考虑设置域名自动续费，以避免域名过期

如有任何问题，请联系Porkbun客户支持或Vercel支持团队获取帮助。
