import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import styled from 'styled-components';

// Asssets import
import teamZoro from "../images/team_zoro.png";
import teamLaw from "../images/team_law.png";
import teamChopper from "../images/team_chopper.png";
import teamLuffy from "../images/team_luffy.png";
import teamDragon from "../images/team_dragon.png";
import teamNami from "../images/team_nami.png";
import teamSabo from "../images/team_sabo.png";
import teamSunny from "../images/team_sunny.png";
import teamKizaru from "../images/team_kizaru.png";
import teamSmoker from "../images/team_smoker.png";
class Team extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showModal: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(team) {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));

    Swal.fire({
      title: team.name,
      url: team.profileUrl,
      text: team.profile,
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
  }

  &:hover img {
    transform: translateY(-20px);
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
    code: 'Zoro',
    name: 'Tuan Duong',
    role: 'Samurai Coder',
    avatar: teamZoro,
    profileUrl: 'https://github.com/tuandm',
    profile: "<p><strong>I.SKILLS</strong></p>\
    <p>❖ Web Developer in the wide variety of business like Accounting system, E-commerce application.</p>\
    <p>❖ Working with PHP, MySQL.</p>\
    <p>❖ Experienced in handling performance and security for high-traffic websites.</p>\
    <p>❖ Experienced in frameworks/applications/technologies: Zend, Yii, CodeIgniter, Slim, Restler,</p>\
    <p>❖ SalesForce, jQuery, MySQL, Sphinx, Nginx, Memcached, NodeJS, and more.</p>\
    <p><strong>II.EXPERIENCES</strong></p>\
    <p><strong>1)Technical Team Lead - Lazada Group</strong>\
        ❖ September 2014 – Present (1 year 11 months)Ho Chi Minh, Vietnam</p>\
    <p>❖ Manage all technical issues in the development.</p>\
    <p>❖ Manage coding quality from team's output.</p>\
    <p>❖ Handle all the issues that are crazy and undoable.</p>\
    <p><strong>2) Senior PHP Developer - FunnyJunk LLC</strong></p>\
    <p>❖ April 2011 – September 2014 (3 years 6 months) Vietnam</p>\
    <p>❖ Implement new features, fix bugs, enhance performances</p>\
    <p>❖ Implement chat system can handle over 10K concurrent connections</p>\
    <p>❖ Implement mobile site/application (android/iOS) for www.funnyjunk.com</p>\
    <p>❖ Funnyjunk - Funny Pictures, Funny Videos and other Funny stuff</p>\
    <p><strong>3) Technical Director - Webs-pro</strong></p>\
    <p>❖ April 2010 – April 2011 (1 year 1 month)</p>\
    <p><strong>4) Senior Developer - Clearpath Development</strong></p>\
    <p>❖ January 2009 – April 2009 (4 months)</p>\
    <p><strong>5) Senior Developer - E-zea</strong></p>\
    <p>May 2008 – January 2009 (9 months)</p>"
  },
  {
    code: 'Law',
    name: 'Duc Duong',
    role: 'Operation Coder',
    avatar: teamLaw,
    profileUrl: '',
    profile: "<p><strong>I. PERSONAL SUMMARY</strong></p>\
    <p>❖ 10 years of experience in software application development. 4 years working as development\
        team leader.\
        ❖ 7 years of experience in Java/J2EE development.\
        ❖ 10 years working on web development.\
        ❖ Familiar with onshore/offshore working model. Have onsite working experience with client in\
        USA.\
        ❖ Have self education ability. Can work with high pressure and heavy overtime.</p>\
    <p><strong>II. SKILL SET</strong></p>\
    <p>❖ Languages &amp; Scripting: Java/J2EE, PHP, XML, HTML, JavaScript, CSS, NodeJS, AngularJS.\
        ❖ Middleware: MVC Struts Framework, MVC Spring Framework.\
        ❖ Open Source/3rd party tool/library: Hibernate, log4J Logging Service, POI, Spring Security, Axis PdfBox.\
        ❖ Operating Systems: Linux.\
        ❖ Databases: MySQL 5, MSSQL 2005 / 2008.\
        ❖ Web Servers: Apache Tomcat, JBoss Server 5.\
        ❖ Portals: Jboss Portal, Liferay Portal.\
        ❖ Configuration Management Tools: Git, TortoiseSVN, CVS.\
        ❖ Tracking Tools: JIRA, Eventum.\
        ❖ Development Tools: Eclipse.\
        ❖ PHP CMS: Wordpress, Joomla (1.5, 1.7), Drupal (6), Sugar CRM, Moodle.\
    </p>"
  },
  {
    code: 'Chopper',
    name: 'Tony Nguyen',
    role: 'Website Doctor',
    avatar: teamChopper,
    profileUrl: 'https://www.linkedin.com/in/tonytinnguyen/',
    profile: "Across the last 10 years, I have developed/designed a wide range of websites, blogs with particular expertise in creating custom WordPress, PHP, and NodeJS, ReactJS sites. Solid experience in Javascript, NodeJS, ReactJS, CSS3, HTML5, PHP, MySQL, and adhering to accessibility standards. \r\nCustomer-relationship skills: producing clear, detailed project outlines and progress reports, timeline. Adjusting technical explanations to the client's knowledge level. Handle various campaign and project for leading Singapore brand BreadTalk (and it sub-brands The Icing Room, Din Tai Fung, The Icing Room, Ramen Play, ToastBox and Food Republic), international brand CooperVision (Asia Pacific Area), LeadToWin, Ezland, Phuc Khang, Vinawealth (Vinacapital).",
  },
  {
    code: 'Luffy',
    name: 'Nhan Doan',
    role: 'Gum Gum Developer',
    avatar: teamLuffy,
    profileUrl: '',
    profile: "<p><strong>I.SUMMARY</strong></p>\
    <p>I am a PHP developer specializing in creating and modifying professional websites with 5+ years of experience. I will do any type of php job for you. And also I have experience with YII, Phalcon, CI and Laravel framework.</p>\
    <p>• Knowledge of functional, reliability and performance testing.\
        • Experience of working in pressured environment to strict deadlines.\
        • Able to test multiple projects at the same time.\
        • Ability to learn new software quickly.\
        • A thorough understanding of the software development process.\
        • Comprehensive understanding of computer programming languages: C# , PHP , JavaScript , CSS3 , SASS,DOM, HTML,HTML5,Adobe Photoshop\
        • Extensive knowledge of the full software testing life-cycle.\
    • Good understanding of: Linux, Apache, UNIX, SQL, LANs, WANs.</p>\
    <p><strong>II.PROFESSIONAL EXPERIENCE</strong></p>\
    <p>April 2010 - 2012\
        ClearPath Development Danang - Web Developer<br>\
        • Applied advanced HTML, JavaScript, and CSS to deliver cutting-edge user interfaces and components.\
        • Contributed user interface design mockups and designs.\
        • Trained and mentored teammates.\
    • Worked with product groups to develop and enhance usability.</p>",
  },
  {
    code: 'Sabo',
    name: 'Duy Nguyen',
    role: 'Revolutionary Developer',
    avatar: teamSabo,
    profileUrl: '',
    profile: "<p><strong>I.SUMMARY</strong></p>\
    <p>• More than 6 years strongly experienced in web development. </p>\
    <p>• Creative, ability to work in a team or alone. Able handle project from small to large with many developers </p>\
    <p>• Research and apply new technologies quickly. Always update new technologies, quickly adapt and apply to project. </p>\
    <p>• Experience with design pattern. </p>\
    <p>• Analyst system requirements and help team to archive them Good English in working and communication. </p>\
    <p>• Building high scale and high performance web application by using newest trends/technologies. </p>\
    <p>• Have deeply experienced in e-commerce, with NoSQL and searching system.</p>\
    <p><strong>II.KEY EXPERTISES</strong></p>\
    <p>• PHP, framework: Yii2, Laravel, Symfony </p>\
    <p>• Java, Python, NodeJS, Ruby On Rails, Golang (Beego Framework) </p>\
    <p>• ElasticSearch </p>\
    <p>• Mongodb, Couchbase, Neo4J, Redis, Memcache </p>\
    <p>• AngularJS, ReactJS Unit Test, Automation Test (Cucumber) </p>\
    <p>• Full-Stack Developer </p>\
    <p>• Able to handle from small to medium team</p>",
  },
  {
    code: 'Sunny',
    name: 'Phat Nguyen',
    role: 'Supernova Coder',
    avatar: teamSunny,
    profileUrl: '',
    profile:"<p><strong>I.SUMMARY</strong></p>\
    <p>A senior web developer engineer.</p>\
    <ul>\
        <li>PHP backend.</li>\
        <li>Framework: Drupal, CI, Wordpress, Yii2</li>\
    </ul>\
    <p><strong>II.PROFESSIONAL EXPERIENCE</strong></p>\
    <ul>\
        <li>DEK Technology (May 2012 – Present)</li>\
    </ul>\
    <p><strong>Project 1 (10/2014–8/2015)</strong></p>\
    <p>Responsibilities:\
        • Develop backend feature for user can manage content.\
        • Build a small social network use internal for company.\
        Technologies:\
        • PHP</p>\
    <p><strong>Apps &amp; tools applied:</strong>\
        • Wordpress, CI</p>\
    <ul>\
        <li>PhucKhang.com.vn (10/2014–8/2015)</li>\
    </ul>\
    <p>Responsibilities:\
        • Develop backend feature for user can manage content.</p>\
    <p>• Build a small social network use internal for company.</p>\
    <p>Technologies:\
        • PHP</p>\
    <p><strong>Apps &amp; tools applied:</strong></p>\
    <p>• Wordpress, CI</p>\
    <p><strong>Leadtowin.ca (9/2015 – 4/2016)</strong></p>\
    <p>Responsibilities:\
        • Change old flow for founder.\
        • Update page User Interface.\
        • Build some new feature for founder and reviewer.</p>\
    <p>Technologies:\
        • PHP</p>\
    <p>Apps &amp; tools applied:\
        • Drupal 7</p>",
  },
  {
    code: 'Monkey D Dragon',
    name: 'Tuan Nguyen',
    role: 'Revolution Server Expert',
    avatar: teamDragon,
    profileUrl: '',
    profile: "<p><strong>I.SUMMARY</strong></p>\
    <p>• Work well under pressure and in hard condition/ adverse weather, remote areas.</p>\
    <p>• Strong research and writing ability.</p>\
    <p>• Excellent computer skills.</p>\
    <p>• Speak confidently before the public.</p>\
    <p>• High teamwork skills.</p>\
    <p>• Strong presentation and facilitation skills, including an ability to build relationships and capacity with international and local partners.</p>\
    <p>• Cooperate constructively with supervisors; reliable and responsible; work hard and complete projects on schedule.</p>\
    <p>• Have experience working with ISO27001 standard, ISMS </p>\
    <p><strong>II.KEY EXPERTISES</strong></p>\
    <p>• Knowledgeable in Operating systems: Windows, Linux, Mac OSX </p>\
    <p>• Experience in internet: VPN, cloud server,</p>\
    <p>• Implement of Sysadmin project: Deploy Webserver, MySQL, Nginx, Apache, write bash script,…</p>\
    <p>• Networking systems configuration, handle troubleshoot</p>\
    <p>• Support helpdesk</p>\
    <p><strong>III.PROFESSIONAL EXPERIENCE</strong></p>\
    <p>(July 2012 – Present) Global CyberSoft ( Viet Nam) JSC</p>",
  },
  {
    code: 'Nami',
    name: 'Vi Ha',
    role: 'Revolution Developer',
    avatar: teamNami,
    profileUrl: '',
    profile: "<p><strong>I. SUMMARY</strong></p>\
    <p>From 2010 to 2013, I studied in Nguyen Duy Hieu high school and now, I’m a junior at Duy Tan university. My major is software engineering. I chose it is my passion and I wish I would be a talented developer.</p>\
    <p>❖ Highlight skill or strong point 1: Communication</p>\
    <p>❖ Highlight skill or strong point 2:</p>",
  },
  {
    code: 'Smoke',
    name: 'Huy Quan',
    role: 'Marine Developer',
    avatar: teamSmoker,
    profileUrl: '',
    profile: '',
  },
  {
    code: 'Kizaru',
    name: 'Bach Bach',
    role: 'Marine Developer',
    avatar: teamKizaru,
    profileUrl: '',
    profile: '',
  },
];
