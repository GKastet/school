import { useState } from "react";
import { TitleS } from "../../CSS/GeneralCSS";
import GalleryItem from "../GalleryItem/GalleryItem";
import Modal from "../Modal/Modal";
import ImgList from "./galleryImgsList.json";

const GalleryImgs = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    modalData: null,
  })
console.log(modal);
  const onOpenModal = data => {
    // console.log("ok");
    setModal({ isOpen: true, modalData: data });
  };

  const onCloseModal = () => setModal({ isOpen: false, modalData: null });

  return (
    <>
      <TitleS>Galéria</TitleS>
      <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}>
        {ImgList?.map((image) => (
          <GalleryItem key={image.id} data={image} onOpenModal={onOpenModal}/>
        ))}
      </ul>
      {modal.isOpen && <Modal onCloseModal={onCloseModal} modalData={modal.modalData}/>}
    </>
  );
};

export default GalleryImgs;
