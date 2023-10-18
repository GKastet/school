import PropTypes from "prop-types";
import { GalleryItemLi, ImgThumb } from "./GalleryItemStyled";
import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";

const GalleryItem = ({ data, index, onOpenModal }) => {
  // console.log(data);
  return (
    <GalleryItemLi>
      <ImgThumb>
        <GalleryImgsFunc data={data} onOpenModal={onOpenModal}/>
      </ImgThumb>
    </GalleryItemLi>
  );
};

GalleryItem.propTypes = {
  data: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default GalleryItem;

