import { BackText, BtnBoxLink, IconBox, TiArrowBackOutlineS } from "./BtnBackStyled";

const BtnBack = () => {
  return (
    <>
      <BtnBoxLink to="/">
        <IconBox>
          <TiArrowBackOutlineS />
        </IconBox>
        <BackText>Späť</BackText>
      </BtnBoxLink>
    </>
  );
};

export default BtnBack;
