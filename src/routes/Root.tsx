import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home';
import { Tabs } from '../pages/Tabs';
import { NotFound } from '../pages/NotFound';

export const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
