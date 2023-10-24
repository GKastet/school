import PropTypes from "prop-types";
import { BackText, BtnBoxLink, IconBox, TiArrowBackOutlineS } from "./BtnBackStyled";

const BtnBack = ({location}) => {  
  return (
    <>     
      <BtnBoxLink to={location.current?? '/'}>
        <IconBox>
          <TiArrowBackOutlineS />
        </IconBox>
        <BackText>Späť</BackText>
      </BtnBoxLink>
    </>
  );
};
BtnBack.propTypes = {
  location: PropTypes.object.isRequired,
};
export default BtnBack;
