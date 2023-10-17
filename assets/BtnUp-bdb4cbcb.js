import{u as r,g as l,j as n,T as m}from"./index-73f0cb3e.js";const d="/school/assets/bcg1WebP-b6ce7dc7.webp",R=r.section`
  outline: 1px solid blue;
  position: relative;
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* background-image: url(${d}); */
  @media (min-width: 744px) and (max-width: 1279px) {    
    max-width: 740px;
  }
  @media (min-width: 1280px){    
    max-width: 1280px;
  }
`,S=r.h2`
display: block;
text-align: center;
margin-bottom: 30px;
font-size: 30px;
`;var p={exports:{}},h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x=h,u=x;function a(){}function s(){}s.resetWarningCache=a;var g=function(){function e(T,f,v,w,P,c){if(c!==u){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function o(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t};p.exports=g();var b=p.exports;const _=l(b),y=r.button`
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
`,O=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return n.jsx(y,{type:"button",onClick:e,children:n.jsx(m,{size:40})})};export{O as B,_ as P,S as T,R as a};
