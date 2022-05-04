---
home: true
heroImage: /images/hero.jpeg
heroText: null
tagline: null
actionText: 快速导航 →
actionLink: /guide/
features:
- title: 从 JDK8 到 JDK17 的GC进展
  link: /guide/guide.md
  details: JDK17 已经发布了几个月，它不仅包含新的语言功能。与旧JDK版本相比，性能提升也非常显着。与之前的 LTS 版本 JDK8 和 JDK11 相比，这一点变得尤为明显。性能的提升大部分来自 JVM 中的新功能和优化，在这篇文章中，重点将放在垃圾收集领域的改进上。
- title: Large pages and Java
  details: 我最近花了很多时间在 JVM 的内存预留代码上。之所以开始，是因为我们得到了外部贡献，以使 Linux 能够使用多个大页面大小。为了以一种好的方式做到这一点，必须首先重构一些其他的东西。在沿着内存通道进行这次旅行时，我意识到做一个关于 JVM 使用多大页面的简短摘要可能是一个有趣的阅读。
- title: 提高 G1 开箱即用的性能
  details: 几周前，Phoronix 发布了一组比较 JDK8 和 JDK14 的基准测试结果。该报告中展示的 SPECjbb® 2015 结果确实引起了我们的注意。它们无法与我们在自己的测试中看到的相比，这需要进行一些调查。在深入研究我们发现的内容之前，我将首先介绍 JDK8 和 JDK14 之间的一个重大区别的一些背景知识。
  footer: MIT Licensed | Copyright © 2018-present Evan You
---

::: warning
This is a warning
:::

::: slot footer
Licensed | Copyright © 2022-present [huweidong-meta](https://github.com/huweidong-meta)
:::