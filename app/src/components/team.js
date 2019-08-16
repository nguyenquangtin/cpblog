import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import styled from 'styled-components';

// Asssets import
import teamZoro from "../images/team_zoro.png";
import teamZoroBig from "../images/team_zoro_big.png";
import teamLaw from "../images/team_law.png";
import teamChopper from "../images/team_chopper.png";
import teamChopperBig from "../images/team_chopper_big.png";
import teamLuffy from "../images/team_luffy.png";
import teamDragon from "../images/team_dragon.png";
import teamNami from "../images/team_nami.png";
import teamNamiBig from "../images/team_nami_big.jpg";
import teamSabo from "../images/team_sabo.png";
import teamSunny from "../images/team_sunny.png";
import teamKizaru from "../images/team_kizaru.png";
import teamKizaruBig from "../images/team_kizaru_big.png";
import teamSmoker from "../images/team_smoker.png";
import teamSmokerBig from "../images/team_smoker_big.png";

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
      <section className="content-block team-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1>MEMBERS OF CIPHERPOLS</h1>
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
  flex-direction: row;
  flex-wrap: wrap;
`;

const Container = styled.div`
  background: white;
  width: 200px;
  height: 320px;
  border-radius: 14px;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0, 0.5);
    transition: all .2s ease-in;
    transition-delay: .1s;
  }

  &:hover img {
    transform: translateY(-20px);
    transition: all .2s ease-in;
    transition-delay: .1s;
  }
`;

const Cover = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Caption = styled.h4`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 0;
  margin-bottom: 0;
  justify-content: center;
  text-align: center;
`;

const Subtitle = styled.span`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 4px;
  display: 'inline-block',
`;

const Title = styled.h4`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const teams = [
  {
    code: 'トゥアンズオン <br /> (tuan duong)',
    name: 'Tuan Duong',
    role: 'Pirate Hunter',
    avatar: teamZoro,
    profilePhoto: teamZoroBig,
    profileUrl: 'https://www.linkedin.com/in/tuandm/',
    profile: "Dedicated Technical Consultant adept at cultivating long-term partnerships with lucrative clients. Knowledgeable in server hardware and components configurations. Experienced in working with high-load system. Strong skills on resolving security and performance issues. Offering a successful career history comprising more than 10 years.",
    skills: "Technology planning, Advanced critical thinking, Team leadership, System analysis, Code delivery review, Resource scheduling, Expert in PHP and web development",
    birthday: "04th Aug",
    special: "NA",
  },
  {
    code: 'Law',
    name: 'Duc Duong',
    role: 'Operation Coder',
    avatar: teamLaw,
    profilePhoto: "",
    profileUrl: '',
    profile: "",
    skills: "",
    birthday: "",
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
    code: 'Luffy',
    name: 'Nhan Doan',
    role: 'Gum Gum Developer',
    avatar: teamLuffy,
    profilePhoto: "",
    profileUrl: '',
    profile: "",
    skills: "",
    birthday: "",
    special: "",
  },
  {
    code: 'Sabo',
    name: 'Duy Nguyen',
    role: 'Revolutionary Developer',
    avatar: teamSabo,
    profilePhoto: "",
    profileUrl: '',
    profile: "",
    skills: "",
    birthday: "",
    special: "",
  },
  {
    code: 'Sunny',
    name: 'Phat Nguyen',
    role: 'Supernova Coder',
    avatar: teamSunny,
    profilePhoto: "",
    profileUrl: '',
    profile:"",
    birthday: "",
    special: "",
  },
  {
    code: 'Monkey D Dragon',
    name: 'Tuan Nguyen',
    role: 'Revolution Server Expert',
    avatar: teamDragon,
    profilePhoto: "",
    profileUrl: '',
    profile: "",
    skills: "",
    birthday: "",
    special: "",
  },
  {
   code: 'ビ ハ <br />(bi ha)',
   name: 'Vi Ha',
   role: 'coder',
   avatar: teamNami,
   profilePhoto: teamNamiBig,
   profileUrl: 'https://www.linkedin.com/in/hathanhvi/',
   profile: "Across the last 2 years, Nami was fighting across the South East Asia sea. She has developed a wide range of websites with particular expertise in creating custom Shopify, VueJS and React Native, ReactJS sites. Solid experience in Javascript, React, VueJS, CSS3, HTML5 and adhering to accessibility standards.",
   skills: "Javascript, VueJS, React, CSS3, HTML5, UI/UX.",
   birthday: "9th May",
   special: "Meo Meo",
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
