import {GET_POLICIES} from '../constants/actionTypes';

// set state initial
const initState = [];

const policies = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_POLICIES:
            return action.policies;
        default:
            return state;
    }
}

export default policies;