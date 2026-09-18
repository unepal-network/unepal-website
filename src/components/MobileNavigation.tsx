'use client';

import { useEffect, useRef } from 'react';
import styles from './landing.module.css';

export default function MobileNavigation({ links }: { links: string[][] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector('summary')?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, []);
  return <details ref={menu} className={styles.mobileMenu}>
    <summary aria-label="Navigation menu"><span /><span /><span /></summary>
    <nav aria-label="Mobile navigation">{[...links, ['Contact us', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => { if (menu.current) menu.current.open = false; }}>{label}<span aria-hidden="true">↗</span></a>)}</nav>
  </details>;
}
