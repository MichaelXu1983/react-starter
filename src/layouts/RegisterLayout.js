import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import GlobalHeader from '@/components/GlobalHeader'

import styles from './UserLayout.module.less'

class RegisterLayout extends PureComponent {
  constructor(props) {
    // 构造方法
    super(props) // 调用父类构造函数，返回子类实例
  }
  componentDidUpdate() {
    // 组件更新完毕，此时可以获取dom节点，此处不准调用 this.setState
    console.log('UserLayout:更新完毕')
  }
  render() {
    return (
      <div className={styles.UserLayout}>
        <header>
          <GlobalHeader title='' />
        </header>
        {this.props.children || ''}
      </div>
    )
  }
}

export default withRouter(RegisterLayout)
