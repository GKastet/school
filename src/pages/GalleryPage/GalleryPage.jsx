import { useEffect, useState } from "react";
import { PageWrapper } from "../../CSS/GeneralCSS";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";
import BtnBack from "../../components/Buttons/BtnUp/BtnBack/BtnBack";
import GalleryImgs from "../../components/GalleryImgs/GalleryImgs";

const GalleryPage = () => {
  
  const [showBtnUp, setShowBtnUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <PageWrapper>
      <BtnBack/>
      <GalleryImgs/>      
      {showBtnUp && <BtnUp/>}               
    </PageWrapper>
  );
};

export default GalleryPage;
