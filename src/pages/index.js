import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>About Me</h2>
    <p>Brewing awesome things since 1995</p>
    <h1>Experience</h1>
    <ul>
      <li>Skills</li>
      <li>Jobs</li>
    </ul>
    <h1>Education</h1>
    <h1>Lets keep in touch</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
