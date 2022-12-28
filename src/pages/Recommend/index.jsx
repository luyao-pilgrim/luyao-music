import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { forceCheck } from "react-lazyload";
import Slider from "../../components/Slider";
import RecommendList from "../../components/RecommendList";
import { getBannerList, getRecommendList } from "./store/actionCreators";
import Scroll from "../../components/Scroll";
import LoadingV2 from "../../components/LoadingV2";
import styles from "./styles.module.scss"

const Recommend = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!bannerList.size) {
      dispatch(getBannerList())
    }
    if (!recommendList.size) {
      dispatch(getRecommendList())
    }
  }, [])

  const { bannerList, recommendList, enterLoading } = useSelector((state) => {
    return {
      bannerList: state.getIn(["recommend", "bannerList"]),
      recommendList: state.getIn(["recommend", "recommendList"]),
      enterLoading: state.getIn(["recommend", "enterLoading"])
    }
  })


  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  return (
      <div className={styles.content}>
        <Scroll onScroll={forceCheck}>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}> </RecommendList>
        </Scroll>
        {enterLoading ? <div className={styles.enterLoadingWrapper}><LoadingV2></LoadingV2></div> : null}
      </div>
  )
}

export default React.memo(Recommend)