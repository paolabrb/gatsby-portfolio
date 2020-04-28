import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>// 404 page not found</h1>
    <p>Would you like to go <Link to="/">back</Link>?</p>
  </Layout>
)

export default NotFoundPage
