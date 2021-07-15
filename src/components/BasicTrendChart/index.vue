<!-- 累计趋势 -->
<template>
  <div ref="basicTrendChart" style="width: 100%; height: 100%" />
</template>
<script>
import * as echarts from 'echarts'
let chart = null
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: Object
  },
  methods: {
    initChart () {
      if (null != chart && undefined != chart) {
        chart.dispose()
      }
      chart = this.$echarts.init(this.$refs.basicTrendChart)
      this.setOptions()
    },
    setOptions() {
      let option = {
        title: {
          text: this.title,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: '6%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['现有确诊新增', '境外输入新增', '无症状感染者'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#BCBCBF'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: this.data.dateList
        }],
        yAxis: [{
          type: 'value',
          name: '单位（例）',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              width: 0,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        }],
        series: [{
          name: '境外输入新增',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(16,97,204, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(17,235,210, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {

              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(16,97,204,1)'
              }, {
                offset: 1,
                color: 'rgba(17,235,210,1)'
              }])
            },
            emphasis: {
              color: 'rgb(0,196,132)',
              borderColor: 'rgba(0,196,132,0.2)',
              extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
              borderWidth: 2
            }
          },
          data: this.data.importedIncrDataList
        }, {
          name: '现有确诊新增',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(205,52,42, 0.5)'
              }, {
                offset: 0.8,
                color: 'rgba(235,235,21, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            },
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(205,52,42,1)'
              }, {
                offset: 1,
                color: 'rgba(235,235,21,1)'
              }])
            },
            emphasis: {
              color: 'rgb(99,250,235)',
              borderColor: 'rgba(99,250,235,0.2)',
              extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
              borderWidth: 2
            }
          },
          data: this.data.currentConfirmedIncrDataList
        },
        {
          name: '无症状感染者',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(119,68,255, 0.5)'
              }, {
                offset: 0.8,
                color: 'rgba(23,32,79, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            },
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(2,163,254,1)'
              }, {
                offset: 1,
                color: 'rgba(119,61,242,1)'
              }])
            },
            emphasis: {
              color: 'rgb(99,250,235)',
              borderColor: 'rgba(99,250,235,0.2)',
              extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
              borderWidth: 2
            }
          },
          data: this.data.noInFectDataList
        }]
      }
      chart.setOption(option)
    }
  },
  watch: {
    data: {
      handler (newValue, oldValue) {
        if (oldValue != newValue) {
          this.setOptions()
        }
      },
      deep: true
    }
  }
}
</script>