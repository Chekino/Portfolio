import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import bookcat from "../assets/img/bookcat.png";

const Projects = () => {
  const projects = [
    {
      bgimg: project1,
      title: "Ivory-Foods",
      paragraphe: "E-commerce",
      description: "Bootstrap,JavaScript, React JS",
      url: "https://ivory-food.vercel.app/",
    },
    {
      bgimg: project2,
      title: "Dicat Todo",
      paragraphe: "To-do list",
      description: "Bootstrap,JavaScript, React JS",
      url: "https://dicat-todolist.vercel.app/",
    },
    {
      bgimg: bookcat,
      title: "BookCat",
      paragraphe: "E-book application web",
      description:
        "Tailwinds, JavaScript, React JS, Node Js, Express JS,MongoDB, Mongoose",
      url: "https://bookcat.vercel.app/",
    },

    // Ajoutez d'autres projets ici
  ];
  return (
    <section className="project-section" id="projects">
      <Container>
        <Row>
          <Col>
            <h2
              className="pb-5 section-title"
              style={{ fontSize: "45px", fontWeight: "700" }}
            >
              Mes Projets
            </h2>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col key={index} md={6} lg={4} className="text-center">
                <ProjectCard {...project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
