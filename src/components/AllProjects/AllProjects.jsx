import { TitleS } from "../../CSS/GeneralCSS";
import ProjectCard from "../ProjectCard/ProjectCard";

import AllProjectsInfo from "./allProjects.json"

const AllProjects = () => {
    
  return (
    <div>
      <TitleS>Naše Projekty</TitleS>
      <ul style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        {
          AllProjectsInfo?.map((project)=>(            
            <ProjectCard key={project?.id} project={project}/>
          ))
        }
      </ul>
      
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        1
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        2
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        3
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        4
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        5
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        6
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        7
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        8
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        9
      </div>
      <div
        style={{ outline: "1px solid green", width: "200px", height: "200px" }}
      >
        10
      </div>
      {/* <BtnUp/> */}
    </div>
  );
};

export default AllProjects;
