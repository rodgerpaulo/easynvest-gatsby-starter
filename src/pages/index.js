import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import Navbar from 'components/Navbar'
import Content from 'components/Content'
import SEO from 'config/seo'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Content>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Content>
  </Layout>
)

export default IndexPage
