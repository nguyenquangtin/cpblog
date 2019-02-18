import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Services = ({ siteTitle }) => (
	<section id="content-1-4" className="content-block-nopad content-1-4">
		<div className="container-fluid">
			<div className="image-container col-md-6">
				<div className="bg-features">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<h2>
								Everything you need <br />
								in one place
							</h2>
							<p>
								<img src="images/icon_x.png" alt="" />
							</p>
								<p>The One Piece manga and anime series features an extensive cast of characters created by Eiichiro Oda. The series takes place in a fictional universe where vast numbers of pirates, soldiers, revolutionaries. </p>
						</div>

					</div>
				</div>
			</div>

			<div className="col-md-6">
	        <div className="row">
	            <div className="col-md-12 col-sm-12 col-xs-12 pad25">
	                <div className="col-xs-2">
	                    <img src="images/icon_update.png" alt="" />
	                </div>
	                <div className="col-xs-10">
	                    <div className="editContent">
	                        <h4>UP TO DATE SOLUTION</h4>
	                    </div>
	                    <div className="editContent">
	                        <p>Retro chillwave YOLO four loko photo booth. Brooklyn kale chips, seitan hella 3 wolf moon slow-carb paleo.</p>
	                    </div>
	                </div>
	            </div>
	            <div className="col-md-12 col-sm-12 col-xs-12 pad25">
	                <div className="col-xs-2">
	                	<img src="images/icon_unique.png" alt="" />
	                </div>
	                <div className="col-xs-10">
	                    <div className="editContent">
	                        <h4>UNIQUE DESIGN</h4>
	                    </div>
	                    <div className="editContent">
	                        <p>Retro chillwave YOLO four loko photo booth. Brooklyn kale chips, seitan hella 3 wolf moon slow-carb paleo.</p>
	                    </div>
	                </div>
	            </div>
	            <div className="col-md-12 col-sm-12 col-xs-12 pad25">
	                <div className="col-xs-2">
	                  <img src="images/icon_coding.png" alt="" />
	                </div>
	                <div className="col-xs-10">
	                    <div className="editContent">
	                        <h4>PROFESSIONAL CODING</h4>
	                    </div>
	                    <div className="editContent">
	                        <p>Retro chillwave YOLO four loko photo booth. Brooklyn kale chips, seitan hella 3 wolf moon slow-carb paleo.</p>
	                    </div>
	                </div>
	        			</div>

      			    <div className="col-md-12 col-sm-12 col-xs-12 pad25">
      			        <div className="col-xs-2">
      			            <img src="images/icon_qc.png" alt="" />
      			        </div>
      			        <div className="col-xs-10">
      			            <div className="editContent">
      			                <h4>QC TEST</h4>
      			            </div>
      			            <div className="editContent">
      			                <p>Retro chillwave YOLO four loko photo booth. Brooklyn kale chips, seitan hella 3 wolf moon slow-carb paleo.</p>
      			            </div>
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

export default Services
