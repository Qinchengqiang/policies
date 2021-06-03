import React from 'react';
import './styles/policyWidget.css';

const PolicyWidget = (props) => {
    return (
        <div className='widget w-100'>
            {props.policy.id}
        </div>
    );
};

export default PolicyWidget;