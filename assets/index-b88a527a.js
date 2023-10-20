import{u as n,L as m,j as e,r as l}from"./index-b8b82545.js";import{P as o,I as d,a as p,T as h,b as g,B as u}from"./BtnUp-a29ebe1c.js";const j=n.li`
  outline: 1px solid red;  
  /* background-color: rgba(255, 255, 255, 1); */
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
`,y=n.div`
position: relative;
transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
    /* pointer-events: none; */
  }
  `,v=n.div`
  outline: 1px solid black;
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`,w=n.div`
  width: 100%;
  z-index: 3;
`,f=n.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
`,b=n(m)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  display: block;
  display: flex;
    justify-content: center;
    align-items: center;

  padding: 0 32px;
  padding-top: 40px;

  /* font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em; */
  color: var(--p_color);
  background-color: var(--backgroundColor);
  /* opacity: 0.9; */
  border-radius: 20px;
  transform: translateY(101%);
  transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  opacity: 0;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
  
`,c=({data:i})=>{const{id:r,imgAlt:t}=i;switch(r){case"1":return e.jsx("img",{src:`${p}`,alt:t,style:s,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${d}`,alt:t,style:s,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${p}`,alt:t,style:s,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${d}`,alt:t,style:s,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},s={width:"100%",height:"100%",objectFit:"cover"};c.propTypes={data:o.shape({id:o.string.isRequired,imgAlt:o.string.isRequired}).isRequired};const x=({project:i})=>{const{projectName:r}=i;return e.jsx(e.Fragment,{children:e.jsxs(j,{children:[e.jsxs(y,{children:[e.jsx(v,{children:e.jsx(c,{data:i})}),e.jsx(b,{className:"card-overlay",to:"/gallery",children:"navštíviť galériu"})]}),e.jsxs(w,{children:[e.jsx("h3",{style:{textAlign:"center",color:"blue"},children:r}),e.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt. Temporibus, vel rerum, molestiae, in laborum minus expedita rem excepturi hic exercitationem ipsam labore?"})]})]})})};x.propTypes={project:o.shape({projectName:o.string.isRequired}).isRequired};const a=[{id:"1",imgAlt:"Project main foto",projectName:"Project name"},{id:"2",imgAlt:"Project main foto",projectName:"Project name"},{id:"3",imgAlt:"Project main foto",projectName:"Project name"},{id:"4",imgAlt:"Project main foto",projectName:"Project name"}],P=()=>e.jsxs("div",{children:[e.jsx(h,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a==null?void 0:a.map(i=>e.jsx(x,{project:i},i==null?void 0:i.id))}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"1"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"2"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"3"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"4"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"5"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"6"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"7"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"8"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"9"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"10"})]}),k=()=>{const[i,r]=l.useState(!1);return l.useEffect(()=>{const t=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(g,{children:[e.jsx(P,{}),i&&e.jsx(u,{})]})},A=k;export{A as default};
