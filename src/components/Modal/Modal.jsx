import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ModalStyled, ProjectImg } from "./ModalStyled";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import BtnPrev from "../Buttons/BtnPrev/BtnPrev";
import BtnNext from "../Buttons/BtnNext/BtnNext";
import { allImgsArr } from "../AllProjects/allImgsInfo";

const Modal = ({ onCloseModal, modal, imgListLength }) => {
  const { isOpen, modalData } = modal;

  const [imageIdx, setImageIdx] = useState(modalData.idx);
  
  const [modalImg, setModalImg] = useState(allImgsArr[imageIdx]);
  const { imgSrc, imgAlt } = modalImg;  

  useEffect(() => {
    if (imageIdx >= 0 && imageIdx < allImgsArr.length) {
      setModalImg(allImgsArr[imageIdx]);
    }
  }, [imageIdx]);

  const activePrevBtn = imageIdx === 0;
  const activeNextBtn = imgListLength === imageIdx + 1;

  useEffect(() => {
    if (!isOpen) return;

    if (window.innerWidth < 744) {
      return;
    } else {
      document.body.classList.add("no-scroll");
    }

    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        document.body.classList.remove("no-scroll");
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onCloseModal]);

  const handleClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      document.body.classList.remove("no-scroll");
      onCloseModal();
    }
  };

  return (
    <ModalStyled onClick={handleClickOverlay}>
      <div style={{ position: "relative" }}>
        <ProjectImg src={imgSrc} alt={imgAlt} type="image/webp" />
        <BtnClose onCloseModal={onCloseModal} />
        {!activePrevBtn && (
          <BtnPrev imageIdx={imageIdx} setImageIdx={setImageIdx} />
        )}
        {!activeNextBtn && (
          <BtnNext imageIdx={imageIdx} setImageIdx={setImageIdx} />
        )}
      </div>
    </ModalStyled>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modal: PropTypes.object.isRequired,
  imgListLength: PropTypes.number,
};

export default Modal;
