let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = ''
} else {
  // 你的 API 地址
  baseUrl = ''
}

export default {
  baseUrl
}