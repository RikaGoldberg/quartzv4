// quartz/components/banner.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

function resolveCoverSrc(p: QuartzComponentProps): string | null {
  const raw = String(p.fileData.frontmatter?.cover ?? "").trim()
  if (!raw) return null
  if (/^https?:\/\//i.test(raw) || raw.startsWith("/")) return raw
  const m = raw.match(/^\[\[([^|\]]+)/) // wikilink [[...]]
  if (m) {
    const noteDir = p.fileData.filePath.replace(/\/[^/]+$/, "")
    const withoutContent = noteDir.replace(/^content\//, "")
    return `/${withoutContent}/${m[1]}`.replace(/\/+/g, "/")
  }
  return raw
}

export default ((opts?: { height?: number }): QuartzComponent => {
  const Banner: QuartzComponent = (props) => {
    const src = resolveCoverSrc(props)
    if (!src) return null
    const h = Number.isFinite(opts?.height) ? Number(opts?.height) : 240
    const alt = (props.fileData.frontmatter?.bannerAlt as string) ?? (props.fileData.frontmatter?.title as string) ?? ""
    return (
      <div style={{ height: `${h}px`, overflow: "hidden", borderRadius: "12px", marginBottom: "12px" }}>
        <img src={src} alt={alt} loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    )
  }
  return Banner
}) as QuartzComponentConstructor