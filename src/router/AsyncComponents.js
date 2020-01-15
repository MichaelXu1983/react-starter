import loadable from 'react-loadable' // 代码分割高阶组件，封装后的组件会“懒加载”，React 16.6 支持 React.lazy，作用和其类似，截至目前还不够完善
import Loading from '@/components/Loading'

/**
 * 导入组件
 * 通过 loadable 高阶组件包装过的组件，为懒加载组件
 * 所有加载组件必须做好注释，比如：// 首页
 */
const components = {
  '/exception/401': loadable({
    loader: () => import('@/pages/Exception/401'),
    loading: Loading,
    delay: 300,
  }), // 401
  '/exception/403': loadable({
    loader: () => import('@/pages/Exception/403'),
    loading: Loading,
    delay: 300,
  }), // 403
  '/exception/404': loadable({
    loader: () => import('@/pages/Exception/404'),
    loading: Loading,
    delay: 300,
  }), // 404
  '/exception/500': loadable({
    loader: () => import('@/pages/Exception/500'),
    loading: Loading,
    delay: 300,
  }), // 500
  '/exception/no-network': loadable({
    loader: () => import('@/pages/Exception/NoNetwork'),
    loading: Loading,
    delay: 300,
  }), // 网络异常
  '/agreement': loadable({
    loader: () => import('@/pages/Account/Agreement'),
    loading: Loading,
    delay: 300,
  }), // 注册协议
  '/register': loadable({
    loader: () => import('@/pages/User/Register'),
    loading: Loading,
    delay: 300,
  }), // 注册
  '/login': loadable({
    loader: () => import('@/pages/User/Login'),
    loading: Loading,
    delay: 300,
  }), // 登录
  '/help': loadable({
    loader: () => import('@/pages/Account/Help'),
    loading: Loading,
    delay: 300,
  }), // 帮助中心
  '/help-list': loadable({
    loader: () => import('@/pages/Account/HelpList'),
    loading: Loading,
    delay: 300,
  }), // 查看问题
  '/account': loadable({
    loader: () => import('@/pages/Account/index'),
    loading: Loading,
    delay: 300,
  }), // 设置
  '/password': loadable({
    loader: () => import('@/pages/User/Password'),
    loading: Loading,
    delay: 300,
  }), // 修改密码
  '/setting': loadable({
    loader: () => import('@/pages/Account/Setting'),
    loading: Loading,
    delay: 300,
  }), // 关于我们
  '/about-us': loadable({
    loader: () => import('@/pages/Account/AboutUs'),
    loading: Loading,
    delay: 300,
  }), // 关于我们
  '/message': loadable({
    loader: () => import('@/pages/Home/Message'),
    loading: Loading,
    delay: 300,
  }), // 消息
}
export default components