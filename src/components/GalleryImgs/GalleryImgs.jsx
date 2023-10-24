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
  // const [imgIdx, setImgIdx] = useState(0)
const imgListLength = ImgList.length


  const onOpenModal = data => {
    console.log("onOpenModal", data);    
    setModal({ isOpen: true, modalData: data });
  };

  const onCloseModal = () => setModal({ isOpen: false, modalData: null });

  // const checkImgIdx = (idx) =>{    
  //   setImgIdx(idx)
  // }
  // const prevModalImg = () => {    
  //   setImgIdx(imgIdx-1)
  // }

  // const nextModalImg = () =>{
  //   console.log("idx", imgIdx);
  //   setImgIdx(imgIdx+1)
  //   console.log("idx", imgIdx);
  // }

  // const lastImg = ImgList.length === imgIdx+1
  // console.log(lastImg);

  return (
    <>
      <TitleS>Galéria</TitleS>
      <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}>
        {ImgList?.map((image) => (
          <GalleryItem key={image.id} data={image} onOpenModal={onOpenModal}/>
        ))}
      </ul>
      {modal.isOpen && <Modal onCloseModal={onCloseModal} modal={modal} imgListLength={imgListLength}/>}
    </>        
  );
};

export default GalleryImgs;
