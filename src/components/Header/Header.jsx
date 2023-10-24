import {
  AiOutlineInstagramS,
  AllIconBox,
  FaTelegramPlaneS,
  HeaderWrapperS,
  IconLink,
  LinkHS,
  LinkWrapper,
  NavigationWrapper,
  SingleIconBox,
  TbMailS,
} from "./HeaderStyled";

import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation()
  console.log(location);
  return (
    <HeaderWrapperS>
      <NavigationWrapper>
        <div>
          <Logo />
        </div>
        <LinkWrapper>
          <LinkHS to="/" activeclassname="active">Domov</LinkHS>
          <LinkHS to="/gallery" activeclassname="active">Galéria</LinkHS>
          <LinkHS to="/presentation" activeclassname="active">Prezentácia</LinkHS>
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
              to="mailto:liza.milarom@gmail.com"  
              target="_blank"
              rel="noreferrer noopener"
              aria-label="mail"
            >
              <TbMailS />
            </IconLink>
          </SingleIconBox>
        </AllIconBox>
      </NavigationWrapper>
    </HeaderWrapperS>
  );
};

export default Header;
