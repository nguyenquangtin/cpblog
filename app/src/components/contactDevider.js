import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import iconX from '../images/icon-x.png'

const ContactDevider = () => (
  <section id="promo-3" className="content-block promo-3 min-height-300px">
		<div className="container text-center">
				<h1>Keep in Touch</h1>
				<img src={iconX} alt="X" />
				<p>
					What still bothers you for not getting in touch with us <br />
					No need to wait anymore, contact us now
				</p>
		</div>
	</section>
)

ContactDevider.propTypes = {
}

ContactDevider.defaultProps = {
}

export default ContactDevider
