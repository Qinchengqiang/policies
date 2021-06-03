import {GET_POLICIES} from '../constants/actionTypes';
import axios from 'axios';

export const setPolicies = (policies) => {
    return {
        type: GET_POLICIES,
        policies
    }
}

export const fetchPolicies = () => {
    const url = 'https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking';
    return dispatch => {
        return axios.get(url).then(response => {
            dispatch(setPolicies(response.data.policies))
        })
    }
}