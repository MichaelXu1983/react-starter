import React from 'react'
import { Redirect, withRouter, Route } from 'react-router-dom'
import AnimatedRouter from 'react-animated-router' // 导入路由切换组件
import '@/styles/animate.less' // 导入默认的切换动画样式，如果需要其它切换样式，可以导入自己的动画样式定义文件
import BasicLayout from '@/layouts/BasicLayout'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCurrent } from '@/actions/user'
import { Toast } from 'antd-mobile'
import { getQueryString, getRouterConfig } from '@/utils/utils'
import {
  setAuthority,
  setShowHead,
  setInitHead,
  getInitHead,
} from '@/utils/storage'
import Empty from '@/components/Empty'

const history = require('history').createBrowserHistory()

class AuthorizedRoute extends React.Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { location } = this.props
    const routerConfig =
      typeof getRouterConfig(location.pathname) === 'undefined'
        ? null
        : getRouterConfig(location.pathname) // 根据当前路由，获取其相关配置信息

    routerConfig && routerConfig.authority && this.asyncAuthUpdate() // 更新需要判断权限组件的权限

    document.title = routerConfig && routerConfig.name // 更改当前路由document标题，便于其他方法通过标题区分页面

    // 处理头部显示状态
    if (getInitHead() === null) {
      setShowHead(getQueryString('is_show_head', location.search))
      setInitHead(false)
    }

    // 监听路由变化
    history.listen((location, action) => {
      const path = location.hash.replace('#', '')
      document.title = getRouterConfig(path) && getRouterConfig(path).name // 更改当前路由document标题，便于其他方法通过标题区分页面

      if (getRouterConfig(path) && getRouterConfig(path).authority) {
        // 如果首页不需要权限判断，就必须监听路由变化时判断
        this.asyncAuthUpdate()
      }
    })
  }

  asyncAuthUpdate = async () => {
    await this.updateToken() // 先更新不同来源的Token
    await this.updateAuthInfo() // 再根据Token更新权限
  }

  // 更新Token
  updateToken = () => {
    // 方式一：第三方APP 和 webview 都从 url search 里提供
    const token = getQueryString('token', this.props.location.search)
    if (token) {
      setAuthority(token)
    }
  }
  // 更新权限
  updateAuthInfo = () => {
    this.props
      .dispatch(fetchCurrent())
      .then(res => {})
      .catch(err => {
        Toast.fail('抱歉，未登录或登录超时，请重新登录', 3, null, false)
      })
  }
  render() {
    const { location, currentUser } = this.props
    const routerConfig =
      typeof getRouterConfig(location.pathname) === 'undefined'
        ? null
        : getRouterConfig(location.pathname) // 根据当前路由，获取其相关配置信息

    const Layout =
      routerConfig && typeof routerConfig.layout != 'undefined'
        ? routerConfig.layout
        : BasicLayout // 默认组件模版为 BasicLayout

    const speed =
      routerConfig && typeof routerConfig.speed != 'undefined'
        ? routerConfig.speed
        : 300 // 默认路由切换速度为 200 毫秒
    const classname =
      routerConfig && typeof routerConfig.animated != 'undefined'
        ? routerConfig.animated
        : 'animated-slider' // 默认路由切换动效为滑动

    // 判断路由是否合法
    if (routerConfig) {
      // 路由合法时，判断是否需要进行权限判断
      if (routerConfig.authority) {
        // 权限判断完成
        if (!currentUser.pending) {
          // 需要权限判断，开始判断权限
          if (currentUser.payload) {
            // 有权限，跳转相应路由
            return (
              <AnimatedRouter timeout={speed} className={classname}>
                <Layout title={routerConfig.name}>
                  <Route
                    exact
                    path={routerConfig.path}
                    component={routerConfig.component}
                  />
                </Layout>
              </AnimatedRouter>
            )
          } else {
            // 无权限，跳转登录
            return (
              <Redirect
                to={`/login?from_hash=${this.props.location.pathname}`}
              />
            )
          }
        } else {
          return (
            <Empty
              img={<img src={require('@/assets/Other/logo.svg')} alt='empty' />}
              text='组件加载中...'
            />
          )
        }
      } else {
        // 不需要权限判断
        return (
          <AnimatedRouter timeout={speed} className={classname}>
            <Layout
              title={routerConfig.name}
            >
              <Route
                exact
                path={routerConfig.path}
                component={routerConfig.component}
              />
            </Layout>
          </AnimatedRouter>
        )
      }
    } else {
      // 路由不合法时，重定向至 404
      return <Redirect to='/exception/404' />
    }
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
export default withRouter(connect(mapStateToProps)(AuthorizedRoute))
