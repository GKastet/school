import PropTypes from "prop-types";
import Img1 from "../../images/50WebP.webp";
import Img2 from "../../images/64WebP.webp";
// import ImgTest from "../../../public/images/64WebP.webp"

const GalleryImgsFunc = ({ data, onOpenModal }) => {
  // console.log(data);
  const { id, imgAlt } = data;

  switch (id) {
    case "1":
      return (
        <img
          src={`${Img1}`}          
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
          onClick={() => {
            onOpenModal({ id });
          }}
          
        />
      );

    case "2":
      return (
        <img
          src={`${Img2}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
          onClick={() => {
            onOpenModal({ id });
          }}
          
        />
      );
    case "3":
      return (
        <img
          src={`${Img1}`}
          alt={imgAlt}
          style={imgStyle}
          type="image/webp"
          loading="lazy"
        />
      );
    case "4":
      return (
        <img
          src={`${Img2}`}
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
  // display: "block",
};

GalleryImgsFunc.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
  }).isRequired,
  onOpenModal: PropTypes.func,
};

export default GalleryImgsFunc;
