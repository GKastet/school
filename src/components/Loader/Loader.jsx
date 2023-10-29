import { FidgetSpinner } from "react-loader-spinner";
import { LoaderWrapper } from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <FidgetSpinner
        visible={true}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        ballColors={[
          "var(--spinerBallColor1)",
          "var(--spinerBallColor2)",
          "var(--spinerBallColor3)",
        ]}
        backgroundColor="var(--mainNavLogo)"
        height="120"
        width="120"
      />
    </LoaderWrapper>
  );
};

export default Loader;
