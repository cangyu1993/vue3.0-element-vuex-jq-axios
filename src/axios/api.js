const env = process.env.NODE_ENV
let baseURL = env == 'development' ? '/api' : '/'

const api = {
    getList_0: baseURL + 'getList?category_id=15', //创意设计
    getList_1: baseURL + 'getList?category_id=14', //H5开发
    getList_2: baseURL + 'getList?category_id=16', //网站设计
    getComDetail: baseURL + 'getComDetail', //关于弧光
}

export default api