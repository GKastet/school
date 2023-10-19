import PropTypes from "prop-types";
import { BtnPrevIconS, BtnPrevS } from "./BtnPrevStyled";

const BtnPrev = ({ imageId, setImageId }) => {

  const handlePrevImage = () => {
    if (imageId === 1){
        alert("It is first image")
        return
    } 
    setImageId(imageId - 1);
  };

  return (
    <>
      <BtnPrevS type="button" onClick={handlePrevImage}>
        <BtnPrevIconS/>
      </BtnPrevS>
    </>
  );
};

BtnPrev.propTypes = {
  imageId: PropTypes.number.isRequired,
  setImageId: PropTypes.func.isRequired,
};

export default BtnPrev;
