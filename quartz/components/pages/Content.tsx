import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
// @ts-ignore
import mermaidScript from "../scripts/mermaid.inline"
import mermaidStyle from "../styles/mermaid.scss"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return (
    <>
      <article class={classString}>{content}</article>
      <div id="mermaid-container">
        <div class="mermaid-backdrop" />
        <div id="mermaid-space">
          <div class="mermaid-header">
            <button
              class="close-button"
              aria-label="close button"
              title="close button"
              type="button"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
          </div>
          <div class="mermaid-content" />
        </div>
      </div>
    </>
  )
}

Content.afterDOMLoaded = mermaidScript
Content.css = mermaidStyle

export default (() => Content) satisfies QuartzComponentConstructor
