import React from 'react';

export class Address extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    <p>{this.props.address.street}, {this.props.address.suburb}, {this.props.address.postCode}</p>
            </React.Fragment>
        )
    }
}