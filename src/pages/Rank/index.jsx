import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import GloabalList from "../../components/gloabalList"
import OfficialList from "../../components/officialList"
import Scroll from "../../components/Scroll"
import { getRankList } from "./store/actionCreators"
import LoadingV2 from "../../components/LoadingV2";
import styles from "./styles.module.scss"

const Rank = () => {

  const dispatch = useDispatch()
  const { rankList, loading } = useSelector((state) => {
    return {
      rankList: state.getIn(["rank", "rankList"]),
      loading: state.getIn(["rank", "loading"])
    }
  })

  let rankListJS = rankList ? rankList.toJS() : [];
  let officialList = rankListJS.slice(0, 4)
  let globalList = rankListJS.slice(4)

  useEffect(() => {
    dispatch(getRankList())
  }, []);

  return (
    <div className={styles.content}>
      <Scroll>
        <OfficialList officialList={officialList}></OfficialList>
        <GloabalList globalList={globalList}></GloabalList>
      </Scroll>
      {loading ? <div className={styles.enterLoadingWrapper}><LoadingV2></LoadingV2></div> : null}
    </div>
  )
}

export default Rank