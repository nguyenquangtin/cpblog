import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import ContactDevider from "./contactDevider"
import Contact from "./contact"
import Copyright from "./copyright"
import "./layout.css";

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic'
	})
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          {children}
        </main>
        <ContactDevider />
        <Contact />
        <Footer />
        <Copyright />
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
