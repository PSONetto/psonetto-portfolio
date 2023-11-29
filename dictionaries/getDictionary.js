const dictionaries = {
  en: () => import('./en.json').then((r) => r.default),
  pt: () => import('./pt.json').then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
