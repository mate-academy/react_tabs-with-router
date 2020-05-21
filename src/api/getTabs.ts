export const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};

export const getTabs = async (): Promise<TabIF[]> => {
  const [tabs, posts] = await Promise.all([
    getData('/tabs.json'),
    getData('/posts.json'),
  ]);

  return tabs.map((tab: TabFromServer) => ({
    ...tab,
    post: posts.find((post: PostIF) => post.id === tab.content),
  }));
};
