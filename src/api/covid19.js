import * as request from '@/utils/request'

/**
 * 接口封装
 */
export default {
  getOverall() {
    let url = `/api/covid-19/overall?_=${Math.random()}`
    return request.get(url)
  },
  getProvinceDataList() {
    let url = `/api/covid-19/area/latest/list?_=${Math.random()}`
    return request.get(url)
  },
  getDailyList() {
    let url = `/api/covid-19/list?t=${Math.random()}`
    return request.get(url)
  }
}