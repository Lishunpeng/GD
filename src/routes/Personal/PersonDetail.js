import { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
class Personal extends Component {
	test = () =>{
		console.log(this.props)
	}
	render() {
		return(
			<div>
		    	详情
    			<Button onClick={this.test} type="ghost" loading>default</Button>
		    </div>
		);
	}
}

Personal.propTypes = {};

export default connect()(Personal);