import PropTypes from "prop-types"
import React from "react"
import Banner from './banner';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
    id='header-3'
  >
		<nav>
			<div className="container">
				<div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
					<nav className="pull">
						<ul className="top-nav">
							<li><a href="#">Home <span className="indicator"><i className="fa fa-angle-right"></i></span></a></li>
							<li><a href="#">Features <span className="indicator"><i className="fa fa-angle-right"></i></span></a></li>
							<li><a href="#">Pages <span className="indicator"><i className="fa fa-angle-right"></i></span></a></li>
							<li><a href="#">Portfolio <span className="indicator"><i className="fa fa-angle-right"></i></span></a></li>
							<li><a href="#">Team <span className="indicator"><i className="fa fa-angle-right"></i></span></a></li>
							<li><a href="#">Contact <span className="indicator"><i className="fa fa-angle-right"></i></span></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</nav>

    <Banner />


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
