import { useEffect, useState } from 'react';

const PAGE_ROUTES = new Set([
  'book',
  'story',
  'submit',
  'artist-chocolate-bars',
  'artist-dani-bertuna',
]);

export const ARTIST_ROUTE_TO_SLUG = {
  'artist-chocolate-bars': 'chocolate-bars',
  'artist-dani-bertuna': 'dani-bertuna',
};

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (PAGE_ROUTES.has(raw)) return raw;
  return 'home';
}

export default function useRoute() {
  const [route, setRoute] = useState(() => parseHash());

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash();
      setRoute(next);
      if (next !== 'home') window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
