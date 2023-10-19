import PropTypes from "prop-types";
import Img1 from "../../images/50WebP.webp";
import Img2 from "../../images/64WebP.webp";
import { ImgTagS, ImgTagSModal } from "./GalleryImgsFuncStyled";
// import ImgTest from "../../../public/images/64WebP.webp"

const GalleryImgsFunc = ({ data, isOpen = false, onOpenModal }) => {
  // console.log('onOpenModal: ', onOpenModal);
  // console.log("galleryFunc", isOpen);
  const { id, imgAlt } = data;

  switch (id) {
    case "1":
      return (
        <>
          {!isOpen ? (
            <ImgTagS
              src={`${Img1}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          ) : (
            <ImgTagSModal
              src={`${Img1}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          )}
        </>
      );

    case "2":
      return (
        <>
          {!isOpen ? (
            <ImgTagS
              src={`${Img2}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          ) : (
            <ImgTagSModal
              src={`${Img2}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          )}
        </>
      );
    case "3":
      return (
        <>
          {!isOpen ? (
            <ImgTagS
              src={`${Img1}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          ) : (
            <ImgTagSModal
              src={`${Img1}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          )}
        </>
      );
    case "4":
      return (        
        <>
          {!isOpen ? (
            <ImgTagS
              src={`${Img2}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          ) : (
            <ImgTagSModal
              src={`${Img2}`}
              alt={imgAlt}
              type="image/webp"
              loading="lazy"
              onClick={() => {
                onOpenModal({ id });
              }}
            />
          )}
        </>
      );

    default:
      return "LOGO not found";
  }
};

// const imgStyle = {
//   width: "100%",
//   // maxWidth: "100%",
//   height: "100%",
//   // objectFit: "contain",
//   objectFit: "cover",
//   '&:hover':{
//     width: '100px',
//     // scale: '1.2',
//     transform: 'scale(1.2)',
//   }
// };

GalleryImgsFunc.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool,
  onOpenModal: PropTypes.func,
};

export default GalleryImgsFunc;
