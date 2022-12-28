import React from "react";
import LazyLoad from "react-lazyload";
import styles from "./styles.module.scss"
import { getCount } from "../../utils";
import musicPNG from "./music.png"

const RecommendList = (props) => {
    const { recommendList } = props
    return (
        <div className={styles.listWrapper}>
            <h1 className={styles.title}>推荐歌单</h1>
            <div className={styles.list}>
                {
                    recommendList.map((item, index) => (
                        <div key={index} className={styles.listItem}>
                            <div className={styles.imgWrapper}>
                                <div className={styles.decorate}></div>
                                <LazyLoad placeholder={<img width="100%" height="100%" src={musicPNG} alt="music" />}>
                                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                </LazyLoad>
                                <div className={styles.playCount}>
                                    <span className={styles.count}>{getCount(item.playCount)}</span>
                                </div>
                            </div>
                            <div className={styles.desc}>{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default React.memo(RecommendList)