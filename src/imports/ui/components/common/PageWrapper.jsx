import * as React from "react";

export class PageWrapper extends React.Component {
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
;

