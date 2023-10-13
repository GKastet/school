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
          >
            <AiOutlineInstagramS />
          </IconLink>
        </SingleIconBox>
        <SingleIconBox>
          <IconLink
            to="https://t.me/vityel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlaneS />
          </IconLink>
        </SingleIconBox>
        <SingleIconBox>
          <IconLink
            to="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbMailS />
          </IconLink>
        </SingleIconBox>
      </AllIconBox>
    </HeaderWrapperS>
  );
};

export default Header;
