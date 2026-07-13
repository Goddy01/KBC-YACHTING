export function SpecsTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="divide-y divide-brass/20 border-y border-brass/25">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[1fr_1fr] gap-4 py-4 text-sm"
        >
          <dt className="tracking-wide text-navy/40">{row.label}</dt>
          <dd className="text-right font-medium text-navy">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
