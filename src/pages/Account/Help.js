import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import './Help.less'
import { Grid } from 'antd-mobile'
import customer from '@/assets/Account/customer.png'
import telphone from '@/assets/Account/telphone.png'

const headItem = [
  {
    icon: customer,
    text: '在线咨询',
  },
  {
    icon: telphone,
    text: '电话咨询',
    tel: '027-88888888',
  },
]

class Help extends PureComponent {
  render() {
    return (
      <div className='help-container'>
        <Grid
          data={headItem}
          columnNum={2}
          className='item-grid'
          onClick={el => {
            el.tel && (window.location.href = 'tel://' + el.tel)
          }}
        />
        <div className='item-header'>Git 手册</div>
        <div className='group-container'>
        <div className='group'>
          <a className='title' href='#/help-list?tag=0&key=0'>
            起步
          </a>
          <a className='item' href='#/help-list?tag=0&key=0'>
            关于版本控制
          </a>
          <a className='item' href='#/help-list?tag=0&key=1'>
            Git 简史
          </a>
          <a className='item' href='#/help-list?tag=0&key=2'>
            Git 基础
          </a>
        </div>
        <div className='group'>
          <a className='title' href='#/help-list?tag=1&key=0'>
            基础
          </a>
          <a className='item' href='#/help-list?tag=1&key=0'>
            获取 Git 仓库
          </a>
          <a className='item' href='#/help-list?tag=1&key=1'>
            远程仓库的使用
          </a>
          <a className='item' href='#/help-list?tag=1&key=2'>
            Git 别名
          </a>
        </div>
        <div className='group'>
          <a className='title' href='#/help-list?tag=2&key=0'>
            工具
          </a>
          <a className='item' href='#/help-list?tag=2&key=0'>
            选择修订版本
          </a>
          <a className='item' href='#/help-list?tag=2&key=1'>
            交互式暂存
          </a>
          <a className='item' href='#/help-list?tag=2&key=2'>
            储藏与清理
          </a>
        </div>
        <div className='group'>
          <a className='title' href='#/help-list?tag=3&key=0'>
            其他
          </a>
          <a className='item' href='#/help-list?tag=3&key=0'>
            底层命令和高层命令
          </a>
          <a className='item' href='#/help-list?tag=3&key=1'>
            Git 对象
          </a>
          <a className='item' href='#/help-list?tag=3&key=2'>
            传输协议
          </a>
        </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Help)
