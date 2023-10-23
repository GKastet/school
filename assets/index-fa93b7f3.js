import{u as o,L as x,j as e,r as l}from"./index-f9bd6f10.js";import{P as a,I as d,a as c,T as h,b as g,B as u}from"./BtnUp-474975dc.js";const j=o.li`
  /* outline: 1px solid red; */
  /* background-color: rgba(255, 255, 255, 1); */
  /* background-color: rgba(174, 228, 255, 0.7); */
  background-color: rgba(33, 89, 198, 0.7);
  /* background-color: rgba(0, 0, 0, 0.3); */
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  /* border: 12px solid red; */
  border-top: 10px solid var(--hover);
  /* border-top: 10px solid #ffff53; */
  border-right: 12px solid var(--hover);
  /* border-right: 12px solid #ffff53; */
  /* border-bottom: 12px solid red; */
  
  @media (min-width: 744px) {
    flex-wrap: nowrap;
  }
`,f=o.div`
position: relative;
transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
    /* pointer-events: none; */
  }
  `,y=o.div`
  outline: 1px solid black;
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`,v=o.div`
  width: 100%;
  /* z-index: 3; */
`,b=o.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-style: italic;
  /* color: var(--black); */
  color: var(--text-color);
  @media (min-width: 744px) {
    font-size: 20px;
  }
`,w=o(x)`
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
  
`,p=({data:i})=>{const{id:r,imgAlt:t}=i;switch(r){case"1":return e.jsx("img",{src:`${c}`,alt:t,style:s,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${d}`,alt:t,style:s,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${c}`,alt:t,style:s,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${d}`,alt:t,style:s,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},s={width:"100%",height:"100%",objectFit:"cover"};p.propTypes={data:a.shape({id:a.string.isRequired,imgAlt:a.string.isRequired}).isRequired};const m=({project:i})=>{const{projectName:r}=i;return e.jsx(e.Fragment,{children:e.jsxs(j,{children:[e.jsxs(f,{children:[e.jsx(y,{children:e.jsx(p,{data:i})}),e.jsx(w,{className:"card-overlay",to:"/gallery",children:"navštíviť galériu"})]}),e.jsxs(v,{children:[e.jsx("h3",{style:{fontSize:"28px",textAlign:"center",color:"white"},children:r}),e.jsx(b,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."})]})]})})};m.propTypes={project:a.shape({projectName:a.string.isRequired}).isRequired};const n=[{id:"1",imgAlt:"Project main foto",projectName:"Project name"},{id:"2",imgAlt:"Project main foto",projectName:"Project name"},{id:"3",imgAlt:"Project main foto",projectName:"Project name"},{id:"4",imgAlt:"Project main foto",projectName:"Project name"}],P="/school/assets/VID-56abe16b.mp4",k=()=>e.jsxs("div",{children:[e.jsx(h,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:n==null?void 0:n.map(i=>e.jsx(m,{project:i},i==null?void 0:i.id))}),e.jsxs("div",{children:[e.jsx("h1",{children:"Видео Проигрыватель"}),e.jsxs("video",{width:"640",height:"360",controls:!0,children:[e.jsx("source",{src:P,type:"video/mp4"}),"Ваш браузер не поддерживает видео."]})]}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"1"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"2"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"3"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"4"})]}),z=()=>{const[i,r]=l.useState(!1);return l.useEffect(()=>{const t=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(g,{children:[e.jsx(k,{}),i&&e.jsx(u,{})]})},N=z;export{N as default};
