---
title: 文件分块上传
copyright_author: JoshuaZheng
date: 2023-10-15 15:53:43
tags: 
  - "JavaScript"
  - "前端"
categories: 
  - "前端"
keywords:
description:
top_img:
comments:
cover: /image/relima-js.jpg
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


# 文件分块上传

```js
/**
 * @description
 * 监听button上传事件
 * 分块上传
 * hash签名
*/

const input = document.querySelector('input');
input.onchange = async (e) => {
    const file = input.files[0];
    if (!file) {
        return;
    }
    const chunks = createChunks(file, 1024 * 100);
    const fileHash = await hash(chunks);
    console.log(fileHash);
}

/**
 * @function 文件分块
 */
function createChunks(file, chunkSize) {
    const result = [];
    for (let i = 0; i < file.size; i += chunkSize) {
        result.push(file.slice(i, i + chunkSize));
    }
    return result;
}

/**
 * @function 文件hash
*/
function hash(chunks) {
    return new Promise((resolve) => {
        const spark = new SparkMD5();
        function _read(i) {
            if (i >= chunks.length) {
                resolve(spark.end())
                return spark.end();
            }
            const blob = chunks[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                const bytes = e.target.result;
                spark.append(bytes);
                _read(i + 1);
            };
            reader.readAsArrayBuffer(blob);
        }
        _read(0);
    })

}


```