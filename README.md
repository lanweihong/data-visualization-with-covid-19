# 新冠肺炎疫情数据大屏

**最近收到很多网友的反馈，问能不能将后台代码也发出来？最近工作忙，晚一点我会整理后代码再传到 Github 上。**

使用 Vue + DataV + ECharts + Element UI 打造的新冠肺炎疫情数据大屏。

## 演示

提供两个演示地址，一个疫情真实数据演示，由于数据更新较慢，隔几小时更新一次的，所以我又提供了一个模拟数据的地址，数据变化较快，可看出一定的效果。**仅适配 1080P 屏幕，使用浏览器访问后按 F11 进入全屏可看最佳显示效果。**

1. 疫情真实数据演示地址：[演示地址-真实数据](http://datav.covid19.lanweihong.com/#/)

2. 模拟数据演示地址：[演示地址-模拟数据](http://demo.datav.covid19.lanweihong.com/#/)

效果图：

![效果图](https://github.com/lanweihong/data-visualization-with-covid-19/blob/main/preview/demo-datav-covid-19-preview-compression.png)

## 技术栈

 - [Vue.js](https://cn.vuejs.org/)
 - [Apache ECharts](https://echarts.apache.org/zh/index.html)
 - [DataV](http://datav.jiaminghi.com/)
 - [axios](https://axios-http.com/)
 - [Element UI](https://element.eleme.io/#/zh-CN)

## 开发

代码中各种图表均已封装成组件，查看相关的代码请看组件代码。

## 项目结构

```shell
├─build
├─data                                   # 本地模拟数据目录
├─mock                                   # mock 配置
├─public
└─src
    ├─api                                # 接口封装目录
    ├─assets
    ├─components                         # 组件目录
    │  ├─About                           # 关于
    │  ├─BasicDataItemLabel              # 基本数据显示标签
    │  ├─BasicProportionChart            # 占比图表
    │  ├─BasicTrendChart                 # 趋势图表
    │  ├─ChartCard                       # 图表面板
    │  ├─CuredAndDeadRateChart           # 治愈率和死亡率图表
    │  ├─CurrentConfirmedCompareBarChart # 最近一周累计治愈图表
    │  ├─DataMap                         # 数据地图
    │  └─ProvinceRankingBarChart         # 累计排名图表
    ├─libs                               # 一些常用的配置
    ├─router                             # 路由配置
    ├─utils                              # 工具类
    └─views                              # 视图
```

## 项目构建

```shell
# 安装依赖
npm install

# 运行
npm run dev

# 打包
npm run build
```

## 最后

这个项目是个人学习作品，能力有限，难免会有 BUG 和错误，敬请谅解。如有更好的建议或想法，请指出，谢谢。
