# 如何贡献文件

感谢你对这个项目的兴趣！这是一个让大家简单贡献文件的指南。

## 🚀 超级简单的贡献方法（推荐）

### 方法 1：直接使用 GitHub 网页提交（最简单，无需安装任何东西）

1. **打开项目页面**
   - 访问：https://github.com/stomfrom/dongzuo

2. **找到要修改或添加文件的位置**
   - 点击 "动作目录" 文件夹
   - 如果是第一次贡献，建议创建自己的文件夹（例如：你的名字）

3. **上传文件**
   - 点击右上方的 "Add file" -> "Upload files"
   - 拖拽文件或选择文件上传
   - 填写简单的提交信息（例如："添加我的动作文件"）
   - 点击 "Commit changes"

4. **创建 Pull Request**
   - GitHub 会自动帮你创建 Pull Request
   - 点击 "Create pull request" 按钮
   - 填写简单的标题和描述
   - 点击 "Create pull request" 完成！

5. **等待合并**
   - 我会看到你的贡献并合并到项目中

---

### 方法 2：使用 GitHub Desktop 客户端（适合有多个文件要提交）

1. **下载 GitHub Desktop**
   - 访问：https://desktop.github.com/
   - 下载并安装

2. **克隆项目**
   - 打开 GitHub Desktop
   - 点击 "File" -> "Clone repository"
   - 搜索 "dongzuo" 并克隆

3. **添加你的文件**
   - 在本地文件夹中添加或修改文件
   - 建议创建自己的文件夹（例如：你的名字）

4. **提交和推送**
   - 在 GitHub Desktop 中填写提交信息
   - 点击 "Commit to main"
   - 点击 "Push origin"

5. **创建 Pull Request**
   - GitHub Desktop 会提示你创建 Pull Request
   - 点击 "Create Pull Request" 即可

---

### 方法 3：使用命令行（适合熟悉 Git 的人）

```bash
# 1. Fork 项目（在 GitHub 网页上点击 Fork 按钮）

# 2. 克隆你的 Fork
git clone https://github.com/你的用户名/dongzuo.git
cd dongzuo

# 3. 创建分支
git checkout -b 你的分支名

# 4. 添加文件并提交
git add .
git commit -m "添加我的文件"

# 5. 推送到你的 Fork
git push origin 你的分支名

# 6. 在 GitHub 上创建 Pull Request
```

---

## 📁 文件组织建议

我们建议这样组织文件：

```
dongzuo/
├── 动作目录/
│   ├── 张三/              # 张三的文件
│   │   ├── 动作1.src
│   │   └── 动作2.src
│   ├── 李四/              # 李四的文件
│   │   └── 动作A.src
│   └── 公共/             # 大家共享的文件
│       └── 共享文件.src
└── 公共文件/             # 共享资源
```

### 创建自己的文件夹

1. 在 `动作目录` 下创建以你名字命名的文件夹
2. 把你的所有文件都放到这个文件夹里
3. 这样大家的文件不会混淆

---

## ✅ 贡献前检查清单

- [ ] 文件已经放在正确的位置（建议放在自己的文件夹下）
- [ ] 文件名有意义，能看出文件内容
- [ ] 没有上传包含敏感信息的文件
- [ ] 提交信息清晰（例如："添加我的跑步动作文件"）

---

## 💡 小技巧

- **文件名建议**：使用描述性的名称，比如 `跑步_快跑_20240525.src`
- **文件夹组织**：如果有很多文件，可以再按类型分文件夹
- **说明文档**：如果你的文件需要说明，可以在文件夹里加个 `README.md`

---

## ❓ 需要帮助？

如果你有任何问题，可以：

1. 在 GitHub 上开一个 Issue 提问
2. 或者直接提交 Pull Request，我会帮你处理

---

谢谢大家的贡献！🎉
