# Perseus Web 前端项目

## 项目介绍

Perseus Web 是一个基于 Vue 3 + TypeScript + Vite 构建的现代化前端项目，采用了组件化、模块化的开发方式，支持国际化、主题定制等特性。项目集成了 Element Plus 组件库，提供了丰富的 UI 组件和交互体验。

## 技术栈

- **核心框架**：Vue 3.5 + TypeScript + Vite 6
- **状态管理**：Pinia 3
- **路由管理**：Vue Router 4
- **UI 组件库**：Element Plus 2.8
- **CSS 预处理器**：Sass
- **HTTP 客户端**：Axios
- **国际化**：Vue I18n 9
- **工具库**：VueUse 11
- **富文本编辑器**：WangEditor 5
- **图表库**：ECharts 5
- **代码规范**：ESLint 9 + Prettier 3 + StyleLint 16
- **Git 规范**：Husky 9 + CommitLint 19

## 项目结构

```
perseus-web/
├── public/                     # 静态资源
├── src/                        # 源代码
│   ├── api/                    # API 接口
│   ├── assets/                 # 资源文件
│   │   ├── img/               # 图片资源
│   │   ├── styles/            # 样式文件
│   │   ├── svg/               # SVG 图标
│   │   └── icons/             # 图标文件
│   ├── components/            # 公共组件
│   ├── composables/           # 组合式函数
│   ├── config/                # 配置文件
│   ├── directives/            # 自定义指令
│   ├── enums/                 # 枚举定义
│   ├── language/              # 国际化配置
│   ├── layouts/               # 布局组件
│   ├── locales/               # 国际化文件
│   ├── mock/                  # 模拟数据
│   ├── router/                # 路由配置
│   │   ├── guards/           # 路由守卫
│   │   ├── routes/           # 路由定义
│   │   ├── utils/            # 路由工具函数
│   │   ├── index.ts          # 路由入口
│   │   └── routesAlias.ts    # 路由别名
│   ├── store/                 # 状态管理
│   │   ├── modules/          # 状态模块
│   │   └── index.ts          # 状态管理入口
│   ├── types/                 # TypeScript 类型定义
│   ├── utils/                 # 工具函数
│   │   ├── http/             # HTTP 请求工具
│   │   ├── colors/           # 颜色工具
│   │   └── worktab/          # 工作标签页工具
│   ├── views/                 # 页面组件
│   │   ├── dashboard/        # 仪表盘页面
│   │   ├── login/            # 登录页面
│   │   ├── system/           # 系统管理页面
│   │   └── exception/        # 异常页面
│   ├── App.vue               # 根组件
│   └── main.ts               # 入口文件
├── .eslintrc.js              # ESLint 配置
├── .gitignore                # Git 忽略文件
├── .prettierrc               # Prettier 配置
├── commitlint.config.js      # CommitLint 配置
├── eslint.config.mjs         # ESLint 新配置
├── index.html                # HTML 模板
├── package.json              # 项目依赖
├── tsconfig.json             # TypeScript 配置
├── vite.config.ts            # Vite 配置
└── README.md                 # 项目说明文档
```

## 特性

- **TypeScript 支持**：使用 TypeScript 进行类型检查，提高代码质量和开发效率
- **组件自动导入**：通过 unplugin-auto-import 和 unplugin-vue-components 实现组件和 API 的自动导入
- **国际化支持**：集成 Vue I18n，支持多语言切换
- **主题定制**：支持亮色/暗色主题切换，基于 Element Plus 的主题定制功能
- **路由管理**：基于 Vue Router 的路由配置，支持路由守卫和权限控制
- **状态管理**：使用 Pinia 进行状态管理，支持模块化和持久化
- **代码规范**：集成 ESLint、Prettier、StyleLint 进行代码规范检查和格式化
- **Git 规范**：使用 Husky 和 CommitLint 规范 Git 提交信息
- **构建优化**：支持 Gzip 压缩、代码分割、懒加载等优化策略
- **丰富组件**：集成了富文本编辑器、图表、图标选择器、图片裁剪等多种实用组件
- **Mock 数据**：内置 Mock 数据，方便前端独立开发和测试

## 开发环境

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run serve
```

### 代码检查和格式化

```bash
# ESLint 检查
npm run lint

# StyleLint 检查
npm run lint:style

# Prettier 格式化
npm run format
```

## 开发规范

### 命名规范

- 文件夹和文件名：使用 kebab-case（短横线）命名
- 组件名：使用 PascalCase（大驼峰）命名
- 变量和函数：使用 camelCase（小驼峰）命名
- 常量：使用 UPPER_SNAKE_CASE（大写下划线）命名
- 枚举：使用 PascalCase（大驼峰）命名，并以 Enum 结尾

### 代码提交规范

项目使用 CommitLint 规范提交信息，提交格式如下：

```
<type>(<scope>): <subject>
```

常用的 type 类型：

- feat: 新功能
- fix: 修复 Bug
- docs: 文档更新
- style: 代码风格或格式修改
- refactor: 代码重构
- perf: 性能优化
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 项目配置

### Vite 配置

项目使用 Vite 作为构建工具，主要配置如下：

- 路径别名：`@` 指向 `src` 目录，`@views` 指向 `src/views` 等
- 开发服务器：支持跨域和代理
- 构建优化：支持 Gzip 压缩、代码分割、Tree Shaking 等
- 自动导入：配置了 Vue、Vue Router、Pinia、VueUse 等库的自动导入
- 组件注册：自动注册 src/components 下的组件

### TypeScript 配置

项目使用 TypeScript 进行类型检查，主要配置如下：

- 编译目标：ES2015
- 严格模式：启用所有严格类型检查选项
- 路径别名：与 Vite 配置保持一致

## 常见问题

### 如何添加新页面？

1. 在 `src/views` 目录下创建页面组件
2. 在 `src/router/routes` 目录下的路由文件中添加路由配置
3. 如需添加菜单，在路由 meta 中配置相关信息

### 如何添加新 API？

1. 在 `src/api` 目录下创建 API 文件
2. 使用 Axios 实例发起请求
3. 在组件中导入并使用 API

### 如何添加国际化内容？

1. 在 `src/language` 目录下的语言文件中添加翻译内容
2. 在组件中使用 `t()` 函数获取翻译内容

### 如何使用路由别名？

1. 在 `src/router/routesAlias.ts` 中定义路由别名
2. 在需要使用的地方导入并使用

## 贡献指南

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'feat: add your feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 许可证

[MIT](LICENSE)