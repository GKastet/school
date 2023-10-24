import { useEffect, useState } from "react";
import { PageWrapper } from "../../CSS/GeneralCSS";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";
import GalleryImgs from "../../components/GalleryImgs/GalleryImgs";
import BtnBack from "../../components/Buttons/BtnBack/BtnBack";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const GalleryPage = () => {
  const location = useLocation()  
  const backLinkRef = useRef(location.state?.from)
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
      <BtnBack location={backLinkRef}/>
      <GalleryImgs/>      
      {showBtnUp && <BtnUp/>}               
    </PageWrapper>
  );
};

export default GalleryPage;
