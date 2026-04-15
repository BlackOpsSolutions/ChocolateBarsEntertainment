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
  spotify: (
    <g fill="currentColor" stroke="none">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.43a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.78-.97a.63.63 0 1 1-.28-1.22c3.8-.87 7.08-.5 9.7 1.12.3.18.39.56.22.86zm1.22-2.73a.78.78 0 0 1-1.07.26c-2.69-1.66-6.79-2.14-9.97-1.17a.78.78 0 1 1-.46-1.49c3.63-1.12 8.15-.58 11.24 1.33.37.22.49.7.26 1.07zm.11-2.84c-3.22-1.92-8.54-2.1-11.61-1.16a.94.94 0 1 1-.55-1.8c3.53-1.07 9.41-.87 13.12 1.33a.94.94 0 1 1-.96 1.63z" />
    </g>
  ),
  apple: (
    <g fill="currentColor" stroke="none">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.1-.46-2.1-.48-3.26 0-1.46.6-2.23.42-3.1-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.27 0 1.97-.83 3.5-.66 1.17.08 2.63.58 3.56 1.95-2.89 1.72-2.36 5.5.32 6.98-.56 1.34-1.27 2.65-2.46 3.9zM12 6.5c-.15-2.21 1.68-4.05 3.8-4.21.29 2.43-2.19 4.34-3.8 4.21z" />
    </g>
  ),
  youtubeFilled: (
    <g fill="currentColor" stroke="none">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8c.2 1 1 1.9 2.1 2.1 2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </g>
  ),
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
