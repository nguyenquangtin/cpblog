import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoFooter from '../images/logo_footer.png'



const Footer = () => (
<section className="content-block-nopad bg-black">
  <div className="container footer-1-1">

    <div className="row">
      <div className="col-md-7">

        <div className="logo-footer">
            <img src={logoFooter} className="img-responsive logo-shape" />
            <div className="logo-text">Cipherpols</div>
        </div>

        <div className="">
          <p className="decscription">
            The One Piece manga and anime series features an extensive cast of characters created by Eiichiro Oda. The series takes place in a fictional universe where vast numbers of pirates, soldiers, revolutionaries, and other adventurers fight each other, using various superhuman and supernatural abilities.
          </p>
        </div>
      </div>

      <div className="col-md-5">

          <h4>Contact</h4>

        <ul>
          <li>
            <span className="glyphicon glyphicon glyphicon-earphone"></span>
            <a href="tel:+84838486889">
                &nbsp; (+84) 8 38486889
            </a>
          </li>
          <li>
            <span className="glyphicon glyphicon glyphicon-envelope"></span>
            <a href="mailto:info@cipherpol@gmail.com">
              &nbsp;  info@cipherpol@gmail.com
            </a>
          </li>
          <li>
            <i className="fa fa-map" aria-hidden="true"></i>
            &nbsp;  123 Hoang Hoa Tham Street -
            Tan Binh District - HCMC</li>
          <li>
              <i className="fa fa-fax" aria-hidden="true"></i>
              &nbsp; (+84) 8 38486811</li>
        </ul>
      </div>
    </div>
  </div>
</section>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
