import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year} Rika Goldberg
          {Object.entries(links).length > 0 && (
            <>
              {" • "}
              {Object.entries(links).map(([text, link], i, arr) => (
                <>
                  <a href={link}>{text}</a>
                  {i < arr.length - 1 ? " • " : ""}
                </>
              ))}
            </>
          )}
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor