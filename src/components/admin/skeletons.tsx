import type { JSX } from 'react'
import { VISUAL_COLLECTIONS } from '@/lib/visualCollections'

/**
 * Loading placeholders shaped like the admin screens they stand in for.
 * Pure markup; the shimmer and layout live in custom.scss (`.hris-sk*`).
 */

const Block = ({ className = '' }: { className?: string }) => (
  <span className={`hris-sk ${className}`} aria-hidden />
)

const range = (n: number) => Array.from({ length: n }, (_, i) => i)

function PageTitle({ actions = 0 }: { actions?: number }) {
  return (
    <div className="hris-sk-title">
      <Block className="hris-sk--title" />
      {range(actions).map((i) => (
        <Block key={i} className="hris-sk--pill" />
      ))}
    </div>
  )
}

function Field({ wide = false }: { wide?: boolean }) {
  return (
    <div className="hris-sk-field">
      <Block className="hris-sk--label" />
      <Block className={wide ? 'hris-sk--textarea' : 'hris-sk--input'} />
    </div>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="hris-sk-page">
      {[4, 2, 3].map((cards, group) => (
        <section key={group} className="hris-sk-group">
          <Block className="hris-sk--heading" />
          <div className="hris-sk-cards">
            {range(cards).map((i) => (
              <div key={i} className="hris-sk-card hris-sk-card--tile">
                <Block className="hris-sk--label" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export function ListSkeleton() {
  return (
    <div className="hris-sk-page">
      <PageTitle actions={1} />
      <div className="hris-sk-card hris-sk-search">
        <Block className="hris-sk--input" />
        <Block className="hris-sk--pill" />
        <Block className="hris-sk--pill" />
      </div>
      <div className="hris-sk-card hris-sk-table">
        {range(8).map((row) => (
          <div key={row} className="hris-sk-row">
            <Block className="hris-sk--check" />
            <Block className="hris-sk--cell hris-sk--cell-lg" />
            <Block className="hris-sk--cell" />
            <Block className="hris-sk--cell" />
            <Block className="hris-sk--pill hris-sk--small" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function EditSkeleton() {
  return (
    <div className="hris-sk-page">
      <PageTitle />
      <Block className="hris-sk--meta" />
      <div className="hris-sk-edit">
        <div className="hris-sk-edit__main">
          {[3, 2].map((fields, card) => (
            <div key={card} className="hris-sk-card hris-sk-card--fields">
              <Block className="hris-sk--label hris-sk--strong" />
              {range(fields).map((i) => (
                <Field key={i} wide={i === fields - 1 && card === 0} />
              ))}
            </div>
          ))}
        </div>
        <div className="hris-sk-edit__side">
          <Field />
          <Field />
        </div>
      </div>
    </div>
  )
}

/** The visual editor (Puck) layout: panels either side of the canvas. */
export function EditorSkeleton() {
  return (
    <div className="hris-sk-editor" aria-hidden>
      <div className="hris-sk-editor__bar">
        <Block className="hris-sk--icon" />
        <Block className="hris-sk--icon" />
        <span className="hris-sk-editor__spacer" />
        <Block className="hris-sk--pill" />
        <Block className="hris-sk--pill" />
        <Block className="hris-sk--pill hris-sk--accent" />
      </div>
      <div className="hris-sk-editor__body">
        <div className="hris-sk-editor__panel">
          {range(7).map((i) => (
            <Block key={i} className="hris-sk--item" />
          ))}
        </div>
        <div className="hris-sk-editor__canvas">
          <Block className="hris-sk--frame" />
        </div>
        <div className="hris-sk-editor__panel">
          {range(3).map((i) => (
            <Field key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function VisualSkeleton() {
  return (
    <div className="hris-sk-page">
      <PageTitle actions={2} />
      <div className="hris-sk-card hris-sk-card--editor">
        <EditorSkeleton />
      </div>
    </div>
  )
}

export type SkeletonKind = 'dashboard' | 'list' | 'edit' | 'visual'

const VISUAL = new Set<string>(VISUAL_COLLECTIONS)

/** Which placeholder fits an admin path. */
export function skeletonFor(pathname: string, adminRoute = '/admin'): SkeletonKind {
  const rest = pathname.startsWith(adminRoute) ? pathname.slice(adminRoute.length) : pathname
  const parts = rest.split('/').filter(Boolean)
  if (parts.length === 0) return 'dashboard'
  if (parts[0] === 'collections') {
    if (parts.length === 2) return 'list'
    // A page, category or product opens on the visual editor; its Form / Versions
    // tabs and the create screen are regular forms.
    if (VISUAL.has(parts[1]) && parts.length === 3 && parts[2] !== 'create') return 'visual'
    return 'edit'
  }
  return 'edit'
}

export const skeletons: Record<SkeletonKind, () => JSX.Element> = {
  dashboard: DashboardSkeleton,
  list: ListSkeleton,
  edit: EditSkeleton,
  visual: VisualSkeleton,
}
