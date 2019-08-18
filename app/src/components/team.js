import React, { Component } from 'react'
import Swal from 'sweetalert2'
import styled from 'styled-components';

// Asssets import
import teamZoro from "../images/team_zoro.jpg";
import teamZoroBig from "../images/team_zoro_big.png";
import teamLaw from "../images/team_law.jpg";
import teamLawBig from "../images/team_law_big.png";
import teamChopper from "../images/team_chopper.jpg";
import teamChopperBig from "../images/team_chopper_big.png";
import teamSabo from "../images/team_sabo.jpg";
import teamSaboBig from "../images/team_sabo_big.jpg";
import teamNami from "../images/team_nami.jpg";
import teamNamiBig from "../images/team_nami_big.jpg";
import teamSanji from "../images/team_sanji.jpg";
import teamSanjiBig from "../images/team_sanji_big.png";
import teamRay from "../images/team_ray.jpg";
import teamRayBig from "../images/team_ray_big.jpg";
import teamKizaru from "../images/team_kizaru.jpg";
import teamKizaruBig from "../images/team_kizaru_big.png";
import teamSmoker from "../images/team_smoker.jpg";
import teamSmokerBig from "../images/team_smoker_big.png";
import frame from "../images/bounty_frame.jpg";

class Team extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showModal: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }

   profileBuilder = (team) => {
    let htmlProfile = '<p>';
    htmlProfile += "<img style='max-width: 250px; float:right;' class='avatar' src='" + team.profilePhoto + "' alt='" + team.name + "' />";
    htmlProfile += '<p><b>Code</b>: ' + team.code  + '<br />';
    htmlProfile += '<b>Role:</b> ' + team.role  + '<br />';
    htmlProfile += '<b>Birthday:</b> ' + team.birthday  + '<br />';
    htmlProfile += '<b>Special:</b> ' + team.special  + '<br />';
    htmlProfile += '<b>Skills:</b> ' + team.skills  + '<br />';
    htmlProfile += '<b>Profile:</b> ' + team.profile  + '<br />';
    htmlProfile += '<b>Profile Link:</b> <a href="' + team.profileUrl + '" target="_blank" rel="nofollow">LinkedIn</a> <br />';
    htmlProfile += "</p>";
    return htmlProfile;
  }

  handleClick(team) {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));

    Swal.fire({
      title: team.name,
      url: team.profileUrl,
      html: this.profileBuilder(team),
      imageUrl: team.logo,
      imageWidth: 200,
      imageHeight: 'auto',
      imageAlt: team.name
    })
  }

  render() {
    return (
      <section className="content-block">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1>CIPHERPOLS CREWS</h1>
              <p>
                Each of our member is represented by a character found in The One Piece. Please choose the best character your project in the below list. For more information, please contact us in the form below.
              </p>
            </div>
          </div>

          <CardWrapper>
              {teams.map((team, index) => (
                <Container team={team} key={index} onClick={(e) => this.handleClick(team)}>
                  <Cover>
                    <Image src={team.avatar} />
                    <Title>{team.name}</Title>
                  </Cover>
                  <Content>
                    <Wrapper>
                      <Caption>{team.name}</Caption>
                      <Subtitle>{team.role}</Subtitle>
                    </Wrapper>
                  </Content>
                </Container>
              ))}
          </CardWrapper>
        </div>
      </section>
  )}
}

Team.propTypes = {
}

Team.defaultProps = {
}

export default Team

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 90%;
`;

const Container = styled.div`
  /* background: red; */
  background-image: url(${frame});
  background-size: cover;
  width: 300px;
  height: 424.5px;
  /* border-radius: 14px; */
  margin: 20px 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0, 0.5);
    transition: all .2s ease-in;
    transition-delay: .1s;
  }

  &:hover img {
    filter: none;
    -webkit-filter: sepia(0);
    -ms-filter: sepia(0%);
    transition-delay: .1s;
  }
`;

const Cover = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 265px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Image = styled.img`
  width: 246px;
  height: 179px;
  position: absolute;
  top: 90px;
  left: 27px;
  filter: sepia(100%);
    -webkit-filter: sepia(1);
    -ms-filter: sepia(100%);
`;

const Content = styled.div`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 150px;
`;

const Wrapper = styled.div`
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;


const Caption = styled.h4`
  color: #49361c;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 900;
  padding-top: 20px;
  letter-spacing:-0.5px;
  padding-bottom: 0;
  margin-bottom: 0;
  justify-content: center;
  text-align: center;
`;

const Subtitle = styled.span`
  color: #49361c;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 21px;
  margin-top: 4px;
  display: 'inline-block';
`;

const Title = styled.h4`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
  display: none;
`;

const teams = [
  {
    code: 'トゥアンズオン <br /> (tuan duong)',
    name: 'Tuan Duong',
    role: 'Coder Hunter',
    avatar: teamZoro,
    profilePhoto: teamZoroBig,
    profileUrl: 'https://www.linkedin.com/in/tuandm/',
    profile: "Dedicated Technical Consultant adept at cultivating long-term partnerships with lucrative clients. Knowledgeable in server hardware and components configurations. Experienced in working with high-load system. Strong skills on resolving security and performance issues. Offering a successful career history comprising more than 10 years.",
    skills: "Technology planning, Advanced critical thinking, Team leadership, System analysis, Code delivery review, Resource scheduling, Expert in PHP and web development",
    birthday: "04th Aug",
    special: "NA",
  },
  {
    code: 'ドゥク ドゥオング <br /> (duku duongu)',
    name: 'Duc Duong',
    role: 'Death Runner',
    avatar: teamLaw,
    profilePhoto: teamLawBig,
    profileUrl: 'https://www.linkedin.com/in/duongthienduc/',
    profile: "As an experienced backend developer, Law participated in many kinds of projects: portal, blockchain, microservices. Being good at researching, solving problem, team working, he is pretty adaptable and can assimilate easily into a new environment.",
    skills: "NodeJS, Java",
    birthday: "4th May",
    special: "",
  },
  {
    code: 'トニー ングイアン <br /> (tonii nguian)',
    name: 'Tony Nguyen',
    role: 'Website Doctor',
    avatar: teamChopper,
    profilePhoto: teamChopperBig,
    profileUrl: 'https://www.linkedin.com/in/tonytinnguyen/',
    profile: "Across the last 10 years, Chopper was fighting across the South East Asia sea. He  have developed/designed a wide range of websites, blogs with particular experti  se in creating custom WordPress, PHP, and NodeJS, ReactJS sites. Solid experience in Javascript, NodeJS, ReactJS, CSS3, HTML5, PHP, MySQL, and adhering to accessibility standards.",
    skills: "Javascript, NodeJS, ReactJS, CSS3, HTML5, PHP, UI/UX.",
    birthday: "29th Nov",
    special: "Hito Hito no Mi",
  },
  {
    code: 'ドゥイ ングイアン <br />(dui nguian)',
    name: 'Duy Nguyen',
    role: 'Big Data Engineer',
    avatar: teamSabo,
    profilePhoto: teamSaboBig,
    profileUrl: 'https://www.linkedin.com/in/duynguyenhoang/',
    profile: "More than 10 years in Web development and 3 years working in Big Data Architecture. Working with many kinds of project especially in e-commerce. Eager to learn and adapt with new technologies, nonstop expanding. ",
    skills: "NodeJs, PHP, Python, Java, Golang, ReactJs, Vuejs, Apache Ecosystem, Cloud (AWS, GCP)",
    birthday: "18th Sep",
    special: "Big Data Architecture"
  },
  {
    code: 'フオング ブ<br /> (fuongu bu)',
    name: 'Phuong Vu',
    role: 'Python cooker',
    avatar: teamSanji,
    profilePhoto: teamSanjiBig,
    profileUrl: 'https://www.linkedin.com/in/phanvuphuong/',
    profile: "In last 8 years, as a python cooker, he joined and help built many kinds of product: social network, entertaiment, AI assistant from backend to frontend. Works with passion and delivers good quality products.",
    skills: "Python, Django, Scrapy, Nuxtjs, AWS, PHP killer",
    birthday: "17th Jul",
    special: "",
  },
  {
   code: 'ビ ハ <br />(bi ha)',
   name: 'Vi Ha',
   role: 'Coder',
   avatar: teamNami,
   profilePhoto: teamNamiBig,
   profileUrl: 'https://www.linkedin.com/in/hathanhvi/',
   profile: "Across the last 2 years, Nami was fighting across the South East Asia sea. She has developed a wide range of websites with particular expertise in creating custom Shopify, VueJS and React Native, ReactJS sites. Solid experience in Javascript, React, VueJS, CSS3, HTML5 and adhering to accessibility standards.",
   skills: "Javascript, VueJS, React, CSS3, HTML5, UI/UX.",
   birthday: "9th May",
   special: "Meo Meo",
   },
   {
    code: 'ドゥング ル <br /> (dungu ru)',
    name: 'Dung Le',
    role: 'Mobile star',
    avatar: teamRay,
    profilePhoto: teamRayBig,
    profileUrl: 'https://www.linkedin.com/in/dunglehuy/',
    profile: "Across the last 8 years, Ray represents an experienced and advanced skill set of iOS and android. He is a specialist in creating and developing multiple apps.",
    skills: "C/C++, Objective-C, swift, Java working on mobile applications and on large-scale system, Core ML, Tensorflow, OpenCV",
    birthday: "1st Jan",
    special: "Image processing",
   },
   {
    code: 'フイ クアン <br />(hui kuan)',
    name: 'Huy Quan',
    role: 'Marine Developer',
    avatar: teamSmoker,
    profilePhoto: teamSmokerBig,
    profileUrl: 'https://www.linkedin.com/in/huy-quan/',
    profile: "About 8+ years of total experience in the analysis, design and development of software applications using Microsoft Technology: .NET Framwork, .NET Core for both Application and Website: WindowsForm, WPF, WebForm, ASPNET MVC, SPA, Web Services (SOAP and RESTFul). I also have over 4 years of work at position Project Management, Scrum Master with local and foreign companies. Solid experience in C#, Javascript, HTML5, CSS3. Strong conceptual knowledge in Software Design and SDLC. Good knowledge on deploying and management in Clouds (AWS, Google Cloud, Digital Ocean).",
    skills: ".NET Framework, .NET Core, C#, Javascript, CSS3, HTML5, SCSS, Bootstrap, MS SQL Server, MySQL, CouchbaseDB. AWS, Google Cloud, Digital Ocean",
    birthday: "2nd Dec",
    special: "Moku Moku no Mi",
  },
  {
    code: 'バク ル <br />(baku ru)',
    name: 'Bach Le',
    role: 'Marine Developer',
    avatar: teamKizaru,
    profilePhoto: teamKizaruBig,
    profile: "Programming with passion. Solid experience in Javascript, CSS3, HTML5, ReactJS, React Native, Flutter, Java.",
    skills: "Javascript, CSS3, HTML5, NodeJS, ReactJS, React Native, Flutter, Java, Python.",
    birthday: "29th Aug",
    special: "Pika Pika no Mi",
  }
];
