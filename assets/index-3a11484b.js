import{u as n,j as e,r as d}from"./index-73f0cb3e.js";import{P as r,T as h,a as m,B as g}from"./BtnUp-bdb4cbcb.js";const u=n.div`
outline: 1px solid red;
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

`,j=n.div`
outline: 1px solid black;
border-radius: 20px;
min-width: 300px;
height: 200px;
overflow: hidden;
@media (min-width:1280px){
    min-width: 500px;
    height: 260px;
}
`,w=n.div`
width: 100%;
`,y=n.p`
display: block;
font-size: 16px;
font-weight: 700;
@media (min-width: 744px){
    font-size: 20px;
}
`,a="/school/assets/50WebP-4b63c187.webp",p="/school/assets/64WebP-5977da9e.webp",c=({data:i})=>{const{id:s,imgAlt:t}=i;switch(s){case"1":return e.jsx("img",{src:`${a}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${p}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${a}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${p}`,alt:t,style:o,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},o={width:"100%",height:"100%",objectFit:"cover"};c.propTypes={data:r.shape({id:r.string.isRequired,imgAlt:r.string.isRequired}).isRequired};const x=({project:i})=>{const{projectName:s}=i;return e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(c,{data:i})}),e.jsxs(w,{children:[e.jsx("h3",{style:{textAlign:"center",color:"blue"},children:s}),e.jsx(y,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt. Temporibus, vel rerum, molestiae, in laborum minus expedita rem excepturi hic exercitationem ipsam labore?"})]})]})};x.propTypes={project:r.shape({projectName:r.string.isRequired}).isRequired};const l=[{id:"1",imgAlt:"Project main foto",projectName:"Project name"},{id:"2",imgAlt:"Project main foto",projectName:"Project name"},{id:"3",imgAlt:"Project main foto",projectName:"Project name"},{id:"4",imgAlt:"Project main foto",projectName:"Project name"}],b=()=>e.jsxs("div",{children:[e.jsx(h,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:l==null?void 0:l.map(i=>e.jsx(x,{project:i},i==null?void 0:i.id))}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"1"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"2"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"3"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"4"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"5"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"6"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"7"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"8"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"9"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"10"})]}),f=()=>{const[i,s]=d.useState(!1);return d.useEffect(()=>{const t=()=>{window.scrollY>100?s(!0):s(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(m,{children:[e.jsx(b,{}),i&&e.jsx(g,{})]})},T=f;export{T as default};
