import React from "react"
import logo from '../images/logo.png'
import styled from 'styled-components'
import Wave from './wave';

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`;

// const WaveTop = styled.div`
//   position: absolute;
//   width: 100%;
//   top: -6px;
//   transform: rotate(180deg);
// `;


const Banner = ({ siteTitle }) => (
  <section className="hero">
    <WaveBottom><Wave /></WaveBottom>
    <div className="container">
      <div className="brand">
        <img
          src={logo}
          className="brand-img img-responsive"
          alt="Cipherpols Logo"
        />
      </div>
      {/* <div className="navicon">
        <a id="nav-toggle" className="nav-slide-btn" href="#"><span></span></a>
      </div> */}
      <div className="col-md-12 text-center">
      <div className="banner-heading">
          <span className="lead">IDEAL SOLUTION FOR YOUR BUSINESS</span>
          <h1>YOUR <span className="blue">CIPHERPOLS</span> DO IT ALL</h1>
        </div>
      </div>
      {/* <div className="col-xs-12 text-center">
        <a href="#feature" className="btn btn-ghost">More Features</a>
      </div> */}
    </div>
  </section>
)

Banner.propTypes = {
}

Banner.defaultProps = {
}

export default Banner
