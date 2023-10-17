import styled from "styled-components";

export const CardWrapper = styled.div`
outline: 1px solid red;
background-color: rgba(255, 255, 255, 0.8);
/* background-color: rgba(0, 0, 0, 0.3); */
padding: 10px;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
gap: 10px;
border-radius: 20px;
@media (min-width: 744px) {
    flex-wrap: nowrap;
}

`;

export const ImgThumb = styled.div`
outline: 1px solid black;
border-radius: 20px;
min-width: 300px;
height: 200px;
overflow: hidden;
@media (min-width:1280px){
    min-width: 500px;
    height: 260px;
}
`

// export const ProjectIMG = styled.img`
// max-width: 100%;
// height: 100%;
// /* object-fit: contain; */
// object-fit: cover;
// `

export const TextThumb = styled.div`
width: 100%;
`

export const ProjectText = styled.p`
display: block;
font-size: 16px;
font-weight: 700;
@media (min-width: 744px){
    font-size: 20px;
}
`