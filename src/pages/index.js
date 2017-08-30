import React from 'react'
import { Link } from 'react-router'
import UserCenter from '../module/UserCenter'

export default class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
  }

  componentDidMount () {
    UserCenter.getTest()
      .subscribe( this )
      .fetch()
  }
  onSuccess ( result ) {
    console.log( result )
  }
  
	render(){
		return <div> 
			<h1>Hello Index</h1>
			<div>
				<div>
					<Link to="/">首页</Link><br/>
					<Link to="/page1">第二页</Link>
				</div>
			</div>
		</div>
	}
}