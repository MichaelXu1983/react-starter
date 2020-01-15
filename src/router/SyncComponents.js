const components = {
    '/blank-layout': require('@/layouts/BlankLayout'), // 空模版
    '/basic-layout': require('@/layouts/BasicLayout'), // 基础模版
    '/page-nav-layout': require('@/layouts/PageNavLayout'), // 导航模版
    '/user-layout': require('@/layouts/UserLayout'), // 登录模版
    '/register-layout': require('@/layouts/RegisterLayout'), // 注册模版
    '/': require('@/pages/Home/index'), // 首页
    '/account': require('@/pages/Account/index'), // 我的
  }
  export default components
  