import * as React from "react";
import {IboxTools} from './IboxTools'

export class Ibox extends React.Component {
    render() {
        return (
            <div className="ibox">
                <div className="ibox-title">
                    <h5>{this.props.headerName}</h5>

                    <IboxTools/>
                </div>
                <div className="ibox-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

