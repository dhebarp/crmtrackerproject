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
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    createNewPost() {
        fetch('http://localhost:3000/api/newlead', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                businessName: this.state.businessName,
                address: {
                    street: this.state.addess.street,
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
                this.props.history.push('/');
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
            fetch(`http://192.168.8.159:4000/api/blog/find/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        title: data.title,
                        businessName: data.businessName,
                        address: {
                            street: data.addess.street,
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

        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
            <div className="container">
            <div className="form-row">
            <div class="form-group col-md-4">
                <label for="inputFirstName">First Name</label>
                <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"/>
              </div>
              <div class="form-group col-md-4">
                <label for="inputLastNam">Last Name</label>
                <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"/>
              </div>
              <div class="form-group col-md-4">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputBusinessName">Business Name </label>
                <input type="text" class="form-control" id="inputBusinessName4" placeholder="Business Name"/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputOfficeTel4">Phone Number</label>
                <input type="text" class="form-control" id="inputOfficeTel4" placeholder="Tel"/>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="form-row">
            <div class="form-group  col-md-6">
              <label for="inputAddress2">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Suburb"/>
            </div>
              <div class="form-group col-md-6">
                <label for="inputPostCode">Post Code</label>
                <input type="text" class="form-control" id="inputPostCode" placeholder="2536"/>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
          </React.Fragment>
        )

    }
}