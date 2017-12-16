import { getLocale } from './locales';

const formatterCache = {};

/**
 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
 * just yet, it will be created on the fly.
 */
const getFormatter = (options, locales = getLocale()) => {
  const stringifiedOptions = JSON.stringify(options);

  if (!formatterCache[locales]) {
    formatterCache[locales] = {};
  }

  if (!formatterCache[locales][stringifiedOptions]) {
    formatterCache[locales][stringifiedOptions] = new Intl.DateTimeFormat(locales, options).format;
  }

  return formatterCache[locales][stringifiedOptions];
};

// eslint-disable-next-line import/prefer-default-export
export const formatTime = date => getFormatter(
  { hour: 'numeric', minute: 'numeric', second: 'numeric' },
)(date);
