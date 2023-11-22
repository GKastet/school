import{u as t,a as i,r as n,j as e}from"./index-fc5f0530.js";import{a,T as d}from"./index-9e0565e0.js";import{B as c}from"./BtnBack-fcb63974.js";const p="/school/assets/presentation_Merkur-82c30e1f.mp4",l=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,x=t.div`
  width: 375px;
  border-radius: 20px;
  border: 2px solid var(--backgroundColor-header-footer);
  overflow: hidden;

  @media (min-width: 744px) {
    width: 480px;
  }
`,u=()=>{var o;const s=i(),r=n.useRef((o=s.state)==null?void 0:o.from);return e.jsxs(a,{children:[e.jsx(c,{location:r}),e.jsx(d,{children:"Presentation"}),e.jsx(l,{children:e.jsx(x,{children:e.jsxs("video",{width:"100%",height:"100%",controls:!0,style:{display:"block"},children:[e.jsx("source",{src:p,type:"video/mp4"}),"Your browser does not support video."]})})})]})},j=u;export{j as default};
