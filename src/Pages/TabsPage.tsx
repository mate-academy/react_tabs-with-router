import { Tabs } from "../components/Tabs/Tabs";
import { tabs } from "../constants";

export const TabsPage = () => {
  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};
