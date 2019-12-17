import React from 'react';
import {Link} from 'react-router-dom';

export class ViewLead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessName: "",
            address: {
                street: "",
                suburb: "",
                postCode: ""
            },
            officeTel: "",
            email: "",
            leadContact: {
                firstName: "",
                lastName: ""
            }
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetch(`http://localhost:4000/api/lead/find/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    businessName: data.businessName,
                    address: {
                        street: data.address.street,
                        suburb: data.address.suburb,
                        postCode: data.address.postCode,
                    },
                    officeTel: data.officeTel,
                    email: data.email,
                    leadContact: {
                        firstName: data.leadContact.firstName,
                        lastName: data.leadContact.lastName
                    }
                })
            })
    }


    render() {

        return (
            <div className="container">
            <div class="card">
                <h2 class="card-header">Customer Profile</h2>
                <div class="card-body">
                    <h3 class="card-title">Business Name: {this.state.businessName}</h3>
                    <h5 class="card-title">Contact Person: {this.state.leadContact.firstName} {this.state.leadContact.lastName}</h5>
                    <h5 class="card-title">Address:{this.state.address.street}, {this.state.address.suburb}, {this.state.address.postCode}</h5>
                    <h5 class="card-title">Telephone:{this.state.officeTel}</h5>
                    <h5 class="card-title">Email:{this.state.email}</h5>
                </div>
            </div>
            </div>
        )
    }
}
