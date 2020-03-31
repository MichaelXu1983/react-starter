# React 入门脚手架
## 目录简介

1. [介绍](#介绍) 
2. [前置知识](#前置知识) 
    * [路由](#路由)
    * [生命周期](#生命周期)
3. [搭建方法](#搭建方法) 
    * [创建脚手架](#创建脚手架)
    * [新增常用实践目录](#新增常用实践目录)
    * [添加 LESS 支持](#添加LESS支持)
    * [增加 css reset](#增加CssReset)
    * [安装 Ant Design Mobile UI](#安装AntDesignMobileUI)
    * [定制 Ant Design Mobile UI 主题](#定制AntDesignMobileUI主题)
    * [安装资源分析工具](#安装资源分析工具)
    * [封装HTTP请求](#封装HTTP请求)
    * [编写公共处理方法](#编写公共处理方法)
    * [编写公共对象存储方法](#编写公共对象存储方法)
    * [编写公共组件](#编写公共组件)
    * [增加 Redux 支持](#增加Redux支持)
    * [增加 React Router 支持](#增加ReactRouter支持)
    * [配置组件和路由](#配置组件和路由)
    * [控制组件权限](#控制组件权限)
    * [路由切换动画](#路由切换动画)
    * [其他处理](#其他处理)
4. [程序目录](#程序目录)
5. [开发与构建命令](#开发与构建命令)
    * [依赖配置](#依赖配置)
    * [命令说明](#命令说明)
6. [开发流程](#开发流程)
   * [概述](#概述)
   * [载入组件配置路由](#载入组件配置路由)
   * [配置 API 接口](#配置API接口)
   * [创建http请求](#创建http请求)
   * [调用http请求](#调用http请求)
   * [使用Reudx(可选)](#使用Redux)
     * [说明](#说明)
     * [创建Actions](#创建Actions)
     * [创建ActionTypes](创建ActionTypes)
     * [创建Reduce](#创建Reduce)
     * [发起Actions](#发起Actions)
     * [获取Store](#获取Store)
   * [发布](#发布)

## <a name="介绍">介绍</a>  
本项目是基于 [create-react-app(3.0.1)](https://facebook.github.io/create-react-app/) & webpack(4)  & redux(4) & react-router(5) 按照官方文档，遵循目前项目经验的常用实践，搭建的入门脚手架，不定期迭代新功能。大家可以直接克隆使用，也可以按照[搭建方法](#搭建方法)一步一步自己搭建，可参考[create-react-app](https://facebook.github.io/create-react-app/)

[DEMO](http://react.michaelxu.cn/)  

**Flutter 和 React Native 对比**  

|  | Flutter | React Native |
| --- | --- | --- |
| 开源时间 | 2017年 | 2015年 |
| 开发语言 | Dart | JavaScript |
| 技术架构 | 通过 JavaScript 桥与原生模块通信  | 使用内置模块，很少需要与原生模块通信 |
| 安装 | NPM | SDK |
| 项目配置 | 官网文档（官方中文翻译） | 官网文档（社区中文翻译） |
| UI 组件和 API | 主要通过社区 | 主要通过官方 |
| 社区支持 | 暂时领先 | 暂时落后 |
| 测试支持 | 主要由第三方支持 | 主要由官方支持 |
| 自动化构建和发布 | 通过第三方工具 | 除了第三方工具，还可以通过 CLI 工具 |
| 持续集成 | 通过第三方工具 | 除了第三方工具，还可以通过 CLI 工具 |


## <a name="前置知识">前置知识</a>  
### <a name="路由">路由</a>
1. [路由由来](https://react-guide.github.io/react-router-cn/docs/Introduction.html)

2. [路由匹配原理](https://react-guide.github.io/react-router-cn/docs/guides/basics/RouteMatching.html)  
    4.0版本前后**路径语法**不一样，请注意！


3. [Histoy](https://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html)  
Browser history 是使用 React Router 的应用推荐的 history。它使用浏览器中的 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) API 用于处理 URL，创建一个像`example.com/some/path`这样真实的 URL ，没有 hash（`#`）部分；  
Hash history 使用 URL 中的 hash（`#`）部分去创建形如 `example.com/#/some/path` 的路由。


4. [默认路由](https://react-guide.github.io/react-router-cn/docs/guides/basics/IndexRoutes.html)  
给 **/** 路由对应组件的子元素添加一个默认组件，该组件可作为**组件模版**使用，在其中添加**通用头部**、**通用脚部**、**通用版权**、**面包屑**、**安全机制**等


5. [动态路由](https://react-guide.github.io/react-router-cn/docs/guides/advanced/DynamicRouting.html)  
即组件按需加载，对于类似不同角色，加载不同组件的场景，特别有用，避免不同角色需要加载全部组件，而造成首次页面加载缓慢的问题
    ```shell
    # 添加 babel 配置
    vim package.json
    ...
    "babel": {
        "presets": [
          "react-app",
          "@babel/preset-react"
        ],
        "plugins": [
          "@babel/plugin-syntax-dynamic-import"
        ]
      },
    ...

    # 添加 @loadable/component 包
    yarn add @loadable/component

    # 添加动态路由
    vim src/router/index.js
    ...
    import loadable from '@loadable/component'
    const Home = loadable(() => import('@/pages/home/Index'))
    ...
    ```

6. [跳转前确认](https://react-guide.github.io/react-router-cn/docs/guides/advanced/ConfirmingNavigation.html)  
React Router 4 中被 Prompt 组件取代


7. [组件生命周期](https://react-guide.github.io/react-router-cn/docs/guides/advanced/ComponentLifecycle.html)  

8. [在组件外部使用导航](https://react-guide.github.io/react-router-cn/docs/guides/advanced/NavigatingOutsideOfComponents.html)  

9. [API 文档](https://react-guide.github.io/react-router-cn/docs/API.html)

10. [高阶组件](<https://zh-hans.reactjs.org/docs/higher-order-components.html>)  
一个没有副作用的纯函数，且该函数接受一个组件作为参数，并返回一个新的组件。主要功能是封装并抽离组件的通用逻辑，让此部分逻辑在组件间更好地被复用。


11. [代码分割](https://zh-hans.reactjs.org/docs/code-splitting.html)  
React 16.6 支持  [`React.lazy`](https://zh-hans.reactjs.org/docs/code-splitting.html)，作用是按需加载组件（俗称“懒加载”），但目前功能还不及 [`@loadable/component` ](https://www.smooth-code.com/open-source/loadable-components/docs/component-splitting/)完善，待完善后修改也很简单。  

## <a name="生命周期">生命周期</a>  
大家可以点击 [React 官网](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) 查看不同版本的生命周期图谱。官网已有的释义，在此不做赘述，但有链接。我只对开发中要注意的地方做说明，并且在代码相应位置做了详细注释  

![](https://git.michaelxu.cn/classroom/react/react-webpack-start-old/raw/develop/public/projects.wojtekmaj.pl_react-lifecycle-methods-diagram_.png)  

**组件在创建时会触发5个钩子函数：**

1. [constructor()](https://zh-hans.reactjs.org/docs/react-component.html#constructor)  
在里面调用 `super(props)`，可能会从`props`里面找到你需要的东西，比如`history`和`location`

2. [static getDerivedStateFromProps()](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)  
不常用


3. [render()](https://zh-hans.reactjs.org/docs/react-component.html#render)
唯一必须实现的方法，创建虚拟DOM，应该保证它为纯函数，不准调用 this.setState 和写业务逻辑及引用其他页面组件，因为编译时 render 方法的内容会被直接替换掉，你的逻辑代码不会起作用


4. [componentWillMount()](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillmount)  
即将过时，避免使用


5. [componentDidMount()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount)  
组件渲染之后调用，可以通过this.getDOMNode()获取和操作DOM节点，且只调用一次。http请求推荐的地方，但有时候当组件销毁的时候，可能http请求还未完成，可以通过设置状态isMount，来解决此问题，代码中有示例  

**组件在更新时会触发6个钩子函数：**

6. [static getDerivedStateFromProps()](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)  
不常用

7. [shouldComponentUpdate(nextProps, nextState)](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)  
react性能优化非常重要的一环：父组件重新渲染会导致其所有子组件的重新渲染，所以可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候，不过首次渲染或使用 `forceUpdate()` 时不会调用该方法。**后续版本，React 可能会将 `shouldComponentUpdate` 视为提示而不是严格的指令，并且，当返回 `false` 时，仍可能导致组件重新渲染，可以考虑使用内置的 PureComponent 组件，不去使用`shouldComponentUpdate` ，示例已实现**

8. [componentWillUpdate(nextProps, nextState)](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillupdate)  
shouldComponentUpdate返回true，组件进入重新渲染更新的流程，此处不准调用 this.setState。**即将过时，避免使用**


9. [render()](https://zh-hans.reactjs.org/docs/react-component.html#render)  

10. [getSnapshotBeforeUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)  
不常用

11. [componentDidUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)  
组件更新完毕，此时可以获取dom节点，此处不准调用 this.setState. 

**组件从 DOM 中移除时会触发1个钩子函数：**

12. [componentWillUnmount()](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)  
一些事件监听和定时器需要在此时清除  


**应该在何时设置state：**  

![when-to-set-the-state](https://git.michaelxu.cn/classroom/react/react-webpack-start-old/raw/develop/public/when-to-set-the-state.png)  


## <a name="搭建方法">搭建方法</a>  
### <a name="创建脚手架">创建脚手架</a>
```
# 通过命令创建基础脚手架工程
create-react-app react-webpack-start

# 进行 webpack 配置
yarn eject 

# 如果提示某些包有缺失，则安装相应缺失包（不同版本缺失情况不同）
yarn add @babel/plugin-transform-react-jsx-source @babel/plugin-transform-react-jsx-self --dev			

# 运行
yarn start
```  

### <a name="新增常用实践目录">新增常用实践目录</a>

```
├── mock                                    // 模拟数据
├── src                                     // 源代码
│   ├── actions                             // 所有 actions
│   │   ├── login.js                        // 登录
│   │   ├── user.js                         // 用户信息
│   ├── api                                 // 所有 HTTP 请求
│   │   ├── message.js                      // 消息（根据业务模块命名，和 /pages/* 一一对应）
│   │   ├── login.js                        // 登录
│   │   ├── register.js                     // 注册
│   │   ├── user.js                         // 用户信息
│   ├── assets                              // 图片样式等资源（会打包，根据业务模块命名，和 /pages/* 一一对应）
│   ├── components                          // 公用组件
│   │   ├── Authorized                      // 权限
│   │   ├── Empty                           // 通用暂无数据
│   │   ├── Exception                       // 通用异常
│   │   ├── GlobalHeader                    // 通用头部
│   │   ├── Loading                         // 通用加载
│   ├── constants                           // 所有 constants
│   │   ├── ActionTypes.js                   
│   ├── layouts                             // 页面模版
│   │   ├── BasicLayout.js                  // 基础模版
│   │   ├── BlankLayout.js                  // 空模版
│   │   ├── RegisterLayout.js               // 注册模版
│   │   ├── PageNavLayout.js                // 导航模版
│   │   ├── UserLayout.js                   // 用户模版
│   ├── pages                               // 页面视图
│   │   ├── Account                         // 个人中心（根据业务模块命名，和 /api/* 一一对应）
│   │   ├── Exception                       // 异常
│   │   ├── Home                            // 首页
│   │   ├── User                            // 注册、登录、修改密码
│   ├── reducers                            // 所有 reducers
│   │   ├── index.js                        // 导出所有reducers 
│   │   ├── user.js                         // 用户信息
│   │   ├── login.js                        // 登录
│   ├── router                              // 路由组件配置
│   │   ├── AsyncComponents.js              // 异步加载组件
│   │   ├── index.js                        // 路由导出组件
│   │   ├── routes.js                       // 路由配置
│   │   ├── SyncComponents.js               // 同步加载组件
│   ├── styles                              // 公共样式 
│   │   ├── theme.js                        // 自定义主题
│   │   ├── animate.less                    // 路由切换动效
│   ├── utils                               // 全局公用方法
│   │   ├── request.js                      // 全局 http 请求方法封装
│   │   ├── storage.js                      // 操作浏览器 storage 
│   │   ├── utils.js                        // 公用方法
```  

### <a name="添加LESS支持">添加 LESS 支持</a>
```
yarn add less less-loader style-loader css-loader --dev
vim config/webpack.config.js

const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
...
 module: {
   rules: [
     ...
      // Opt-in support for LESS (using .less extensions).
      // By default we support LESS Modules with the
      // extensions .module.less
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders(
          {
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
          'less-loader'
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      // Adds support for CSS Modules, but using LESS
      // using the extension .module.less
      {
        test: lessModuleRegex,
        use: getStyleLoaders(
          {
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
          'less-loader'
        ),
      },
     ...
   ]
 }
```  

### <a name="增加CssReset">增加 css reset</a>
```
yarn add @csstools/normalize.css --save
vim index.less
...
@import '~@csstools/normalize.css';
...
```  

### <a name="安装AntDesignMobileUI">安装 Ant Design Mobile UI</a>
```
yarn add antd-mobile --save
yarn add babel-plugin-import --dev
vim package.json
...
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", { "libraryName": "antd-mobile", "style": true }]
    ]
  },
...

vim src/pages/Home/App.js
import { Button } from 'antd-mobile';
```  

### <a name="定制AntDesignMobileUI主题">定制 Ant Design Mobile UI 主题</a>
```
vim src/styles/theme.js

vim config/webpack.config.js

const theme = require('../src/styles/theme')
...
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: isEnvProduction && shouldUseSourceMap,
          modifyVars: theme,
          javascriptEnabled: true,
          // modifyVars: {
          //   '@primary-color': 'yellow'
          // }
        },
      })
    }
...
```  

### <a name="安装资源分析工具">安装资源分析工具</a>
```
yarn add source-map-explorer

vim package.json
...
   "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
...
npm run build
npm run analyze
```  

### <a name="封装HTTP请求">封装HTTP请求</a>

```
vim src/utils/request.js

...
// 定义 http 请求，返回消息对象
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
...
// 统一处理 http 请求返回，因为当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject，所以此处必须自定义处理这种情况，参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
function checkStatus(response) {
  // 检查 response 的状态是否在200-299(包括200,299)这个范围内，
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 409 // 409 为 gitlab 特有
  ) {
    return response
  }
  const errortext = codeMessage[response.status] || response.statusText
  console.error(`请求错误 ${response.status}: ${response.url}`)
  Toast.fail(errortext)
  const error = new Error(errortext)
  error.name = response.status
  error.response = response
  throw error
}
...
// 自定义 http 请求默认键值
  newOptions.headers = {
    Authorization: `Bearer ${getAuthority()}`, // Basic Authentication
  }
...
# 对 401、403、404、500 或者自定义其他 status，进行统一处理
  .catch(e => {
      Toast.hide()
      const { dispatch } = store
      const status = e.name
      const history = require('history').createBrowserHistory()
      const pathname = history.location.hash.replace('#', '')
      
      if (status === 401) {
        dispatch(fetchAccountInvalid(pathname))
        return
      }
      if (status === 403) {
        window.location.href = '#/exception/403'
        return
      }
      if (status <= 504 && status >= 500) {
        window.location.href = '#/exception/500'
        return
      }
      if (status >= 404 && status < 422) {
        window.location.href = '#/exception/404'
        return
      }
      return Promise.reject(e)
    })
...
```  

### <a name="编写公共处理方法">编写公共处理方法</a>
```
# 主要是时间、字符串等处理方法
yarn add moment qs --save
vim src/utils/utils.js

...
export function dateFormat(format, date) {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o)
    if (new RegExp('(' + k + ')').test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return format
}
...

```

### <a name="编写公共对象存储方法">编写公共对象存储方法</a>
```
# 主要是储存token等值
vim src/utils/storage.js

...
export function getAuthority() {
  return localStorage.getItem('token')
}

export function setAuthority(token) {
  return localStorage.setItem('token', token)
}

export function removeAuthority() {
  return localStorage.removeItem('token')
}
...

```

### <a name="编写公共组件">编写公共组件</a>
```
# 401、403等异常页面组件
vim src/components/Exception.js

# 通用页面头部组件
vim src/components/GlobalHeader.js

# 通用页面加载组件
vim src/components/Loading.js

# 通用暂无数据组件
vim src/components/Empty.js

```  

### <a name="增加Redux支持">增加 Redux 支持</a>
```
yarn add redux react-redux redux-thunk history redux-logger --save	

```  

### <a name="增加ReactRouter支持">增加 React Router 支持</a>
```
yarn add react-router-dom connected-react-router --save

# 安装动态导入组件的高阶组件
yarn add react-loadable --save

vim src/index.js
...
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
-import App from '@/pages/Home/App';
+import Root from './router'
import * as serviceWorker from './serviceWorker';

-ReactDOM.render(<App />, document.getElementById('root'));
+ReactDOM.render(<Root />, document.getElementById('root'));
...

vim src/router.js
...
import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './pages/Home/App'
function RouterConfig({ history }) {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    </HashRouter>
  )
}
export default RouterConfig
...

```  

### <a name="配置组件和路由">配置组件和路由</a>
```
# 挂载组件（异步和同步），配置路由
mkdir router
cd router

# 挂载组件（异步和同步）
vim AsyncComponents.js
vim SyncComponents.js

# 合并导出所有组件
vim index.js 
...
import routes from './routes.js'
import syncComponents from './SyncComponents.js'
import asyncComponents from './AsyncComponents.js'

const components = Object.assign(syncComponents, asyncComponents)

const routers = JSON.parse(JSON.stringify(routes))

const attachComp = arr => {
  arr.forEach(item => {
    if (typeof item.component === 'string' && components[item.component]) {
      item.component =
        components[item.component].default || components[item.component]
    }
    if (typeof item.layout === 'string' && components[item.layout]) {
      item.layout = components[item.layout].default || components[item.layout]
    }
  })
}
attachComp(routers)

export default routers
...

# 组件链接路由
vim routes.js
/**
 * 配置路由
 * @key { 路由名称 会在页面头部显示 type:string } name
 * @key { 路由路径 路由路径 type:string } path
 * @key { 组件名称 路由挂载的组件 type:function } component
 * @key { 路由权限 是否进行权限校验 type:boolean } authority
 * @key { 模版组件 选择模版组件，默认为基础模版 type:object } layout
 */
 ...
```  

### <a name="控制组件权限">控制组件权限</a>  
```
# 通过一个高阶组件包装路由组件
vim src/router.js
...
// import Login from '@/pages/User/Login'
// import Password from '@/pages/User/Password'
// import Register from '@/pages/User/Register'
// import Message from '@/pages/Home/Message'
// import Account from '@/pages/Account'
// import AboutUs from '@/pages/Account/AboutUs'
// import Help from '@/pages/Account/Help'
// import HelpList from '@/pages/Account/HelpList'
// import Setting from '@/pages/Account/Setting'
// import Home from '@/pages/Home'
// import UserLayout from '@/layouts/BasicLayout'
// import PageNavLayout from '@/layouts/PageNavLayout'
// import NoNetwork from '@/pages/Exception/NoNetwork'

import AuthorizedRoute from '@/components/Authorized'

function RouterConfig({ history }) {
  return (
    // <HashRouter>
    //   <Switch>
    //     <UserLayout>
    //       <Route path='/' exact component={Home} />
    //       <Route path='/account' exact component={Account} />
    //       <Route path='/message' exact component={Message} />
    //       <Route path='/login' exact component={Login} />
    //       <Route path='/password' exact component={Password} />
    //       <Route path='/register' exact component={Register} />
    //       <Route path='/about-us' exact component={AboutUs} />
    //       <Route path='/help' exact component={Help} />
    //       <Route path='/help-list' exact component={HelpList} />
    //       <Route path='/setting' exact component={Setting} />
    //       <Route path='/500' exact component={NoNetwork} />
    //     </UserLayout>
    //   </Switch>
    // </HashRouter>
    <HashRouter>
      <AuthorizedRoute />
    </HashRouter>
  )
}
export default RouterConfig
...

# 通过 src/router/routes.js 里的 authority 配置，在路由跳转的时候，判断权限：1.判断路由是否合法，不合法则跳转404；2.路由合法时，判断是否需要进行权限判断，不需要则跳转相应路由；3.权限判断完成，如果有权限，跳转相应路由，否则跳转登录

vim src/components/Authorized/AuthorizedRoute.js
...
const routerConfig =
      typeof getRouterConfig(location.pathname) === 'undefined'
        ? null
        : getRouterConfig(location.pathname) // 根据当前路由，获取其相关配置信息
        
    routerConfig && routerConfig.authority && this.asyncAuthUpdate() // 更新需要判断权限组件的权限
...

// 监听路由变化
    history.listen((location, action) => {
      const path = location.hash.replace('#', '')
      document.title = getRouterConfig(path) && getRouterConfig(path).name // 更改当前路由document标题，便于其他方法通过标题区分页面
      if (getRouterConfig(path) && getRouterConfig(path).authority) {
        // 如果首页不需要权限判断，就必须监听路由变化时判断
        this.asyncAuthUpdate()
      }
    })
...
asyncAuthUpdate = async () => {
    await this.updateToken() // 先更新不同来源的Token，比如：第三方url参数
    await this.updateAuthInfo() // 再根据票据更新权限
  }

  // 更新Token
  updateToken = () => {
    // 方式一：第三方APP 和 webview 都从 url search 里提供
    const token = getQueryString('token', this.props.location.search)
    if (token) {
      setAuthority(token)
    }
  }
  // 更新权限
  updateAuthInfo = () => {
    this.props
      .dispatch(fetchCurrent())
      .then(res => {})
      .catch(err => {
        // 产品说不提示登录超时和多点登录下线
        // getUserId() &&
        Toast.fail('抱歉，未登录或登录超时，请重新登录', 3, null, false)
      })
  }
...
// 判断路由是否合法
    if (routerConfig) {
      // 路由合法时，判断是否需要进行权限判断
      if (routerConfig.authority) {
        // 权限判断完成
        if (!currentUser.pending) {
          // 需要权限判断，开始判断权限
          if (currentUser.payload) {
            // 有权限，跳转相应路由
            return (
              // <AnimatedRouter timeout={speed} className={classname}>
              <Layout title={routerConfig.name}>
                <Route
                  exact
                  path={routerConfig.path}
                  component={routerConfig.component}
                />
              </Layout>
              //  </AnimatedRouter>
            )
          } else {
            // 无权限，跳转登录
            return (
              <Redirect
                to={`/login?from_hash=${this.props.location.pathname}`}
              />
            )
          }
        } else {
          return (
            <Empty
              img={<img src={require('@/assets/Other/logo.svg')} alt='empty' />}
              text='组件加载中...'
            />
          )
        }
      } else {
        // 不需要权限判断
        return (
          // <AnimatedRouter timeout={speed} className={classname}>
          <Layout
            title={routerConfig.name}
            currentuser={routerConfig.authority ? 'admin' : 'user'}
          >
            <Route
              exact
              path={routerConfig.path}
              component={routerConfig.component}
            />
          </Layout>
          // </AnimatedRouter>
        )
      }
    } else {
      // 路由不合法时，重定向至 404
      return <Redirect to='/exception/404' />
    }
...

```  

### <a name="路由切换动画">路由切换动画</a>
```
# 安装路由切换动画所需第三方包
yarn add react-animated-router react-transition-group

# 编写动效，可自定义
vim src/components/Authorized/AuthorizedRoute.js
...
 // 通过 className 属性，添加自定义类名
 <AnimatedRouter timeout={speed} className={classname}>
  <Layout title={routerConfig.name}>
    <Route
      exact
      path={routerConfig.path}
      component={routerConfig.component}
    />
  </Layout>
</AnimatedRouter>                        
...

vim src/styles/animate.less
...
// 通过对自定义类名，添加特殊动效
.animated-router-container.none {
    .page-nav-layout.animated-router-forward-enter-active,
    .page-nav-layout.animated-router-forward-exit-active,
    .page-nav-layout.animated-router-backward-enter-active,
    .page-nav-layout.animated-router-backward-exit-active {
      /* 不同过渡阶段需要的过渡时间与缓动效果 */
      transition: opacity 0.3s !important;
    }
}
...

vim src/router/routers.js
...
// 通过定义 animated 属性，传递 className 类名
{
    name: '首页',
    path: '/',
    component: '/',
    authority: false,
    layout: '/page-nav-layout',
    animated: 'none',
},
...
```  

### <a name="其他处理">其他处理</a>
```
# 支持 src 路径别名 @
vim config/webpack.config.js
...
alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        '@': path.resolve('src'),
      },
...

# 微信和第三方应用跳转不添加头部（http://localhost:3000/#/message?is_show_head=false）
vim src/components/Authorized/AuthorizedRoute.js
...
// 处理头部显示状态
    if (getInitHead() === null) {
      setShowHead(getQueryString('is_show_head', location.search))
      setInitHead(false)
    }
...

vim src/components/GlobalHeader/index.js
...
{getDeviceSystem() === 'weixin' || getShowHead() === 'false' ? null : (...)}
...

# 微信和第三方应用登录(http://localhost:3000/#/message?token=312ee3e5cd4dd1bba2820904e818c5d2923a8ccb830833ced81aa18afc3c8f39)

vim src/components/Authorized/AuthorizedRoute.js
...
asyncAuthUpdate = async () => {
    await this.updateToken()    // 先更新不同来源的Token
    await this.updateAuthInfo() // 再根据Token更新权限
  }
// 更新Token
  updateToken = () => {
    // 方式一：第三方APP 和 webview 都从 url search 里提供
    const token = getQueryString('token', this.props.location.search)
    if (token) {
      setAuthority(token)
    }
  }
...

# 更改当前路由document标题，便于其他方法通过标题区分页面
vim src/components/Authorized/AuthorizedRoute.js
document.title = routerConfig && routerConfig.name // 更改当前路由document标题，便于其他方法通过标题区分页面

# 根据不同来源，控制底部导航是否显示
...
componentDidMount() {
    this.setState({
      is_show_nav: getQueryString('is_show_nav', this.props.location.search),
    })
  }
...
// 根据不同来源是否显示底部导航
    const is_show_nav =
      this.state.is_show_nav === 'false' ||
      (typeof this.props.location.state != 'undefined' &&
        this.props.location.state.hasOwnProperty('is_show_nav') &&
        !this.props.location.state.is_show_nav)
...

```    

## <a name="程序目录">程序目录</a>

```
├── build                                   // 打包目录
├── config                                  // 构建相关  
├── mock                                    // 模拟数据
├── node_modules                            // 依赖包（如果过去某个运行正常的项目，无法运行了，删除该目录，重新 yarn 试试）
├── public                                  // 静态资源目录（不打包）
│   ├── manifest.json                       // Web应用程序清单（安装到设备的主屏幕时起作用）
├── scripts                                 // 配置相关
├── src                                     // 源代码
│   ├── actions                             // 所有 actions
│   │   ├── login.js                        // 登录
│   │   ├── user.js                         // 用户信息
│   ├── api                                 // 所有 HTTP 请求
│   │   ├── message.js                      // 消息（根据业务模块命名，和 /pages/* 一一对应）
│   │   ├── login.js                        // 登录
│   │   ├── register.js                     // 注册
│   │   ├── user.js                         // 用户信息
│   ├── assets                              // 图片样式等资源（会打包，根据业务模块命名，和 /pages/* 一一对应）
│   ├── components                          // 公用组件
│   │   ├── Authorized                      // 权限
│   │   ├── Empty                           // 通用暂无数据
│   │   ├── Exception                       // 通用异常
│   │   ├── GlobalHeader                    // 通用头部
│   │   ├── Loading                         // 通用加载
│   ├── constants                           // 所有 constants
│   │   ├── ActionTypes.js                   
│   ├── layouts                             // 页面模版
│   │   ├── BasicLayout.js                  // 基础模版
│   │   ├── BlankLayout.js                  // 空模版
│   │   ├── RegisterLayout.js               // 注册模版
│   │   ├── PageNavLayout.js                // 导航模版
│   │   ├── UserLayout.js                   // 用户模版
│   ├── pages                               // 页面视图
│   │   ├── Account                         // 个人中心（根据业务模块命名，和 /api/* 一一对应）
│   │   ├── Exception                       // 异常
│   │   ├── Home                            // 首页
│   │   ├── User                            // 注册、登录、修改密码
│   ├── reducers                            // 所有 reducers
│   │   ├── index.js                        // 导出所有reducers 
│   │   ├── user.js                         // 用户信息
│   │   ├── login.js                        // 登录
│   ├── router                              // 路由组件配置
│   │   ├── AsyncComponents.js              // 异步加载组件
│   │   ├── index.js                        // 路由导出组件
│   │   ├── routes.js                       // 路由配置
│   │   ├── SyncComponents.js               // 同步加载组件
│   ├── styles                              // 公共样式 
│   │   ├── theme.js                        // 自定义主题
│   │   ├── animate.less                    // 路由切换动效
│   ├── utils                               // 全局公用方法
│   │   ├── request.js                      // 全局 http 请求方法封装
│   │   ├── storage.js                      // 操作浏览器 storage 
│   │   ├── utils.js                        // 公用方法
│   ├── index.js                            // 入口加载组件初始化等
│   ├── index.less                          // 入口组件样式文件
│   ├── router.js                           // 路由组件
│   ├── serviceWorker.js                    // PWA 配置
├── .gitignore                              // Git 忽略文件(自动生成，参考：https://github.com/github/gitignore)
├── package.json                            // 包配置
├── README.md                               // 自述文件
└── yarn.lock                               // 包依赖关系配置文件（不要直接编辑这个文件，它可以帮助你锁定版本，避免因此导致的意外）
```  

## <a name="开发与构建命令">开发与构建命令</a>

### <a name="依赖配置">依赖配置</a>

```shell
# 安装依赖   
yarn

# 进入开发模式，启动前台应用，监听文件改动自动刷新浏览器  
yarn start

# 构建文件到 dist 目录供发布
yarn run build
```

如果一切顺利，就能正常打开端口: [http://localhost:3000/](http://localhost:3000/)       

### <a name="命令说明">命令说明</a>

| `yarn run <script>` | 解释             |
| ------------------- | ---------------- |
| `test`              | 启动测试服务     |
| `start`             | 启动3000端口服务 |
| `build`             | 打包正式资源     |  

## <a name="开发流程">开发流程</a>

### <a name="概述">概述</a>

1. 克隆本脚手架，或按照[搭建方法](#搭建方法)一步一步自己搭建
2. 根据项目实际需求，配置组件 `src/router/AsyncComponents.js` 和路由 `src/router/routes.js` 、HTTP 请求代理地址 `/config/webpackDevServer.config.js`，准备各路由所对应的 React 文件（例如：`src/pages/Home/index.js`，请根据业务模块命名），分配给项目成员实现
3. 访问 [可视化接口管理工具]([http://rap2.taobao.org](http://rap2.taobao.org/)) 配置 mock 数据
4. 实现 React 文件的界面部分
5. 后端实现 RESTful 接口，并维护接口文档
6. 调试后端接口
7. 测试


### <a name="载入组件配置路由">载入组件配置路由</a>
文件地址：[`/src/router/SyncComponents.js`](/src/router/SyncComponents.js) 

```js
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
```  

文件地址：[`/src/router/AsyncComponents.js`](/src/router/AsyncComponents.js) 

```js
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
}
export default components
```  

文件地址：[`/src/router/routes.js`](/src/router/routes.js) 

```js
/**
 * 配置路由
 * @key { 路由名称 会在页面头部显示 type:string } name
 * @key { 路由路径 路由路径 type:string } path
 * @key { 组件名称 路由挂载的组件 type:function } component
 * @key { 路由权限 是否进行权限校验 type:boolean } authority
 * @key { 模版组件 选择模版组件，默认为基础模版 type:object } layout
 */
const routerConfig = [
  ...
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
  ...
]
```  

### <a name="配置API接口">配置 API 接口</a>

文件地址：[`/config/webpackDevServer.config.js`](/config/webpackDevServer.config.js) 

```js
...
proxy: {
      '/v4': {
        target: `https://git.michaelxu.cn/api/v4/`, // 接口的域名
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: { '^/v4': '' }, // pathRewrite 来重写地址，将前缀 '/api' 转为 '/'。
      },
      '/oauth': {
        target: `https://git.michaelxu.cn/oauth/`, // 接口的域名
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: { '^/oauth': '' }, // pathRewrite 来重写地址，将前缀 '/api' 转为 '/'。
      },
    },
...
```

### <a name="创建http请求">创建http请求</a>

文件地址：[`/api/login.js`](/api/login.js) 

```js
import request from '@/utils/request'

// 根据业务模块命名，和 /pages/* 一一对应
export async function queryLoginByPass(params) {
    return request('/oauth/token', {
      method: 'POST',
      body: params,
    })
}
export async function queryLogout(params) {
  return request('/v4/user', {
    method: 'POST',
    body: params,
  })
}
```

### <a name="调用http请求">调用http请求</a>

文件地址：[`/src/pages/User/Login.js`](/src/views/User/Login.js) 

```
    this.props.dispatch(queryLoginByPass()).catch(e => {
      console.log(e)
    })
```

### <a name="使用Redux">使用Redux(可选)</a>

#### <a name="说明">说明</a>

**动机**

使用 Redux 不是必须的，但当你遇到以下几个场景，就可以开始考虑使用了

**你有着相当大量的、随时间变化的数据或状态**，比如：缓存数据、本地生成尚未持久化到服务器的数据、UI 状态、激活的路由、被选中的标签、是否显示加载动效、分页器等等
* **当前 view 的 model 变化会引起多个其他 view 变化（但使用 Redux 管理大量的 state，会是页面性能下降，注意平衡）**
* **你觉得把所有 state 放在最顶层组件中已经无法满足需要了**

**三大原则**

* **单一数据源**：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
* **State 是只读的**：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
* **使用纯函数来执行修改**：为了描述 action 如何改变 state tree ，你需要编写 reducers

**数据流**

> **严格的单向数据流**是 Redux 架构的设计核心

1. **调用** [`store.dispatch(action)`](http://cn.redux.js.org/docs/api/Store.html#dispatch)

2. **Redux store 调用传入的 reducer 函数**

3. **Redux store 保存了根 reducer 返回的完整 state 树**  


#### <a name="创建Actions">创建Actions</a>

文件地址：[`/src/actions/login.js`](/src/actions/login.js) 

```js
import { queryLoginByPass } from '@/api/login'
import { fetchCurrent } from './user'
import * as types from '@/constants/ActionTypes'
import store from '@/index'
import { Toast } from 'antd-mobile'

...
export const fetchLoginByPass = param => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    queryLoginByPass(param)
      .then(response => {
        dispatch({
          type: types.CHANGE_LOGIN_STATUS,
          payload: {
            response,
            currentAuthority: response.access_token, // 全局唯一接口调用凭据
          },
          receivedAt: Date.now(),
        })

        if (typeof response.error === 'undefined') {
          // 登录成功，获取用户信息
          store
            .dispatch(fetchCurrent())
            .then(res => {})
            .catch(err => {})
          resolve(response)
        } else {
          const { error_description } = response
          Toast.fail(error_description)
        }
      })
      .catch(err => {
        Toast.fail(err.message, 3, null, false)
      })
  })
}
...
```  

#### <a name="创建ActionTypes">创建ActionTypes</a>

文件地址：[`/src/constants/ActionTypes.js`](/src/constants/ActionTypes.js) 

```js
export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'
```

#### <a name="创建Reduce">创建Reduce</a>

文件地址：[`/src/reducers/index.js`](/src/reducers/index.js) 

```js
import login from './login'

export default combineReducers({
  login
})
```

文件地址：[`/src/reducers/login.js`](/src/reducers/login.js) 

```js
import { combineReducers } from 'redux'
import { CHANGE_LOGIN_STATUS } from '@/constants/ActionTypes'
import { setAuthority } from '@/utils/storage'

const login = (state = { pending: true, payload: false }, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      setAuthority(action.payload.currentAuthority)
      return {
        ...state,
        pending: false,
        payload: action.payload,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
}

export default combineReducers({
  login,
})
```  


#### <a name="发起Actions">发起Actions</a>

文件地址：[`/src/pages/User/Login.js`](/src/views/User/Login.js) 

```js
...
// 提交密码登录
const payload = { username, password, grant_type: 'password' }
this.props
  .dispatch(fetchLoginByPass(payload))
  .then(res => {
    this.props.history.replace(this.fromHash)
    Toast.success('恭喜您登录成功', 3, null, false)
  })
  .catch(err => {
    Toast.fail(err.message, 3, null, false)
  })      
...   
```  

#### <a name="获取Store">获取Store</a>

文件地址：[`/src/pages/User/Login.js`](/src/pages/User/Login.js) 

```js
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

...
class Login extends PureComponent {
  static propTypes = {
    login: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
...
const mapStateToProps = state => {
  const {
    login: { login }
  } = state

  return {
    login
  }
}
export default withRouter(connect(mapStateToProps)(Login))
```  

### <a name="发布">发布</a>

```bash
yarn run build // 打包文件为 build 文件夹，请以此为根目录
```
