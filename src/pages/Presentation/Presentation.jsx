import { useLocation } from "react-router-dom";
import { PageWrapper, TitleS } from "../../CSS/GeneralCSS";
import Video from "../../images/presentation_Merkur.mp4";
import { VideoThumb, VideoWrapper } from "./PresentationStyled";
import { useRef } from "react";
import BtnBack from "../../components/Buttons/BtnBack/BtnBack";

const Presentation = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  return (
    <PageWrapper>
      <BtnBack location={backLinkRef} />
      <TitleS>Presentation</TitleS>
      <VideoWrapper>
        <VideoThumb>
          <video width="100%" height="100%" controls style={{display: "block"}}>
            <source src={Video} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </VideoThumb>
      </VideoWrapper>
    </PageWrapper>
  );
};

export default Presentation;
