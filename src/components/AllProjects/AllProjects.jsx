import { TitleS } from "../../CSS/GeneralCSS";
// import { getApiCarsCatalog } from "../../api/api";
import ProjectCard from "../ProjectCard/ProjectCard";

// import AllProjectsInfo from "./allProjects.json";
import {allImgsArr} from "./allImgsInfo"


const AllProjects = () => {
  // getApiCarsCatalog()
  const allImgTitles = allImgsArr.filter(image=> image.title === true)
  console.log(allImgsArr.length);
  console.log(allImgTitles.length);
  return (
    // <div>
    //   <TitleS>Naše Projekty</TitleS>
    //     {/* {setTimeout(<p>ok</p>, 2000)} */}
    //   <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    //     {AllProjectsInfo?.map((project) => (
    //       <ProjectCard key={project?.id} project={project} />
    //     ))}
    //   </ul>
    // </div>
    <div>
      <TitleS>Naše Projekty</TitleS>
        {/* {setTimeout(<p>ok</p>, 2000)} */}
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {allImgTitles?.map((image) => (
          <ProjectCard key={image?.id} project={image} />
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
