/**
 * @author zhi3210happy
 * @date 2016-10-19
 * @description 登录模块
 */

import React from 'react';
import PropTypes from 'prop-types'
import { Input, Button, message } from 'antd';
import { Link } from 'react-router';
// import FormReg from './common/form_reg'
//引入样式表
import './css/login.scss';
import './LoginCanvas';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loginPage: true,
			userName: '',
			userPwd: ''
		}
	}
	componentDidmount() {

	}
	componentWillUnmount() {

	}
	handleUsernameInput(e) {
		this.setState({ userName: e.target.value });
	}

	handlePasswordInput(e) {
		this.setState({ userPwd: e.target.value });
	}
	loading() {
		message.loading('登录中..', 0.2);
	}
	LoginError() {
		setTimeout(() => {
			message.error('账号密码错误', 0.8)
		}, 800);
	}
	Login(e) {
		e.preventDefault();
		this.loading()
		var params = { userName: this.state.userName, userPwd: this.state.userPwd }
		var formData = new FormData();
		for (let k in params) {
			formData.append(k, params[k]);
		}
		fetch('/users/login', {
			method: 'POST',
			mode: 'cors',
			body: formData
		}).then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					if (data.status == 0) {
						this.context.router.push('/Main')
					} else {
						console.log(data.status)
						this.LoginError()
					}
				})
			}
		})
	}
	Register(){
		this.context.router.push('/Register')
	}
	render() {
		return (
			<div className="loginmain">
				<h1>
					<img src="../images/logo.png" />
				</h1>
				<ul>
					<li>
						<label>用户名</label>
						<span className="ant-input-wrapper">
							<Input value={this.state.userName} onChange={this.handleUsernameInput.bind(this)} defaultValue="请输入您的账号" required="required" />
						</span>
					</li>
					<li>
						<label>密码</label>
						<span className="ant-input-wrapper">
							<Input value={this.state.userPwd} onChange={this.handlePasswordInput.bind(this)} defaultValue="请输入您的密码" required="required" />
						</span>
					</li>
					<div className="bt">
						<li className="bt1">
							<Button type="primary" onClick={this.Login.bind(this)}><span>登录</span></Button>
						</li>
						<li className="bt2">
							<Button type="primary" onClick={this.Register.bind(this)}><span>注册</span></Button>
						</li>
					</div>
				</ul>
			</div>
		);
	}

}
Login.contextTypes = {
	router: PropTypes.object
}
export default Login