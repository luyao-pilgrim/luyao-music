import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import LazyLoad, { forceCheck } from 'react-lazyload';
import HorizonScroll from "../../components/HorizonScroll"
import Scroll from "../../components/Scroll"
import { changePullUpLoading, changePullDownLoading, getHotSingerList, refreshMoreHotSingerList, changeListOffset } from "./store/actionCreators"
import { categoryTypes, alphaTypes } from "../../constants"
import styles from "./styles.module.scss"
import singerPNG from "./singer.png"
import LoadingV2 from "../../components/LoadingV2";

const Singer = () => {

  const scrollRef = useRef()
  const dispatch = useDispatch()

  const handlePullUp = () => {
    dispatch(changePullUpLoading(true))
    dispatch(refreshMoreHotSingerList())
  }
  const handlePullDown = () => {
    dispatch(changePullDownLoading(true))
    dispatch(changeListOffset(0))
    dispatch(getHotSingerList())
  }
  useEffect(() => {
    if (!singerList.size) {
      dispatch(getHotSingerList())
    }
  }, [])

  const { singerList, pullDownLoading, pullUpLoading, enterLoading } = useSelector((state) => {
    return {
      singerList: state.getIn(["singers", "singerList"]),
      pullDownLoading: state.getIn(["singers", "pullDownLoading"]),
      pullUpLoading: state.getIn(["singers", "pullUpLoading"]),
      enterLoading: state.getIn(["singers", "enterLoading"]),
    }
  })

  const singerListJS = singerList ? singerList.toJS() : []


  return (
    <div>
      <HorizonScroll title={"分类:默认热门"} category={categoryTypes} />
      <HorizonScroll title={"拼音首字母"} category={alphaTypes} />
      <div className={styles.singerListContainer}>
        <Scroll
          onScroll={forceCheck}
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          ref={scrollRef}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
        >
          <div className={styles.singerList}>
            {
              singerListJS.map((item, index) => (
                <div key={item.accountId + "" + index} className={styles.singerListItem}>
                  <div className={styles.singerImgWrapper}>
                    <LazyLoad placeholder={<img width="100%" height="100%" src={singerPNG} alt="music" />}>
                      <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                    </LazyLoad>
                  </div>
                  <span className={styles.singerName}>{item.name}</span>
                </div>
              ))
            }
          </div>
        </Scroll>
      </div>
      {enterLoading ? <div className={styles.enterLoadingWrapper}><LoadingV2></LoadingV2></div> : null}
    </div>
  )
}

export default Singer