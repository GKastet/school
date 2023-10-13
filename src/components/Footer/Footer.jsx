import Logo from "../Logo/Logo";
import { FooterWrapperS, LinkFS } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterWrapperS>
      <div>
        <Logo />
      </div>
      <LinkFS to='/'>Home</LinkFS>
      <LinkFS to='/gallery'>Gallery</LinkFS>
    </FooterWrapperS>
  );
};

export default Footer;
