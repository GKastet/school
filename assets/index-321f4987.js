import{h as d,u as i,L as m,j as e,r as n}from"./index-a1397755.js";import{P as o,T as x,a as h}from"./index-543e9ba3.js";import{a as g,B as u}from"./BtnUp-a5c9a0bd.js";const f=d`
  0% {
    opacity: 0;
  }  
  100% {
    opacity: 1;
  }
`,v=i.li`
  background-color: rgba(33, 89, 198, 0.7);
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border-top: 10px solid var(--hover);
  border-right: 12px solid var(--hover);

  @media (min-width: 744px) {
    flex-wrap: nowrap;
  }
`,j=i.div`
  position: relative;
  transition: transform var(--animation-time) var(--animation-cubic),
    opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
  }
`,y=i.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`,w=i.div`
  width: 100%;
`,b=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,P=i.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-style: italic;
  color: var(--text-color);
  opacity: 0;
  animation: ${f} 0.3s linear 2s forwards;
  @media (min-width: 744px) {
    font-size: 20px;
  }
`,k=i(m)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;  
  color: var(--backgroundColor-header-footer);
  background-color: var(--mainNavLogo);  
  border-radius: 20px;
  transform: translateY(101%);
  transition: transform var(--animation-time) var(--animation-cubic),
    opacity var(--animation-time) var(--animation-cubic);
  opacity: 0;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
`,s=({project:r})=>{const{imgSrc:t,imgAlt:a,projectName:c,projectDescription:l}=r,p=l.replace(/\n/g,"<br>");return e.jsx(e.Fragment,{children:e.jsxs(v,{children:[e.jsxs(j,{children:[e.jsx(y,{children:e.jsx(b,{src:t,alt:a,type:"image/webp",loading:"lazy"})}),e.jsx(k,{className:"card-overlay",to:"/gallery",children:"Navštíviť galériu"})]}),e.jsxs(w,{children:[e.jsx("h3",{style:{fontSize:"28px",textAlign:"center",color:"white"},children:c}),e.jsx(P,{dangerouslySetInnerHTML:{__html:p}})]})]})})};s.propTypes={project:o.shape({imgSrc:o.string.isRequired,imgAlt:o.string.isRequired,projectName:o.string.isRequired,projectDescription:o.string.isRequired}).isRequired};const S=()=>{const r=g.filter(t=>t.title===!0);return e.jsxs("div",{children:[e.jsx(x,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:r==null?void 0:r.map(t=>e.jsx(s,{project:t},t.id))})]})},T=()=>{const[r,t]=n.useState(!1);return n.useEffect(()=>{const a=()=>{window.scrollY>100?t(!0):t(!1)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e.jsxs(h,{children:[e.jsx(S,{}),r&&e.jsx(u,{})]})},R=T;export{R as default};
