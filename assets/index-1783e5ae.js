import{u as t,a as i,r as n,j as e}from"./index-5744e3ed.js";import{a,T as d}from"./index-f78ff50c.js";import{B as c}from"./BtnBack-9951d1af.js";const l="/school/assets/presentation_Merkur-82c30e1f.mp4",p=t.div`
display: flex;
align-items: center;
justify-content: center;
`,x=t.div`
/* outline: 1px solid red; */
width: 375px;
border-radius: 20px;
border: 2px solid var(--backgroundColor-header-footer);
overflow: hidden;

@media (min-width: 744px){
    width: 480px;    
}
`,h=()=>{var o;const s=i(),r=n.useRef((o=s.state)==null?void 0:o.from);return e.jsxs(a,{children:[e.jsx(c,{location:r}),e.jsx(d,{children:"Presentation"}),e.jsx(p,{children:e.jsx(x,{children:e.jsxs("video",{width:"100%",height:"100%",controls:!0,style:{display:"block"},children:[e.jsx("source",{src:l,type:"video/mp4"}),"Ваш браузер не поддерживает видео."]})})})]})},j=h;export{j as default};
