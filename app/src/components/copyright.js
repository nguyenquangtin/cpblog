import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Copyright = () => (
  <div className="copyright-bar bg-grey">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-xs-12 pull-left">
					<div className="social-wrap">
						<ul className="social social-dark">
							<li><a href="#"><i className="fa fa-2x fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-2x fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-2x fa-pinterest"></i></a></li>
							<li><a href="#"><i className="fa fa-2x fa-dribbble"></i></a></li>
						</ul>
					</div>
				</div>

				<div className="col-md-6 col-xs-12 pull-right">
					<p className="text-right">
            © {new Date().getFullYear()}. All Right Reserved 2016.
					</p>
				</div>
			</div>
		</div>
	</div>
)

Copyright.propTypes = {
}

Copyright.defaultProps = {
}

export default Copyright
