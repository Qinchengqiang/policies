import React from 'react';
import WidgetBadge from './tools/widgetBadge'
import './styles/policyWidget.css';
import ReactHoverObserver from "react-hover-observer";
import _ from "lodash";

const PolicyCard = ({isHovering = false, props}) => {
    const monthMatch ={
        '01': 'JAN',
        '02': 'FEB',
        '03': 'MAR',
        '04': 'APR',
        '05': 'MAY',
        '06': 'JUN',
        '07': 'JUL',
        '08': 'AUG',
        '09': 'SEP',
        '10': 'OCT',
        '11': 'NOV',
        '12': 'DEC'
    };
    
    const formatDate = (dateString) => {
        let year = dateString.slice(0,4);
        let month = dateString.slice(5,7);
        let day = dateString.slice(8,10);
        return day + '-' + monthMatch[month] + '-' + year;
    }
    return (
        <>
            <div className='policyCard d-flex flex-row flex-nowrap'>
                <div className='policyCard-content d-flex flex-column'>
                    <div className='card-upperContent d-flex flex-row flex-nowrap w-100'>
                        <WidgetBadge isHovering={isHovering}/>
                        <div className='d-flex flex-column'>
                            <h3 className='widgetTitle'>{props.policy.title}</h3>
                            <p className='widgetDescription'>{props.policy.id} | {props.policy.description}</p>
                        </div>
                    </div>
                    <div className='card-lowerContent d-flex flex-row flex-nowrap w-100'>
                        {_.isEmpty(props.policy.payment_date) ?
                            <></>
                            :
                            <div className='small-label'>
                                <p className='value'>{formatDate(props.policy.payment_date.slice(0,10))}</p>
                                <p className='labelName'>payment date</p>
                            </div>
                        }
                        {props.policy.status === 'expired' ?
                            <div className='small-label' style={{minWidth: '223px'}}>
                                <p className='value'>{formatDate(props.policy.coverage_start_date)}</p>
                                <div className='d-flex flex-row justify-content-between'>
                                    <p className='labelName'>Date shipped</p>
                                    <div className='d-flex flex-row align-items-center'>
                                        <p className='policyStatus' style={{color: '#FF3200'}}>{props.policy.status}</p>
                                        <div className='status' style={{backgroundColor: '#FF3200'}}>{''}</div>
                                    </div>
                                </div>

                            </div>
                            :
                            <div className='small-label' style={{minWidth: '223px'}}>
                                <p className='value'>{formatDate(props.policy.coverage_start_date)} to {formatDate(props.policy.coverage_end_date)}</p>
                                <div className='d-flex flex-row justify-content-between'>
                                    <p className='labelName'>Coverage dates</p>
                                    <div className='d-flex flex-row align-items-center'>
                                        <p className='policyStatus'>{props.policy.status}</p>
                                        <div className='status'>{''}</div>
                                    </div>
                                </div>
                            </div>
                        }

                        {_.isEmpty(props.policy.premium_formatted) ?
                            <></> :
                            <div className='small-label'
                                 style={_.isEmpty(props.policy.renewal) ? {borderRight: '0px'} : {}}>
                                <p className='value'>{props.policy.premium_formatted}</p>
                                <p className='labelName'>Price/Premium</p>
                            </div>
                        }
                        {_.isEmpty(props.policy.renewal) ?
                            <></>
                            :
                            <div className='small-label' style={{borderRight: '0px'}}>
                                <p className='value'>{props.policy.renewal}</p>
                                <p className='labelName'>Renewal</p>
                            </div>
                        }
                    </div>
                </div>
                <div className='policyCard-Logo d-flex flex-row justify-content-center align-items-center'>
                    <div>
                        <img src={props.policy.partner.logo} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
};

const PolicyWidget = (props) => {
    return (
        <ReactHoverObserver className='widget w-100'>
            <PolicyCard props={props}/>
        </ReactHoverObserver>
    );
};

export default PolicyWidget;