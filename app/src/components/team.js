import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import teamZoro from "../images/team_zoro.png";
import teamLaw from "../images/team_law.png";
import teamCoby from "../images/team_coby.png";
import teamTiger from "../images/team_tiger.png";


const Team = () => (
<section className="content-block team-1">
  <div className="container">
    <div className="rpw">
    <div className="col-md-8 col-md-offset-2 text-center">
      <h1>THE ONE PIECE CYPHERPOLS</h1>
      <p>
        The One Piece manga and anime series features an extensive cast of characters created by Eiichiro Oda. The series takes place in a fictional universe where vast numbers of pirates, soldiers, revolutionaries, and other adventurers fight each other, using various superhuman and supernatural abilities.
      </p>
    </div>
  </div>

    <div className="row">

      <div className="col-md-3 col-sm-6 team-member-wrap">
        <div className="team-member">
          <img src={teamZoro} className="img-responsive" alt="Member Image" />
          <div className="team-details">
            <div className="editContent">
              <h4 className="member-name">ZORO</h4>
              <h4 className="member-name">TUAN DUONG</h4>
              <span>MANAGING DIRECTOR</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 team-member-wrap">
        <div className="team-member">
          <img src={teamLaw} className="img-responsive" alt="Member Image" />
          <div className="team-details">
            <div className="editContent">
              <h4 className="member-name">LAW</h4>
              <h4 className="member-name">DUC DUONG</h4>
              <span>PRESIDENT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 team-member-wrap">
        <div className="team-member">
          <img src={teamCoby} className="img-responsive" alt="Member Image" />
          <div className="team-details">
            <div className="editContent">
              <h4 className="member-name">COBY</h4>
              <h4 className="member-name">TUNG NGUYEN</h4>
              <span>MANAGER</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 team-member-wrap">
        <div className="team-member">
          <img src={teamTiger} className="img-responsive" alt="Member Image" />
          <div className="team-details">
            <div className="editContent">
              <h4 className="member-name">TIGER</h4>
              <h4 className="member-name">MINH TRAN</h4>
              <span>ART DIRECTOR</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</section>
)

Team.propTypes = {
}

Team.defaultProps = {
}

export default Team
