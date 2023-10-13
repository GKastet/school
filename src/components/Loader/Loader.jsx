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
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="var(--violet)"
        height="120"
        width="120"
      />
    </LoaderWrapper>
  );
};

export default Loader;
