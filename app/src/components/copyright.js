import React from "react"

const Copyright = () => (
  <div className="copyright-bar bg-grey">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-xs-12 pull-left">
					<div className="social-wrap">
						<ul className="social social-dark">
							<li><a href="#" target="_blank" rel="noopener"><i className="fa fa-2x fa-facebook"></i></a></li>
							<li><a href="#" target="_blank" rel="noopener"><i className="fa fa-2x fa-twitter"></i></a></li>
						</ul>
					</div>
				</div>

				<div className="col-md-6 col-xs-12 pull-right">
					<p className="text-right">
            Copyright &copy; {new Date().getFullYear()} CipherPols. All rights reserved.
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
