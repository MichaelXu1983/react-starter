import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import styles from './Loading.module.less'
import logo from '@/assets/Other/logo.svg'

class Loading extends PureComponent {
  componentDidMount() {
    if (this.props.error) {
      return Toast.loading('资源加载失败，将重新进行加载', 2, () => {
        window.location.reload()
      })
    } else if (this.props.timedOut) {
      return Toast.loading('资源加载超时，将重新进行加载', 2, () => {
        window.location.reload()
      })
    } else if (this.props.pastDelay) {
      return Toast.loading('加载中...', 2)
    } else {
      return (
        <div>
          <img className={styles['loading-icon']} src={logo} alt='logo' />
        </div>
      )
    }
  }
  render() {
    return <div />
  }
}

export default withRouter(Loading)
