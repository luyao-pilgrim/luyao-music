import React from "react";
import styles from "./styles.module.scss"

const LoadingV2 = () => {
    return (
        <div className={styles.loadingWrapper}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span>拼命加载中...</span>
        </div>
    )
}

export default React.memo(LoadingV2)