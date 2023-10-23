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
// import allprojectsInfo from "../AllProjects/allProjectsInfo"


const ProjectCard = ({ project }) => {  
  // console.log(project.projectDescription);
  const { projectName, projectDescription } = project
  const descriptionWithLineBreaks = projectDescription.replace(/\n/g, "<br>");

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
        <ProjectText dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }} />
        
          {/* {descriptionWithLineBreaks}           */}
        {/* </ProjectText> */}
      </TextThumb>
      
    </CardWrapper>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
