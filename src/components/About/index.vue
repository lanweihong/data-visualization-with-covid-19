<template>
  <div class="about">
    <div class="about-info">
      <p>这个数据大屏使用 Vue + DataV + Echarts + Element UI 编写，数据实时且真实，来自 <a href="https://news.qq.com/zt2020/page/feiyan.htm#/" target="_blank">腾讯新闻-实时更新：新冠肺炎疫情最新动态</a> 。</p>
      <p>目前仅针对 1080P 做适配，以后如果有时间可能适配更多的屏幕尺寸以及做优化。</p>
      <p>作者：{{ author }}</p>
      <p>联系方式：{{ contact }}</p>
      <p>Github：<a href="https://github.com/lanweihong/data-visualization-with-covid-19" target="_blank">data-visualization-with-covid-19</a></p>
      <p>博客：<a href="https://blog.lanweihong.com/" target="_blank">https://blog.lanweihong.com/</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      author: 'lanweihong',
      contact: '986310747@qq.com'
    }
  }
}
</script>
<style  scoped>
.about-info {
  text-align: left;
}
.about-info p {
  line-height: 30px;
}
</style>