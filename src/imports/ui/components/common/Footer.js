import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="pull-right">
                    version <strong>0.1.0</strong>
                </div>
                <div>
                    <strong>Copyright</strong> PCMLI &copy; 2015-2017
                </div>
            </div>
        )
    }
}

export default Footer