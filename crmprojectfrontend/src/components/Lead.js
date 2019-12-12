import React from 'react';
import { BusinessName } from './subcomponents/BusinessName';
import { Address } from './subcomponents/Address';
import { OfficeTel } from './subcomponents/OfficeTel';
import { Email } from './subcomponents/Email';
import { LeadContact } from './subcomponents/LeadContact';
import {Link} from 'react-router-dom'

export class Lead extends React.Component {

render() {
    //TODO: destructuring - look at the documentation.
// const {lead} = this.props;
// const {address, businessName} = lead;

    return(
            <div className={'container'}>
                <ul className={'list-group list-group-flush'}>
                <li><BusinessName businessName={this.props.lead.businessName} /></li>
                <li><Address address={this.props.lead.address} /></li>
                <li><OfficeTel officeTel={this.props.lead.officeTel} /></li>
                <li><Email email={this.props.lead.email} /></li>
                <li><LeadContact leadContact={this.props.lead.leadContact} /></li>
                </ul>
                <Link to={`/form/${this.props.lead.id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                {/* <button onClick={() => this.props.onDelete(this.props.post.id)}  type="button" className="btn btn-danger float-right">Delete</button> */}
                <hr></hr>
            </div>
        )
}

}