import React, {useEffect, useState} from 'react';
import WidgetBadge from './tools/widgetBadge'
import './styles/policyWidget.css';
import _ from "lodash";

const PolicyCard = ({props, toSetActive}) => {
    const [active, setActive] = useState(false);

    const monthMatch = {
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
        let year = dateString.slice(0, 4);
        let month = dateString.slice(5, 7);
        let day = dateString.slice(8, 10);
        return day + '-' + monthMatch[month] + '-' + year;
    };

    useEffect(() => {
        if (props.actives.indexOf(props.policy.id) !== -1) {
            setActive(true);
            toSetActive(true);
        }
        else {
            setActive(false);
            toSetActive(false);
        }
    }, [props.actives])

    return (
        <>
            <div className='policyCard d-flex flex-row flex-nowrap'
                 onClick={() => {
                     props.onClick(props.policy.id)
                 }}>
                <div className='policyCard-content d-flex flex-column'>
                    <div className='card-upperContent w-100 d-flex flex-row flex-nowrap justify-content-between'>
                        <div className='card-upper d-flex flex-row flex-nowrap'>
                            <div className='badgeBox'>
                                <WidgetBadge active={active}/>
                            </div>
                            <div className='card-upperWords d-flex flex-column'>
                                <h3 className='widgetTitle'>{props.policy.title}</h3>
                                <p className='widgetDescription'>{props.policy.id} | {props.policy.description}</p>
                            </div>
                        </div>
                        <div
                            className='policyCard-middleLogo d-flex flex-row justify-content-center align-items-center'>
                            <div>
                                <img src={props.policy.partner.logo} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='card-lowerContent d-flex flex-row flex-nowrap justify-content-between w-100'>
                        <div className='card-lower d-flex flex-row flex-nowrap'>
                            {_.isEmpty(props.policy.payment_date) ?
                                <></>
                                :
                                <div className='small-label payment'>
                                    <p className='value'>{formatDate(props.policy.payment_date.slice(0, 10))}</p>
                                    <p className='labelName'>payment date</p>
                                </div>
                            }
                            {props.policy.status === 'expired' ?
                                <div className='small-label status-label' style={{minWidth: '223px'}}>
                                    <p className='value'>{formatDate(props.policy.coverage_start_date)}</p>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='labelName'>Date shipped</p>
                                        <div className='d-flex flex-row align-items-center'>
                                            <p className='policyStatus'
                                               style={{color: '#FF3200'}}>{props.policy.status}</p>
                                            <div className='status mr-2' style={{backgroundColor: '#FF3200'}}>{''}</div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='small-label status-label' style={{minWidth: '223px'}}>
                                    <p className='value'>{formatDate(props.policy.coverage_start_date)} to {formatDate(props.policy.coverage_end_date)}</p>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <p className='labelName'>Coverage dates</p>
                                        <div className='d-flex flex-row align-items-center'>
                                            <p className='policyStatus'>{props.policy.status}</p>
                                            <div className='status mr-2'>{''}</div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {_.isEmpty(props.policy.premium_formatted) ?
                                <></> :
                                <div className='small-label price'
                                     style={_.isEmpty(props.policy.renewal) ? {borderRight: '0px'} : {}}>
                                    <p className='value'>{props.policy.premium_formatted}</p>
                                    <p className='labelName'>Price/Premium</p>
                                </div>
                            }
                            {_.isEmpty(props.policy.renewal) ?
                                <></>
                                :
                                <div className='small-label renewal' style={{borderRight: '0px'}}>
                                    <p className='value'>{props.policy.renewal}</p>
                                    <p className='labelName'>Renewal</p>
                                </div>
                            }
                        </div>
                        <div className='policyCard-smallLogo d-flex flex-row justify-content-center align-items-center'>
                            <div>
                                <img src={props.policy.partner.logo} alt=''/>
                            </div>
                        </div>
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
    const [active, setActive] = useState(false);

    return (
        <div className={`widget ${active?'activeWidget':''} w-100`}>
            <PolicyCard props={props} toSetActive={setActive}/>
        </div>
    )
};

export default PolicyWidget;