interface Tab {
  id: string;
  title: string;
  content: string;
}

type Match = {
  isExact: boolean;
  params: {
    id: string;
  };
  path: string;
  url: string;
};
