import{_ as A,b as m,r as I,y as M,c as $,e as n,$ as G,o as g,f as C,q as T,l as e,k as o,u as a,z as J,j as z,d as K,a0 as Q,F as W,g as X,E as h,t as Y}from"./element-Di_zbn_f.js";import{g as Z}from"./task-cmnfkzQF.js";const ee={class:"content-div"},te={class:"search-div"},le={class:"dialog-footer"},ae=K({name:"addTask"}),oe=Object.assign(ae,{props:{jobTypeList:{type:Array}},emits:["addTaskList","closeTaskDialog"],setup(v,{emit:L}){const V=v,_=m(!1),b=m(1),j=m(0),w=m(10),H=m(360),D=L,i=I({selectionList:[],query:{jobDesc:"",executorHandler:"",actuator:""},tableData:[]}),{selectionList:se,query:r,tableData:x}=M(i);$(()=>{let t=[];return i.selection.forEach(l=>{t.push(l.id)}),t.join(",")});const u=()=>{_.value=!0,Z(b.value,w.value,i.query).then(t=>{x.value=t.data.data.records||[],j.value=t.data.data.total,_.value=!1}).catch(()=>_.value=!1)},q=()=>{i.query={jobDesc:"",jobType:"",actuator:""},b.value=1,u()},E=t=>{t.value=t,u()},B=t=>{b.value=1,t.value=t,u()},N=t=>{i.selectionList=t},S=()=>{if(i.selectionList.length===0){Q.warning("请先勾选列表数据");return}let t=[];i.selectionList.forEach(l=>{let p="";const c=V.jobTypeList.find(k=>k.name==l.executorHandler);c&&(p=c.label);let y={id:l.id,name:l.jobDesc,executorHandler:p,executorParam:l.executorParam,belongTable:l.belongTable};t.push(y)}),D("addTaskList",t)},O=()=>{D("closeTaskDialog")};return u(),(t,l)=>{const p=n("el-input"),c=n("el-form-item"),y=n("el-option"),k=n("el-select"),f=n("el-button"),R=n("el-form"),d=n("el-table-column"),U=n("el-table"),F=n("el-pagination"),P=G("loading");return g(),C("div",ee,[T("div",te,[e(R,{inline:!0,model:a(r),class:"demo-form-inline"},{default:o(()=>[e(c,{label:"任务描述:"},{default:o(()=>[e(p,{modelValue:a(r).jobDesc,"onUpdate:modelValue":l[0]||(l[0]=s=>a(r).jobDesc=s),placeholder:"任务描述",size:"small",clearable:""},null,8,["modelValue"])]),_:1}),e(c,{label:"任务类型:"},{default:o(()=>[e(k,{modelValue:a(r).executorHandler,"onUpdate:modelValue":l[1]||(l[1]=s=>a(r).executorHandler=s),size:"small",style:{width:"100%"},placeholder:"全部"},{default:o(()=>[(g(!0),C(W,null,X(v.jobTypeList,s=>(g(),z(y,{key:s.name,label:s.label,value:s.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(c,{label:"负责人:"},{default:o(()=>[e(p,{modelValue:a(r).author,"onUpdate:modelValue":l[2]||(l[2]=s=>a(r).author=s),placeholder:"负责人",size:"small",clearable:""},null,8,["modelValue"])]),_:1}),e(c,null,{default:o(()=>[e(f,{type:"primary",icon:"Search",size:"small",onClick:u},{default:o(()=>[h("查询")]),_:1}),e(f,{onClick:q,icon:"Refresh",size:"small"},{default:o(()=>[h("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),J((g(),z(U,{data:a(x),height:a(H),border:"",style:{width:"100%"},"element-loading-text":"加载中","element-loading-spinner":"el-icon-loading",onSelectionChange:N},{default:o(()=>[e(d,{type:"selection",width:"55"}),e(d,{prop:"id",label:"任务编号","show-overflow-tooltip":""}),e(d,{prop:"executorHandler",label:"任务类型","show-overflow-tooltip":""},{default:o(s=>[T("span",null,Y(t.getDictValue(s.row.executorHandler,v.jobTypeList)),1)]),_:1}),e(d,{prop:"jobDesc",label:"任务描述","show-overflow-tooltip":""}),e(d,{prop:"belongTable",label:"归属表","show-overflow-tooltip":""}),e(d,{prop:"author",label:"负责人","show-overflow-tooltip":""})]),_:1},8,["data","height"])),[[P,a(_)]]),e(F,{onSizeChange:B,onCurrentChange:E,"current-page":a(b),"page-size":a(w),"page-sizes":[10,20,50,100],layout:"->, total, sizes, prev, pager, next",total:a(j)},null,8,["current-page","page-size","total"]),T("div",le,[e(f,{type:"primary",onClick:S,size:"small"},{default:o(()=>[h("保存")]),_:1}),e(f,{size:"small",onClick:O},{default:o(()=>[h("取消")]),_:1})])])}}}),re=A(oe,[["__scopeId","data-v-5109d50c"]]);export{re as default};