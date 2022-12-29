import React, { lazy } from "react"
import Home from "../pages/Home"
const Recommend = lazy(() => import("../pages/Recommend"))
const Singer = lazy(() => import("../pages/Singer"))
const Rank = lazy(() => import("../pages/Rank"))
const Album = lazy(() => import("../pages/Album"))

import { Navigate } from "react-router"

const suspense = (e) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {e}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/recommend" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/recommend",
                element: suspense(<Recommend></Recommend>),
                children: [
                    {
                        path: "/recommend/:id",
                        element: suspense(<Album></Album>)
                    }
                ]
            },
            {
                path: "/singer",
                element: suspense(<Singer></Singer>)
            },
            {
                path: "/rank",
                element: suspense(<Rank></Rank>)
            },
        ]
    }
    
]

export default routes