<template>
  <div
    ref="provinceRankingBarChart"
    style="width: 100%; height: 100%"
    />
</template>

<script>
import * as echarts from 'echarts'
let chart = null
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {
          provinceList: [],
          valueList: []
        }
      }
    }
  },
  methods: {
    initChart () {
      if (null != chart && undefined != chart) {
        chart.dispose()
      }
      chart = this.$echarts.init(this.$refs.provinceRankingBarChart)
      this.setOptions()
    },
    setOptions() {
      var salvProValue = this.data.valueList;
      var salvProMax = [];//背景按最大值
      for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
      }
      let option = {
        // backgroundColor: "#003366",
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: '2%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + ' : ' + params[0].value
          }
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            },
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: this.data.provinceList
        }, {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '12'
            },
          },
          data: salvProValue
        }],
        series: [{
          name: '值',
          type: 'bar',
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgb(2,163,254,1)'
              }, {
                offset: 1,
                color: 'rgb(125,64,255,1)'
              }]),
            },
          },
          barWidth: 20,
          data: salvProValue
        },
        {
          name: '背景',
          type: 'bar',
          barWidth: 20,
          barGap: '-100%',
          data: salvProMax,
          itemStyle: {
            normal: {
              color: 'rgba(24,31,68,1)',
              barBorderRadius: 30,
            }
          },
        },
        ]
      }
      chart.setOption(option)
    }
  },
  watch: {
    data: {
      handler(newList, oldList) {
        if (oldList != newList) {
          this.setOptions()
        }
      },
      deep: true
    }
  }
}
</script>