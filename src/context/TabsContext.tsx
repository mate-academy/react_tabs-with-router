// import React, { createContext, useState } from "react";
// import { Tab } from "../types/Tab";

// const initialTabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

// type Props = {
//     children: React.ReactNode
// };
// type TabsContextType = {
//     tabs: Tab[];
// }
// export const TabsContext = createContext<TabsContextType>({
//     tabs: []
// });

// export const TabsProvider: React.FC<Props> = ({children}) => {
//     const [tabs, setTabs] = useState<Tab[]>(initialTabs);

//     return (
//         <TabsContext.Provider value={{tabs}}>
//             {children}
//         </TabsContext.Provider>
//     )
// }
