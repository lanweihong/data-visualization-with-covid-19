<template>
  <div
    ref="currentConfirmedComoareBarChart"
    style="width: 100%; height: 100%"
  ></div>
</template>
<script>
import * as echarts from 'echarts'
let chart = null
export default {
  props: {
    title: String,
    data: Object
  },
  methods: {
    initChart () {
      if (null != chart && undefined != chart) {
        chart.dispose()
      }
      chart = this.$echarts.init(this.$refs.currentConfirmedComoareBarChart)
      this.setOptions()
    },
    setOptions() {
      let option = {
        title: {
          text: this.title,
          x: 'center',
          y: 0,
          textStyle: {
            color: '#B4B4B4',
            fontSize: 14,
            fontWeight: 'normal',
          },

        },
        // backgroundColor: '#191E40',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.9)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC'
            }
          }
        },
        legend: {
          data: ['累计治愈', '累计确诊'],
          textStyle: {
            color: '#B4B4B4'
          },
          top: '5%',
        },
        grid: {
          x: '12%',
          width: '82%',
          y: '12%',
        },
        xAxis: {
          data: this.data.dateList,
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [{
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            }
          },
          axisLabel: {
            formatter: '{value} ',
          }
        },
        {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            }
          },
          axisLabel: {
            formatter: '{value} ',
          }
        }],
        series: [
          {
            name: '累计治愈',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#956FD4' },
                    { offset: 1, color: '#3EACE5' }
                  ]
                )
              }
            },
            data: this.data.curedCountList
          },
          {
            name: '累计确诊',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: 'rgba(119,60,243,0.7)' },
                    { offset: 0.3, color: 'rgba(119,60,243,0.5)' },
                    { offset: 1, color: 'rgba(119,60,243,0)' }
                  ]
                )
              }
            },
            z: -12,
            data: this.data.confirmedCountList
          },
        ]
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