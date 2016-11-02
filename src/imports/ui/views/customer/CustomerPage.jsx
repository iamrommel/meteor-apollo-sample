import * as React from "react";
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import {PageWrapper} from '../../components/common/PageWrapper'
import {Ibox} from '../../components/common/Ibox'

export class Row extends React.Component {

    render() {
        return (

            <tr>
                <td className="project-status">
                    <span className="label label-primary">Active</span>
                </td>
                <td className="project-title">
                    <a>{this.props.name}</a>
                    <br/>
                    <small>Created 14.08.2014</small>
                </td>
                <td className="project-completion">
                    <small>Completion with: 48%</small>
                    <div className="progress progress-mini">
                        <div className="progress-bar"></div>
                    </div>
                </td>

            </tr>

        );
    }

}


class CustomerPage extends React.Component {
    render() {

        return (
            <PageWrapper>
                <Ibox headerName='Customer List'>
                    <table className="table table-hover">
                        <tbody>

                        <Row />
                        <Row/>
                        <Row/>

                        </tbody>
                    </table>
                </Ibox>
            </PageWrapper>
        )
    }
}



const Query = gql`
query  getWorkItem {
            name
}
`;

export const CustomerPageWithData = graphql(Query)(CustomerPage);
