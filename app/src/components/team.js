import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Team = () => (
<section class="content-block team-1">

  <div class="container">
    <div class="rpw">
    <div class="col-md-8 col-md-offset-2 text-center">
      <h1>THE ONE PIECE CYPHERPOLS</h1>
      <p>
        The One Piece manga and anime series features an extensive cast of characters created by Eiichiro Oda. The series takes place in a fictional universe where vast numbers of pirates, soldiers, revolutionaries, and other adventurers fight each other, using various superhuman and supernatural abilities.
      </p>
    </div>
  </div>

    <div class="row">

      <div class="col-md-3 col-sm-6 team-member-wrap">
        <div class="team-member">
          <img src="images/team_zoro.png" class="img-responsive" alt="Member Image" />
          <div class="team-details">
            <div class="editContent">
              <h4 class="member-name">ZORO</h4>
              <h4 class="member-name">TUAN DUONG</h4>
              <span>MANAGING DIRECTOR</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 team-member-wrap">
        <div class="team-member">
          <img src="images/team_law.png" class="img-responsive" alt="Member Image" />
          <div class="team-details">
            <div class="editContent">
              <h4 class="member-name">LAW</h4>
              <h4 class="member-name">DUC DUONG</h4>
              <span>PRESIDENT</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 team-member-wrap">
        <div class="team-member">
          <img src="images/team_coby.png" class="img-responsive" alt="Member Image" />
          <div class="team-details">
            <div class="editContent">
              <h4 class="member-name">COBY</h4>
              <h4 class="member-name">TUNG NGUYEN</h4>
              <span>MANAGER</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 team-member-wrap">
        <div class="team-member">
          <img src="images/team_tiger.png" class="img-responsive" alt="Member Image" />
          <div class="team-details">
            <div class="editContent">
              <h4 class="member-name">TIGER</h4>
              <h4 class="member-name">MINH TRAN</h4>
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
