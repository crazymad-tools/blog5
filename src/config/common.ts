// 本地开发服务器 http://localhost:8093/api
// 线上生成服务器 http://blog5.crazymad.top/api

const API_SERVER_LIST = {
  development: 'http://localhost:8089/api',
  production: 'http://blog5.crazymad.top/api'
}

const API_SERVER = process.env.NODE_ENV === 'production' ? API_SERVER_LIST.production : API_SERVER_LIST.development;

export {
  API_SERVER
}
