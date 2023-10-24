import { useEffect, useState } from "react";
import { PageWrapper } from "../../CSS/GeneralCSS";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";
import GalleryImgs from "../../components/GalleryImgs/GalleryImgs";
import BtnBack from "../../components/Buttons/BtnBack/BtnBack";

const GalleryPage = ({prevLocation}) => {
  console.log('prevLocation', prevLocation);
  
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
