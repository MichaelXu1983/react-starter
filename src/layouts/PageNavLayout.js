import React, { PureComponent } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { getQueryString } from '@/utils/utils'
import classnames from 'classnames'
import { Flex } from 'antd-mobile'
import './PageNavLayout.less'

class PageNavLayout extends PureComponent {
  constructor(props) {
    // 构造方法
    super(props) // 调用父类构造函数，返回子类实例
    this.state = {
      is_show_nav: true,
    }
  }
  componentDidMount() {
    this.setState({
      is_show_nav: getQueryString('is_show_nav', this.props.location.search),
    })
  }
  render() {
    // 根据不同来源是否显示底部导航
    const is_show_nav =
      this.state.is_show_nav === 'false' ||
      (typeof this.props.location.state != 'undefined' &&
        this.props.location.state.hasOwnProperty('is_show_nav') &&
        !this.props.location.state.is_show_nav)
    return (
      <div
        className={classnames('page-nav-layout')}
      >
        {this.props.children || ''}
        {is_show_nav ? null : (
          <footer className='footer'>
            <Flex justify='center' className='bottom-nav'>
              <Flex.Item>
                <NavLink exact to='/' className='home' activeclassname='active'>
                  首页
                </NavLink>
              </Flex.Item>

              <Flex.Item>
                <NavLink to='/account' className='account' activeclassname='active'>
                  我的
                </NavLink>
              </Flex.Item>
            </Flex>
          </footer>
        )}
      </div>
    )
  }
}

export default withRouter(PageNavLayout)
