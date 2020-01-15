/**
 * 配置路由
 * @key { 路由名称 会在页面头部显示 type:string } name
 * @key { 路由路径 路由路径 type:string } path
 * @key { 组件名称 路由挂载的组件 type:function } component
 * @key { 路由权限 是否进行权限校验 type:boolean } authority
 * @key { 模版组件 选择模版组件，默认为基础模版 type:object } layout
 */
export const routerConfig = [
  {
    name: '401',
    path: '/exception/401',
    component: '/exception/401',
    authority: false,
  },
  {
    name: '403',
    path: '/exception/403',
    component: '/exception/403',
    authority: false,
  },
  {
    name: '404',
    path: '/exception/404',
    component: '/exception/404',
    authority: false,
  },
  {
    name: '500',
    path: '/exception/500',
    component: '/exception/500',
    authority: false,
  },
  {
    name: '网络异常',
    path: '/exception/no-network',
    component: '/exception/no-network',
    authority: false,
  },
  {
    name: '注册协议',
    path: '/agreement',
    component: '/agreement',
    authority: false,
  },
  {
    name: '注册',
    path: '/register',
    component: '/register',
    authority: false,
    layout: '/register-layout',
  },
  {
    name: '登录',
    path: '/login',
    component: '/login',
    authority: false,
    layout: '/user-layout',
  },
  {
    name: '修改密码',
    path: '/password',
    component: '/password',
    authority: true,
  },
  {
    name: '首页',
    path: '/',
    component: '/',
    authority: false,
    layout: '/page-nav-layout',
    animated: 'none',
  },
  {
    name: '我的',
    path: '/account',
    component: '/account',
    authority: true,
    layout: '/page-nav-layout',
    animated: 'none',
  },
  {
    name: '设置',
    path: '/setting',
    component: '/setting',
    authority: true,
  },
  {
    name: '关于我们',
    path: '/about-us',
    component: '/about-us',
    authority: false,
  },
  {
    name: '帮助中心',
    path: '/help',
    component: '/help',
    authority: false,
  },
  {
    name: '查看问题',
    path: '/help-list',
    component: '/help-list',
    authority: false,
  },
  {
    name: '消息',
    path: '/message',
    component: '/message',
    authority: true,
  },
]
export default routerConfig
