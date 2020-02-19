import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const IndexPage = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>{totalCount} Posts</h4>
          {edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>{" "}
                  <span style={{ color: "#bbb" }}>
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.frontmatter.excerpt}</p>
              </div>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
