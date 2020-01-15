import React, { PureComponent } from 'react'
import styles from './AboutUs.module.less'
class RegisterAgreement extends PureComponent {
  render() {
    return (
      <div className={styles['about-us']}>
        <div className={styles['warm-tips']}>
          <p className={styles['title']}>用户注册协议</p>
         
       
        </div>
      </div>
    )
  }
}

export default RegisterAgreement
