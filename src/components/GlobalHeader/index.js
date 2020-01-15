import React, { PureComponent } from 'react'
import { NavBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import arrow from '@/assets/Other/arrows.svg'
import { getDeviceSystem } from '@/utils/utils'
import { getShowHead } from '@/utils/storage'
import styles from './GlobalHeader.module.less'

class GlobalHeader extends PureComponent {
  render() {
    const { title, leftContent, rightContent, history } = this.props
    return (
      <div>
        {getDeviceSystem() === 'weixin' || getShowHead() === 'false' ? null : (
          <div className={styles['top-nav-container']}>
            <NavBar
              mode='light'
              icon={leftContent === '' ? null : <img src={arrow} alt='返回' />}
              onLeftClick={
                leftContent === ''
                  ? () => {}
                  : () => {
                      history.action === 'REPLACE'
                        ? this.props.history.push('/')
                        : this.props.history.goBack()
                    }
              }
              rightContent={rightContent}
            >
              {title}
            </NavBar>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(GlobalHeader)
