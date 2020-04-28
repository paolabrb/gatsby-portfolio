import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ServerErrorPage = () => (
  <Layout>
    <h1>// 500 internal server error</h1>
    <p>Would you like to go <Link to="/">back</Link>?</p>
  </Layout>
)

export default ServerErrorPage
