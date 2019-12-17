import React from 'react';

export class Email extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                    <p>{this.props.email}</p>
            </React.Fragment>
        )
    }
}