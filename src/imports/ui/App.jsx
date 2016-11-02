import React from 'react';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';


import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import '../../node_modules/animate.css/animate.min.css'
import './common/styles/style.css'


export default class App extends React.Component {
    render() {
        return <Router history={hashHistory}>{routes}</Router>
    }
}