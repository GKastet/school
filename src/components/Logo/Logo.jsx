import { FidgetSpinner } from "react-loader-spinner";

const Logo = () => {
  return (
    <>
      <FidgetSpinner        
        visible={true}        
        ariaLabel="dna-loading"
        wrapperStyle={{}}        
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        // backgroundColor="#6302d1"
        backgroundColor="var(--violet)"
        height="40"
        width="40"        
      />
    </>
  );
};

export default Logo;
