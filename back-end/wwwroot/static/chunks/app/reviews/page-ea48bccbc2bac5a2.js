(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{5775:function(e,a,l){Promise.resolve().then(l.bind(l,3087))},9007:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return s}});var n=l(3827);l(4090);var t=l(2423);function s(e){let{name:a,onClickMessage:l,type:s="button",disabled:i,size:m="md"}=e;return(0,n.jsx)(t.A,{color:"default",onClick:()=>{l&&alert(l)},type:s,disabled:i,size:m,children:a})}},3087:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return u}});var n=l(3827),t=l(4090),s=e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),i=l(5794),m=e=>{let{review:a}=e,[l,m]=t.useState(!1),r=l?a.comment:"".concat(a.comment.slice(0,600)).concat(a.comment.length>600?"...":"");return(0,n.jsxs)("div",{className:" border-b border-gray-400 p-4",children:[(0,n.jsx)("div",{className:"text-xl font-medium font-sans",children:a.name}),(0,n.jsx)("div",{children:s(a.date)}),(0,n.jsx)("div",{className:" ",children:(0,n.jsx)(i.Z,{value:a.rating,edit:!1,size:21,activeColor:"#ffd700"})}),(0,n.jsx)("div",{children:r}),(0,n.jsx)("div",{className:"mt-2",children:a.comment.length>600&&(0,n.jsx)("button",{className:"border-b-2 border-gray-400 pb-0.1 mb-0.1",onClick:()=>m(!l),children:l?"Read Less":"Read More"})})]})},r=l(4634),d=l(9007),c=l(1231),o=e=>{let{addReview:a}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-2xl font-sans py-4",children:"Leave a Review"}),(0,n.jsx)("div",{className:"py-4",children:"Your email address will not be published. Required fields are marked *"}),(0,n.jsx)(r.J9,{initialValues:{comment:"",name:"",email:"",phone:"",rating:0,date:"",id:Number((0,c.Z)())},validate:e=>{let a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Email field can't be empty equired",e.name||(a.name="Name field can't be empty equired"),e.comment||(a.comment="Comment field can't be empty equired"),console.log(a),a},onSubmit:(e,l)=>{let{resetForm:n}=l;(0,c.Z)();let t=new Date().toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});a({id:e.id,name:e.name,email:e.email,rating:Number(e.rating)||0,comment:e.comment,date:t}),n()},children:e=>{let{values:a,errors:l,touched:t,handleChange:s,handleBlur:m,handleSubmit:r,isSubmitting:c,setFieldValue:o,resetForm:u}=e;return(0,n.jsxs)("form",{className:"",onSubmit:r,children:[(0,n.jsx)("div",{className:"w-full font-medium ",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("textarea",{className:"w-full p-2 h-32",name:"comment",placeholder:"Comment *",onChange:s,onBlur:m,value:a.comment}),(0,n.jsx)("div",{className:"text-red-600 absolute top-full text-sm",children:l.comment&&t.comment&&l.comment})]})}),(0,n.jsxs)("div",{className:"flex justify-between my-8",children:[(0,n.jsxs)("span",{className:"basis-6/12 mr-8 relative",children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{className:"w-full p-2 h-12",type:"text",name:"name",placeholder:"Name *",onChange:s,onBlur:m,value:a.name})}),(0,n.jsx)("div",{className:"text-red-600 absolute top-full text-sm",children:l.name&&t.name&&l.name})]}),(0,n.jsxs)("span",{className:"basis-6/12 relative",children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{className:"w-full p-2 h-12",type:"email",name:"email",placeholder:"Email *",onChange:s,onBlur:m,value:a.email})}),(0,n.jsx)("div",{className:"text-red-600 absolute top-full text-sm",children:l.email&&t.email&&l.email})]})]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{className:"w-full p-2 h-12 ",type:"tel",name:"phone",placeholder:"Phone (optional)",onChange:s,onBlur:m,value:a.phone}),(0,n.jsx)("div",{className:"text-red-600 absolute top-full text-sm",children:l.phone&&t.phone&&l.phone})]}),(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{count:5,edit:!0,onChange:e=>{o("rating",e)},size:50,activeColor:"#ffd700"})}),(0,n.jsx)("div",{className:"mt-8",children:(0,n.jsx)(d.default,{name:"Post Review",type:"submit",disabled:c,size:"lg"})})]})}})]})},u=e=>{let{reviews:a}=e,[l,s]=(0,t.useState)([]),[i,r]=(0,t.useState)(5);return(0,t.useEffect)(()=>{a&&s(a)},[a]),(0,n.jsx)("div",{className:" bg-gray-200 flex flex-wrap justify-center min-h-screen",children:(0,n.jsxs)("div",{className:"md:mx-20 max-w-[60rem]  p-12 ",children:[l.length>0?(0,n.jsxs)("div",{className:"py-4 h-[50rem] max-h-[50rem] overflow-y-auto scroll-smooth",children:[l.slice(0,i).map(e=>(0,n.jsx)("div",{className:"my-10",children:(0,n.jsx)(m,{review:e})},e.id)),i<l.length&&(0,n.jsx)("button",{className:"border-b-1 border-gray-500 pb-0.1 mb-0.1",onClick:()=>{r(e=>e+5)},children:"READ MORE REVIEWS"})]}):(0,n.jsx)("div",{className:"py-4 h-[50rem] w-[60rem] max-h-[50rem] flex justify-center content-center items-center",children:"Loading..."}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(o,{addReview:e=>{s(a=>[...a,e])}})})]})})}}},function(e){e.O(0,[432,423,187,971,69,744],function(){return e(e.s=5775)}),_N_E=e.O()}]);