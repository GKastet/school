import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiArrowBackOutline } from "react-icons/ti";

export const BtnBoxLink = styled(Link)`
width: 140px;
height: 60px;
padding: 5px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: var(--green);
`

export const IconBox = styled.div`
width: 24px;
height: 24px;
`

export const TiArrowBackOutlineS = styled(TiArrowBackOutline)`
width: 100%;
height: 100%;
fill: var(--mainNavLogo);
transition: fill 300ms linear;
&:hover{
    fill: var(--hover);
}
/* stroke: blue;
color: blue; */
`
export const BackText = styled.p`
display: block;
color: var(--mainNavLogo);
font-size: 16px;
transition: color 300ms linear;
&:hover{
    color: var(--hover);
}
@media (min-width: 744px){
    font-size: 18px;
}
`