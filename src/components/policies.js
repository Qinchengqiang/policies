import React from 'react';
import './styles/policies.css';
import PoliciesList from './policiesList';

const Policies = () => {
    return (
        <div className='container policy'>
            <h1>YOUR POLICIES</h1>
            <PoliciesList/>
        </div>
    );
};

export default Policies;