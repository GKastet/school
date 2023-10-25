import{u as t,j as o,T as i}from"./index-195d136e.js";const a="/school/assets/1_Merkur_title_horiz_WebP-8ee04ba5.webp",n="/school/assets/2_SolarHydraulic_title_horiz_WebP-3962cc45.webp",c="/school/assets/3_FuelCellCar_title-horiz_WebP-a50c2368.webp",l="/school/assets/4_MarsRunner_title-horiz_WebP-81b3573f.webp",h="/school/assets/5_EiTech_title_horiz_WebP-98b27108.webp",p="/school/assets/10_BoffinIIMyHome_title_horiz_WebP-fb88cfe4.webp",b="/school/assets/14_FicherTechnik_title_horiz_WebP-99001418.webp",r=t.button`
  outline: 1px solid var(--blue-hover);
  position: fixed;  
  right: 10px;  
  bottom: 16px;    
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: var(--mainNavLogo);
  background-color: rgba(255, 255, 227, 0.5);
  transition: color 250ms ease-in, background-color 250ms ease-in,
    outline 250ms ease-in;
  cursor: pointer;

  &:hover {
    color: var(--hover);
    background-color: var(--backgroundColor-header-footer);
    outline: 1px solid var(--mainNavLogo);
  }

 
  @media (min-width: 500px) {
    right: 20px;
  }
  @media (min-width: 744px) {
    right: 30px;
  }
  @media (min-width: 880px){
    right: 40px;
  }
  @media (min-width: 1000px){
    right: 70px;
  }
  @media (min-width: 1280px){
    right: 40px;
  }  
`,d=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return o.jsx(r,{type:"button",onClick:e,children:o.jsx(i,{size:40})})};export{d as B,b as F,p as a,h as b,l as c,c as d,n as e,a as f};
