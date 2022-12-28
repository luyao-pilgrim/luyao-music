import React from "react"
import { MenuFoldOutlined, SearchOutlined } from "@ant-design/icons"
import styles from "./styles.module.scss"

const Header = () => {

  return (
    <div className={styles.header}>
        <MenuFoldOutlined className={styles.iconfont}/>
        <span className={styles.title}>LY音乐</span>
        <SearchOutlined className={styles.iconfont}/>
    </div>
  )
}

export default React.memo(Header)