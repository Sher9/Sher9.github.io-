import{C as t}from"./element-Di_zbn_f.js";const a=(e,o,s)=>t({url:"/schedulejobinfo/list",method:"get",params:{...s,current:e,size:o}}),u=e=>t({url:"/schedulejobinfo/save",method:"post",data:e}),d=e=>t({url:"/schedulejobinfo/update",method:"post",data:e}),n=e=>t({url:"/schedulejobinfo/removeJobs",method:"post",data:e}),m=e=>t({url:"/schedulejobinfo/pauseJobs",method:"post",data:e}),c=e=>t({url:"/schedulejobinfo/resumeJobs",method:"post",data:e}),i=e=>t({url:"/schedulejobinfo/nextTriggerTime",method:"get",params:e});export{i as a,c as b,u as c,a as g,n as r,m as s,d as u};
