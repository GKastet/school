import{u as o,j as i,T as r}from"./index-6c10af16.js";const a=o.section`
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
`,n=o.button`
  outline: 1px solid var(--blue-hover);
  position: fixed;  
  right: 10px;  
  bottom: 10px;    
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: var(--violet);
  background-color: rgba(255, 255, 227, 0.6);
  transition: color 250ms ease-in, background-color 250ms ease-in,
    outline 250ms ease-in;
  cursor: pointer;

  &:hover {
    color: var(--red);
    background-color: var(--green);
    outline: 1px solid var(--blue-normal);
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
`,p=()=>{function t(){window.scrollTo({top:0,behavior:"smooth"})}return i.jsx(n,{type:"button",onClick:t,children:i.jsx(r,{size:40})})};export{p as B,a as P};
