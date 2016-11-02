import React from 'react'
import Main from '../components/layouts/Main';

import {CustomerPageWithData} from '../views/customer/CustomerPage';
import {DashboardPage} from '../views/dashboard/DashboardPage'

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={DashboardPage}> </Route>
            <Route path="customer" component={CustomerPageWithData}> </Route>
        </Route>
    </Router>

);