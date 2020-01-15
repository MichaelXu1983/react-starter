import React, { PureComponent } from 'react'
import styles from './BasicLayout.module.less'
import GlobalHeader from '@/components/GlobalHeader'
class BasicLayout extends PureComponent {
  constructor(props) {
    // 构造方法
    super(props) // 调用父类构造函数，返回子类实例
  }
  componentDidUpdate() {
    // 组件更新完毕，此时可以获取dom节点，此处不准调用 this.setState
    console.log('BasicLayout:更新完毕')
  }
  render() {
    const { title } = this.props
    const rightContent = null
    return (
      <div className={styles.BasicLayout}>
        <header>
          <GlobalHeader title={title} rightContent={rightContent} />
        </header>
        {this.props.children || ''}
      </div>
    )
  }
}
export default BasicLayout
