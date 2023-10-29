import PropTypes from "prop-types";
import { GalleryItemLi, ImgStyled, ImgThumb } from "./GalleryItemStyled";

const GalleryItem = ({ index, data, onOpenModal }) => {
  const { imgSrc, imgAlt } = data;

  return (
    <GalleryItemLi>
      <ImgThumb
        onClick={() => {
          onOpenModal({ idx: index });
        }}
      >
        <ImgStyled src={imgSrc} alt={imgAlt} type="image/webp" loading="lazy" />
      </ImgThumb>
    </GalleryItemLi>
  );
};

GalleryItem.propTypes = {
  index: PropTypes.number,
  data: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default GalleryItem;
