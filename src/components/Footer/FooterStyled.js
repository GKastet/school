import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapperS = styled.footer`
  outline: 1px solid red;
`;
export const LinkFS = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  transition: color 350ms linear;

  &:hover {
    color: red;
  }
`;
