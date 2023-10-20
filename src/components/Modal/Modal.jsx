import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ModalStyled } from "./ModalStyled";
import GalleryImgsFunc from "../GalleryImgs/GalleryImgsFunc";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import BtnPrev from "../Buttons/BtnPrev/BtnPrev";
import BtnNext from "../Buttons/BtnNext/BtnNext";


const Modal = ({ onCloseModal, modal }) => {
// console.log(modal);
  const { isOpen, modalData } = modal;
  const [imageId, setImageId] = useState(Number(modalData.id));
  
  useEffect(() => {
    if (!isOpen) return;
    
    if (window.innerWidth < 744){
      return
    }else{
      document.body.classList.add("no-scroll")
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
    id: imageId.toString(),
  };

  return (
    <ModalStyled onClick={handleClickOverlay}>      
      <div style={{ position: "relative" }}>
        <GalleryImgsFunc data={newModalData} isOpen={modal.isOpen}/>
        <BtnClose onCloseModal={onCloseModal} />
        <BtnPrev imageId={imageId} setImageId={setImageId}/>
        <BtnNext imageId={imageId} setImageId={setImageId}/>
      </div>      
    </ModalStyled>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modal: PropTypes.object.isRequired,
};

export default Modal;
