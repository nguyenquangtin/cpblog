import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logoBootstrap from '../images/partner-logos/logo-bootstrap.png';
import logoLess from '../images/partner-logos/logo-less.png';
import logoSass from '../images/partner-logos/logo-sass.png';
import logoYeoman from '../images/partner-logos/logo-yeoman.png';
import logoBower from '../images/partner-logos/logo-bower.png';
import logoJquery from '../images/partner-logos/logo-jquery.png';


const Clients = ({ siteTitle }) => (
  <section id="content-1-7" className="content-1-7 content-block">
		<div className="container">
			<div className="row">
				<div className="col-md-10 col-md-offset-1 text-center">
	      	<h1>CLIENTS</h1>
					<p>
						Our 300+ customers have trusted in our work, don't be hesitate to join our happy customer team. <br />
						Cipherpol will elevate your business website to the next level.
					</p>
	    	</div>
    	</div>
    	<div className="clearfix"></div>
			<div className="cients-wrap">
				<div className="row">
					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Bootstrap" src={logoBootstrap} />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
            <img alt="Less" src={logoLess} />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
          <img alt="Sass" src={logoSass} />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Yeoman" src={logoYeoman} />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
            <img alt="Bower" src={logoBower} />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
          <img alt="jQuery" src={logoJquery} />
					</div>
				</div>
			</div>
		</div>
  </section>
)

Clients.propTypes = {
}

Clients.defaultProps = {
}

export default Clients
