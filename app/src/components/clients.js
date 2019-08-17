import React, { Component } from 'react'
import Swal from 'sweetalert2'
import styled from 'styled-components';

import logoDetecq from '../images/partner-logos/client_detecq.png';
import logoLtw from '../images/partner-logos/client_ltw.png';
import logoOleary from '../images/partner-logos/client_oleary.png';
import logoTarfee from '../images/partner-logos/client_tarfee.png';
import logoXahive from '../images/partner-logos/client_xahive.png';
class Clients extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showModal: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(client) {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));

    Swal.fire({
      title: client.name,
      url: client.url,
      text: client.description,
      imageUrl: client.logo,
      imageWidth: 200,
      imageHeight: 'auto',
      imageAlt: client.name
    })
  }

  render() {
    return (
      <section id="content-1-7" className="content-1-7 content-block">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <h1>CLIENTS</h1>
              <p>
                Our customers have trusted in our work, don't be hesitate to join our happy customer team. <br />
                Cipherpol will elevate your business website to the next level.
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="cients-wrap">
            <div className="row">

              <div className="col-md-offset-1">&nbsp;</div>

              {clients.map( (client, index) => (
                <ClientCard key={index} className="col-md-2 col-sm-4 col-xs-6" onClick={() => this.handleClick(client)}>
                  <img alt={client.name} src={client.logo} />
                </ClientCard>
              ))}

            </div>
          </div>
        </div>
      </section>
    )
  }
}

Clients.propTypes = {
}

Clients.defaultProps = {
}

export default Clients

const ClientCard = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  height: 100px !important;
  overflow: 'hidden';
  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 15px 30px rgba(0,0,0, 0.5);
    transition: all .2s ease-in;
    transition-delay: .1s;
  }

  &:hover img {
    transform: translateY(-2px);
    transition: all .2s ease-in;
    transition-delay: .1s;
  }
`;


const clients = [
  {
    name: 'Lead To Win',
    url: 'http://www.leadtowin.ca/',
    logo: logoLtw,
    description:'Lead To Win is a business opportunity presentation program under Carleton University accelerator. Lead To Win allows founders to register to present their business opportunity to a reviewers panel. CP was responsible to revamp the entire Lead To Win front end at phase 1 of the project. In phase 2, CP was responsible to revamp the founder workflow (i.e. register, create business opportunity, create applications, approve applications, allocate presentation slot and date, automatic email notifications). Phase 3 comes where the reviewers workflow are automated. Project Lead To Win was built on Drupal CMS framework.'
  },
  {
    name: 'Detecq',
    url: '',
    logo: logoDetecq,
    description:"Detecq is a private corporate startup marketplace that leverages software to help corporate investors and tech companies accurately and efficiently discover their best strategic matches. \r\nWe believe that both corporates and tech companies can gain and achieve so much more from working with each other. Tech companies have the innovative spirit, nimbleness, and boldness that corporates need to avoid being disrupted. Corporates have the capital, network, and clout that tech companies need to bring their vision to fruition. Working together frees the tech company from its cash/resource-strapped woes, and gives the rigid corporation an avenue to take risks in pursuing other market opportunities.\r\nAt Detecq, our aim is to help visionaries in Asia successfully realise their goal by connecting them with the right corporate partner/investor/acquirer with the right resources to propel their company forward."
  },
  {
    name: 'Xahive',
    url: 'https://www.xahive.com',
    logo: logoXahive,
    description:"Xahive is a startup in Ottawa, Canada. Xahive offer messenger service to customer in a secured way that is unique from other messaging services. The messenger was built on NodeJS. CP undertook the web server in May 2015 and created the two mobile version of Xahive messenger in iOS and Android."
  },
  {
    name: 'Tarfee',
    url: 'https://tarfee.com',
    logo: logoTarfee,
    description:"Tarfee established from Lead To Win presentation in Carleton University accelerator. Tarfee aim to create a social media platform to attract young soccer talents, clubs to share their videos. Tarfee connects club to unknown player around the world. Tarfee’s platform was built on top of Social Engine framework by CP within 6 months time."
  },
  {
    name: 'O’leary (internal system)',
    url: '',
    logo: logoOleary,
    description:"O’leary wished to build a work management system on their tablet. CP created a web portal for O’leary staffs check in/out for the daily works. The application allows O’leary staffs to create live-job pool, timesheet, daily reports based on the pre-defined resource database. Project O’leary was built using Microsoft .NET technology."
  }
];