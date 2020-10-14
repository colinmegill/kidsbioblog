/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "theme-ui"
import theme from "../theme/theme"
import { Heading } from "theme-ui"
import SEO from "../components/seo"

import Header from "./header"

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <SEO title={data.site.siteMetadata.title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `flex-start`,
          height: `100%`,
          width: `100%`,
          flex: `1 1 100%`,
        }}
      >
        <main
          style={{
            flex: "1 1 100%",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            flex: "0 0 auto",
          }}
        >
          <Heading as="h6" sx={{ my: 4 }}>
            © {new Date().getFullYear()} For Kids By Kids Bio Blog
          </Heading>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
