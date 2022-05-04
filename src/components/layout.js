import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutComponentQuery {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)

  console.log(data)

  return (
    <div class="container-fluid">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">{data.site.siteMetadata.title}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/info" className="nav-link">Info</Link>
              </li>
              <li class="nav-item">
              <Link to="/sharehim" className="nav-link">Share Him</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
