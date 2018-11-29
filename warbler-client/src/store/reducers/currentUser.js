import { SET_CURRENT_USER} from "../actionTypes";

const DEFAUL_STATE = {
    isAuthenticated: false,     // true, when user loged in
    user: {}        // all the info about loged in user
}

export default (state = DEFAUL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
        return {
            isAuthenticated: Object.keys(action.user).length > 0,
            user: action.user
        };
        default:
            return state;
    }
}
