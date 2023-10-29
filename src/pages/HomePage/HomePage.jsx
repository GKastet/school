import { PageWrapper } from "../../CSS/GeneralCSS";
import AllProjects from "../../components/AllProjects/AllProjects";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [showBtnUp, setShowBtnUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageWrapper>
      <AllProjects />
      {showBtnUp && <BtnUp />}
    </PageWrapper>
  );
};

export default HomePage;
