/*
 * @Author: saohui 
 * @Date: 2017-08-30 13:03:24 
 * @Last Modified by:   saohui 
 * @Last Modified time: 2017-08-30 13:03:24 
 */
var IS_SESSION_STORGEl = window.sessionStorage
/**
 cache.set(key, value, expire)
 cache.get(key)
 */
module.exports = {
  cacheMap: {},
  set: function set(key, value, expire) {

    if (IS_SESSION_STORGEl) {
      if( typeof value ) {
        value = 'isObject' + JSON.stringify( value )
      }
      return window.sessionStorage.setItem(key, value)
    }
    return null
  },
  get: function get(key) {
    let result = null
    if (IS_SESSION_STORGEl) {
       result = window.sessionStorage.getItem(key)
       if( result.indexOf( 'isObject' ) != -1 ) {
         result = JSON.parse( result.slice( 8 ) )
       }
    }
    return result
  },
  remove: function remove(key) {
    if (IS_SESSION_STORGEl) {
      return window.sessionStorage.removeItem(key)
    }
    return null
  }
}
