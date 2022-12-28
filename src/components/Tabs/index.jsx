import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss"

const Tabs = (props) => {
    const {tabs} = props
    return (
        <div className={styles.tabs}>
            {tabs.map((tabitem, index) => (
                <NavLink key={index} to={tabitem.url} className={({ isActive }) => {
                    const linkClasses = [styles.NavLink];
                    if (isActive) linkClasses.push(styles.active);
                    
                    return linkClasses.join(" ");
                  }}>
                    <div className={styles.tabItem}><span>{tabitem.title}</span></div>
                </NavLink>
            ))}
        </div>
    )
}

export default React.memo(Tabs)