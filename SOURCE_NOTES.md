# 内容来源与分类说明

## 主要来源

`assets/AI4AI_survey.pdf`，68 页。英文表述保留原稿的控制来源框架，不把更高等级解释成更高能力。

| 网页模块 | 稿件位置 |
| --- | --- |
| 标题、作者、机构、摘要 | 第 1 页 |
| Figure 1 总览 | 第 4 页 |
| L0–L3 定义、D/S/E 责任来源、E > S > D 规则 | 第 7–12 页，重点第 11 页 |
| L1 说明与 Figure 2 | 第 12–20 页，图在第 14 页 |
| L2 说明与 Figure 3 | 第 20–25 页，图在第 21 页 |
| L3 说明与 Figure 4 | 第 25–31 页，图在第 26 页 |
| 四个应用分支与 Figure 5 | 第 31–42 页，图在第 32 页 |
| 76 个应用配置 | 表 5–8，第 35、37、39、41 页 |
| 五个开放问题 | 第 42–44 页 |
| 参考文献 | 第 45–67 页 |
| Benchmark / 评测环境 | 表 9，第 68 页 |

外部设计参考：`https://evla-survey.github.io/`。参考其论文首页、总览图、分节图解和可筛选文献列表的浏览结构，不使用该站论文内容作为 AI4AI 的事实来源。

## 统计口径

- 317 条参考文献记录，保留原稿编号，不声称全部是互不重复的独立论文。
- 154 条网站注释条目，包含下述 76 个应用配置、章节级方法、组件、候选评估方法、边界案例以及评测条目。
- 76 个应用表格配置：67 个 L1、8 个 L3、1 个 L0；应用表格内没有独立 L2 配置。
- 27 条 Benchmark / 评测环境记录。原稿中的 Search、Artifact、Agent、Execution 类型分别保留。

这不是新进行的全网文献检索。年份、论文标题、出版信息和引用关系均沿用所给稿件；没有逐条验证为最新出版状态。

## 标签的含义

- **Surveyed configuration**：按应用表格中展示的配置赋予标签，而不是给模型或方法名称永久定级。
- **Chapter-level configuration**：按相关章节的 L1 阅读方式标注，不能推广到同一软件的所有部署。
- **L2 · component**：所给章节讨论的空间构建组件，不是无条件的系统级 L2。例如 Voyager 的技能库是 L2 相关组件；原稿另讨论了其自验证中的 L3 控制。
- **L3 · candidate**：候选评估方法。只有信号进入 AI4AI 闭环并改变训练、选择、分配或接受决定，才构成 L3 证据。
- **Qualified / shared**：保留原稿的共享或受限来源，不把人类 constitution、rubric、质量准则等锚点消除。
- **Boundary case / Not assigned**：不补造等级。
- **Benchmark exposure**：协议允许展示的控制范围，不是 benchmark 自身的等级。L1–L2† 保留原稿关于空间来源尚未被审计、评价固定且隐藏的限定。

文献列表的 L1/L2/L3 筛选包含相应配置、组件或候选证据；各行同时显示证据类型。基准没有被强行转为这些方法等级。

## 原稿中不一致或缺失的元数据

原稿应用表格的 “CUDA kernel evolution” 对应参考文献 [34]，其文献题目写的是 “Evolution of kernels: Automated RISC-V kernel optimization with large language models”。网站保留两种源标签并在详情卡中注明，不擅自改成另一篇文献。

若原稿未给出论文 URL，网站链接到相应 PDF 参考页，而不推测 DOI / arXiv 地址。网站引用为 manuscript 形式；原稿未提供当前综述的正式出版标识，因此没有杜撰。

## 素材

Figure 1 从 PDF 的嵌入图像提取并正确合成透明蒙版；Figure 2–5 从原 PDF 的矢量页裁出并渲染。只调整网页展示尺寸，没有改写图内内容。应用卡片的机器人来自 Figure 1，机构标志来自第 1 页。


## v2：用户提供的原始图像

本次只更新网页图像及其排版。Figure 1 使用用户提供的 `ai4aiframe.jpg`，文件内容未重新压缩或改绘。八张透明背景 PNG 分别对应 L0、L1、L2、L3、Learning、Inference、Data、Infrastructure，原始 PNG 存于 `originals/`。网页用副本保留透明通道，按可见内容的外边界留出缓冲并等比例缩小到统一画布，再以无损 WebP 编码，未对人物、机器人或图标的内容进行改绘。详细映射见 `ASSET_MANIFEST.json`。

正文文本、文献数据、分类逻辑、作者、引用、论文 PDF 以及 Figure 2–5 与上一版一致；本次未进行任何文献更新或外部资料核验。

## v3：新版稿件（72 页）与 logo

**已同步到新版稿件的部分**

| 网页模块 | 新版稿件位置 |
| --- | --- |
| 标题、作者（含通讯作者）、机构、摘要、关键词 | 第 1 页 |
| Figure 1 总览（图像未变，沿用原文件） | 第 4 页 |
| 归属规则 “How attribution works” | 3.1 节，第 8 页 |
| 控制来源阶梯与 E > S > D 规则 | 3.6 节，第 12 页 |
| L1：Figure 2（新增机制图）、Figure 3（分类图） | 第 13 页起；图在第 14、16 页 |
| L2：Figure 4（新增机制图）、Figure 5（分类图） | 第 22 页起；图在第 22、24 页 |
| L3：Figure 6（分类图） | 第 28 页起；图在第 29 页 |
| 应用分支：Figure 7（新增总览）、Figure 8（分类图） | 第 34 页起；图均在第 35 页 |
| 五个开放问题（8.1）及对应的未来工作（8.2） | 第 45–48 页 |
| 参考文献 | 第 50–72 页 |

- 摘要与新版第 1 页逐字比对一致；新增关键词行。
- 通讯作者按第 1 页的信封标记：He Zhang、Nanning Zheng、Hongkun Dou、Jingwen Fu。联系邮箱按要求只放第一作者 Siyuan Liu 的 s-lsyuan25@bza.edu.cn。
- Figure 2–8 由新版 PDF 的对应页面以 288 dpi 渲染、裁去图注并修边后保存为 WebP，未改绘内容。旧版 Figure 2–5 的网页文件已按新编号覆盖（旧文件备份在站点目录外）。
- 第 8 节已重写：网页的五个问题改为新版 8.1 的五个问题，每题的“未来工作”框对应 8.2 中一一对应的研究方向。问题正文为对原文的意译摘要。
- Logo 来自用户提供的 logo 文件包（`ai4ai-logo.svg`、`ai4ai-logo-on-dark.svg`、`ai4ai-icon.svg`、`favicon.ico`、`apple-touch-icon.png`），未修改。

**按用户要求暂未同步的部分：文献库（`data.js`、`references.json`）**

文献库仍是上一版稿件（68 页、317 条参考文献）的数据。与新版的差异：

- 新版有 319 条参考文献，从约第 34 条起整体重新编号；网页条目上的 `[编号]` 与 “Reference in PDF / Survey evidence · p. N” 页码仍对应旧版。
- 新增文献：The Agentic Scientist（新 [118]）、Recursive self-improvement of AI research agents（新 [219]）。WizardLM（新 [276]）与 CRAFT（新 [288]）在新版中题目措辞有变。
- 新版方法表缩减为 Table 3–10：上一版 154 条注释条目中约 75 条仍出现在新表中；基准表由附录 Table 9（27 条）改为正文 Table 10（14 条）。
- 新版的 “Evolution of Kernels / CUDA kernel evolution” 引用 [87]，而 [87] 的文献条目是 Ping Guo 等人的 “Code evolution for control: Synthesizing policies via LLM-driven evolutionary search”，与正文描述不符（上一版对应的是 Chen 等人的 RISC-V kernel 论文）。疑为稿件的 BibTeX 条目错误，建议作者核对。

## v4：按新版稿件重建文献库

v3 中“暂未同步”的文献库已按新版稿件重建（上一版数据备份在站点目录外的 `backup-before-visual-update/data.v2.js`）。

**收录范围**
- 全部 319 条参考文献按新版编号、引用文本与参考文献页码收录。
- “Surveyed works” = 第 4–7 节（L1、L2、L3 各章与 Applications & Benchmarks）正文、表格或分类图中引用的全部 280 项工作；其余 39 条只在第 1–3、8–9 节被引用，列为背景文献。

**等级、分支与类型的来源（按强弱排序）**
1. 表格：Table 3（L1）、Table 4（L2）、Table 5（L3 候选）、Table 6–9 的 Level 列；详情卡显示对应列的原文（如 AI-designed / Human-fixed）。
2. 分类图：Figure 3 的叶节点记为 L1；Figure 5 记为 L2（按组件归属）；Figure 6 记为 L3 候选（图注说明叶节点不是无条件的 L3）；Figure 5 标注的 ToolMaker、SkillX 记为边界案例，不给等级。
3. 章节正文：只在某章正文中讨论的工作，标为该章等级并显示“§x.y · discussed”，不当作表格级别的认定。基准不因正文提及而获得等级。
- 应用分支来自 Figure 8、Table 6–10 与第 7.1–7.4 节；第 7.5 节与 Table 10 的跨分支部分记为 Cross-family。
- 类型：Method（出现在表格或分类图中）、Benchmark（Table 10、Figure 3 的 search replay 分支与各 “Benchmarks for AI4AI …” 段落；Data-Juicer 除外）、Discussed in text（仅正文提及）、Contextual reference。
- 简称优先取表格/分类图中的写法，其次取标题冒号前的名称（按正文大小写）；个别按正文用法修正，如 CRITIC、Jr. AI Scientist、NOAH。

**文章链接（点击标题打开）**
- 198 条来自稿件引用中的 arXiv 编号或网址。
- 119 条由标题检索获得：arXiv、OpenAlex、Crossref、DataCite。只接受标题高度一致（相似度 ≥ 0.9）且第一作者姓氏一致的记录，优先使用 arXiv 摘要页，其次 DOI。OpenEvolve 使用上一版稿件所给的 GitHub 地址；Cosmopedia 使用 Hugging Face 博客原文页。每条的来源记录在 `urlSource` 字段。
- AIE-Bench [172] 与 DDSAS [281] 未找到可核验的链接，标题链接到 Google Scholar 标题检索（图标为放大镜）。

**仍需作者核对**：正文的 “Evolution of Kernels / CUDA kernel evolution” 引用 [87]，但 [87] 是 “Code evolution for control …”（见 v3 一节）。网页照稿件收录。