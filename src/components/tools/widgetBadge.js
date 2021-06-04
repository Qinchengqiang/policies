import React from 'react';
import activeCircleBtn from '../../assets/images/circle-chevronDown.png';
import circleBtn from '../../assets/images/circle-chevronRight.png';

const WidgetBadge = (props) => {
    return (
        <div className='w-100'>
            {props.active ?
                <img  className='w-100' src={activeCircleBtn} alt=''/>
                :
                <img  className='w-100' src={circleBtn} alt=''/>
            }
        </div>
    );
};

export default WidgetBadge;