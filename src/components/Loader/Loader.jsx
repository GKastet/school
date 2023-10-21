import { FidgetSpinner } from "react-loader-spinner";
import { LoaderWrapper } from "./LoaderStyled";
// import { Circles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <LoaderWrapper>
      <FidgetSpinner
        visible={true}        
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        // wrapperClass="dna-wrapper"
        ballColors={['var(--spinerBallColor1)', 'var(--spinerBallColor2)', 'var(--spinerBallColor3)']}
        // backgroundColor="var(--violet)"
        backgroundColor="var(--mainNavLogo)"
        height="120"
        width="120"
      />
    </LoaderWrapper>
  );
};

export default Loader;
