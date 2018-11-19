import { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
class Personal extends Component {
	test = () =>{
		this.props.history.push(this.props.match.url+'/111')
	}
	render() {
		return(
			<div>
		    	登录
    			<Button onClick={this.test} type="ghost" loading>default</Button>
		    </div>
		);
	}
}

Personal.propTypes = {};

export default connect()(Personal);