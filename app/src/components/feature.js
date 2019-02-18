import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import iconProfessional from "../images/icon_professional.png";
import iconDigital from "../images/icon_digital.png";
import iconGlobal from "../images/icon_global.png";

const Feature = ({ siteTitle }) => (
  <section id="content-1-3" className="content-block content-1-3">
		<div className="container">
			<div className="row">
				<div className="col-md-12">

					<div className="underlined-title">
			        <h1>FEATURES</h1>
	       	</div>

					<div className="services-wrapper">
						<div className="col-md-4">
							<div className="icon">
								<img src={iconProfessional} alt="Group of Professional" />
							</div>
							<div className="editContent">
								<h4>Group of Professional</h4>
							</div>
							<div className="editContent">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="icon">
								<img src={iconDigital} alt="Digital Marketing Solution" />
							</div>
							<div className="editContent">
								<h4>Digital Marketing Solution</h4>
							</div>
							<div className="editContent">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="icon">
								<img src={iconGlobal} alt="Able to Work Globally" />
							</div>
							<div className="editContent">
								<h4>Able to Work Globally</h4>
							</div>
							<div className="editContent">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

Feature.propTypes = {
}

Feature.defaultProps = {
}

export default Feature
