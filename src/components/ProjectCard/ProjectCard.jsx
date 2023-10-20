import PropTypes from "prop-types";
import {
  CardOverlay,
  CardWrapper,
  ImgOverlay,
  ImgThumb,
  ProjectText,
  TextThumb,
} from "./ProjectCardStyled";
import AllProjectsImgs from "../AllProjects/AllProjectsImgs";


const ProjectCard = ({ project }) => {
  const { projectName } = project;

  return (
    <>
    <CardWrapper>
      <ImgOverlay>
      <ImgThumb>
        <AllProjectsImgs data={project} />
      </ImgThumb>
      <CardOverlay className="card-overlay" to="/gallery">navštíviť galériu</CardOverlay>
      </ImgOverlay>
      <TextThumb>
        <h3 style={{ fontSize: '28px', textAlign: "center", color: 'white' }}>{projectName}</h3>
        <ProjectText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque
          excepturi maiores nemo eum consequuntur sunt.
        </ProjectText>
      </TextThumb>
      
    </CardWrapper>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
