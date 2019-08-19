import React from "react"

import iconProfessional from "../images/icon_professional.png";
import iconDigital from "../images/icon_digital.png";
import iconGlobal from "../images/icon_global.png";

const Feature = ({ siteTitle }) => (
  <section id="features" className="content-block content-1-3">
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
							<div>
								<h4>VIRTUAL COMMUNITY</h4>
							</div>
							<div>
								<p>We are a group of professional software developers. Join us to enjoy cost efficient and flexible software development solution.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="icon">
								<img src={iconDigital} alt="Digital Marketing Solution" />
							</div>
							<div>
								<h4>AGILE DEVELOPMENT</h4>
							</div>
							<div>
								<p>Development method that give you the real “touch” of your software at short and frequent releases.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="icon">
								<img src={iconGlobal} alt="Able to Work Globally" />
							</div>
							<div>
								<h4>MEMBERS</h4>
							</div>
							<div>
								<p>Enhance your development skills, challenge themselves with new domain and technology. Together we create a standout projects for you in the job market.</p>
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
