import Logo from "../Logo/Logo";
import {
  AiOutlineInstagramS,
  AllIconBox,
  FaTelegramPlaneS,
  FooterWrapperS,
  IconLink,
  SingleIconBox,
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
            to="mailto:liza.goncharenko@gmail.com"            
            rel="nofollow"
            aria-label="mail"
            
            
          >
            <TbMailS />
          </IconLink>
        </SingleIconBox>        
      </AllIconBox>
      <span className="bottomSpan">
        &copy; Liza Goncharenko, 2023, All rights reserved.
      </span>
    </FooterWrapperS>
  );
};

export default Footer;
