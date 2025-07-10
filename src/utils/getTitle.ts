export const getTitle = (pathname: string): string => {
  const staticTitles: Record<string, string> = {
    '/': 'Home page',
    '/tabs': 'Tabs page',
  };

  if (staticTitles[pathname]) {
    return staticTitles[pathname];
  }

  if (pathname.startsWith('/tabs/')) {
    return 'Tab Details';
  }

  return 'Page not found';
};
