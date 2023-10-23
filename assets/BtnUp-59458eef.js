import{g as c,u as l,j as i,T as m}from"./index-4855afe1.js";var n={exports:{}},h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d=h,u=d;function p(){}function a(){}a.resetWarningCache=p;var x=function(){function e(T,b,v,f,w,s){if(s!==u){var t=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw t.name="Invariant Violation",t}}e.isRequired=e;function o(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:a,resetWarningCache:p};return r.PropTypes=r,r};n.exports=x();var g=n.exports;const R=c(g),y=l.button`
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
`,k=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return i.jsx(y,{type:"button",onClick:e,children:i.jsx(m,{size:40})})};export{k as B,R as P};
