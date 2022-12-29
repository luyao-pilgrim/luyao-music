import React from 'react'
import styles from "./styles.module.scss"

function Top3Song(props) {
    const { tracks } = props
    return (
        <div className={styles.topList}>
            {tracks.map((item,index) => (
                <div key={index} className={styles.deco}>{`${index+1}.${item.first}-${item.second}`}</div>
            ))}
        </div>
    )
}

export default React.memo(Top3Song)