/** @jsx jsx */
import * as normalize from "@csstools/normalize.css"
import { css, Global, jsx } from "@emotion/react"
import { config } from "@fortawesome/fontawesome-svg-core"
// fix for font-awesome large icon on initial load - https://github.com/FortAwesome/react-fontawesome#nextjs
import "@fortawesome/fontawesome-svg-core/styles.css" // Import the CSS
import React from "react"
import useSiteMetadata from "../lib/hooks/useSiteMetadata"
import Footer from "./footer"
import Header from "./header"

// Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const globalCss = css`
  ${normalize}

  :root {
    font-size: 16px;
    font-family: system-ui, sans-serif;
    // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    // Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    text-size-adjust: 100%;
  }

  /* clearfix */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/clear */
  *::after {
    content: "";
    display: block;
    clear: both;
  }

  * {
    box-sizing: border-box;
  }
`

interface LayoutProperties {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProperties> = ({ children }) => {
  const { title, author } = useSiteMetadata()

  return (
    <div
      css={css`
        display: grid;
        grid-template: auto 1fr auto / auto 1fr auto;

        height: 100%;
      `}
    >
      <Global styles={globalCss} />
      <a
        href="#main-content"
        css={css`
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;

          &:focus {
            position: static;
            width: auto;
            height: auto;
            padding: 1rem;
            background: #fff;
            color: #000;
            z-index: 1000;
            text-decoration: underline;
          }
        `}
      >
        Skip to main content
      </a>
      <Header siteTitle={title} />
      <aside
        id="left"
        css={css`
          padding: 2rem;
          grid-column: 1 / 2;
        `}
      />
      <main
        id="main-content"
        tabIndex={-1}
        css={css`
          grid-column: 2 / 3;
          margin: 0 auto;
          outline: none; /* Hide focus ring when skip link targets main */
        `}
      >
        {children}
      </main>
      <aside
        id="right"
        css={css`
          padding: 2rem;
          grid-column: 3 / 4;
        `}
      />
      <Footer siteAuthor={author} />
    </div>
  )
}

export default Layout
