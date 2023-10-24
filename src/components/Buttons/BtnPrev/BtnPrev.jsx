import PropTypes from "prop-types";
import { BtnPrevIconS, BtnPrevS } from "./BtnPrevStyled";

const BtnPrev = ({ imageIdx, setImageIdx }) => {

  const handlePrevImage = () => {    
    setImageIdx(imageIdx - 1);
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
  imageIdx: PropTypes.number.isRequired,
  setImageIdx: PropTypes.func.isRequired,
};

export default BtnPrev;
