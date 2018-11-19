import { Component } from 'react'
import { NavBar, Icon, Popover } from 'antd-mobile'
import styles from './index.scss'
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Header extends Component {
	state = {
		visible: false,
		selected: '',
	};
	onSelect = (opt) => {
		this.setState({
			visible: false,
			selected: opt.props.value,
		});
	};
	handleVisibleChange = (visible) => {
		this.setState({
			visible,
		});
	};
	render() {
		const { removeLeft,history,title } = this.props;
		return(
			<div>
				<NavBar
					className={styles["headerContainer"]}
			        icon={removeLeft?null:<Icon type="left" />}
      				onLeftClick={() => console.log(this.props)}
			        rightContent={
				        <Popover
				         	mask
				            visible={this.state.visible}
				            overlay={[
				              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
				              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
				              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
			                	<span style={{ marginRight: 5 }}>Help</span>
			             	  </Item>),
			            	]}
				            align={{
				              overflow: { adjustY: 0, adjustX: 0 },
				              offset: [-10, 0],
				            }}
				            onVisibleChange={this.handleVisibleChange}
				            onSelect={this.onSelect}
		          		>
				            <div style={{
				              height: '100%',
				              padding: '0 15px',
				              marginRight: '-15px',
				              display: 'flex',
				              alignItems: 'center',
				            }}
				            >
			              		<Icon type="ellipsis" color="#fff"/>
			            	</div>
          				</Popover>
			        }
		        >
			        {title}
		        </NavBar>
			</div>
		)
	}
}

Header.propTypes = {}

export default Header