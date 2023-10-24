import { TitleS } from "../../CSS/GeneralCSS";
// import { getApiCarsCatalog } from "../../api/api";
import ProjectCard from "../ProjectCard/ProjectCard";

import AllProjectsInfo from "./allProjects.json";
// import allprojectsInfo from "../AllProjects/allProjectsInfo"


const AllProjects = () => {
  // getApiCarsCatalog()
  return (
    <div>
      <TitleS>Naše Projekty</TitleS>
        {/* {setTimeout(<p>ok</p>, 2000)} */}
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {AllProjectsInfo?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
