import PropTypes from "prop-types";
import {
  CardOverlay,
  CardWrapper,
  ImgOverlay,
  ImgThumb,
  ProjectImg,
  ProjectText,
  TextThumb,
} from "./ProjectCardStyled";

const ProjectCard = ({ project }) => {
  const { imgSrc, imgAlt, projectName, projectDescription } = project;
  const descriptionWithLineBreaks = projectDescription.replace(/\n/g, "<br>");

  return (
    <>
      <CardWrapper>
        <ImgOverlay>
          <ImgThumb>
            <ProjectImg
              src={imgSrc}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
            />
          </ImgThumb>
          <CardOverlay className="card-overlay" to="/gallery">
            Navštíviť galériu
          </CardOverlay>
        </ImgOverlay>
        <TextThumb>
          <h3 style={{ fontSize: "28px", textAlign: "center", color: "white" }}>
            {projectName}
          </h3>
          <ProjectText
            dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }}
          />          
        </TextThumb>
      </CardWrapper>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
