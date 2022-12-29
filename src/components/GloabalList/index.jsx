import React from 'react'
import styles from "./styles.module.scss"

function GlobalList(props) {
    const { globalList } = props
    return (
        <div className={styles.wrapper}>
            <h1>全球榜</h1>
            <div className={styles.listItem}>
                {globalList.map((item, index) => (
                    <div key={index} className={styles.imgWrapper}>
                        <img src={`${item.coverImgUrl}?param=300x300`} alt="music" />
                        <span>{item.updateFrequency}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default React.memo(GlobalList)