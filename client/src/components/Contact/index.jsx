import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Showcard from './Showcard';

export default function index() {
  return (

    // helpful CSS links: https://react-bootstrap.github.io/components/carousel/ and https://www.bing.com/videos/search?q=react+bootstrap+4+carousel&&view=detail&mid=4BD6AFF2E7BAF7D71F034BD6AFF2E7BAF7D71F03&rvsmid=51B7383175620746E60751B7383175620746E607&FORM=VDQVAP

    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h2>About Contributors</h2>
            <p>Four Full Stack Bootcamp Coding classmates from The University of Texas at Austin teamed up to design, develop, and deliver this application for fellow bootcamp coding students.</p>
            <br />
            <p>CodeCave allows fellow Coding Bootcamp students and graduates to exchange ideas, look for jobs, post coding events, and more.</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <Showcard
                img="https://media-exp1.licdn.com/dms/image/C5603AQF66Vatejd1UQ/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=IpnJYP5j-dZaB-H6tOpOpPqbdrnjHg8fPTWnHYgOi9c"
                title="Conner McBride"
                text="United States Army Veteran and Full Stack Web Developer who has a passion for learning new technology both hardware and software."
                linkedin="https://linkedin.com/in/conner-mcbride-0a50a7a2/"
                github="https://github.com/CGMcBride"
              />
              <Showcard
                img="https://media-exp1.licdn.com/dms/image/C4D03AQEtoeeMkPW17g/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=V3AEH5yeSpQfMC7wXGXRb03Fi9QNntuVTu1o2odju0s"
                title="Diane Candler"
                text="Experienced Product Manager with marketing background and driven Full Stack Developer seeking opportunity with a progressive company."
                linkedin="https://linkedin.com/in/diane-candler-centraltexas"
                github="https://dianecandler.github.io/"
              />
              <Showcard
                img="https://media-exp1.licdn.com/dms/image/C5603AQHb4qtaknhZFg/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=u37taIBNZmJMSY1y-HsJmfeLXcYfeaHEZawpuh2WFfg"
                title="ChangYeon Daniel Hong"
                text="An enthusiastic Full Stack Web Developer seeking a position in an innovative company that desires commitment."
                linkedin="https://www.linkedin.com/in/changyeon-hong-21470a167/"
                github="https://chong0810.github.io/"
              />
              <Showcard
                img="https://media-exp1.licdn.com/dms/image/C4E03AQFtVcNRUE3cRw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=BFKG3LxLixVnJMcTe1OzQtK_Akx3wIlfZpE_ttL9p-Q"
                title="Joshua Martinez"
                text="Full Stack Developer with a passion for acquiring knowledge, Foodie, Brewer."
                linkedin="https://linkedin.com/in/joshuadmartinez/"
                github="https://github.com/JDMartinez1531"
              />
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="text-center pb-4 text-left">Sharing insight into the CodeCave development process</h3>

            <h6>These University of Texas at Austin Full Stack Bootcamp Coding students designed CodeCave using - React.js, React Bootstrap, Sequelize, Node and Express server, Axios, bcript, JSON Web Token, MySQL database with Sequelize ORM, and deployed with <a href="https://codecave.herokuapp.com/" target="_blank" rel="noopener noreferrer"><strong>Heroku</strong></a>.</h6>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="holder.js/800x400?text=First slide&bg=373940"
                  src="./images/ProfilePageDiagram.png"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="holder.js/800x400?text=Second slide&bg=282c34"
                  src="./images/ProfilePageDiagram.png"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>This is the second slide.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/code-cave-erd.png"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
      </div>

    </div>


  )
}
