import * as React from "react";
import {Link, Location} from 'react-router';


export class MenuItem extends React.Component {

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }


    render() {
        return (
            <li className={this.activeRoute(this.props.routeName)}>
                <Link to={this.props.routeName}>
                    <i className={ 'fa ' + this.props.icon}></i>
                    <span className="nav-label">{this.props.displayName}</span>
                </Link>
            </li>
        )
    }
}