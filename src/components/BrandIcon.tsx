/** Shared outline icon family: consistent geometry, stroke and optical size. */
export default function BrandIcon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    house: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" /></>,
    play: <><rect x="3" y="5" width="18" height="15" rx="3" /><path d="m8 2 4 3 4-3m-6 8 6 3-6 3Z" /></>,
    'bag-shopping': <><rect x="4" y="7" width="16" height="14" rx="3" /><path d="M8 8V6a4 4 0 0 1 8 0v2M8 11h.01M16 11h.01" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4" /></>,
    message: <><path d="M21 11a9 9 0 0 1-9 9H5l-3 2 1-7a9 9 0 1 1 18-4Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 2v6m10-6v6M3 11h18m-14 5h2m4 0h2" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="3" /><path d="M8 7V4h8v3M3 13a25 25 0 0 0 18 0m-9-1v4" /></>,
    'screwdriver-wrench': <><path d="m14 6 4 4 3-3a6 6 0 0 1-8 8l-6 6-4-4 6-6a6 6 0 0 1 8-8Z" /></>,
    shield: <><path d="m12 2 8 3v6c0 6-8 11-8 11S4 17 4 11V5Z" /><path d="m8 11 3 3 5-5" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    search: <><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6" /></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M4 22v-2a8 8 0 0 1 16 0v2" /></>,
    heart: <path d="M20 4a5 5 0 0 0-8 2 5 5 0 0 0-8-2C-2 10 12 21 12 21S26 10 20 4Z" />,
  };
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.globe}</svg>;
}
