const BOT_URL = 'https://t.me/MoscowDealNavigatorBot';
const NAVIGATOR_ENTRIES = new Set(['start', 'buy', 'sell', 'invest']);

document.querySelectorAll('[data-navigator-entry]').forEach((link) => {
  const navigatorEntry = link.dataset.navigatorEntry;
  if (!NAVIGATOR_ENTRIES.has(navigatorEntry)) return;
  link.href = `${BOT_URL}?start=${encodeURIComponent(navigatorEntry)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});
