const PATHS = {
  mic: (
    <>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M8 21h8" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l4-4 4 2 3-3 5 5-4 4-3-2-3 3z" />
      <path d="M14 7l3-3" />
      <path d="M7 17l-3 3" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1a4 4 0 0 0 4-4 9 9 0 0 0-9-9z" />
      <circle cx="7.5" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="10" cy="7.5" r="0.8" fill="currentColor" />
      <circle cx="15" cy="7.5" r="0.8" fill="currentColor" />
      <circle cx="17.5" cy="11.5" r="0.8" fill="currentColor" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  star: (
    <path d="M12 3l2.6 5.9 6.4.6-4.9 4.3 1.5 6.3L12 17l-5.6 3.1 1.5-6.3L3 9.5l6.4-.6z" />
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 19a2 2 0 0 0 2 2h12" />
    </>
  ),
  music: (
    <>
      <path d="M9 17V5l12-2v12" />
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="19" cy="15" r="2.5" />
    </>
  ),
  submit: (
    <>
      <path d="M12 3v13" />
      <path d="M6 9l6-6 6 6" />
      <path d="M4 21h16" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4a5 5 0 0 0 5 5" />
  ),
  check: <path d="M4 12l5 5L20 6" />,
};

export default function Icon({ name, size = 20, stroke = 1.5, className = '' }) {
  const body = PATHS[name];
  if (!body) return null;
  return (
    <svg
      className={`gicon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {body}
    </svg>
  );
}
