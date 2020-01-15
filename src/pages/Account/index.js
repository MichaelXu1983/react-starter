import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Modal, List, Icon } from 'antd-mobile'
import wechat from '@/assets/Account/wechat.svg'
import help from '@/assets/Account/help.svg'
import setting from '@/assets/Account/setting.svg'
import screenshot from '@/assets/Account/wechat-screenshot.png'
import styles from './index.module.less'
import copy from 'copy-to-clipboard'

const Item = List.Item
function closest(el, selector) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el
    }
    el = el.parentElement
  }
  return null
}

class Account extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    // 构造方法
    super(props) // 调用父类构造函数，返回子类实例
    this.state = {
      couponNum: 0,
      wechatModal: false,
      weixinTips:
        '打开微信，点击右上角“+”号—添加朋友—公众号“搜索”—关注【徐老师开发课】',
      height: document.documentElement.clientHeight - 60, // 实际内容高度需减去底部导航固定高度60
    }
  }
  showModal = key => e => {
    e.preventDefault() // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    })
    if (copy('徐老师开发课')) {
      this.setState({
        weixinTips:
          '公众号已复制到剪贴板，打开微信，点击右上角“+”号—添加朋友—公众号“粘贴”—关注【徐老师开发课】',
      })
    } else {
      this.setState({
        weixinTips:
          '您的设备不支持自动复制功能，打开微信，点击右上角“+”号—添加朋友—公众号“搜索”—关注【徐老师开发课】',
      })
    }
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    })
  }
  onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return
    }
    const pNode = closest(e.target, '.am-modal-content')
    if (!pNode) {
      e.preventDefault()
    }
  }
  componentDidMount() {}

  render() {
    const { currentUser } = this.props
    return (
      <div
        className={styles['account-container']}
        style={{ height: this.state.height }}
      >
        <Modal
          visible={this.state.wechatModal}
          transparent
          platform='ios'
          maskClosable={true}
          onClose={this.onClose('wechatModal')}
          title=''
          className={styles['wechat-container']}
          wrapClassName={styles['wechat-wrap']}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div className={styles['wechat-content']}>
            <Icon type='cross' onClick={this.onClose('wechatModal')} />
            <p className={styles['main-title']}>关注微信公众号</p>
            <p>{this.state.weixinTips}</p>
            <div className={styles['img-container']}>
              <img src={screenshot} alt='徐老师开发课' />
            </div>
            <a className={styles['button']} href='weixin://'>
              去微信
            </a>
          </div>
        </Modal>
        <div className={styles['account-content']}>
          <div
            className={styles.header}
            style={{
              backgroundImage: `url(${currentUser.payload.avatar_url})`,
            }}
          />
          <div className={styles.phone}>
            {currentUser.payload.name ? currentUser.payload.name : '佚名'}
          </div>
          <div className={styles.intro}>
            {typeof currentUser.payload.last_activity_on === 'undefined' ||
            currentUser.payload.last_activity_on === null
              ? `未知最后活动时间`
              : `最后活动时间：${currentUser.payload.last_activity_on}`}
          </div>
        </div>
        <List className={styles['account-link-list']}>
          <Item
            thumb={wechat}
            arrow='horizontal'
            onClick={this.showModal('wechatModal')}
            extra=''
          >
            微信客服
          </Item>
          <Item
            thumb={help}
            arrow='horizontal'
            onClick={() => {
              this.props.history.push('/help')
            }}
            extra=''
          >
            帮助中心
          </Item>
          <Item
            thumb={setting}
            arrow='horizontal'
            onClick={() => {
              this.props.history.push('/setting')
            }}
            extra=''
          >
            设置
          </Item>
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
export default withRouter(connect(mapStateToProps)(Account))
