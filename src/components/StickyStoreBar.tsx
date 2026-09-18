'use client';

import { useEffect, useState } from 'react';
import StoreBadges from './StoreBadges';
import styles from './landing.module.css';

export default function StickyStoreBar() {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setHidden(visible.size > 0);
    }, { rootMargin: '0px 0px 100px 0px', threshold: 0 });
    document.querySelectorAll('[data-store-cta], #contact, footer').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <aside className={styles.stickyStores} hidden={hidden} aria-label="Download uNepal">
    <StoreBadges compact />
  </aside>;
}
