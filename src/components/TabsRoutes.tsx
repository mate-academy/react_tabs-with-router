import { Navigate, Routes, Route } from "react-router-dom";
import { Tab } from "../types/Tab";
import { TabsPage } from "./TabsPage";

interface Props {
    tabs: Tab[];
}

export const TabsRoutes = ({ tabs } : Props) => {
    return (
    <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/tabs">
        <Route index element={<TabsPage tabs={tabs} />} />
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
    )
}