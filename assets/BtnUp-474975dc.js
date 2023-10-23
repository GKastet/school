import{u as r,g as l,j as n,T as d}from"./index-f9bd6f10.js";const m="/school/assets/bcg1WebP-b6ce7dc7.webp",R=r.section`
  /* outline: 1px solid blue; */
  padding: 20px 10px;
  position: relative;
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* background-image: url(${m}); */
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
font-size: 44px;
letter-spacing: 0.1em;
text-decoration: underline;
color: var(--white);
`;var a={exports:{}},h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x=h,u=x;function p(){}function s(){}s.resetWarningCache=p;var g=function(){function e(T,f,v,w,P,c){if(c!==u){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function o(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:s,resetWarningCache:p};return t.PropTypes=t,t};a.exports=g();var b=a.exports;const _=l(b),O="/school/assets/50WebP-4b63c187.webp",W="/school/assets/64WebP-5977da9e.webp",y=r.button`
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
`,C=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return n.jsx(y,{type:"button",onClick:e,children:n.jsx(d,{size:40})})};export{C as B,W as I,_ as P,S as T,O as a,R as b};
