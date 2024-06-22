import { Navigate, Route, HashRouter as Router, Routes } from "react-router-dom"
import { App } from "./App"
import { Home } from "./Components/Home";
import { Tabs } from "./Components/Tabs";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
            <Route path="*" element={<Navigate to=".." />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

