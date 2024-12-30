// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
// @ts-ignore
import mermaidScript from "./scripts/mermaid.inline"
import mermaidStyle from "./styles/mermaid.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = clipboardScript + mermaidScript
Body.css = clipboardStyle + mermaidStyle

export default (() => Body) satisfies QuartzComponentConstructor
