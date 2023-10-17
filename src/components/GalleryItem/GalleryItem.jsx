import PropTypes from "prop-types";
import { GalleryItemLi, ImgStyled, ImgThumb } from "./GalleryItemStyled";
 import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";

const GalleryItem = ({ data }) => {
  console.log(data);
  const { imgSrc, imgAlt } = data;
  return (
    <GalleryItemLi>
      <ImgThumb>
        {/* <img src={imgSrc} alt={imgAlt} width={300} /> */}
        {/* <ImgStyled
          src={imgSrc}
          alt={imgAlt}
        //   onClick={() => {
        //     onOpenModal({ id, tags, largeImageURL });
        //   }}
        /> */}
      <GalleryImgsFunc data={data}/>      
      </ImgThumb>
    </GalleryItemLi>
  );
};

GalleryItem.propTypes = {
  data: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryItem;
