import { TitleS } from "../../CSS/GeneralCSS";
import ProjectCard from "../ProjectCard/ProjectCard";
import { allImgsArr } from "./allImgsInfo";

const AllProjects = () => {
  const allImgTitles = allImgsArr.filter((image) => image.title === true);

  return (
    <div>
      <TitleS>Naše Projekty</TitleS>
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {allImgTitles?.map((image) => (
          <ProjectCard key={image.id} project={image} />
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
