import styled from "styled-components";

// export const ImgTagS = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 500ms linear;
//   &:hover {
//     transform: scale(1.08);
//   }
// `;

export const ImgTagS = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.normal {
    transition: transform 500ms linear;
    &:hover {
      transform: scale(1.08);
    }
  }
`;

export const ImgTagSModal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


