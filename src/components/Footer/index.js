import { Component } from 'react'
import styles from './index.scss'
import homeIcon from '../../assets/home1.png'
import homeIcon1 from '../../assets/home.png'
import personIcon from '../../assets/person.png'
import personIcon1 from '../../assets/person1.png'
//import index from '../../assets/index.png'





class Footer extends Component {
	render() {
		const { num } = this.props;
		const footData = [
			{name:'首页',src:homeIcon,focusSrc:homeIcon1},
			{name:'我的',src:personIcon,focusSrc:personIcon1},
		];
		return(
			<ul className={styles.footer}>
				{footData.map((item,i)=>
					<li key={i} className={i===num?styles.focusLi:''}><img src={i===num?item.focusSrc:item.src}/><div className={i===num?styles.focus:''}>{item.name}</div></li>)
				}
			</ul>
		)
	}
}

Footer.propTypes = {}

export default Footer