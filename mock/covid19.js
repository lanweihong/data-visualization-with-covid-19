// 不使用固定数据，使用 Mock 生成模拟数据
// import overAllData from '../data/covid19-overall.json'
const provinceData = require('../data/covid19-province.json')
const dailyData = require('../data/covid19-daily-list.json')

const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  {
    url: '/api/covid-19/overall',
    type: 'get',
    response: config => {
      return {
        success: true,
        code: 200,
        message: "操作成功",
        data: {
          confirmedCount: Random.integer(110000, 120000),
          confirmedIncr: 72,
          curedCount: Random.integer(100000, 110000),
          curedIncr: 173,
          currentConfirmedCount: Random.integer(3000, 4000),
          currentConfirmedIncr: -110,
          deadCount: Random.integer(4000, 6000),
          deadIncr: 12,
          importedCount: Random.integer(6000, 8000),
          importedIncr: 23,
          noInFectCount: Random.integer(400, 600),
          noInFectIncr: 8,
          suspectIncr: 0,
          suspectCount: 2,
          updateTime: "2021-07-15 20:39:11",
          curedRate: Random.float(90, 95, 0, 9),
          deadRate: Random.float(1, 5, 0, 9)
        }
      }
    }
  },
  {
    url: '/api/covid-19/area/latest/list',
    type: 'get',
    response: config => {
      return provinceData
    }
  },
  {
    url: '/api/covid-19/list',
    type: 'get',
    response: config => {
      return dailyData
    }
  }
]
