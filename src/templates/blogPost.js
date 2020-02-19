import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
