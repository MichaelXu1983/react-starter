import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
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
