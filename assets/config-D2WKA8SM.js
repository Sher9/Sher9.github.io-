import{C as t}from"./element-Di_zbn_f.js";const s=(o,r,a)=>t({url:"/wfjobInfo/getWorkGroupList",method:"get",params:{...a,page:o,pageSize:r}}),n=o=>t({url:"/wfjobInfo/workflowDetails",method:"post",params:{id:o}}),u=o=>t({url:"/wfjobInfo/deleteWorkGroup",method:"post",params:{ids:o}}),d=o=>t({url:"/wfjobInfo/addWorkGroup",method:"post",data:o}),p=o=>t({url:"/wfjobInfo/updateWorkGroup",method:"post",data:o}),f=o=>t({url:"/wfjobInfo/configuration",method:"post",data:o});export{n as a,d as b,s as g,u as r,f as s,p as u};
