---
title: python源配置(pip, conda)
---

# pip 源配置

## pip源配置
::: tip 国内比较好的源
```txt
阿里云
http://mirrors.aliyun.com/pypi/simple/
豆瓣
http://pypi.douban.com/simple/
清华大学
https://pypi.tuna.tsinghua.edu.cn/simple/
中国科学技术大学
http://pypi.mirrors.ustc.edu.cn/simple/
华中科技大学
http://pypi.hustunique.com/
```
:::

::: tip 修改对应配置文件(没有则创建)
- linux: ```~/.pip/pip.conf```
- windows: ```~/pip/pip.ini```
- 下面两个地址可以替换为其他源
```yaml
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host = http://mirrors.aliyun.com
```
:::