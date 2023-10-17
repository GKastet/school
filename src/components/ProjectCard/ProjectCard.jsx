import PropTypes from "prop-types";
import {
  CardWrapper,
  ImgThumb,
  ProjectText,
  TextThumb,
} from "./ProjectCardStyled";
import AllProjectsImgs from "../AllProjects/AllProjectsImgs";


const ProjectCard = ({ project }) => {
  const { projectName } = project;

  return (
    <CardWrapper>
      <ImgThumb>
        <AllProjectsImgs data={project} />
      </ImgThumb>
      <TextThumb>
        <h3 style={{ textAlign: "center", color: "blue" }}>{projectName}</h3>
        <ProjectText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque
          excepturi maiores nemo eum consequuntur sunt. Temporibus, vel rerum,
          molestiae, in laborum minus expedita rem excepturi hic exercitationem
          ipsam labore?
        </ProjectText>
      </TextThumb>
    </CardWrapper>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
