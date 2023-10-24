import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ModalStyled } from "./ModalStyled";
import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import BtnPrev from "../Buttons/BtnPrev/BtnPrev";
import BtnNext from "../Buttons/BtnNext/BtnNext";

const Modal = ({ onCloseModal, modal, imgListLength }) => {
  const { isOpen, modalData } = modal;
  // const [imageId, setImageId] = useState(Number(modalData.id));
  // console.log("modalData.idx", modalData.idx)
  const [imageIdx, setImageIdx] = useState(Number(modalData.idx));
console.log('111', imageIdx);
  const activePrevBtn = imageIdx === 1;
  const activeNextBtn = imgListLength === imageIdx;
  // console.log(activeNextBtn);

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

  const newModalData = {
    idx: imageIdx.toString(),
  };

  return (
    <ModalStyled onClick={handleClickOverlay}>
      <div style={{ position: "relative" }}>
        {/* <GalleryImgsFunc data={newModalData} isOpen={modal.isOpen} /> */}
        <GalleryImgsFunc index={imageIdx} isOpen={modal.isOpen} data={newModalData}/>
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
