/**
 * @author zhi3210happy
 * @date 2016-10-19
 * @description 主入口模块
 */

import React from 'react';
//引入路由
import { Link } from 'react-router';
import moment from 'moment'
import PropTypes from 'prop-types'
import {Icon, BackTop, Badge, notification ,Menu} from 'antd';
const SubMenu = Menu.SubMenu;

import SelectCity from './common/select_city.js'
//引入样式表
import './css/main.scss';


class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			city: '全国',
			theme: 'light',
			mode: 'inline',
			username: '',
			current: '1',
			openKeys: [],
			leftDivShow: true,
			currentdate: moment().subtract(1, 'days').format('YYYY-MM-DD')
		}
	}

	onOpenChange(openKeys) {
		const state = this.state;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
		let nextOpenKeys = [];
		if (latestOpenKey) {
			nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		if (latestCloseKey) {
			nextOpenKeys = this.getAncestorKeys(latestCloseKey);
		}
		this.setState({
			openKeys: nextOpenKeys
		})
	}

	handleClick(e) {
		this.setState({
			current: e.key
		})
	}

	getAncestorKeys(key) {
		const map = {
			sub3: ['sub2'],
			sub4: ['sub2']
		};
		return map[key] || [];
	}

	//滚动提示信息
	scrollTips() {
		var tipsBox = document.getElementsByClassName('tips')[0],
			tips = tipsBox.childNodes,
			height = 20;
		if (tips.length < 2) {
			return;
		}
		tipsBox.style.position = 'relative';
		for (let i = 0, len = tips.length; i < len; i++) {
			tips[i].style.position = 'absolute';
			tips[i].style.top = i * height + 'px';
		}
		setInterval(function () {
			for (let i = 0, len = tips.length; i < len; i++) {
				tips[i].style.transition = 'top .6s';
				tips[i].style.top = parseInt(tips[i].style.top) - height + 'px';
				if (parseInt(tips[i].style.top) <= -height) {
					tips[i].style.transition = '';
					tips[i].style.top = (len - 1) * height + 'px';
				}
			}
		}, 4000)
	}

	//选择城市
	selectCity(val) {
		this.setState({
			city: val
		})
	}

	//隐藏侧边栏
	toggleLeftStatus() {
		var left = document.getElementById('left'),
			right = document.getElementById('right'),
			toggleBtn = document.getElementsByClassName('hide-left-btn')[0];
		if (this.state.leftDivShow === true) {
			left.style.width = '1%';
			right.style.width = '99%';
			toggleBtn.style.left = '1%';
		} else {
			left.style.width = '15%';
			right.style.width = '85%';
			toggleBtn.style.left = '15%';
		}
		this.setState({
			leftDivShow: !this.state.leftDivShow
		})
	}

	//退出系统
	loginOut() {
		this.context.router.push('/')
	}


	componentDidMount() {
		let el = document.getElementById('canvas');
		if (el) {
			el.parentNode.removeChild(el);
			console.log('canvas节点已删除')
		}
		this.scrollTips();
		notification.open({
			message: '欢迎你，Even',
			description: `你上一次登录本系统的时间是${this.state.currentdate}.`,
			duration: 5,
			icon: <Icon type="smile" style={{ color: '#108ee9', fontSize: '30px' }} />
		})
	}

	//父组件向子组件传递参数
	renderChildren(props) {
		var that = this;
		return React.Children.map(props.children, function (child) {
			return React.cloneElement(child, {
				city: that.state.city
			})
		})
	}

	render() {
		return (
			<div className="main">
				<div className="top">
					<img src="../images/logo1.jpg" />
					<ul className="tips">
						<li>新版本BI系统上线啦!!!</li>
						<li>系统在调试阶段,有任何问题请随时联系开发人员!!!</li>
						<li>建议使用Google Chrome以获得最佳浏览体验</li>
					</ul>
					<div className="top-right">
						<span>
							<a className="github" href="https://github.com/zhi3210happy/react-system">
								<Icon type="github" className="git" />
							</a>
						</span>|
						<span>
							<span style={{ marginRight: '8px' }}>切换城市</span>
							<SelectCity city={this.state.city} selectCity={this.selectCity.bind(this)} />
						</span>|
						<span>Even</span>|
						<Badge dot><Link to="/Message">消息</Link></Badge>|
						<span onClick={this.loginOut.bind(this)}>退出</span>
					</div>
				</div>
				<div className="left" id="left">
					<Menu
						mode={this.state.mode}
						theme={this.state.theme}
						openKeys={this.state.openKeys}
						selectedKeys={[this.state.current]}
						onOpenChange={this.onOpenChange.bind(this)}
						onClick={this.handleClick.bind(this)}
						style={{ width: '100%' }}
					>
						<SubMenu key="sub1" title={<span><Icon type="line-chart" /><span>报表</span></span>}>
							<Menu.Item key="1"><Link to="/Index">首页</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/DailyOperation">运营日报</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/TodayForecast">今日预测</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="setting" /><span>工具</span></span>}>
							<SubMenu key="sub3" title={<span>邮件管理系统</span>}>
								<Menu.Item key="28"><Link to="/MailManagementTask">任务管理</Link></Menu.Item>
								<Menu.Item key="29"><Link to="/MailManagementTaskMail">任务邮箱管理</Link></Menu.Item>
								<Menu.Item key="30"><Link to="/MailManagementTemplate">模板管理</Link></Menu.Item>
								<Menu.Item key="31"><Link to="/MailManagementTaskLog">任务日志</Link></Menu.Item>
							</SubMenu>
							<SubMenu key="sub4" title={<span>预警管理系统</span>}>
								<Menu.Item key="32"><Link to="/WarnModule">预警模块</Link></Menu.Item>
								<Menu.Item key="33"><Link to="/WarnIndex">预警指标</Link></Menu.Item>
								<Menu.Item key="34"><Link to="/WarnPhone">预警手机号</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key="35"><Link to="/MessageManagement">公告管理</Link></Menu.Item>
							<Menu.Item key="36"><Link to="/AccessLog">访问日志</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="file-text" /><span>项目分析</span></span>}>
							<Menu.Item key="4"><Link to="/RechargeReturn">充值返现</Link></Menu.Item>
							<Menu.Item key="5"><Link to="/UserExperience">用户体验</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="user" /><span>用户</span></span>}>
							<Menu.Item key="6"><Link to="/MarketPromotion">市场推广</Link></Menu.Item>
							<Menu.Item key="7"><Link to="/ConsumerActiveUser">消费活跃用户</Link></Menu.Item>
							<Menu.Item key="8"><Link to="/AccessActiveUser">访问活跃用户</Link></Menu.Item>
							<Menu.Item key="9"><Link to="/PersonTicketDaily">个人用券监控日报</Link></Menu.Item>
							<Menu.Item key="10"><Link to="/PersonTicketTable">个人用券监控报表</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub7" title={<span><Icon type="team" /><span>企业用户</span></span>}>
							<Menu.Item key="11"><Link to="/BusinessRegisterTable">企业注册报表</Link></Menu.Item>
							<Menu.Item key="12"><Link to="/BusinessActiveTable">企业激活报表</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub8" title={<span><Icon type="copy" /><span>订单</span></span>}>
							<Menu.Item key="13"><Link to="/AreaIncome">地域收入</Link></Menu.Item>
							<Menu.Item key="14"><Link to="/ProductIncome">产品收入</Link></Menu.Item>
							<Menu.Item key="15"><Link to="/OrderSource">订单来源</Link></Menu.Item>
							<Menu.Item key="16"><Link to="/CompleteOrder">完成订单</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub9" title={<span><Icon type="share-alt" /><span>车源</span></span>}>
							<Menu.Item key="17"><Link to="/CarAnalysis">车源分析</Link></Menu.Item>
							<Menu.Item key="18"><Link to="/CarMarketExtension">车源市场推广</Link></Menu.Item>
							<Menu.Item key="19"><Link to="/RegisterDriver">注册司机</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub10" title={<span><Icon type="environment-o" /><span>派单</span></span>}>
							<Menu.Item key="20"><Link to="/RealtimeOrderHalf">实时派单半小时</Link></Menu.Item>
							<Menu.Item key="21"><Link to="/ErrorOrder">失败订单</Link></Menu.Item>
							<Menu.Item key="22"><Link to="/DriverOrderPercent">司机接单率</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub11" title={<span><Icon type="pay-circle-o" /><span>财务</span></span>}>
							<Menu.Item key="23"><Link to="/BusinessAccountInfo">企业账户信息</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub12" title={<span><Icon type="heart-o" /><span>竞品</span></span>}>
							<Menu.Item key="24"><Link to="/CompetitorPrice">竞品价格</Link></Menu.Item>
							<Menu.Item key="25"><Link to="/CtripAirport">携程接送机</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub13" title={<span><Icon type="to-top" /><span>部门关键指标</span></span>}>
							<Menu.Item key="26"><Link to="/ProductService">产品部</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub14" title={<span><Icon type="exception" /><span>周报</span></span>}>
							<Menu.Item key="27"><Link to="/WeekReportDetails">周报详情</Link></Menu.Item>
						</SubMenu>
					</Menu>
				</div>
				<div className="right" id="right">
					<BackTop />
					{this.renderChildren(this.props)}
				</div>
				<div className="hide-left-btn" onClick={this.toggleLeftStatus.bind(this)}>
				<Icon type="pause" style={{fontSize:'15px'}}/>
				</div>
			</div>
		);
	}

}
Main.contextTypes = {
	router: PropTypes.object
}
export default Main