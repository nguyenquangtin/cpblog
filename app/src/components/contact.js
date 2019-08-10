import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Contact = () => (
<section className="content-block contact-2">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div id="contact" className="form-container">
          <fieldset>
	          <div id="message"></div>
						<form name="contact"  method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <div className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </div>
							<div className="form-group">
								<input name="name" id="name" type="text" placeholder="Name" className="form-control" required />
							</div>
							<div className="form-group">
                <input name="email" id="email" type="text" placeholder="Email" className="form-control" required />
							</div>
							<div className="form-group">
                <input name="subject" id="subject" type="text" placeholder="Subject" className="form-control" required />
							</div>
							<div className="form-group">
	              <textarea name="comments" id="comments" className="form-control" required rows="3" placeholder="Message"></textarea>
								<div className="editContent">
									<p className="small text-muted"><span className="guardsman">* All fields are required.</span> Once we receive your message we will respond as soon as possible.</p>
								</div>
							</div>
							<div className="form-group">
								<button className="btn btn-primary" type="submit" id="cf-submit" name="submit">Send</button>
							</div>
						</form>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	</section>
)

Contact.propTypes = {
}

Contact.defaultProps = {
}

export default Contact
