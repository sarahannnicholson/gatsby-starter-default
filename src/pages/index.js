import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Img fixed={data.file.childImageSharp.fixed} />
  </Layout>
)

export const query = graphql`
query {
  file(relativePath: { regex: "/Bulbasaur/" }) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

export default IndexPage
