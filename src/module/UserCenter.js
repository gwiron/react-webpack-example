/*
 * @Author: saohui 
 * @Date: 2017-08-30 13:03:07 
 * @Last Modified by: saohui
 * @Last Modified time: 2017-08-30 13:46:54
 */
//无缓存数据
import JSONPAsyncData from '../libs/JSONPAsyncData'
//优先读取缓存数据
import JSONPCacheAsyncData from '../libs/JSONPCacheAsyncData'

import util from '../libs/util'
import md5 from '../libs/md5'


function getAPIUri( path ){
  return 'https://aolsee.uat.ali.yuantutech.com/aolsee-web/open/app/news/page'
}

export default {
  getTest () {
    return new JSONPAsyncData( getAPIUri(), {
      currentPage: '1'
      ,unionId: '29'
      ,pageSize: '6'
      ,coprId: '261'
      ,doctCode: '001152'
    })
  }
}