/**
 * Small info badge (circled "i" icon) next to a statistics label; hover or focus shows what the
 * number means via the admin-wide themed tooltip ([data-hris-tooltip] in
 * Tooltips.tsx). A plain span — safe in both server and client components.
 */
export function Info({ text }: { text: string }) {
  return (
    <span
      className="hris-info"
      tabIndex={0}
      role="note"
      aria-label={text}
      data-hris-tooltip={text}
      data-hris-tooltip-placement="top"
    />
  )
}
