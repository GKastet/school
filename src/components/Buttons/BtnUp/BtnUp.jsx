import { BtnUpS } from "./BtnUpStyled";
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';


const BtnUp = () => { 
    
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
      return (
        <BtnUpS type="button" onClick={scrollToTop}>
          <TbArrowBigUpLinesFilled size={40} />
        </BtnUpS>
      );
  
}

export default BtnUp