import{u as l,j as e,r as d}from"./index-85a21934.js";import{P as r,I as a,a as p,T as h,b as m,B as g}from"./BtnUp-142cd0dc.js";const u=l.div`
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

`,j=l.div`
outline: 1px solid black;
border-radius: 20px;
min-width: 300px;
height: 200px;
overflow: hidden;
@media (min-width:1280px){
    min-width: 500px;
    height: 260px;
}
`,w=l.div`
width: 100%;
`,y=l.p`
display: block;
font-size: 16px;
font-weight: 700;
@media (min-width: 744px){
    font-size: 20px;
}
`,x=({data:i})=>{const{id:s,imgAlt:t}=i;switch(s){case"1":return e.jsx("img",{src:`${p}`,alt:t,style:n,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${a}`,alt:t,style:n,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${p}`,alt:t,style:n,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${a}`,alt:t,style:n,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},n={width:"100%",height:"100%",objectFit:"cover"};x.propTypes={data:r.shape({id:r.string.isRequired,imgAlt:r.string.isRequired}).isRequired};const c=({project:i})=>{const{projectName:s}=i;return e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(x,{data:i})}),e.jsxs(w,{children:[e.jsx("h3",{style:{textAlign:"center",color:"blue"},children:s}),e.jsx(y,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt. Temporibus, vel rerum, molestiae, in laborum minus expedita rem excepturi hic exercitationem ipsam labore?"})]})]})};c.propTypes={project:r.shape({projectName:r.string.isRequired}).isRequired};const o=[{id:"1",imgAlt:"Project main foto",projectName:"Project name"},{id:"2",imgAlt:"Project main foto",projectName:"Project name"},{id:"3",imgAlt:"Project main foto",projectName:"Project name"},{id:"4",imgAlt:"Project main foto",projectName:"Project name"}],f=()=>e.jsxs("div",{children:[e.jsx(h,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:o==null?void 0:o.map(i=>e.jsx(c,{project:i},i==null?void 0:i.id))}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"1"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"2"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"3"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"4"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"5"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"6"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"7"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"8"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"9"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"10"})]}),b=()=>{const[i,s]=d.useState(!1);return d.useEffect(()=>{const t=()=>{window.scrollY>100?s(!0):s(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(m,{children:[e.jsx(f,{}),i&&e.jsx(g,{})]})},T=b;export{T as default};
