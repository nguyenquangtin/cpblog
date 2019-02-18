import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
						<img alt="Client Logo" src="images/partner-logos/logo-bootstrap.png" />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Client Logo" src="images/partner-logos/logo-less.png" />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Client Logo" src="images/partner-logos/logo-sass.png" />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Client Logo" src="images/partner-logos/logo-yeoman.png" />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Client Logo" src="images/partner-logos/logo-bower.png" />
					</div>

					<div className="col-md-2 col-sm-4 col-xs-6">
						<img alt="Client Logo" src="images/partner-logos/logo-jquery.png" />
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
