import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Nav } from "jdb-components"

const Title = ({ data }) => {
  const { title } = data.site.siteMetadata
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Spring",
      path: "https://react-spring.io",
    },
  ]
  const menuText = {
    openText: title,
    closeText: "Close",
  }
  return (
    <Nav
      menuText={menuText}
      menuColor="primary"
      headerColor="primary"
      links={links}
      height="3rem"
      width="31%"
      isGatsby
    />
  )

  // return (
  //   <header style={{ marginBottom: `1.5rem` }}>
  //     <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
  //       <h3 style={{ display: `inline` }}>{title}</h3>
  //     </Link>
  //     <ul style={{ listStyle: `none`, float: `right` }}>
  //       <ListLink to="/">Home</ListLink>
  //       <ListLink to="/about/">About</ListLink>
  //       <ListLink to="/contact/">Contact</ListLink>
  //     </ul>
  //     <p>{description}</p>
  //   </header>
  // )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <Title data={data} />}
    />
  )
}

export default Header
