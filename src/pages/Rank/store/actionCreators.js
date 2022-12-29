import { fromJS } from 'immutable';
import { getRankListRequest } from '../../../api/request';
import { CHANGE_RANK_LIST, CHANGE_LOADING } from './constant'

const changeRankList = (data) => ({
  type: CHANGE_RANK_LIST,
  data: fromJS(data)
})

export const getRankList = () => {
  return dispatch => {
    getRankListRequest().then(data => {
      let list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    })
  }
}

const changeLoading = (data) => ({
  type: CHANGE_LOADING,
  data
})