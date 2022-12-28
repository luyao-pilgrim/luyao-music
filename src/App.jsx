import React from "react"
import routes from "./routes"
import store from "./redux"
import {Provider} from "react-redux"
import { useRoutes } from "react-router"

const App = () => {
  const outlet = useRoutes(routes)

  return (
    <Provider store={store}>
      <div>
      {outlet}
    </div>
    </Provider>
    
  )
}

export default App
