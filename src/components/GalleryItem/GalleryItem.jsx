import PropTypes from "prop-types";
import { GalleryItemLi, ImgThumb } from "./GalleryItemStyled";
import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";

const GalleryItem = ({ data, onOpenModal }) => {
  // console.log(isOpen);
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
  // isOpen: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default GalleryItem;

