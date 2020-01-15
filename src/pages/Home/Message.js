import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { queryProjects, queryUsers } from '@/api/message'
import { ListView, PullToRefresh, Badge, Tabs } from 'antd-mobile'
import styles from './Message.module.less'
import Empty from '@/components/Empty'
import { dateFormat } from '@/utils/utils'

class Message extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    // 构造方法
    super(props) // 调用父类构造函数，返回子类实例

    this.state = {
      // 项目列表
      projectsDataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      projectsRefreshing: true,
      projectsIsLoading: true,
      projectsHasMore: true,
      projectsPageNo: 1,
      // 用户列表
      usersDataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      usersRefreshing: true,
      usersIsLoading: true,
      usersHasMore: false,
      usersPageNo: 1,
      height: document.documentElement.clientHeight,
      // useBodyScroll: true,
    }
    this.projectsData = [] // 项目原始数据
    this.usersData = [] // 用户原始数据
    this.defRequestPara = {
      order_by: 'created_at', // id, name, username, created_at, or updated_at fields. Default is id
      sort: 'desc', // asc or desc order. Default is desc
      per_page: 10, // defaults to 20
      simple: typeof this.currentUser === 'undefined' ? true : false, // true 为公开项目
    }
  }
  componentDidUpdate() {
    // if (this.state.useBodyScroll) {
    //   document.body.style.overflow = 'auto'
    // } else {
    //   document.body.style.overflow = 'hidden'
    // }
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop
    this.fetchProjectsList(hei) // 发起项目列表获取
    this.fetchUsersList(hei) // 发起用户列表获取
  }

  // 发起项目列表获取
  fetchProjectsList = hei => {
    const payload = {
      page: this.state.projectsPageNo,
      ...this.defRequestPara,
    }
    queryProjects(payload)
      .then(r => {
        const dataRows = r.reverse()
        this.projectsData = this.state.projectsRefreshing
          ? [...dataRows]
          : [...this.projectsData, ...dataRows]
        this.setState({
          projectsDataSource: this.state.projectsDataSource.cloneWithRows(
            this.projectsData
          ),
          height: hei,
          projectsRefreshing: false,
          projectsIsLoading: false,
          projectsHasMore: r.length !== 0,
          // projectsPageNo: r.data.pageNo,
          // projectsHasMore: r.data.total > r.data.pageNo * r.data.limit,
        })
      })
      .catch(() => {
        this.setState({
          projectsRefreshing: false,
          projectsIsLoading: false,
        })
      })
  }

  // 发起用户列表获取
  fetchUsersList = hei => {
    const payload = {
      page: this.state.usersPageNo,
      ...this.defRequestPara,
    }

    queryUsers(payload)
      .then(r => {
        const dataRows = r.reverse()
        this.usersData = this.state.usersRefreshing
          ? [...dataRows]
          : [...this.usersData, ...dataRows]
        this.setState({
          usersDataSource: this.state.usersDataSource.cloneWithRows(
            this.usersData
          ),
          height: hei,
          usersRefreshing: false,
          usersIsLoading: false,
          usersHasMore: r.length !== 0,
          //   usersPageNo: r.data.pageNo,
          //   usersHasMore: r.data.total > r.data.pageNo * r.data.limit,
        })
      })
      .catch(() => {
        this.setState({
          usersRefreshing: false,
          usersIsLoading: false,
        })
      })
  }

  // 项目列表刷新回调函数
  onRefreshProjects = () => {
    if (this.state.projectsIsLoading) {
      return
    }
    this.setState(
      {
        projectsRefreshing: true,
        projectsIsLoading: true,
        projectsPageNo: 1,
      },
      () => {
        this.fetchProjectsList(this.state.height)
      }
    )
  }

  // 用户列表刷新回调函数
  onRefreshUsers = () => {
    if (this.state.usersIsLoading) {
      return
    }
    this.setState(
      {
        usersRefreshing: true,
        usersIsLoading: true,
        usersPageNo: 1,
      },
      () => {
        this.fetchUsersList(this.state.height)
      }
    )
  }

  // 项目列表拉到底部回调函数
  onEndReachedProjects = event => {
    if (this.state.projectsIsLoading || !this.state.projectsHasMore) {
      return
    }
    this.setState(
      {
        projectsIsLoading: true,
        projectsRefreshing: false,
        projectsPageNo: this.state.projectsPageNo + 1,
      },
      () => {
        this.fetchProjectsList(this.state.height)
      }
    )
  }

  // 用户列表拉到底部回调函数
  onEndReachedUsers = event => {
    if (this.state.usersIsLoading || !this.state.usersHasMore) {
      return
    }
    this.setState(
      {
        usersIsLoading: true,
        usersRefreshing: false,
        usersPageNo: this.state.usersPageNo + 1,
      },
      () => {
        this.fetchUsersList(this.state.height)
      }
    )
  }

  render() {
    const { projectsDataSource, usersDataSource, allReadStatus } = this.state
    // 切换标签数据
    const usersTabs = [
      { title: <Badge>最新项目</Badge> },
      { title: <Badge>最活跃用户</Badge> },
    ]
    // 项目列表渲染数据
    let projectsIndex = this.projectsData.length - 1
    const projectsRow = (rowData, sectionID, rowID) => {
      if (projectsIndex < 0) {
        projectsIndex = this.projectsData.length - 1
      }
      const obj = this.projectsData[projectsIndex--]
      return (
        <div key={rowID} className={styles['listview-container']}>
          <div className={styles['header']}>
            <div className={styles['title']}>{obj.name}</div>
            <div className={styles['date']}>
              {dateFormat('yyyy-MM-dd', new Date(obj.created_at))}
            </div>
          </div>

          <div className={styles['intro']}>{obj.description}</div>
          <div className={styles['link']}>
            <a href={obj.http_url_to_repo}>查看详情</a>
          </div>
        </div>
      )
    }
    // 用户列表渲染数据
    let usersIndex = this.usersData.length - 1
    const usersRow = (rowData, sectionID, rowID) => {
      if (usersIndex < 0) {
        usersIndex = this.usersData.length - 1
      }

      const obj = this.usersData[usersIndex--]
      return (
        <div key={rowID} className={styles['listview-container']}>
          <div className={styles['header']}>
            <div className={styles['title']}>{obj.name}</div>
            <div className={styles['date']}>{dateFormat('yyyy-MM-dd', new Date(obj.created_at))}</div>
          </div>
          <div className={styles['image']}>
            <img src={obj.avatar_url} alt='' />
          </div>
          <div className={styles['link']}>
            <a href={obj.website_url}>website</a>
            {/* <span>查看详情</span> */}
          </div>
        </div>
      )
    }
    // 项目列表分割组件
    const projectsSeparator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        className={styles['separator-container']}
      />
    )

    // 用户列表分割组件
    const usersSeparator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        className={styles['separator-container']}
      />
    )
    return (
      <div className={styles['home-container']}>
        <Tabs
          tabs={usersTabs}
          initialPage={0}
          swipeable={false}
          usePaged={false}
          onChange={(tab, index) => {
            console.log('onChange', index, tab)
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab)
          }}
          className={styles['tabs-container']}
        >
          <div className={styles['content']}>
            <ListView
              key={projectsRow.rowID}
              ref={el => (this.lv = el)}
              dataSource={this.state.projectsDataSource}
              renderFooter={() => (
                <div className={styles['render-footer']}>
                  {projectsDataSource.rowIdentities.length !== 0 &&
                  projectsDataSource.rowIdentities[0] !== '' ? (
                    this.state.projectsIsLoading ? (
                      '加载中...'
                    ) : this.state.projectsHasMore ? (
                      '下拉加载更多'
                    ) : (
                      '已加载完成'
                    )
                  ) : (
                    <Empty
                      img={
                        <img
                          src={require('@/assets/Empty/activity.svg')}
                          alt='empty'
                        />
                      }
                      text='暂无项目'
                    />
                  )}
                </div>
              )}
              renderRow={projectsRow}
              renderSeparator={projectsSeparator}
              className={styles['projects-list']}
              style={{
                height: this.state.height,
                overflow: 'auto',
              }}
              scrollRenderAheadDistance={500}
              pullToRefresh={
                <PullToRefresh
                  refreshing={this.state.projectsRefreshing}
                  onRefresh={this.onRefreshProjects}
                />
              }
              onEndReached={this.onEndReachedProjects}
              onEndReachedThreshold={10}
              pageSize={5}
            />
          </div>

          <div className={styles.content}>
            <ListView
              key={usersRow.rowID}
              ref={el => (this.lv = el)}
              dataSource={this.state.usersDataSource}
              renderFooter={() => (
                <div className={styles['render-footer']}>
                  {usersDataSource.rowIdentities.length !== 0 &&
                  usersDataSource.rowIdentities[0] !== '' ? (
                    this.state.usersIsLoading ? (
                      '加载中...'
                    ) : this.state.usersHasMore ? (
                      '下拉加载更多'
                    ) : (
                      '已加载完成'
                    )
                  ) : (
                    <Empty
                      img={
                        <img
                          src={require('@/assets/Empty/message.svg')}
                          alt='empty'
                        />
                      }
                      text='暂无用户'
                    />
                  )}
                </div>
              )}
              renderRow={usersRow}
              renderSeparator={usersSeparator}
              className={styles['projects-list']}
              style={{
                height: this.state.height,
                overflow: 'auto',
              }}
              scrollRenderAheadDistance={500}
              pullToRefresh={
                <PullToRefresh
                  refreshing={this.state.usersRefreshing}
                  onRefresh={this.onRefreshUsers}
                />
              }
              onEndReached={this.onEndReachedUsers}
              onEndReachedThreshold={10}
              pageSize={5}
            />
          </div>
        </Tabs>
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
export default withRouter(connect(mapStateToProps)(Message))
