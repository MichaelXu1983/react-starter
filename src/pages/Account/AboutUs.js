import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './AboutUs.module.less'
class AboutUs extends PureComponent {
  render() {
    return (
      <div className={styles['about-us']}>
        <img
          src={this.props.currentUser.payload.avatar_url}
          alt=''
          className={styles['head-pic']}
        />
        <div className={styles['warm-tips']}>
          <p>
            从事互联网开发11年，上市公司移动开发部经理，兼移动架构专家，讲师，拥有丰富的教学、开发、架构设计经验，可以帮助大家进入互联网开发行业。
          </p>
        </div>
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
export default withRouter(connect(mapStateToProps)(AboutUs))
