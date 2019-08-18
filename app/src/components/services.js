import React from "react"
import styled from 'styled-components';

import iconX from '../images/icon_x.png';
import iconUpdate from '../images/icon_update.png';
import iconUnique from '../images/icon_unique.png';
import iconCoding from '../images/icon_coding.png';
import iconQc from '../images/icon_qc.png';
import bgFeatures from '../images/bg_features.jpg';

const Services = ({ siteTitle }) => (
	<section id="content-1-4" className="content-block-nopad content-1-4">
		<div className="container-fluid">
			<div className="image-container col-md-6">
				<Feature className="bg-features">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<h2>
								Everything you need <br />
								in one place
							</h2>
							<p>
								<img src={iconX} alt="X" />
							</p>
								<p>Full stack software development includes: graphic design, project management, coding and testing service. We are inspired by Eiichiro Oda with his manga - The One Piece. Join us to explore the new journey in your career and business.</p>
						</div>

					</div>
				</Feature>
			</div>

			<div className="col-md-6">
	        <div className="row">
	            <div className="col-md-12 col-sm-12 col-xs-12 pad25">
	                <div className="col-xs-2">
	                    <img src={iconUpdate} alt="UP TO DATE SOLUTION" />
	                </div>
	                <div className="col-xs-10">
	                    <FeatureItem>
	                        <h4>FULLSTACK</h4>
	                        <p>We are fullstacks team using major programning languages. Check out our project portfolio to see our past work.</p>
                      </FeatureItem>
	                </div>
	            </div>
	            <div className="col-md-12 col-sm-12 col-xs-12 pad25">
	                <div className="col-xs-2">
	                	<img src={iconUnique} alt="UNIQUE DESIGN" />
	                </div>
	                <div className="col-xs-10">
                      <FeatureItem>
	                        <h4>UNIQUE DESIGN</h4>
	                        <p>Try our design to deliver the best UI/UX for your software.</p>
                      </FeatureItem>
	                </div>
	            </div>
	            <div className="col-md-12 col-sm-12 col-xs-12 pad25">
	                <div className="col-xs-2">
	                  <img src={iconCoding} alt="PROFESSIONAL CODING" />
	                </div>
	                <div className="col-xs-10">
                        <FeatureItem>
	                        <h4>CONSULTATION</h4>
	                        <p>Contact us to enjoy the first consultation meeting at no cost. We have experienced consultant for your business whether it is well-established or startup.</p>
                       </FeatureItem>
	                </div>
	        			</div>

      			    <div className="col-md-12 col-sm-12 col-xs-12 pad25">
      			        <div className="col-xs-2">
      			            <img src={iconQc} alt="QC TEST" />
      			        </div>
      			        <div className="col-xs-10">
                      <FeatureItem>
                        <h4>TESTING SERVICE</h4>
                        <p>Enjoy our cost-efficiency testing service for your software. Leave the tedious job to us and enjoy a high quality software.</p>
                      </FeatureItem>
      			        </div>
      						</div>
				    </div>
			</div>
		</div>
	</section>
)

Services.propTypes = {
}

Services.defaultProps = {
}

const Feature = styled.div`
  background: #000 url(${bgFeatures}) no-repeat center center;
  background-size: cover;
  height: 650px;
  text-align: center;
  color: #FFF;
`;

const FeatureItem = styled.div`
  p {
    margin-bottom: 0.45rem;
  }
`;

export default Services
