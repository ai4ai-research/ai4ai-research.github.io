# AI4AI Survey Website — v2 原图版

AI4AI: Toward AI-discovered Superintelligence

这是一个完整的英文综述静态网站。页面结构参考 EVLA Survey。v3 已对齐新版稿件（72 页）：作者与通讯作者、摘要与关键词、各节页码、Figure 1–8、第 8 节开放问题与未来工作；并启用用户提供的 AI4AI logo 与 favicon。v4 按新版稿件重建了文献库：319 条参考文献按新编号与页码收录，第 4–7 节（L1–L3 各章与 Applications & Benchmarks）提到的全部 280 项工作带有稿件给出的等级、应用分支与出处；点击标题直接打开论文链接。构建规则见 `SOURCE_NOTES.md` 的 v4 一节。网站已通过 GitHub Pages 发布：https://ai4ai-research.github.io/。

## 运行

直接用浏览器打开 `index.html`。页面不依赖 npm、第三方脚本、在线字体或后端接口。页面本体可以离线使用；外部论文链接仍需要联网。

也可以在此目录运行：

```bash
python -m http.server 8000
```

然后在浏览器访问 `http://localhost:8000`。目录中的全部文件可作为静态网站的发布内容。

## 文件

- `index.html`：论文首页、概览、L1–L3 框架、应用分支、文献库、开放问题和引用。
- `styles.css`：版式、响应式样式、Figure 1 对应的设计配色。
- `app.js`：导航、分节切换、责任来源演示、文献筛选、分页、弹窗和导出。
- `data.js`：网页实际读取的文献数据。编辑文献时修改此文件。
- `references.json`：同一份文献数据的导出快照；不会自动与 `data.js` 同步。
- `citation.bib`：按所给稿件生成的 manuscript 引用，不编造年份或 arXiv 编号。
- `assets/`：所给论文、用户提供的 Figure 1 原始 JPEG、从新版 PDF 渲染的 Figure 2–8、透明背景 WebP 插图、机构标志，以及 logo 文件包中的 `ai4ai-logo.svg`（页眉与首屏）、`ai4ai-logo-on-dark.svg`（页脚）、`ai4ai-icon.svg` / `favicon.ico` / `apple-touch-icon.png`（浏览器图标）。
- `originals/`：八张用户提供的 PNG 原文件，逐字节保存，未重绘或改色。
- `ASSET_MANIFEST.json`：原文件与网页资源的对应关系、来源文件名、尺寸、裁切范围和校验值。
- `ASSET_UPDATE.md`：此次原图替换的范围和对应位置。
- `tools/make_standalone.py`：将页面、图片、数据和 PDF 打包为单个 HTML，只有 Python 标准库依赖。
- `SOURCE_NOTES.md`：内容来源、分类含义和元数据边界。
- `QA_REPORT.md`：本次交付的渲染与交互检查。

## 页面结构

1. Logo、论文标题、18 位作者（✉ 标注 4 位通讯作者）、8 个机构、联系邮箱、论文和引用入口。
2. Figure 1 概览、核心问题、完整摘要与关键词。
3. L1 / L2 / L3 交互分节：Figure 2–3（L1）、Figure 4–5（L2）、Figure 6（L3），L0 基准和八种 D/S/E 来源组合。
4. Learning、Inference、Data、Infrastructure 四个独立应用分支，附 Figure 7（总览）与 Figure 8（分类）。
5. 文献检索：“Surveyed works”（第 4–7 节提到的 280 项）/ 全部 319 条参考文献，按等级、应用分支、年份、类型（方法、基准、正文讨论、背景文献）交叉筛选，排序、分页和 JSON 导出。点击标题打开论文；ⓘ 卡片列出该工作在稿件中出现的表格、分类图和章节及其页码。
6. 稿件第 8.1 节的五个开放问题，各附 8.2 节对应的未来工作方向。
7. BibTeX 复制与下载。

## 配色

`styles.css` 顶部为集中管理的 CSS 变量。四个卡片底色直接对齐 Figure 1：

| 含义 | 前景色 | 背景色 |
| --- | --- | --- |
| Learning | `#356BA1` | `#E9F2F9` |
| Inference | `#A56317` | `#F8EDE4` |
| Data | `#26786A` | `#E8F0ED` |
| Infrastructure | `#705699` | `#EFEDF6` |
| 控制来源框架、导航、主按钮 | `#244F7B` | 浅蓝 / 白色 |

L1–L3 共用蓝色系统，不把四个应用分支的颜色误用为三个等级。

## 更新与发布

用新稿件替换 `assets/AI4AI_survey.pdf` 后，请同时检查图像、页码、作者、摘要、引用和文献分类。论文外链仅使用原稿明确列出的地址；未提供地址的条目回链到本地 PDF，不猜测链接。

文献运行数据更新后可执行以下命令同步 JSON 快照（需要 Node，仅此更新操作需要）：

```bash
node -e "global.window={};require('./data.js');require('fs').writeFileSync('references.json',JSON.stringify(window.AI4AI_DATA,null,2))"
```

重新生成单文件版：

```bash
python tools/make_standalone.py
```

输出 `ai4ai-standalone.html`。该文件内嵌 PDF，体积较大，适合本地审阅和发送；正式发布宜使用拆分的静态文件目录。

## 权利与隐私

没有加入分析追踪、账户登录、自动提交或外部 API。机构标志和论文图片来自所给稿件；原论文、标志和其他研究成果的权利归原权利人。这里未替其指定新许可证。

## Latest manuscript and figure update

The site now follows AI4AI_survey (1).zip: 80 pages, 10 figures, 336 references, 297 surveyed works and 54 benchmarks. Mechanism and taxonomy figures share one caption and framing system. Taxonomies use vector SVG and readable horizontal scrolling; the figure viewer supports zoom and fit. The current downloadable manuscript is `assets/AI4AI_survey_latest.pdf`. See `SOURCE_NOTES.md` and `ASSET_MANIFEST.json` for provenance.

GitHub Pages publishes the root of `main` automatically after committed updates.
