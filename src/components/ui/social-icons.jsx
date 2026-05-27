export function LinkedInBadge({ className = "h-4 w-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="700"
      >
        in
      </text>
    </svg>
  );
}
