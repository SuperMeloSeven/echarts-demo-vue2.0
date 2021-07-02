let nowYear = new Date().getFullYear()
let nowMonth = new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : (new Date().getMonth() + 1)
let nowDate = new Date().getDate() < 10 ? `0${new Date().getDate()}` : (new Date().getDate())
let next = new Date(`${nowYear}-${nowMonth}-${nowDate}`).getTime() + 24 * 3600 * 1000
let nextYear = new Date(next).getFullYear()
let nextMonth = new Date(next).getMonth() + 1 < 10 ? `0${new Date(next).getMonth() + 1}` : (new Date(next).getMonth() + 1)
let nextDate = new Date(next).getDate() < 10 ? `0${new Date(next).getDate()}` : (new Date(next).getDate())

export const nowTime = `${nowYear}-${nowMonth}-${nowDate}`
export const nextTime = `${nextYear}-${nextMonth}-${nextDate}`
export const code = 200

// export const appkey = 200002
// export const appSecret = '804aostfhuadpk9ls9bot93s7qce62'

let envApiUrl,
  envOnlineUrl,
  envAppKey,
  envAppSecret,
  tdEnv,
  tdPartner,
  tdAppName,
  tdToken
// todo 以下区分各种环境
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  envApiUrl = 'https://testx-api.kaiyuanhotels.com'
  envOnlineUrl = 'https://testx-www.kaiyuanhotels.com'
  envAppKey = 400001
  envAppSecret = 'abcdefg'
  tdEnv = 0
  tdPartner = 'kaiyuan'
  tdAppName = 'kaiyuan_web'
  tdToken = 'kaiyuan'
} else if (process.env.NODE_ENV === 'test') {
  // 测试环境
  envApiUrl = 'https://testx-api.kaiyuanhotels.com'
  envOnlineUrl = 'https://testx-www.kaiyuanhotels.com'
  envAppKey = 400001
  envAppSecret = 'abcdefg'
  tdEnv = 0
  tdPartner = 'kaiyuan'
  tdAppName = 'kaiyuan_web'
  tdToken = 'kaiyuan'
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境
  envApiUrl = 'https://api-center.kaiyuanhotels.com'
  envOnlineUrl = 'https://www.kaiyuanhotels.com'
  envAppKey = 200002
  envAppSecret = '804aostfhuadpk9ls9bot93s7qce62'
  tdEnv = 1
  tdPartner = 'kaiyuanhotels'
  tdAppName = 'kaiyuan_web'
  tdToken = 'kaiyuanhotels'
}
export const apiUrl = envApiUrl
export const onlineUrl = envOnlineUrl
export const appkey = envAppKey
export const appSecret = envAppSecret
export const tongDEnv = tdEnv
export const tongDPartner = tdPartner
export const tongDAppName = tdAppName
export const tongDToken = tdToken
