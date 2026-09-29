export function SectionHeading({
  index,
  title,
  id,
}: {
  index: string
  title: string
  id: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  )
}
