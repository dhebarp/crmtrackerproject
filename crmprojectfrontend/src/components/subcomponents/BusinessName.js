import React from 'react';

export class BusinessName extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    {this.props.businessName}
            </React.Fragment>
        )
    }
}