import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import PropTypes from 'prop-types'

import {
  List,
  InputItem,
  Toast,
  Button,
  WingBlank,
  WhiteSpace,
  Flex,
} from 'antd-mobile'
import { getQueryString } from '@/utils/utils'
import { fetchLoginByToken, fetchLoginByPass } from '@/actions/login'
// import { sendSMSCodeForMobileNo } from '@/api/user'
import classnames from 'classnames'
import styles from './Styles.module.less'

class Login extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    // 获取路由来源
    this.fromHash = getQueryString('from_hash', props.location.search)
      ? getQueryString('from_hash', props.location.search)
      : '/'
    this.state = {
      curLoginWay: true,
      username: '', // 用户名或邮箱
      password: '', // 密码
      token: '', // token
      haseErrorPass: false, // 密码是否输满8位
      haseErrorName: false, // 用户名或邮箱是否输满6位
      haseErrorToken: false, // Token是否输满9位
      isShowPass: false, // 默认隐藏密码
      showPassStyle: '显示',
    }
  }

  componentDidMount() {}

  // 提交登录
  onClickSubmit = e => {
    e.preventDefault()
    let { token, username, password } = this.state

    if (this.state.curLoginWay) {
      // 验证密码格式
      const regLoginPassword = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,16}/
      if (!regLoginPassword.test(password)) {
        Toast.fail('密码格式不正确', 3, null, false)
        return
      }
      // 提交密码登录
      const payload = { username, password, grant_type: 'password' }
      this.props
        .dispatch(fetchLoginByPass(payload))
        .then(res => {
          this.props.history.replace(this.fromHash)
          Toast.success('恭喜您登录成功', 3, null, false)
        })
        .catch(err => {
          Toast.fail(err.message, 3, null, false)
        })
    } else {
      // 提交Token登录
      const payload = { token }

      this.props
        .dispatch(fetchLoginByToken(payload))
        .then(res => {
          this.props.history.replace(this.fromHash)
          Toast.success('恭喜您登录成功', 3, null, false)
        })
        .catch(err => {
          Toast.fail(err.message)
        })
    }
  }
  onChangeUsername = value => {
    if (value.replace(/\s/g, '').length < 4) {
      this.setState({
        haseErrorName: false,
      })
    } else {
      this.setState({
        haseErrorName: true,
      })
    }
    this.setState({
      username: value,
    })
  }
  onChangeLoginPass = value => {
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
  onChangeToken = value => {
    if (value.replace(/\s/g, '').length < 8) {
      this.setState({
        haseErrorToken: false,
      })
    } else {
      this.setState({
        haseErrorToken: true,
      })
    }
    this.setState({
      token: value,
    })
  }
  switchLoginWay = () => {
    if (this.state.curLoginWay) {
      this.setState({
        curLoginWay: false,
      })
    } else {
      this.setState({
        curLoginWay: true,
      })
    }
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
      <div className={styles['user-form-list']}>
        <List>
          <div className={styles['title']}>
            {this.state.curLoginWay ? '用户名/邮箱登录' : 'Token登录'}
          </div>
          {this.state.curLoginWay ? (
            <div>
              <InputItem
                value={this.state.username}
                clear
                type='text'
                placeholder='请输入用户名或邮箱'
                onChange={this.onChangeUsername}
              >
                用户名/邮箱
              </InputItem>
              <InputItem
                value={this.state.password}
                clear
                type={this.state.isShowPass ? 'text' : 'password'}
                placeholder='请输入8-16位密码'
                minLength={8}
                maxLength={16}
                onChange={this.onChangeLoginPass}
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
              <div className={styles['tips']}>
                <p>用户名和密码，仅用于权限校验，不会被上传至服务器</p>
              </div>
            </div>
          ) : (
            <div>
              <InputItem
                value={this.state.token}
                clear
                type='text'
                placeholder='请输入Token'
                onChange={this.onChangeToken}
              >
                Token
              </InputItem>

              <div className={styles['tips']}>
                <p>
                  1、Token 及用户名和密码，仅用于权限校验，不会被上传至服务器；
                </p>
                <p>
                  2、Token
                  的生成方式，请点击复制以下地址至浏览器打开，按照步骤即可生成。
                </p>
              </div>
            </div>
          )}
          <Flex>
            <Flex.Item style={{ textAlign: 'right' }}>
              <WingBlank>
                <WingBlank>
                  <Link
                    className={styles.link}
                    onClick={this.switchLoginWay.bind(this)}
                  >
                    {this.state.curLoginWay ? 'Token登录' : '用户名/邮箱登录'}
                  </Link>
                </WingBlank>
              </WingBlank>
            </Flex.Item>
          </Flex>
          <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
          <WingBlank>
            <WingBlank>
              <Button
                type='primary'
                disabled={
                  this.state.curLoginWay
                    ? !(this.state.haseErrorName && this.state.haseErrorPass)
                    : !this.state.haseErrorToken
                }
                onClick={this.onClickSubmit.bind(this)}
              >
                登录
              </Button>
            </WingBlank>
          </WingBlank>
          <WhiteSpace /> <WhiteSpace />
          <WhiteSpace />
          <WingBlank>
            <WingBlank>
              <Button
                type='ghost'
                onClick={() => this.props.history.push('/register')}
              >
                新用户注册
              </Button>
            </WingBlank>
          </WingBlank>
          <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
        </List>
      </div>
    )
  }
}

export default createForm()(withRouter(connect()(Login)))
