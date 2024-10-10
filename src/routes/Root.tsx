import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { HomePage } from "../components/HomePage"
import { TabsPage } from "../components/TabsPage"
import { ErrorNotification } from "../components/ErrorNotification"

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to='/'/>}/>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<ErrorNotification />} />
          </Route>
      </Routes>
    </HashRouter>
  )
}
