/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Page, ColDiv } from "jdb-components"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Page minH="calc(100vh - 3rem)">
        <ColDiv p="0.8rem 4rem" align="center" justify="flex-start">
          {children}
        </ColDiv>
      </Page>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
