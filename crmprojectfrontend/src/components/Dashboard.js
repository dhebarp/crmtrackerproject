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
                
                    <Lead lead={lead} onDelete={this.handleLeadDelete} />
                
            )
        });
    }

    componentDidMount() {
        this.reloadLeads();
    }

    reloadLeads() {
        fetch('http://localhost:4000/api/allleads')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    leads: data
                })
            });
    }

    handleLeadDelete = (id) => {

        fetch(`http://localhost:4000/api/lead/remove/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors' // no-cors, *cors, same-origin
        }) // body data type must match "Content-Type" header
            .then(() => {
                this.reloadLeads();
            })
            .catch((e) => console.log(e));
    }

    render() {

        return (
            <div className={'container'}>
            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-md-2 col-lg-2 col-xl-2">Busines Name</th>
                                        <th scope="col-md-2 col-lg-2 col-xl-2">Contact Name</th>
                                        <th scope="col-md-4 col-lg-4 col-xl-4">Address</th>
                                        <th scope="col-md-2 col-lg-2 col-xl-2">Phone Number</th>
                                        <th scope="col-md-2 col-lg-2 col-xl-2">Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                    {this.renderLeads(this.state.leads)}
                    </tbody>
                    </table>
            </div>
        )
    }
}