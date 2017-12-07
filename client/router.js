import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import browserHistory from './browser-history'

import AddonsFeatured from './pages/addons/featured/'
import AddonsInstalled from './pages/addons/installed/'
import AddonsManage from './pages/addons/manage/'
import AddonsRecent from './pages/addons/recent/'
import AddonsSearch from './pages/addons/search/'
import Arena from './pages/arena/'
import Leaderboards from './pages/leaderboards/'
import Login from './pages/login/'
import Maps from './pages/maps/'
import NotFound from './pages/not-found/'
import Play from './pages/play/'
import Profile from './pages/profile/'

const CompleteRouter = () => (
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register">
				<Redirect to="/login" />
			</Route>

			<Route exact path="/arena" component={Arena} />

			<Route exact path="/">
				<Redirect to="/play" />
			</Route>
			<Route exact path="/play" component={Play} />

			<Route exact path="/leaderboards" component={Leaderboards} />

			<Route exact path="/maps" component={Maps} />

			<Route exact path="/addons">
				<Redirect to="/addons/installed" />
			</Route>
			<Route exact path="/addons/installed" component={AddonsInstalled} />
			<Route exact path="/addons/featured" component={AddonsFeatured} />
			<Route exact path="/addons/recent" component={AddonsRecent} />
			<Route exact path="/addons/search" component={AddonsSearch} />
			<Route exact path="/addons/manage" component={AddonsManage} />

			<Route exact path="/profile" component={Profile} />

			<Route component={NotFound} />
		</Switch>
	</Router>
)

export default CompleteRouter
