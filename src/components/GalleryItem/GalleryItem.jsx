import PropTypes from "prop-types";
import { GalleryItemLi, ImgThumb } from "./GalleryItemStyled";
import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";

const GalleryItem = ({ index, data, onOpenModal }) => {
  // console.log("index", index);
  // const handleSetImgIdx = () =>{
  //   console.log(index);
  //   onOpenModal(index+1)

  // }
  return (
    <GalleryItemLi>
      <ImgThumb
      //  onClick={handleSetImgIdx}
       >
        <GalleryImgsFunc data={data} index={index+1}
         onOpenModal={onOpenModal}
         />        
      </ImgThumb>
    </GalleryItemLi>
  );
};

GalleryItem.propTypes = {
  index: PropTypes.number,
  data: PropTypes.shape({    
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,  
  onOpenModal: PropTypes.func.isRequired,  
};

export default GalleryItem;

