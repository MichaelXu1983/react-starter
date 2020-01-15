import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { createForm } from 'rc-form'
import { connect } from 'react-redux'
import { List, Toast, Button, WhiteSpace } from 'antd-mobile'
import { fetchLogout } from '@/actions/login'
import styles from './Setting.module.less'

const Item = List.Item

class Setting extends PureComponent {
  static propTypes = {
    login: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.onClickSubmit = this.onClickSubmit.bind(this) // 退出登录
  }
  // 退出登录
  onClickSubmit = e => {
    e.preventDefault()
    this.props
      .dispatch(fetchLogout())
      .then(res => {
        // const { msg, status } = res
        // if (status) {
        //   Toast.success('登出成功', 3, null, false)
        //   this.props.history.push('/')
        // } else {
        //   Toast.fail(msg, 3, null, false)
        // }
      })
      .catch(err => {
        Toast.fail(err.msg)
      })
    // fakeAccountLogout()
    //   .then(result => {
    //     const { code, msg, data, status } = result
    //     if (status) {
    //       // removeAuthority()
    //       // removeLoginMobile()
    //       window.location.href = 'https://test.lingshenzhineng.com/h5/#/'
    //     } else {
    //       Toast.fail(msg, 3, null, false)
    //     }
    //   })
    //   .then(() => {
    //     this.props.history.push('/login')
    //   })
  }

  render() {
    return (
      <div className={styles['setting-list']}>
        <List renderHeader={() => ''}>
          <Item
            arrow='horizontal'
            onClick={() => {
              this.props.history.push('/password')
            }}
          >
            修改密码
          </Item>
          <Item
            arrow='horizontal'
            onClick={() => {
              this.props.history.push('/about-us')
            }}
          >
            关于我们
          </Item>
        </List>
        <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
        <WhiteSpace />
        <Button type='primary' onClick={this.onClickSubmit}>
          退出登录
        </Button>
        <WhiteSpace /> <WhiteSpace /> <WhiteSpace />
      </div>
    )
  }
}
const mapStateToProps = state => {
  const {
    login: { login },
  } = state

  return {
    login,
  }
}
export default createForm()(withRouter(connect(mapStateToProps)(Setting)))
