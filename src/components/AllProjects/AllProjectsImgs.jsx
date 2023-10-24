import PropTypes from "prop-types";
import FotoProject1 from "../../images/2_SolarHydraulic_title_horiz_webP.webp";
import FotoProject2 from "../../images/2_SolarHydraulic_title_horiz_webP.webp";
import FotoProject3 from "../../images/3_FuelCellCar_title-horiz_webP.webp";
import FotoProject4 from "../../images/4_MarsRunner_title-horiz_webP.webp";
import FotoProject5 from "../../images/5_EiTech_title_horiz_webP.webp";
import FotoProject6 from "../../images/6_BoffinIIGames_title_horiz_webP.webp";
import FotoProject7 from "../../images/7_BoffinIIGames_title_horiz_webP.webp";
import FotoProject8 from "../../images/8_BoffinI500_title_horiz_webP.webp";
import FotoProject9 from "../../images/9_BoffinIIMotion_title_horiz_webP.webp";
import FotoProject10 from "../../images/10_BoffinIIMyHome_title_horiz_webP.webp";
import FotoProject11 from "../../images/11_ProBot_title_horiz_webP.webp";
import FotoProject12 from "../../images/12_DobotMagician_title_horiz_webP.webp";
import FotoProject13 from "../../images/13_MechanikaAutomobilu_title_horiz_webP.webp";
import FotoProject14 from "../../images/14_FicherTechnik_title_horiz_webP.webp";
// import FotoProject15 from "../../images/15_Seva-title_vertical.jpg"
import FotoProject15 from "../../images/seva.jpg";

const AllProjectsImgs = ({ data }) => {
  const { id, imgAlt } = data;

  switch (id) {
    case "1":
      return (
        <img
          src={`${FotoProject1}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "2":
      return (
        <img
          src={`${FotoProject2}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "3":
      return (
        <img
          src={`${FotoProject3}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "4":
      return (
        <img
          src={`${FotoProject4}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "5":
      return (
        <img
          src={`${FotoProject5}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "6":
      return (
        <img
          src={`${FotoProject6}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "7":
      return (
        <img
          src={`${FotoProject7}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "8":
      return (
        <img
          src={`${FotoProject8}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "9":
      return (
        <img
          src={`${FotoProject9}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "10":
      return (
        <img
          src={`${FotoProject10}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "11":
      return (
        <img
          src={`${FotoProject11}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "12":
      return (
        <img
          src={`${FotoProject12}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "13":
      return (
        <img
          src={`${FotoProject13}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "14":
      return (
        <img
          src={`${FotoProject14}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "15":
      return (
        <img
          src={`${FotoProject15}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );

    default:
      return "LOGO not found";
  }
};

const imgStyle = {
  width: "100%",
  // maxWidth: "100%",
  height: "100%",
  // objectFit: "contain",
  objectFit: "cover",
  // objectFit: "fill",
  // display: "block",
};

AllProjectsImgs.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllProjectsImgs;
