import React, { Component } from 'react';
import './business-list.css';
import Business from '../Business/business'

class BusinessList extends Component {

    render() {


        return (
            <div className="BusinessList">
                <Business /> 
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
} // end class

export default BusinessList;
