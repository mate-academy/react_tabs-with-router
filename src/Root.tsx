import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { TabsPage } from "./pages/TabsPage";

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home"  element={ <Navigate to="/" />} />
        <Route path="/tabs" element={<TabsPage />}>
          <Route path="/tabs/:tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
