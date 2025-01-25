import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import snake_game from "../assets/img/project/snake_game.png";
import platform_shooter from "../assets/img/project/platform_shooter.png";
import game_of_life from "../assets/img/project/game_of_life.png";
import budget_buddy from "../assets/img/project/budget_buddy.png";
import reversi from "../assets/img/project/reversi.png";
import resume_screener from "../assets/img/project/resume_screener.png";
import smart_safty_helmet from "../assets/img/project/smart_safty_helmet.png";
import stock_manage from "../assets/img/project/stock_manage.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "A Platform Shooter Game",
      description: "A fun to Play Platform shooter game along with a level editor for the game",
      imgUrl: platform_shooter,
    },
    {
      title: "Budget Buddy",
      description: "A Group Expenses Management Website",
      imgUrl: budget_buddy,
    },
    {
      title: "Conway's Game of Life",
      description: "A recreation of THe Conway's game of life for Personal Enjoyment",
      imgUrl: game_of_life,
    },
    {
      title: "Smart Safety Helmet Wesbite",
      description: "A Website display the use of Our Smart Helmet for Miner Saftey",
      imgUrl: smart_safty_helmet,
    },
    {
      title: "Reversi AI Game",
      description: "A fun Board Game to play when Bored",
      imgUrl: reversi,
    },
    {
      title: "Snake AI Game",
      description: "A fun Game to play as well to showcase AI reinforced learning",
      imgUrl: snake_game,
    },
    {
      title: "Resume Screener Website",
      description: "Website to evaluate resume against key criteria for hiring managers",
      imgUrl: resume_screener,
    },
    {
      title: "Inventory Management System",
      description: "Website for workers to fully take control over there inventory system",
      imgUrl: stock_manage,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've worked on, showcasing my skills and creativity. Explore the work I've done to solve real-world challenges and bring ideas to life. Feel free to take a look and let me know what you think!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}  
