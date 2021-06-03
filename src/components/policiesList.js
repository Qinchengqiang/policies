import React, {Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPolicies} from "../actions/policiesActions";
import _ from "lodash";
import './styles/policesList.css';

const PolicyWidget = React.lazy(() => import("./policyWidget"));

const loadPolicies = (dispatch) => {
    dispatch(fetchPolicies()).then(
        () => {
            console.log('loading policies successfully.')
        },
        (err) => {
            console.log(err.message)
        })
};

const PoliciesList = () => {
    const dispatch = useDispatch();
    const policiesReduxState = useSelector(state => (state.policies));

    useEffect(() => {
        loadPolicies(dispatch);
    }, []);

    useEffect(() => {
        /** update policies every 5 min */
        setInterval(() => loadPolicies(dispatch), 1000 * 60 * 5);
    }, []);

    return (
        <div className='w-100'>
            {_.isEmpty(policiesReduxState) ?
                <div className='text-center text-muted'>No policies data</div>
                :
                policiesReduxState.map(policy => (
                    <Suspense fallback={<div className='widget w-100 text-center text-black-50'>loading...</div>}
                    key={policy.id.toString()}>
                        <PolicyWidget policy={policy}/>
                    </Suspense>
                ))
            }
        </div>
    );
};

export default PoliciesList;