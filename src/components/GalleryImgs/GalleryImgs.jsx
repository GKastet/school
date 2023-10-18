import { TitleS } from "../../CSS/GeneralCSS";
import GalleryItem from "../GalleryItem/GalleryItem";
import ImgList from "./galleryImgsList.json";

const GalleryImgs = () => {
  return (
    <>
      <TitleS>Galéria</TitleS>
      <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}>
        {ImgList?.map((image) => (
          <GalleryItem key={image.id} data={image} />
        ))}
      </ul>
      <img src="/images/64WebP.webp"/>
    </>
  );
};

export default GalleryImgs;
