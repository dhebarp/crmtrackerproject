import React from 'react';

export class LeadForm extends React.Component {
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
            },
            //is is loading false =  is base state.
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "postCode") {
            this.setState({ 
                address: { ...this.state.address, postCode: value}
            })
        } else if (name === "street") {
            this.setState({ 
                address: { ...this.state.address, street: value}
            })
        } else if (name === "suburb") {
            this.setState({ 
                address: { ...this.state.address, suburb: value}
            })
        } else if (name === "firstName") {
            this.setState({ 
                leadContact: { ...this.state.leadContact, firstName: value}
            })
        } else if (name === "lastName") {
            this.setState({ 
                leadContact: { ...this.state.leadContact, lastName: value}
            })
        } else {
            this.setState({ [name]: value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        if (!this.props.match.params.id) {
            this.createNewLead();
        } else {
            this.updateLead();
        }
    }

    updateLead() {
        const id = this.props.match.params.id

        fetch(`http://localhost:4000/api/lead/update/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                businessName: this.state.businessName,
                address: {
                    street: this.state.address.street,
                    suburb: this.state.address.suburb,
                    postCode: this.state.address.postCode,
                },
                officeTel: this.state.officeTel,
                email: this.state.email,
                leadContact: {
                    firstName: this.state.leadContact.firstName,
                    lastName: this.state.leadContact.lastName
                }
            })  // body data type must match "Content-Type" header
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.history.push('/dashboard');
            })
            .catch((e) => console.log(e));
    }

    createNewLead() {
        fetch('http://localhost:4000/api/newlead', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                businessName: this.state.businessName,
                address: {
                    street: this.state.address.street,
                    suburb: this.state.address.suburb,
                    postCode: this.state.address.postCode,
                },
                officeTel: this.state.officeTel,
                email: this.state.email,
                leadContact: {
                    firstName: this.state.leadContact.firstName,
                    lastName: this.state.leadContact.lastName
                }
            }) // body data type must match "Content-Type" header
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.history.push('/dashboard');
            })
            .catch((e) => console.log(e));
    }

    componentDidMount() {
        const id = this.props.match.params.id

        if (id) {
            this.setState({
                //is loading true =  will give edit form data.
                isLoading: true
            })
            fetch(`http://localhost:4000/api/lead/find/${id}`)
                .then((res) => res.json())
                .then((data) => {
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
                        },
                        isLoading: false
                    })
                }
                )
        }
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading Post Content</p>
        }

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputFirstName">First Name</label>
                                <input type="text" name="firstName" defaultValue={this.state.leadContact.firstName} class="form-control" id="inputFirstName" placeholder="First Name" onChange={this.handleChange} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputLastName">Last Name</label>
                                <input type="text" name="lastName" defaultValue={this.state.leadContact.lastName} class="form-control" id="inputLastName" placeholder="Last Name" onChange={this.handleChange} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Email</label>
                                <input type="email" name="email" defaultValue={this.state.email} class="form-control" id="inputEmail4" placeholder="Email" onChange={this.handleChange} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputBusinessName">Business Name </label>
                                <input type="text" name="businessName" defaultValue={this.state.businessName} class="form-control" id="inputBusinessName4" placeholder="Business Name" onChange={this.handleChange} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputOfficeTel4">Phone Number</label>
                                <input type="text" name="officeTel" defaultValue={this.state.officeTel} class="form-control" id="inputOfficeTel4" placeholder="Tel" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" name="street" defaultValue={this.state.address.street} class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.handleChange} />
                        </div>
                        <div class="form-row">
                            <div class="form-group  col-md-6">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" name="suburb" defaultValue={this.state.address.suburb} class="form-control" id="inputAddress2" placeholder="Suburb" onChange={this.handleChange} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPostCode">Post Code</label>
                                <input type="text" name="postCode" defaultValue={this.state.address.postCode} class="form-control" id="inputPostCode" placeholder="2536" onChange={this.handleChange} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </React.Fragment>
        )

    }
}