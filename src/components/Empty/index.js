import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import styles from './index.module.less'

export default class Empty extends PureComponent {
  static propTypes = {
    img: propTypes.element,
    text: propTypes.oneOfType([propTypes.element, propTypes.string]),
    className: propTypes.string,
    style: propTypes.object,
  }

  static defaultProps = {
    img: <img src={require('../../assets/Other/empty.svg')} alt='暂无数据' />,
    text: '暂无数据',
  }

  render() {
    return (
      <div className={styles.empty} style={this.props.style}>
        {this.props.img}
        <p>{this.props.text}</p>
      </div>
    )
  }
}
