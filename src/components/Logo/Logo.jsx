import { FidgetSpinner } from "react-loader-spinner";

const Logo = () => {
  return (
    <>
      <FidgetSpinner        
        visible={true}        
        ariaLabel="dna-loading"
        wrapperStyle={{}}        
        wrapperClass="dna-wrapper"
        // ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        ballColors={['var(--spinerBallColor1)', 'var(--spinerBallColor2)', 'var(--spinerBallColor3)']}
        // backgroundColor="#6302d1"
        backgroundColor="var(--mainNavLogo)"
        height="40"
        width="40"        
      />
    </>
  );
};

export default Logo;
