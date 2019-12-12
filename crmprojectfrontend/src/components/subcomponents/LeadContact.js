import React from 'react';

export class LeadContact extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    <p>First Name: {this.props.leadContact.firstName}</p>
                    <p>Last Name: {this.props.leadContact.lastName}</p>
            </React.Fragment>
        )
    }
}