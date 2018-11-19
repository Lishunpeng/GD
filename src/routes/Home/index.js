import {Component} from 'react';
import { connect } from 'dva';
import { Button,WingBlank,Carousel } from 'antd-mobile';
import s from './index.scss';
import banner from '../../assets/banner.jpg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
class Home extends Component {
	state = {
		data: ['1', '2', '3'],
		
	}
	render(){
		return (
			<div>
				<Header title="首页" history={this.props.history}/>
				<div>
					<WingBlank className={s.banner}>
				        <Carousel
				          autoplay={false}
				          infinite
				          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
				          afterChange={index => console.log('slide to', index)}
				        >
				          {this.state.data.map(val => (
				            <a
				              key={val}
				              href="http://www.alipay.com"
				              style={{ display: 'inline-block', width: '100%' }}
				            >
				              <img
				                src={banner}
				                style={{ width: '100%', verticalAlign: 'top' }}
				                onLoad={() => {
				                  // fire window resize event to change height
				                  window.dispatchEvent(new Event('resize'));
				                }}
				              />
				            </a>
				          ))}
				        </Carousel>
			        </WingBlank>
				</div>
			    <Footer num={0}/>
			</div>
		);		
	}
}

Home.propTypes = {
};

export default connect()(Home);
