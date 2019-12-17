import React from 'react';

export class LeadContact extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    {this.props.leadContact.firstName} {this.props.leadContact.lastName}
            </React.Fragment>
        )
    }
}