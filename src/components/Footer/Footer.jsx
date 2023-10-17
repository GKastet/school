import Logo from "../Logo/Logo";
import {
  AiOutlineInstagramS,
  AllIconBox,
  FaTelegramPlaneS,
  FooterWrapperS,
  IconLink,
  SingleIconBox,
  SpanS,
  TbMailS,
} from "./FooterStyled";

const Footer = () => {
  return (
    <FooterWrapperS>
      <div>
        <Logo />
      </div>
      <AllIconBox>
        <SingleIconBox>
          <IconLink
            to="https://www.instagram.com/vity.ukr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <AiOutlineInstagramS />
          </IconLink>
        </SingleIconBox>
        <SingleIconBox>
          <IconLink
            to="https://t.me/vityel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="telegram"
          >
            <FaTelegramPlaneS />
          </IconLink>
        </SingleIconBox>
        <SingleIconBox>
          <IconLink
            to="mailto:liza.milarom@gmail.com"            
            rel="nofollow"
            aria-label="mail"
          >
            <TbMailS />
          </IconLink>
        </SingleIconBox>        
      </AllIconBox>
      <SpanS>
        &copy; Liza Gončarenko, 2023, Všetky práva vyhradené.
      </SpanS>
    </FooterWrapperS>
  );
};

export default Footer;
