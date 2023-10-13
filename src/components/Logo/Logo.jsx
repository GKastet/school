import { FidgetSpinner } from "react-loader-spinner";

const Logo = () => {
  return (
    <>
      <FidgetSpinner
        visible={true}
        height="60"
        width="60"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        // backgroundColor="#6302d1"   
        backgroundColor= "var(--violet)"
      />
    </>
  );
};

export default Logo;
