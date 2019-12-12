import React from 'react';

export class Address extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    <p>Street: {this.props.address.street}</p>
                    <p>Suburb: {this.props.address.suburb}</p>
                    <p>Postcode: {this.props.address.postCode}</p>
            </React.Fragment>
        )
    }
}