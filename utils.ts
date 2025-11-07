
import React from 'react';

export const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Don't intercept meta-key clicks (new tab), hash links, or external links
  if (e.metaKey || e.ctrlKey || !href || href.startsWith('#') || href.startsWith('http') || href.startsWith('/#')) {
    return;
  }
  e.preventDefault();
  window.history.pushState({}, '', href);
  const navEvent = new Event('navigate');
  window.dispatchEvent(navEvent);
};

export const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
