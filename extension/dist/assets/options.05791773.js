import{p as _,_ as f,i as v}from"./windi.257525f4.js";import{r as s,c as g,d as e,w as o,o as h,a as I,t as l,e as i,f as k,i as x}from"./vendor.9462d1b9.js";function p(){return localStorage.setItem("script_version",_.version),_.version}const S={data(){return{version:p(),start_up:1}},methods:{openMain(){window.open("/dist/popup/index.html")},startUp(){var t=localStorage.getItem("start_up");t==1?(localStorage.setItem("start_up",0),this.start_up=0):(localStorage.setItem("start_up",1),this.start_up=1)}},mounted(){var t=localStorage.getItem("start_up");t||(t=1,localStorage.setItem("start_up",1)),this.start_up=t,setInterval(p,1e3*60*1)}},w={id:"v1"},y={style:{width:"200px"}},C=i("\u6253\u5F00\u4E3B\u9875");function b(t,B,N,A,a,r){const u=s("el-form-item"),m=s("el-form"),n=s("el-button"),d=s("el-main");return h(),g("div",w,[e(d,null,{default:o(()=>[e(m,{model:t.form,"label-width":"120px"},{default:o(()=>[e(u,{label:"\u7248\u672C\u53F7"},{default:o(()=>[I("div",y,l(a.version),1)]),_:1})]),_:1},8,["model"]),e(n,{type:"success",onClick:r.openMain},{default:o(()=>[C]),_:1},8,["onClick"]),e(n,{type:"success",onClick:r.startUp},{default:o(()=>[i("\u662F\u5426\u8981\u81EA\u542F"+l(a.start_up),1)]),_:1},8,["onClick"])]),_:1})])}var V=f(S,[["render",b],["__scopeId","data-v-56576209"]]);const c=k(V);c.use(x);c.use(v).mount("#app");
