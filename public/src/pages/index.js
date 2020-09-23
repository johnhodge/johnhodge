import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Yo"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div class="container" >
          <div id="main">
            <h1 class="headline headline_one">John Hodge</h1>
          </div>
          <div id="contact">
            <address>
              <div class="icons">
                <a href="https://github.com/johnhodge" target="_blank" rel="noreferrer" class="icon-link" title="Follow me on Github"><img class="icon" alt="Follow me on Github" src="https://unpkg.com/simple-icons@v3/icons/github.svg" /></a><a href="https://twitter.com/hodgecity" target="_blank" rel="noreferrer" class="icon-link" title="Peep my Tweets"><img class="icon" alt="Peep my Tweets" src="https://unpkg.com/simple-icons@v3/icons/twitter.svg" /></a>
              </div>
            </address>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
