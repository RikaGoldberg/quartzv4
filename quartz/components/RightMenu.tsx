import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function RightMenu(props: QuartzComponentProps) {
  const { allFiles = [] } = props

  // Filter out non-notes (like index/archive) if you want
  const notes = allFiles.filter(
    f => f.slug !== "index" && f.slug !== "archive"
  )

  // Pick a random note on each render
  const randomNote =
    notes.length > 0 ? notes[Math.floor(Math.random() * notes.length)] : null

  return (
    <nav className="right-menu">
      {randomNote && (
        <div className="random-note">
          <h3>🎲 Random Note</h3>
          <a href={`/${randomNote.slug}`}>
            {randomNote.frontmatter?.title ?? randomNote.slug}
          </a>
        </div>
      )}
    </nav>
  )
}

export default (() => RightMenu) satisfies QuartzComponentConstructor