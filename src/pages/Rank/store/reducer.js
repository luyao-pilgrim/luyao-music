import * as actionTypes from './constant';
import { fromJS } from 'immutable';
//reducer
const defaultState = fromJS({
    rankList: [],
    loading: true
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_RANK_LIST:
            return state.set('rankList', action.data);
        case actionTypes.CHANGE_LOADING:
            return state.set('loading', action.data);
        default:
            return state;
    }
}

export default reducer;