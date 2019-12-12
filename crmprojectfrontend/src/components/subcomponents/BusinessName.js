import React from 'react';

export class BusinessName extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    <p>Business Name: {this.props.businessName}</p>
            </React.Fragment>
        )
    }
}