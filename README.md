# dongzuo - 文件共享仓库

这个仓库用于收集和存储分散在不同人电脑中的文件。每个人只需要把自己拥有的文件上传到这里即可。

## 如何使用

### 1. 克隆仓库（首次使用）
```bash
git clone https://github.com/stomfrom/dongzuo.git
cd dongzuo
```

### 2. 添加你的文件
将你的文件复制到仓库目录中。建议按照以下结构组织文件：
```
dongzuo/
├── 用户A/
│   ├── 文件1.txt
│   └── 文件2.pdf
├── 用户B/
│   ├── 文档.docx
│   └── 图片.jpg
└── 公共文件/
    ├── 共享资源1.zip
    └── 共享资源2.tar.gz
```

### 3. 提交并推送更改
```bash
git add .
git commit -m "添加用户A的文件"
git push origin main
```

### 4. 更新已有仓库（后续使用）
如果你已经克隆过仓库，只需：
```bash
cd dongzuo
git pull origin main  # 获取最新文件
# 添加你的新文件
git add .
git commit -m "添加新文件"
git push origin main
```

## 注意事项

1. **文件命名**：建议使用清晰、有意义的文件名
2. **目录组织**：可以按用户、日期或文件类型创建子目录
3. **大文件**：如果文件很大（>100MB），考虑使用Git LFS
4. **冲突处理**：如果多人同时修改同一文件，可能需要手动解决冲突
5. **隐私保护**：不要上传敏感或私密文件到公开仓库

## 文件类型建议

这个仓库可以存储各种类型的文件：
- 文档：.txt, .doc, .docx, .pdf, .md
- 图片：.jpg, .png, .gif, .bmp
- 压缩包：.zip, .rar, .7z, .tar.gz
- 代码文件：.py, .js, .html, .css
- 数据文件：.csv, .json, .xml

## 贡献指南

1. Fork这个仓库到你的GitHub账户
2. 在你的fork中添加文件
3. 向原仓库提交Pull Request
4. 等待管理员审核并合并

## 许可证

本项目采用MIT许可证 - 详见 [LICENSE](LICENSE) 文件