# 🌌 星云漩涡 · Nebula Vortex

> 从混沌中诞生秩序，在漩涡中凝聚力量。探索无限可能的数字宇宙。

## 🚀 项目简介

星云漩涡是一个基于现代Web技术栈构建的网站项目，体现了从混沌到秩序、从简单到复杂的哲学理念。项目采用模块化架构设计，具备高度的可扩展性和演化能力。

## 🏗️ 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel (推荐)

## 📁 项目结构

```
nebula-vortex/
├── app/                    # 应用页面 (App Router)
│   ├── about/             # 关于页面 (哲学理念)
│   ├── services/          # 服务页面 (服务介绍)
│   ├── contact/           # 联系页面 (联系表单)
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # 可复用组件
│   ├── ui/               # UI基础组件 (Button等)
│   ├── layout/           # 布局组件 (Navbar, Footer)
│   └── core/             # 核心业务组件
├── lib/                  # 工具函数和常量
│   ├── constants/        # 常量定义
│   ├── utils/            # 工具函数
│   └── types/            # TypeScript类型定义
├── hooks/                # 自定义React Hooks
└── public/               # 静态资源
```

## 🛠️ 开发指南

### 环境要求
- Node.js 18+ 
- npm 或 yarn 或 pnpm

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式
```bash
npm run dev
# 访问 http://localhost:3000
```

### 生产构建
```bash
npm run build
npm run start
```

## 🌐 部署指南

### Vercel部署 (推荐)
1. 将代码推送到GitHub仓库
2. 访问 [vercel.com](https://vercel.com)
3. 导入GitHub仓库
4. 自动部署完成

### 手动部署到Vercel
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署
vercel --prod
```

### 其他部署方式
- **Netlify**: 拖拽`out`文件夹到Netlify Drop
- **GitHub Pages**: 配置为静态站点
- **Docker**: 使用提供的Dockerfile

## 🎨 设计系统

### 色彩系统
- `nebula-dark` (#0a0e27): 宇宙背景
- `nebula-core` (#6d28d9): 漩涡中心
- `nebula-glow` (#8b5cf6): 能量辐射
- `nebula-dust` (#c4b5fd): 星云尘埃
- `nebula-light` (#f0f9ff): 星光
- `accent` (#10b981): 强调色

### 动画系统
- `animate-swirl`: 旋转动画 (20s)
- `animate-pulse-glow`: 脉动辉光 (4s)
- `animate-float`: 漂浮效果 (6s)
- `animate-spin-slow`: 缓慢旋转 (20s)

## 📱 响应式设计

- **移动端**: < 640px
- **平板**: 640px - 1024px
- **桌面端**: > 1024px

所有组件都经过响应式测试，确保在不同设备上都有良好的体验。

## 🔧 扩展指南

### 添加新页面
1. 在`app/`目录下创建新文件夹 (如 `app/blog/`)
2. 创建`page.tsx`文件作为页面内容
3. 在`lib/constants/site.ts`中添加导航项

### 添加新组件
1. 在`components/`相关子目录下创建组件
2. 使用`@/`别名导入其他模块
3. 确保组件支持响应式和可访问性

### 修改样式
1. 全局样式在`app/globals.css`
2. 组件样式使用Tailwind CSS类名
3. 主题配置在`tailwind.config.mjs`

## 🚀 性能优化

- ✅ 图片优化 (Next.js Image组件)
- ✅ 代码分割 (自动按路由分割)
- ✅ 字体优化 (next/font)
- ✅ 静态生成 (适合内容页面)
- ✅ 服务端渲染 (适合动态页面)

## 📊 SEO配置

- 每个页面都有独立的metadata配置
- 支持Open Graph协议
- 语义化HTML结构
- 响应式meta viewport

## 🔒 安全考虑

- Content Security Policy (CSP) 就绪
- 安全的HTTP头部
- 输入验证和输出编码
- 依赖包定期更新

## 🤝 贡献指南

1. Fork项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证。详见 [LICENSE](LICENSE) 文件。

## 🆘 支持

如有问题，请：
1. 查看 [文档](https://nebula-vortex.vercel.app/docs)
2. 提交 [Issue](https://github.com/nebula-vortex/nebula-vortex/issues)
3. 发送邮件至 contact@nebula-vortex.com

---

**哲学在行动中验证，系统在反馈中演化** 🌀