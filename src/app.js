
import React from 'react'
import {render} from 'react-dom'

import {Router, Route, IndexRoute, IndexRedirect, browserHistory,hashHistory,useRouterHistory, Link } from 'react-router'

import {createHashHistory} from 'history'
//{queryKey: false}
const history = useRouterHistory(createHashHistory)()

import './all.less'

/* 路由模块引用区开始 */

import Index from './pages/index'
import Page1 from './pages/Page1'

/* 路由模块引用区结束 */

class App extends React.Component{

    constructor(props) {
        super(props)
    }
    render() {
        return (
        	<Router history={history}>
            <Route path="/" component={Index}></Route>
            <Route path="/page1" component={Page1}></Route>
					</Router>
        )

    }
}

render(<App />, document.getElementById("root"))