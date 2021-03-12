export type Tab = {
    id: string,
    title: string,
    content: string,
};

export interface Tabs {
    tabs: Tab[];
}

export interface Obj extends Tabs {
    tabId: string,
}

export interface MatchParams {
    tabId: string;
}
  