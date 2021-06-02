import React from 'react';
import './styles/policies.css';
import PolicesList from './policeList';

const Policies = () => {
    return (
        <div className='container policy'>
            <h1>YOUR POLICIES</h1>
            <PolicesList/>
        </div>
    );
};

export default Policies;