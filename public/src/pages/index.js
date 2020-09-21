import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div class="container">
          <div id="main">
            <h1 class="headline headline_one">John Hodge</h1>
          </div>
          <address>
            <div class="icons">
              <a href="https://github.com/johnhodge" target="_blank" class="icon-link"><img class="icon" src="https://unpkg.com/simple-icons@v3/icons/github.svg" /></a><a href="https://twitter.com/hodgecity" target="_blank" class="icon-link"><img class="icon" src="https://unpkg.com/simple-icons@v3/icons/twitter.svg" /></a>
            </div>
          </address>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
