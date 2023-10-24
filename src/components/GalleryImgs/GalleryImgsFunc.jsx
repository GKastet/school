import PropTypes from "prop-types";
import { ImgTagS } from "./GalleryImgsFuncStyled";

import FotoProject1 from "../../images/1_Merkur_title_horiz_WebP.webp"; //1

import FotoProject2 from "../../images/2_SolarHydraulic_title_horiz_WebP.webp"; //2
import FotoProject21 from "../../images/2_21_WebP.webp"; //3
import FotoProject22 from "../../images/2_22_WebP.webp"; //4

import FotoProject3 from "../../images/3_FuelCellCar_title-horiz_WebP.webp"; //5
import FotoProject31 from "../../images/3_31_WebP.webp"; //6
import FotoProject32 from "../../images/3_32_WebP.webp"; //7

import FotoProject4 from "../../images/4_MarsRunner_title-horiz_WebP.webp"; //8
import FotoProject41 from "../../images/4_41_WebP.webp"; //9

import FotoProject5 from "../../images/5_EiTech_title_horiz_WebP.webp"; //10
import FotoProject51 from "../../images/5_51_WebP.webp"; //11
import FotoProject52 from "../../images/5_52_WebP.webp"; //12

import FotoProject6 from "../../images/6_BoffinIIGames_title_horiz_WebP.webp"; //13, 14
import FotoProject7 from "../../images/7_BoffinIIGames_title_horiz_WebP.webp"; //15, 16
import FotoProject8 from "../../images/8_BoffinI500_title_horiz_WebP.webp"; //17, 18
import FotoProject9 from "../../images/9_BoffinIIMotion_title_horiz_WebP.webp"; //19, 20

import FotoProject10 from "../../images/10_BoffinIIMyHome_title_horiz_WebP.webp"; //21
import FotoProject101 from "../../images/10_101_WebP.webp"; //22

import FotoProject11 from "../../images/11_ProBot_title_horiz_WebP.webp"; //22,23
import FotoProject12 from "../../images/12_DobotMagician_title_horiz_WebP.webp"; //24,25
import FotoProject13 from "../../images/13_MechanikaAutomobilu_title_horiz_WebP.webp"; //26,27
import FotoProject14 from "../../images/14_FicherTechnik_title_horiz_WebP.webp"; //28
import FotoProject141 from "../../images/14_141_WebP.webp"; //29

const GalleryImgsFunc = ({ index, data, isOpen = false, onOpenModal }) => {
  // console.log('dataFunc: ', index);
  // console.log("galleryFunc", isOpen);
  const { imgAlt } = data;
  // console.log("idx", idx);

  const indexCase = index.toString()


  switch (indexCase) {
  // switch (idx) {
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
              onOpenModal({ idx: indexCase });
              // onOpenModal({ index });
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
              onOpenModal({ idx: indexCase });
              // onOpenModal({ index });
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
              onOpenModal({ idx: indexCase });
              // onOpenModal({ index });
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
              onOpenModal({ idx: indexCase });
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
              onOpenModal({ idx: indexCase });
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
              onOpenModal({ idx: indexCase });
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
              onOpenModal({ idx: indexCase });
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
              onOpenModal({ idx: indexCase });
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
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );
    case "10":
      return (
        <>
          <ImgTagS
            src={`${FotoProject5}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );
    case "11":
      return (
        <>
          <ImgTagS
            src={`${FotoProject51}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"            
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
              // onOpenModal({ index });
            }}
          />
        </>
      );
      case "12":
      return (
        <>
          <ImgTagS
            src={`${FotoProject52}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );




    case "21":
      return (
        <>
          <ImgTagS
            src={`${FotoProject10}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );
    case "22":
      return (
        <>
          <ImgTagS
            src={`${FotoProject101}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );





    case "28":
      return (
        <>
          <ImgTagS
            src={`${FotoProject14}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );
    case "29":
      return (
        <>
          <ImgTagS
            src={`${FotoProject141}`}
            alt={imgAlt}
            type="image/webp"
            loading="lazy"
            className={isOpen ? "" : "normal"}
            onClick={() => {
              onOpenModal({ idx: indexCase });
            }}
          />
        </>
      );

    default:
      return "LOGO not found";
  }
};

GalleryImgsFunc.propTypes = {
  index: PropTypes.number,
  data: PropTypes.shape({
    // idx: PropTypes.string,
    imgAlt: PropTypes.string,
  }),
  isOpen: PropTypes.bool,
  onOpenModal: PropTypes.func,
};

export default GalleryImgsFunc;
