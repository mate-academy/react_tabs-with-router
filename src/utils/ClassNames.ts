export const ClassNames = (classes: Record<string, boolean>): string =>
  Object.entries(classes)
    .filter(([, active]) => active)
    .map(([cls]) => cls)
    .join(' ');
