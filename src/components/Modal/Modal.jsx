import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ModalStyled } from './ModalStyled';
import GalleryImgsFunc from '../GalleryImgs/GalleryImgsFunc';

const Modal = ({ onCloseModal, modalData }) => {

const [imageId, setImageId] = useState(Number(modalData.id))
// console.log("imageId", imageId);

  const handleClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handlePrevImage = () =>{
    if(imageId === 1) return    
    setImageId(imageId-1)
  }

  const handleNextImage =() =>{
    if(imageId === 4){
      alert("max image")
      return
    }     
    setImageId(imageId+1)
  }

  const handleBtnClose =()=>{
    console.log("close");
    onCloseModal();
  }

  const newModalData = {
    id: imageId.toString(),
  }

  return (
    <ModalStyled onClick={handleClickOverlay}>
      <button type='button' onClick={handlePrevImage}>prev</button>
      <div>        
        <GalleryImgsFunc data={newModalData}/>
      </div>
      <button type='button' onClick={handleNextImage}>next</button>
      <button type='button' onClick={handleBtnClose}>close</button>
    </ModalStyled>
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
};

export default Modal;
