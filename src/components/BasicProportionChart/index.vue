<template>
  <div ref="basicProportionChart" style="width: 100%; height: 100%"></div>
</template>
<script>
let chart = null
const calculateProportion = (value, total) => {
  return ((value / total) * 100).toFixed(0)
}
export default {
  props: {
    data: Object
  },
  methods: {
    initChart () {
      if (null != chart && undefined != chart) {
        chart.dispose()
      }
      chart = this.$echarts.init(this.$refs.basicProportionChart)
      this.setOptions()
    },
    setOptions() {
      let list = [
        {
          name: '现有确诊',
          value: calculateProportion(this.data.currentConfirmedCount, this.data.confirmedCount)
        },
        {
          name: '境外输入',
          value: calculateProportion(this.data.importedCount, this.data.confirmedCount)
        },
        {
          name: '累计治愈',
          value: calculateProportion(this.data.curedCount, this.data.confirmedCount)
        }
      ]
      let titleList = [], seriesList = []
      list.forEach((item, index) => {
        titleList.push({
          text: item.name,
          top: '75%',
          left: index * 30 + 12 + '%',
          textStyle: {
            fontWeight: 'normal',
            color: '#BCBCBF',
            fontSize: '12'
          }
        })
        // 
        seriesList.push(
          {
            name: item.name,
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            center: [index * 30 + 20 + '%', '35%'],
            data: [
              {
                value: item.value,
                name: item.name,
                label: {
                  normal: {
                    formatter: function (params) {
                      return params.value + '%';
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                      fontSize: '14',
                      fontWeight: 'bold',
                      color: '#FFF'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#D32E58' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#F99266' // 100% 处的颜色
                      }]
                    },
                    label: {
                      // show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: 'lanweihong',
                value: 100 - item.value
              }]
          }
        )
      })
      let option = {
        title: titleList,
        color: ['rgba(7, 158, 254, .9)'],
        series: seriesList
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