import PropTypes from "prop-types";
import { BtnCloseIconS, BtnCloseS } from "./BtnCloseStyled";

const BtnClose = ({ onCloseModal }) => {

  const handleBtnClose = () => {
    document.body.classList.remove('no-scroll');    
    onCloseModal();
  };

  return (
    <>
      <BtnCloseS type="button" onClick={handleBtnClose}>        
        <BtnCloseIconS/>
      </BtnCloseS>
    </>
  );
};
BtnClose.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
export default BtnClose;
