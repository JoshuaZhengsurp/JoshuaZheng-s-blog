---
title: 二维计算几何模板
copyright_author: JoshuaZheng
date: 2024-3-1 23:42:55
tags:
- '前端'
- '图像操作'
- 'canvas'
  categories: "frontend"
  keywords: "frontend"
  description:
  top_img: 
  comments:
  cover: /image/linmeng2.png
  toc:
  toc_number:
  toc_style_simple:
  copyright:
  copyright_author_href:
  copyright_url:
  copyright_info:
  mathjax:
  katex:
  aplayer:
  highlight_shrink:
  aside:

---

近期工作时遇到这个问题，简单记录一下。



svg转成png

```js
export async function svgToPng(svgElement) {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    // const svgData = await fetch(url).then(res=>res.text());
	return new Promise((resolve)=>{
        const Img = new Image();
        Img.onload = async function() {
            const canvas = document.createElement('canvas');
            canvas.width = Img.width;
            canvas.height = Img.height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(Img, 0, 0); // 绘制图像
            const pngUrl = canvas.toDataURL('image/png');
            resolve(pngUrl);
        };
        Img.src = 'data:image/svg+xml;base64,' + btoa(svgData); // 转成base64数据
    })
}
```



使用a标签导出

```js
async function exportSvgToPng (svgElement) {
    const pngUrl = await svgToPng(svgElement);
    const link = document.createElement('a');
    link.download = 'demo.png';
    link.href = pngUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeClick(link);
}
```

![](https://img2.imgtp.com/2024/03/07/tcImkC8j.png)



