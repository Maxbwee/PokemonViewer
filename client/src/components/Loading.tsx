export default function Loading() {
  return (
    <div className="loading-overlay" role="status" aria-live="polite">
      <div className="loading-ball" aria-hidden="true" />
      <span className="loading-label">Loading…</span>
    </div>
  );
}
