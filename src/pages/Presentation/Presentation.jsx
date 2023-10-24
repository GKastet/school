import { PageWrapper, TitleS } from "../../CSS/GeneralCSS";
import Video from "../../images/presentation_Merkur.mp4";
import { VideoThumb, VideoWrapper } from "./PresentationStyled";

const Presentation = () => {
  return (
    <PageWrapper>
      <TitleS>Presentation</TitleS>
      <VideoWrapper>
      <VideoThumb>
        <video width="100%" height="100%" controls>
          <source src={Video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </VideoThumb>
      </VideoWrapper>
    </PageWrapper>
  );
};

export default Presentation;
