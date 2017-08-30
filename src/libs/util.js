/*
 * @Author: saohui 
 * @Date: 2017-08-30 13:03:00 
 * @Last Modified by:   saohui 
 * @Last Modified time: 2017-08-30 13:03:00 
 */
import url from 'url'

let util = {
  // 把 url 的参数，转为对象
  query: function () {
    const urlInfo = url.parse(window.location.href, true).query
    for(let key in urlInfo) {
      if (urlInfo[key] instanceof Array) {
        urlInfo[key] = urlInfo[key][0]
      }
    }
    return urlInfo
  }
  // 把对象转为 url 的字符串参数
  ,flat: function (param) {
    var str = ""
    for (var key in param) {
      str += key + "=" + (param[key] != undefined ? encodeURIComponent(param[key]) : "") + "&"
    }
    return str.slice(0, -1)
  }

  ,isLogin: function () {
    return /sid\=\w+/.test(document.cookie)
  }

  ,getSID: function () {


    if (this.isLogin()) {
      var cookie = document.cookie
      var sids = cookie.match(/sid=(\w+)/)
      if (sids && sids[1]) {
        return sids[1]
      }
    }

    return null
  }

  ,getUID: function () {

    if (this.isLogin()) {
      var cookie = document.cookie
      var sids = cookie.match(/[^u]uid=(\d+)/)
      if (sids && sids[1]) {
        return sids[1]
      }
    }

    return null
  }
}

export default util