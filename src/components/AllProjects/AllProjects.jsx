import { TitleS } from "../../CSS/GeneralCSS";
// import { getApiCarsCatalog } from "../../api/api";
import ProjectCard from "../ProjectCard/ProjectCard";

import AllProjectsInfo from "./allProjects.json";
import Video from "../../images/VID.mp4"
const AllProjects = () => {
  // getApiCarsCatalog()
  return (
    <div>
      <TitleS>Naše Projekty</TitleS>
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {AllProjectsInfo?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </ul>
      <div>
        <h1>Видео Проигрыватель</h1>
        <video width="640" height="360" controls>
          {/* Укажите URL-адрес вашего видеофайла в атрибуте src */}
          <source src={Video} type="video/mp4" />
          {/* Дополнительные исходные данные для других форматов видео (например, WebM или Ogg) */}
          {/* <source src="/path/to/your/video.webm" type="video/webm" /> */}
          {/* <source src="/path/to/your/video.ogv" type="video/ogg" /> */}
          Ваш браузер не поддерживает видео.
        </video>
      </div>
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
    </div>
  );
};

export default AllProjects;
