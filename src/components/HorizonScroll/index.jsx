import React, { useState } from "react";
import styles from "./styles.module.scss"
import classNames from "classnames"

const HorizonScroll = (props) => {
    const { title, category } = props
    const [selected, setSelected] = useState("")
    const handleClick = (key) => {
        setSelected(key)
    }
    return (
        <div className={styles.outer}>
            <div className={styles.Wrapper}>
                <div className={styles.item} style={{ color: "grey" }}>{title}</div>
                {category.map((item, index) => (
                    <div
                        key={item.key}
                        className={classNames(styles.item, { [styles.border]: selected === item.key })}
                        onClick={() => handleClick(item.key)}>
                        {item.name}
                    </div>
                )
                )}
            </div>
        </div>

    )
}

export default React.memo(HorizonScroll)