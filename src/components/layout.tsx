/** @jsx jsx */
import PropTypes from "prop-types"
import { css, Global, jsx } from "@emotion/core"
import * as normalize from "@csstools/normalize.css"
import Footer from "./footer"
import Header from "./header"
import useSiteMetadata from "../lib/hooks/useSiteMetadata"
import isBrowserAvailable from "../checkIfLoaded"

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

const Layout: React.FC = ({ children }) => {
  const { title, author } = useSiteMetadata()

  return (
    isBrowserAvailable && (
      <div
        css={css`
          display: grid;
          grid-template: auto 1fr auto / auto 1fr auto;

          height: 100%;
        `}
      >
        <Global styles={globalCss} />
        <Header siteTitle={title} />
        <aside
          id="left"
          css={css`
            padding: 2rem;
            grid-column: 1 / 2;
          `}
        />
        <main
          css={css`
            grid-column: 2 / 3;
            height: 100%;

            div & {
              margin: auto;
            }
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
