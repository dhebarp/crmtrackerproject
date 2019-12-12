import React from 'react';
import { Lead } from './Lead';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leads: []
        }
    }

    renderLeads(leads) {
        return leads.map((lead) => {
            return (
                //here we are mapping posts into list items and adding id to list, then the post has an on delete as well.
                <li className={'list-group list-group-flush'} key={lead.id}>
                    <Lead lead={lead} />
                </li>
                // onDelete={this.handlePostDelete} - this needs to be added back in to delete
            )
        });
    }

    reloadLeads() {
        fetch('http://localhost:3000/api/allleads')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    leads: data
                })
            });
    }

    componentDidMount() {
        this.reloadLeads();
    }


render() {



    return(
        <div className={'container'} >
        <ul className={'list-group list-group-flush'}>
            {this.renderLeads(this.state.leads)}
        </ul>
    </div>
    )
}

}