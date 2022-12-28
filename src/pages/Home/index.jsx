import React from "react"
import { Outlet } from "react-router"
import Header from "../../components/Header"
import Tabs from "../../components/Tabs"

const Home = () => {
  const tabs = [
    {
      title: "推荐",
      url: "/recommend"
    },
    {
      title: "歌手",
      url: "/singer"
    },
    {
      title: "排行",
      url: "/rank"
    },
  ]

  return (
    <div>
        <Header />
        <Tabs tabs={tabs}/>
        <Outlet />
    </div>
  )
}

export default React.memo(Home)