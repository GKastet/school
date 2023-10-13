import {
  AiOutlineInstagramS,
  AllIconBox,
  FaTelegramPlaneS,
  HeaderWrapperS,
  IconLink,
  LinkHS,
  LinkWrapper,
  SingleIconBox,
  TbMailS,
} from "./HeaderStyled";

import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <HeaderWrapperS>
      <div>
        <Logo />
      </div>
      <LinkWrapper>
        <LinkHS to="/">Home</LinkHS>
        <LinkHS to="/gallery">Gallery</LinkHS>
      </LinkWrapper>
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
            href="mailto:liza.goncharenko@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="mail"
          >
            <TbMailS />
          </IconLink>
        </SingleIconBox>
      </AllIconBox>
    </HeaderWrapperS>
  );
};

export default Header;
