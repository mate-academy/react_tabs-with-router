import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Navigation } from "./components/Navigation/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { TabsPage } from "./components/Tabs/Tabs";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </>
);
