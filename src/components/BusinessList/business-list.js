import React, { Component } from 'react';
import './business-list.css';
import Business from '../Business/business'

class BusinessList extends Component {

    render() {


        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {

                        return <Business business={business}/>;
                    })
                }
            </div>
        );
    }
} // end class

export default BusinessList;
