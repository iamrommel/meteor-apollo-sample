import * as React from "react";
export class Breadcrumb extends React.Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li>
                    <a href="index.html">NQ+</a>
                </li>
                <li>
                    <a>Forms</a>
                </li>
                <li className="active">
                    <strong>Basic Form</strong>
                </li>
            </ol>
        )
    }
}