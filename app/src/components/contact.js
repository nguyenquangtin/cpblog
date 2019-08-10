import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", subject: "",message : "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, subject } = this.state;
    return (
      <section className="content-block contact-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="contact" className="form-container">
                <fieldset>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>
                        Don’t fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        value={name} onChange={this.handleChange}
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        required
                        name="name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={email} onChange={this.handleChange}
                        id="email"
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        required
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={subject} onChange={this.handleChange}
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        required
                        name="subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        value={message} onChange={this.handleChange}
                        id="message"
                        className="form-control"
                        required
                        rows="3"
                        placeholder="Message"
                        name="message"
                        style={{ paddingLeft: 10, paddingTop: 10 }}
                      />
                      <div className="editContent">
                        <p className="small text-muted">
                          <span className="guardsman">
                            * All fields are required.
                          </span>{" "}
                          Once we receive your message we will respond as soon
                          as possible.
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        id="cf-submit"
                        name="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// Contact.PropTypes = {};
// Contact.defaultProps = {};

export default Contact;
