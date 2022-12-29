import React from 'react'
import styles from "./styles.module.scss"
import Top3Song from './Top3Song'

function OfficialList(props) {
  const { officialList } = props
  return (
    <div>
        <h1>官方榜</h1>
        <div className={styles.wrapper}>
          {officialList.map((item,index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.imgWrapper}>
                <img src={`${item.coverImgUrl}?param=300x300`} alt="music" />
                <span>{item.updateFrequency}</span>
              </div>
              <Top3Song tracks={item.tracks}></Top3Song>
            </div>
          ))}
        </div>
    </div>
  )
}

export default React.memo(OfficialList)