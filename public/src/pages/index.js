import React from "react"

class IndexPage extends React.Component {
  render() {

    return (
      <div class="container" >
        <div id="main">
          <h1 class="headline headline_one">John Hodge</h1>
        </div>
        <div id="contact">
          <address>
            <div class="icons">
              <a href="https://github.com/johnhodge" target="_blank" class="icon-link"><img class="icon" src="https://unpkg.com/simple-icons@v3/icons/github.svg" /></a><a href="https://twitter.com/hodgecity" target="_blank" class="icon-link"><img class="icon" src="https://unpkg.com/simple-icons@v3/icons/twitter.svg" /></a>
            </div>
          </address>
        </div>
      </div>
    )
  }
}

export default IndexPage
