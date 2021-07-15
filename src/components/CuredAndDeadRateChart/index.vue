<template>
  <div ref="rateChart" style="width: 100%; height: 100%"></div>
</template>
<script>
let chart = null
export default {
  props: {
    title: String,
    data: Object,
  },
  data () {
    return {
      d: 99
    }
  },
  methods: {
    initChart () {
      if (null != chart && undefined != chart) {
        chart.dispose()
      }
      chart = this.$echarts.init(this.$refs.rateChart)
      this.setOptions()
    },
    setOptions() {
      let curedRateData = [this.data.curedRate, this.data.curedRate, this.data.curedRate];
      let deadRateData = [this.data.deadRate, this.data.deadRate, this.data.deadRate]
      let option = {
        title: [{
          text: (this.data.curedRate * 100).toFixed(2) + '{a|%}',
          textStyle: {
            fontSize: 20,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#bcb8fb',
            rich: {
              a: {
                fontSize: 16,
              }
            }
          },
          x: '20px',
          y: '30%'
        },{
          text: (this.data.deadRate * 100).toFixed(2) + '{a|%}',
          textStyle: {
            fontSize: 20,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#bcb8fb',
            rich: {
              a: {
                fontSize: 16,
              }
            }
          },
          x: '60%',
          y: '30%'
        }],
        graphic: [{
          type: 'group',
          left: '30px',
          top: '60%',
          children: [{
            type: 'text',
            z: 100,
            left: '10',
            top: 'middle',
            style: {
              fill: '#aab2fa',
              text: '治愈率',
              font: '16px Microsoft YaHei'
            }
          }]
        },{
          type: 'group',
          left: '170px',
          top: '60%',
          children: [{
            type: 'text',
            z: 100,
            left: '10',
            top: 'middle',
            style: {
              fill: '#aab2fa',
              text: '死亡率',
              font: '16px Microsoft YaHei'
            }
          }]
        }],
        series: [{
          type: 'liquidFill',
          radius: '80%',
          center: ['20%', '50%'],
          //  shape: 'roundRect',
          data: curedRateData,
          backgroundStyle: {
            color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0.5,
              y2: 1,
              colorStops: [{
                offset: 1,
                color: 'rgba(68, 145, 253, 0)'
              }, {
                offset: 0.5,
                color: 'rgba(68, 145, 253, .25)'
              }, {
                offset: 0,
                color: 'rgba(68, 145, 253, 1)'
              }],
              globalCoord: false
            },
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(69, 73, 240, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(69, 73, 240, .25)'
                }, {
                  offset: 1,
                  color: 'rgba(69, 73, 240, 1)'
                }],
                globalCoord: false
              },
              shadowBlur: 10,
              shadowColor: '#000',
            }
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 1,
                color: 'rgba(58, 71, 212, 0)'
              }, {
                offset: 0.5,
                color: 'rgba(31, 222, 225, .2)'
              }, {
                offset: 0,
                color: 'rgba(31, 222, 225, 1)'
              }],
              globalCoord: false
            },
          },
          label: {
            normal: {
              formatter: '',
            }
          }
        },
        // 死亡率
        {
          type: 'liquidFill',
          radius: '80%',
          center: ['70%', '50%'],
          //  shape: 'roundRect',
          data: deadRateData,
          backgroundStyle: {
            color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0.5,
              y2: 1,
              colorStops: [{
                offset: 1,
                color: 'rgba(68, 145, 253, 0)'
              }, {
                offset: 0.5,
                color: 'rgba(68, 145, 253, .25)'
              }, {
                offset: 0,
                color: 'rgba(68, 145, 253, 1)'
              }],
              globalCoord: false
            },
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(69, 73, 240, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(69, 73, 240, .25)'
                }, {
                  offset: 1,
                  color: 'rgba(69, 73, 240, 1)'
                }],
                globalCoord: false
              },
              shadowBlur: 10,
              shadowColor: '#000',
            }
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 1,
                color: 'rgba(58, 71, 212, 0)'
              }, {
                offset: 0.5,
                color: 'rgba(31, 222, 225, .2)'
              }, {
                offset: 0,
                color: 'rgba(31, 222, 225, 1)'
              }],
              globalCoord: false
            },
          },
          label: {
            normal: {
              formatter: '',
            }
          }
        }]
      };
      // 
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