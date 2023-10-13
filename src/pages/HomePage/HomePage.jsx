//import { useLocation } from "react-router-dom";
import { PageWrapper } from "../../CSS/GeneralCSS";
import AllProjects from "../../components/AllProjects/AllProjects";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";
import { useEffect, useState } from "react";

const HomePage = () => {
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


  // const location = useLocation()

  return (
    <PageWrapper>
      <h2>HomePage</h2> 
      <AllProjects/>
      {showBtnUp && <BtnUp/>}      
      
    </PageWrapper>
  );
};

export default HomePage;
