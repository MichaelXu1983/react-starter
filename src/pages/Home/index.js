import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PullToRefresh, Button, Carousel } from 'antd-mobile'
import styles from './index.module.less'
import { fetchCurrent } from '@/actions/user'

const Footer = props => {
  let element = (
    <footer className={styles['footer']}>
      <div className={styles['bg']} />
      <div>
        <span>
          <img src={require('@/assets/Home/icon.svg')} alt='' />
          高质量
        </span>
        <span>
          <img src={require('@/assets/Home/icon.svg')} alt='' />
          高效率
        </span>
        <span>
          <img src={require('@/assets/Home/icon.svg')} alt='' />
          高成果
        </span>
      </div>
    </footer>
  )
  return element
}

class Home extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  state = {
    data: [
      'AiyWuByWklrrUDlFignR',
      'TekJlZRVCjLFexlOCuWn',
      'IJOtIlfsYdTyaDTRVrLI',
    ],
    refreshing: false,
    height: document.documentElement.clientHeight - 60, // 实际内容高度需减去底部导航固定高度60
  }

  componentDidMount() {
    // 如果首页需要权限判断，就可以注释监听路由变化时判断
    // this.props.dispatch(fetchCurrent()).catch(e => {
    //   console.log(e)
    // })
  }
  // 页面下拉执行的方法
  onRefresh = () => {
    this.setState({
      refreshing: true,
    })
    // 等待所有都完成（或第一个失败）
    Promise.all([this.props.dispatch(fetchCurrent())])
      .then(() => this.setState({ refreshing: false }))
      .catch(() => this.setState({ refreshing: false }))
  }

  render() {
    const {
      payload: { name, last_activity_on, state, web_url },
    } = this.props.currentUser
    return (
      <div className={styles['home-container']}>
        <PullToRefresh
          damping={60}
          ref={el => (this.ptr = el)}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        >
          <div className={styles['main-data']}>
            <header className={styles['header']}>
              <div className={styles['logo']}>
                <span>react</span>
              </div>
              <div
                className={styles['message']}
                onClick={() => this.props.history.push('/message')}
              >
                <span>消息</span>
              </div>
            </header>
            <div className={styles['card']}>
              <div className={styles['content']}>
                <p className={styles['title']}>{name ? name : '佚名'}</p>
                <p className={styles['status']}>{state ? state : '未知状态'}</p>
                <Button
                  className={styles['button']}
                  type='primary'
                  size='small'
                  onClick={() => {
                    window.location.href = web_url
                  }}
                >
                  站点
                </Button>
                <p className={styles['tips']}>
                  {last_activity_on ? last_activity_on : '未知最后活动时间'}
                </p>
              </div>
              <Footer user={this.props.currentUser} status={state} />
            </div>
          </div>
          <div className={styles['hot-events']}>
            <header className={styles['title']}>热门活动</header>
            <Carousel
              className={styles['hot-carousel']}
              autoplay={false}
              infinite
              dots={false}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href='http://www.alipay.com'
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    height: this.state.imgHeight,
                  }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=''
                    style={{ width: '100%', height: '120px', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'))
                      this.setState({ imgHeight: 'auto' })
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
          <div className={styles['guide']}>
            <header className={styles['title']}>新手指引</header>
            <div className={styles['content']}>
              <Link
                className={styles['item']}
                to='/help-list?tag=1&key=0'
                style={{
                  backgroundImage: `url(${require('@/assets/Home/step.png')})`,
                }}
              >
                <p>Git 基础</p>
                <p>包括 Subversion 和近似工具</p>
              </Link>
              <Link
                className={styles['item']}
                to='/help-list?tag=0&key=1'
                style={{
                  backgroundImage: `url(${require('@/assets/Home/detail.png')})`,
                }}
              >
                <p>Git 简史</p>
                <p>专有的分布式版本控制系统</p>
              </Link>
            </div>
          </div>
        </PullToRefresh>
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
export default withRouter(connect(mapStateToProps)(Home))
