import PropTypes from "prop-types";
import { GalleryItemLi, ImgThumb } from "./GalleryItemStyled";
import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";

const GalleryItem = ({ data, onOpenModal }) => {
  // console.log("idx", idx);
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
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,  
  onOpenModal: PropTypes.func.isRequired,  
};

export default GalleryItem;

