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
          className="flex flex-col gap-1 py-3.5 text-sm min-[480px]:grid min-[480px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[480px]:gap-4 sm:py-4"
        >
          <dt className="tracking-wide text-navy/40">{row.label}</dt>
          <dd className="break-words font-medium text-navy min-[480px]:text-right">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
