---
title: ssh_connection
copyright_author: JoshuaZheng
date: 2023-09-14 18:29:00
tags:
  - "wsl"
  - "linux"
categories:
  - "linux"
keywords:
description:
top_img:
comments:
cover:
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

SSH CONNECTION SUCCESS!!!

# WSL远程ssh连接
## WSL安装ssh
（Ubuntu20.04子系统自带的ssh服务可能无法连接）
- 卸载ssh：``apt remove openssh-server``
- 重装ssh：``apt install openssh-server``

## 修改配置
```linux
Port 2222
ListenAddress 0.0.0.0

PasswordAuthentication yes
PermitRootLogin yes
```
启动ssh：``service ssh restart``
（开机自启：/etc/init.wsl添加：service ssh start）

## ssh连接

### 本地ssh连接
``ssh root@localhost -p 2222``

### 远程ssh连接
wsl上：apt install net-tools

ifconfig查看ip（端口已被设置为2222）

设置端口转发规则：
就是0.0.0.0:2222 数据流量要转发到 [IP]:[PORT]
``netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=2222 connectaddress=[IP] connectport=[PORT]``

允许端口为2222的TCP流量通过windows防火墙：
``netsh advfirewall firewall add rule name=WSL2 dir=in action=allow protocol=TCP localport=2222``

远程连接：``ssh [USERNAME]@[IP] -p [PORT]``
