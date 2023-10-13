import styled from "styled-components";

export const PageWrapper = styled.section`
  outline: 1px solid blue;
  position: relative;
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 744px) and (max-width: 1279px) {    
    max-width: 740px;
  }
  @media (min-width: 1280px){    
    max-width: 1280px;
  }
`;


