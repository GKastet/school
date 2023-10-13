import { useLocation } from "react-router-dom";
import { PageWrapper } from "../../CSS/GeneralCSS";
import AllProjects from "../../components/AllProjects/AllProjects";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";

const HomePage = () => {
  // const location = useLocation()

  return (
    <PageWrapper>
      <h2>HomePage</h2> 
      <AllProjects/>      
      <BtnUp/>
    </PageWrapper>
  );
};

export default HomePage;
