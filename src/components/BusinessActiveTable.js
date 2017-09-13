/**
 * @author zhi3210happy
 * @date 2016-10-19
 * @description 企业激活报表模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, DatePicker } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '企业激活报表',
	columns : [
		{
			title : '企业名称',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '客户经理',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '城市',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '创建人ID',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '激活时间',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '注册时间',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '首单订单号',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '首次车型',
			dataIndex : 'h',
			key : 'h'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class BusinessActiveTable extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				city : this.props.city
			}
		}
	}
	
	//选择日期
	selectDate(dates, dateStrings){
		console.log(dateStrings[0] + ' ' + dateStrings[1]);
		if(dateStrings[0] === '' && dateStrings[1] === ''){
			return;
		}
		var params = {};
		for(let k in this.state.params){
			params[k] = this.state.params[k];
		}
		params.startDate = dateStrings[0];
		params.endDate = dateStrings[1];
		this.setState({
			params : params
		})
	}
	
	handleChange(){
		
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}
	
	componentWillReceiveProps(newProps){
		if(this.props.city !== newProps.city){
			var params = {};
			for(let k in this.state.params){
				params[k] = this.state.params[k];
			}
			params.city = newProps.city;
			this.setState({
				params : params
			})
		}
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					企业用户 > 企业激活报表
				</div>
				<div className="div-1">
					<RangePicker 
					    style = {{width:'200px',top:'4px'}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
					/>
					<span className="span-1">客户经理</span>
					<span className="ant-input-wrapper">
					<Input placeholder="多个请用逗号隔开" />
					</span>
					<span className="span-1">客户类型</span>
					<Select 
						style = {{width:100}}
						onChange = {this.handleChange.bind(this)}
						defaultValue = "全部"
					>
						<Option value="全部">全部</Option>
						<Option value="企业客户">企业客户</Option>
						<Option value="其它客户">其它客户</Option>
					</Select>
					<Button type="primary">搜索</Button>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default BusinessActiveTable;