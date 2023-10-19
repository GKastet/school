import PropTypes from "prop-types";
import { BtnNextIconS, BtnNextS } from "./BtnNextStyled";

const BtnNext = ({ imageId, setImageId }) => {

    const handleNextImage = () => {
        if (imageId === 4) {
          alert("You achieved the last image");
          return;
        }
        setImageId(imageId + 1);
      };

  return (
    <>
      <BtnNextS type="button" onClick={handleNextImage}>
        <BtnNextIconS/>
      </BtnNextS>
    </>
  );
};

BtnNext.propTypes = {
  imageId: PropTypes.number.isRequired,
  setImageId: PropTypes.func.isRequired,
};

export default BtnNext;
