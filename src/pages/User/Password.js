import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { createForm } from 'rc-form'
import { List, InputItem, Toast, Button, WhiteSpace } from 'antd-mobile'
import styles from './Password.module.less'
import { modifyPassword } from '@/api/user'
import { fetchAccountInvalid } from '@/actions/login'

class Password extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      password: '', // 密码
      passwordConfirm: '', // 确认密码
      haseErrorPass: false, // 密码是否输满8位
      haseErrorPassConfirm: false, // 确认密码是否输满8位
    }
  }

  componentDidMount() {}

  // 提交修改
  onClickSubmit = e => {
    e.preventDefault()
    let { password, passwordConfirm } = this.state
    if (password !== passwordConfirm) {
      Toast.fail('二次密码输入不一样', 3, null, false)
      return
    }
    // 验证密码格式
    const regPassword = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,16}/
    if (typeof password === 'undefined' || password === '') {
      Toast.fail('密码不能为空', 3, null, false)
      return
    } else if (!regPassword.test(password)) {
      Toast.fail('密码格式不正确', 3, null, false)
      return
    }
    // 提交修改
    const payload = { password }
    modifyPassword(payload).then(result => {
      if (typeof result !== 'undefined' && typeof result.id !== 'undefined') {
        Toast.success('恭喜您修改成功', 3, null, false)
        const pathname = '/login'
        this.props.dispatch(fetchAccountInvalid(pathname))
      } else {
        Toast.fail(typeof result !== 'undefined' ? result.message : '用户得到授权，但是访问是被禁止的')
      }
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

  onChangePassConfirm = value => {
    if (value.replace(/\s/g, '').length < 8) {
      this.setState({
        haseErrorPassConfirm: false,
      })
    } else {
      this.setState({
        haseErrorPassConfirm: true,
      })
    }
    this.setState({
      passwordConfirm: value,
    })
  }

  render() {
    return (
      <div className={styles['password-form-list']}>
        <List>
          <InputItem
            value={this.state.password}
            clear
            type='password'
            placeholder='请输入8-16位新密码'
            minLength={8}
            maxLength={16}
            onChange={this.onChangePass}
          />
        </List>
        <InputItem
          value={this.state.passwordConfirm}
          clear
          type='password'
          placeholder='请再次输入8-16位新密码'
          minLength={8}
          maxLength={16}
          onChange={this.onChangePassConfirm}
        />
        <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
        <Button
          type='primary'
          disabled={
            !(this.state.haseErrorPass && this.state.haseErrorPassConfirm)
          }
          onClick={this.onClickSubmit.bind(this)}
        >
          修改
        </Button>
        <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
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
export default createForm()(withRouter(connect(mapStateToProps)(Password)))
