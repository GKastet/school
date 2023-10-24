import PropTypes from "prop-types";
import { ImgTagS } from "./GalleryImgsFuncStyled";

import Img2 from "../../images/64WebP.webp";
import FotoProject1 from "../../images/1_Merkur_title_horiz_WebP.webp";

import FotoProject2 from "../../images/2_SolarHydraulic_title_horiz_WebP.webp";
import FotoProject21 from "../../images/2_21_webP.webp";
import FotoProject22 from "../../images/2_22_webP.webp";

import FotoProject3 from "../../images/3_FuelCellCar_title-horiz_WebP.webp";
import FotoProject31 from "../../images/3_31_WebP.webp";
import FotoProject32 from "../../images/3_32_WebP.webp";

import FotoProject4 from "../../images/4_MarsRunner_title-horiz_WebP.webp";
import FotoProject41 from "../../images/4_41_webP.webp";

import FotoProject5 from "../../images/5_EiTech_title_horiz_WebP.webp";
import FotoProject6 from "../../images/6_BoffinIIGames_title_horiz_WebP.webp";
import FotoProject7 from "../../images/7_BoffinIIGames_title_horiz_WebP.webp";
import FotoProject8 from "../../images/8_BoffinI500_title_horiz_WebP.webp";
import FotoProject9 from "../../images/9_BoffinIIMotion_title_horiz_WebP.webp";
import FotoProject10 from "../../images/10_BoffinIIMyHome_title_horiz_WebP.webp";
import FotoProject11 from "../../images/11_ProBot_title_horiz_WebP.webp";
import FotoProject12 from "../../images/12_DobotMagician_title_horiz_WebP.webp";
import FotoProject13 from "../../images/13_MechanikaAutomobilu_title_horiz_WebP.webp";
import FotoProject14 from "../../images/14_FicherTechnik_title_horiz_WebP.webp";

const GalleryImgsFunc = ({ data, isOpen = false, onOpenModal }) => {
  // console.log('dataFunc: ', data);
  // console.log("galleryFunc", isOpen);
  const { idx, imgAlt } = data;
  // console.log("idx", idx);

  // switch (id || idx) {
  switch (idx) {
    case "1":
      return (
        <>
          <ImgTagS
            src={`${FotoProject1}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "2":
      return (
        <>
          <ImgTagS
            src={`${FotoProject2}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "3":
      return (
        <>
          <ImgTagS
            src={`${FotoProject21}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "4":
      return (
        <>
          <ImgTagS
            src={`${FotoProject22}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "5":
      return (
        <>
          <ImgTagS
            src={`${FotoProject3}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "6":
      return (
        <>
          <ImgTagS
            src={`${FotoProject31}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "7":
      return (
        <>
          <ImgTagS
            src={`${FotoProject32}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "8":
      return (
        <>
          <ImgTagS
            src={`${FotoProject4}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );
    case "9":
      return (
        <>
          <ImgTagS
            src={`${FotoProject41}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx });
            }}
          />
        </>
      );

    default:
      return "LOGO not found";
  }
};

GalleryImgsFunc.propTypes = {
  data: PropTypes.shape({
    idx: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool,
  onOpenModal: PropTypes.func,
};

export default GalleryImgsFunc;
