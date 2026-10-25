# v2：原图替换记录

本次基于已交付的网站源码修改，不改变正文、分类、作者、文献记录或交互逻辑。

| 用户上传文件 | 使用位置 | 网页资源 |
| --- | --- | --- |
| `ai4aiframe.jpg` | Figure 1 概览、放大弹窗和分享图元数据 | `assets/figure-1.jpg` |
| `… (1).png` | L0 人类控制参照区 | `assets/illustration-l0.webp` |
| `… (2).png` | L1 搜索方向标签 | `assets/illustration-l1.webp` |
| `… (3).png` | L2 搜索空间标签 | `assets/illustration-l2.webp` |
| `… (4).png` | L3 评价信号标签 | `assets/illustration-l3.webp` |
| `… (5).png` | Learning 卡片 | `assets/robot-learning.webp` |
| `… (6).png` | Inference 卡片 | `assets/robot-inference.webp` |
| `… (7).png` | Data 卡片 | `assets/robot-data.webp` |
| `… (8).png` | Infrastructure 卡片 | `assets/robot-infrastructure.webp` |

## 图像处理边界

- Figure 1 JPEG 原文件逐字节复制，保持原始尺寸 2048 × 1046。
- 八张 PNG 原文件逐字节保存在 `originals/`。
- 网页副本只去除外围近透明留白、等比例缩小并放入 960 × 960 透明画布，再用无损 WebP 编码。没有生成新图、改色或重绘。
- 显示使用 `object-fit: contain`，没有拉伸；关闭原卡片的 multiply 叠色，保留机器人白色机身。
- 框架标签在桌面端采用文字与插图并排，在移动端采用图上文下。四个分支卡片使用统一的图像显示区域。

## 保持不变

`data.js`、`app.js`、`references.json`、`citation.bib`、论文 PDF 和 Figure 2–5 与上一版文件字节一致。网页的可见正文文本也与上一版一致。

## 单文件版

`tools/make_standalone.py` 已支持 JPEG、PNG、WebP 和 SVG，并检查 CSS / JavaScript 插入点，避免 HTML 属性顺序变化导致静默漏打包。

此版本为本地文件交付，未自动发布或覆盖任何线上网站。
