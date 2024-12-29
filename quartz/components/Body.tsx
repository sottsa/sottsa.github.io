// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
// @ts-ignore
import mermaidScript from "./scripts/mermaid.inline"
import mermaidStyle from "./styles/mermaid.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {children}
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
    </div>
  )
}

Body.afterDOMLoaded = clipboardScript + mermaidScript
Body.css = clipboardStyle + mermaidStyle

export default (() => Body) satisfies QuartzComponentConstructor
