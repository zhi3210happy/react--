import React from 'react';
import { Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, message } from 'antd';
import PropTypes from 'prop-types'
import './css/register.scss'
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖',
        }],
    }],
}, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
            value: 'zhonghuamen',
            label: '中华门',
        }],
    }],
}, {
    value: 'beijing',
    label: '北京',
    children: [{
        value: 'sanhuan',
        label: '三环',
        children: [{
            value: 'tiananmen',
            label: '天安门',
        }],
    }],
}, {
    value: 'shanghai',
    label: '上海',
    children: [{
        value: 'huangpu',
        label: '黄浦',
        children: [{
            value: 'guoji',
            label: '国际会展中心',
        }],
    }],
}];

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.Registering()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var formData = new FormData();
                for (let k in values) {
                    formData.append(k, values[k]);
                }
                fetch('/users/register', {
                    method: 'POST',
                    mode: 'cors',
                    body: formData
                }).then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            if (data.status == 0) {
                                this.success()
                            } else {
                                console.log(data.status)
                                this.RegisterError()
                            }
                        })
                    }
                })
                console.log('Received values of form: ', values);
            }
        });
    }
    Registering() {
        if (this.state.confirmDirty) {
            message.loading('注册中', 0.2)
        }
    }
    success() {
        const modal = Modal.success({
            title: '注册成功！',
            content: '即将跳转到主菜单!',
        });
        setTimeout(() => {
            modal.destroy();
            this.context.router.push('/Main')
        }, 2000);
    }
    RegisterError() {
        const modal = Modal.error({title:'用户名已存在!',maskClosable:true})
        setTimeout(
            modal
        );
        setTimeout(() => {
            modal.destroy();
        }, 1500);
    }
    handleConfirmBlur(e) {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('userPwd')) {
            callback('两次输入的密码不一致!');
        } else {
            callback();
        }
    }
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange(value) {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 60 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
            );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div className="registerbox">
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                        hasFeedback
                    >
                        {getFieldDecorator('userName', {
                            rules: [{
                                type: 'email', message: '无效的邮箱地址!',
                            }, {
                                required: true, message: '请输入你的邮箱!',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Password"
                        hasFeedback
                    >
                        {getFieldDecorator('userPwd', {
                            rules: [{
                                required: true, message: '请输入你的密码!',
                            }, {
                                validator: this.checkConfirm.bind(this),
                            }],
                        })(
                            <Input type="password" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Confirm"
                        hasFeedback
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请确认你的密码!',
                            }, {
                                validator: this.checkPassword.bind(this),
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                Nickname&nbsp;
              <Tooltip title="你想让其他人叫你什么？">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '请输入你的昵称！', whitespace: true }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Address"
                    >
                        {getFieldDecorator('residence', {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [{ type: 'array', required: true, message: '请选择你的住址!' }],
                        })(
                            <Cascader options={residences} />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Phone"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入你的手机号！' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Website"
                    >
                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: '请输入你的网站！' }],
                        })(
                            <AutoComplete
                                dataSource={websiteOptions}
                                onChange={this.handleWebsiteChange.bind(this)}
                                placeholder="website"
                            >
                                <Input />
                            </AutoComplete>
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Captcha"
                        extra="我们必须确保你是一个人类."
                    >
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: '请输入验证码!' }],
                                })(
                                    <Input size="large" />
                                    )}
                            </Col>
                            <Col span={12}>
                                <Button size="large">Get captcha</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                            )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
RegistrationForm.contextTypes = {
    router: PropTypes.object
}
export default Form.create()(RegistrationForm);

