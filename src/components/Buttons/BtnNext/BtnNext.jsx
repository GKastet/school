import PropTypes from "prop-types";
import { BtnNextIconS, BtnNextS } from "./BtnNextStyled";

const BtnNext = ({ imageIdx, setImageIdx }) => {  

    const handleNextImage = () => {        
        setImageIdx(imageIdx+1)
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
  imageIdx: PropTypes.number.isRequired,
  setImageIdx: PropTypes.func.isRequired,
};

export default BtnNext;
