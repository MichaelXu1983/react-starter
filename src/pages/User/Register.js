import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  List,
  InputItem,
  Toast,
  Button,
  WhiteSpace,
  WingBlank,
  Flex,
  Checkbox,
} from 'antd-mobile'
import { fetchRegister } from '@/api/register'
import classnames from 'classnames'
import styles from './Styles.module.less'

const AgreeItem = Checkbox.AgreeItem
class Register extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      haseErrorNickName: false, // 昵称是否输满6位
      haseErrorUserName: false, // 用户名是否输满6位
      haseErrorPass: false, // 密码是否输满6位
      haseErrorEmail: false,
      protocol: true, // “注册协议”勾选状态
    }
  }

  // 提交注册
  onClickSubmit = e => {
    e.preventDefault()
    let { name, username, email, password } = this.state
    // 验证邮箱格式
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (typeof email === 'undefined' || email === '') {
      Toast.fail('邮箱不能为空', 3, null, false)
      return
    } else if (!regEmail.test(email)) {
      Toast.fail('邮箱格式不正确', 3, null, false)
      return
    }
    // 验证密码格式
    const regLoginPassword = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,16}/
    if (typeof password === 'undefined' || password === '') {
      Toast.fail('密码不能为空', 3, null, false)
      return
    } else if (!regLoginPassword.test(password)) {
      Toast.fail('密码格式不正确', 3, null, false)
      return
    }
    // 提交注册
    const payload = { name, username, email, password }
    fetchRegister(payload)
      .then(result => {
        if (typeof result !== 'undefined' && typeof result.id !== 'undefined') {
          Toast.success('恭喜您注册成功', 3, null, false)
        } else {
          Toast.fail(typeof result !== 'undefined' ? result.message : '用户得到授权，但是访问是被禁止的')
        }
      })
      .catch(err => {
        Toast.fail(err.message)
      })
  }
  // 改变注册协议状态
  onChangeProtocol = value => {
    this.setState({
      protocol: value.target.checked,
    })
  }
  onChangeNickName = value => {
    if (value.replace(/\s/g, '').length < 4) {
      this.setState({
        haseErrorNickName: false,
      })
    } else {
      this.setState({
        haseErrorNickName: true,
      })
    }
    this.setState({
      name: value,
    })
  }
  onChangeUserName = value => {
    if (value.replace(/\s/g, '').length < 4) {
      this.setState({
        haseErrorUserName: false,
      })
    } else {
      this.setState({
        haseErrorUserName: true,
      })
    }
    this.setState({
      username: value,
    })
  }
  onChangeEmail = value => {
    if (value.replace(/\s/g, '').length < 3) {
      this.setState({
        haseErrorEmail: false,
      })
    } else {
      this.setState({
        haseErrorEmail: true,
      })
    }
    this.setState({
      email: value,
    })
  }
  onChangePass = value => {
    if (value.replace(/\s/g, '').length < 8) {
      this.setState({
        haseErrorPass: false,
      })
    } else {
      this.setState({
        haseErrorPass: true,
      })
    }
    this.setState({
      password: value,
    })
  }
  // 显示密码
  onClickShowPass = () => {
    this.setState({
      isShowPass: true,
      showPassStyle: '隐藏',
    })
  }
  // 隐藏密码
  onClickHidePass = () => {
    this.setState({
      isShowPass: false,
      showPassStyle: '显示',
    })
  }
  render() {
    return (
      <div className={classnames(styles['user-form-list'], styles['register'])}>
        <List>
          <div className={styles['title']}>注册</div>
          <InputItem
            value={this.state.name}
            clear
            type='text'
            placeholder='请输入昵称'
            onChange={this.onChangeNickName}
          >
            昵称
          </InputItem>
          <InputItem
            value={this.state.username}
            clear
            type='text'
            placeholder='请输入用户名'
            onChange={this.onChangeUserName}
          >
            用户名
          </InputItem>
          <InputItem
            value={this.state.email}
            clear
            type='email'
            placeholder='请输入 Email'
            onChange={this.onChangeEmail}
          >
            Email
          </InputItem>
          <InputItem
            value={this.state.password}
            clear
            type={this.state.isShowPass ? 'text' : 'password'}
            placeholder='请输入8-16位密码'
            minLength={8}
            maxLength={16}
            onChange={this.onChangePass}
            extra={
              <div
                className={classnames(
                  { [`${styles['show-pass-style']}`]: true },
                  {
                    [`${styles['hide']}`]: this.state.isShowPass,
                  }
                )}
              >
                {this.state.showPassStyle}
              </div>
            }
            onExtraClick={
              this.state.isShowPass
                ? this.onClickHidePass.bind(this)
                : this.onClickShowPass.bind(this)
            }
          >
            密码
          </InputItem>
          <Flex>
            <Flex.Item>
              <WingBlank>
                <AgreeItem
                  defaultChecked={this.state.protocol}
                  data-seed='logId'
                  className={styles['agree-checkbox']}
                  onChange={this.onChangeProtocol}
                >
                  我已阅读并同意
                  <Link to='/agreement'>《用户注册协议》</Link>
                </AgreeItem>
              </WingBlank>
            </Flex.Item>
          </Flex>
          <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
          <WingBlank>
            <WingBlank>
              <Button
                type='primary'
                disabled={
                  !(
                    this.state.haseErrorNickName &&
                    this.state.haseErrorUserName &&
                    this.state.haseErrorEmail &&
                    this.state.haseErrorPass &&
                    this.state.protocol
                  )
                }
                onClick={this.onClickSubmit.bind(this)}
              >
                注册
              </Button>
            </WingBlank>
          </WingBlank>
          <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    user: { currentUser },
  } = state

  return {
    currentUser,
  }
}
export default createForm()(withRouter(connect(mapStateToProps)(Register)))
