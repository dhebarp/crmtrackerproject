import React from 'react';
import { BusinessName } from './subcomponents/BusinessName';
import { Address } from './subcomponents/Address';
import { OfficeTel } from './subcomponents/OfficeTel';
import { Email } from './subcomponents/Email';
import { LeadContact } from './subcomponents/LeadContact';
import { Link } from 'react-router-dom'

export class Lead extends React.Component {

    render() {
        //TODO: destructuring - look at the documentation.
        // const {lead} = this.props;
        // const {address, businessName} = lead;

        return (
                <React.Fragment>
                
                    
                        <tr>
                            <td class="text-center"><BusinessName businessName={this.props.lead.businessName} />
                            <Link to={`/form/${this.props.lead._id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                            </td>
                            <td class="text-center"><LeadContact leadContact={this.props.lead.leadContact} /></td>
                            <td class="text-center"><Address address={this.props.lead.address}/>
                            <Link to={`/view/${this.props.lead._id}`}><button type="button" className="btn btn-info">View Record</button></Link>
                            </td>
                            <td class="text-center"><OfficeTel officeTel={this.props.lead.officeTel} /><button onClick={() => this.props.onDelete(this.props.lead._id)} type="button" className="btn btn-danger float-right">Delete</button>
                            </td>
                            <td class="text-center"><Email email={this.props.lead.email} /></td>
                        </tr>
                </React.Fragment>
        )
    }

}