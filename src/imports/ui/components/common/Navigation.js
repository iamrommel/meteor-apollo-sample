import React from 'react';
import {Link, Location} from 'react-router';
import metisMenu from 'metismenu';
import {MenuItem} from './MenuItem'


export const ProfileOnNavigation = (props) => {

    return (
        <div className="dropdown profile-element">
                            <span>
                             </span>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear">
                                    <span className="block m-t-xs">
                                        <strong className="font-bold">John Doe</strong>
                                    </span>
                                    <span className="text-muted text-xs block">Chief Mechanic<b
                                        className="caret"></b></span>
                                </span>
            </a>
            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                <li><a href="#"> Profile</a></li>
                <li><a href="#"> Logout</a></li>
            </ul>
        </div>
    );

};

export const LogoOnNavigation = (props) => {
    return (
        <div className="logo-element">
            NQ+
        </div>
    );
};


export default class Navigation extends React.Component {

    componentDidMount() {
        const {menu} = this.refs;
        $(menu).metisMenu();
    }


    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">

                        <ProfileOnNavigation/>

                        <LogoOnNavigation/>

                    </li>

                    <MenuItem location={this.props.location} routeName="/dashboard" displayName="Dashboard"
                              icon="fa-th-large"/>

                    <MenuItem location={this.props.location} routeName="/customer" displayName="Customer" icon="fa-th-large"/>


                </ul>

            </nav>
        )
    }
}

