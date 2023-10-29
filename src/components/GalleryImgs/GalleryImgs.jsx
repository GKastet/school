import { useState } from "react";
import { TitleS } from "../../CSS/GeneralCSS";
import GalleryItem from "../GalleryItem/GalleryItem";
import Modal from "../Modal/Modal";
import { allImgsArr } from "../AllProjects/allImgsInfo";

const GalleryImgs = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    modalData: null,
  });

  const imgListLength = allImgsArr?.length;

  const onOpenModal = (data) => {    
    setModal({ isOpen: true, modalData: data });
  };

  const onCloseModal = () => setModal({ isOpen: false, modalData: null });

  return (
    <>
      <TitleS>Galéria</TitleS>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          paddingBottom: "20px",
        }}
      >        
        {allImgsArr?.map((image, index) => (
          <GalleryItem
            key={image.id}
            data={image}
            index={index}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
      {modal.isOpen && (
        <Modal
          onCloseModal={onCloseModal}
          modal={modal}
          imgListLength={imgListLength}
        />
      )}
    </>
  );
};

export default GalleryImgs;
