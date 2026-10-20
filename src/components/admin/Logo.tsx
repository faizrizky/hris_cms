/** Login screen logo. */
export function Logo() {
  return (
    <div className="hris-brand hris-brand--lg">
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand mark */}
      <img className="hris-brand__mark" src="/hris-icon.png" alt="" width={40} height={40} />
      <span className="hris-brand__name">HRIS CMS</span>
    </div>
  )
}
