import{_,V as g,o as h,c as v,p as e,H as a,M as p,t as c,W as f,I as b,F as y,D as x,X as S,z as I,A as V}from"./index.210d9260.js";const D={mounted(){this.form.email.value=localStorage.getItem("myemail")},data(){return{remsg:"",remsgg:"",form:{name:{value:"",msg:""},gender:{value:"1",msg:""},date:{value:"1990-01-01",msg:""},time:{value:"12:00",msg:""},address:{value:"",msg:""},addresslist:["\u53F0\u5317\u5E02","\u65B0\u5317\u5E02","\u57FA\u9686\u5E02","\u6843\u5712\u5E02","\u65B0\u7AF9\u5E02","\u65B0\u7AF9\u7E23","\u82D7\u6817\u7E23","\u53F0\u4E2D\u5E02","\u5F70\u5316\u7E23","\u5357\u6295\u7E23","\u96F2\u6797\u7E23","\u5609\u7FA9\u5E02","\u5609\u7FA9\u7E23","\u53F0\u5357\u5E02","\u9AD8\u96C4\u5E02","\u5C4F\u6771\u7E23","\u5B9C\u862D\u7E23","\u82B1\u84EE\u7E23","\u53F0\u6771\u7E23","\u6F8E\u6E56\u7E23","\u91D1\u9580\u7E23","\u99AC\u7956\u7E23"],phone:{value:"",msg:""},email:{value:""}},submitDisabled:!0}},methods:{nativeValidate(l,t){let d=g(l.phone.value);const m=[d];switch(t){case"phone":d==!0?l.phone.msg="":l.phone.msg="\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\u932F\u8AA4\u6216\u672A\u8F38\u5165";break}let s=m.find(n=>n==!1);s==null?this.submitDisabled=!1:this.submitDisabled=!0,console.log("form: ",m,s)},nativeSubmit(){if(this.submitDisabled){let l=this.form.name.value,t=this.form.gender.value,d=this.form.date.value,m=this.form.time.value,s=this.form.address.value,n=this.form.phone.value,o=this.form.email.value;console.log(l),console.log(t),console.log(d),console.log(m),console.log(s),console.log(n),console.log(o),console.log("\u8868\u55AE\u8A3B\u518A\u5931\u6557")}else{let l=this.form.name.value,t=this.form.gender.value,d=this.form.date.value,m=this.form.time.value,s=this.form.address.value,n=this.form.phone.value,o=this.form.email.value,r=new FormData;r.append("Email",o),r.append("Name",l),r.append("Sex",t),r.append("Birth",d),r.append("BirthTime",m),r.append("BirthPlace",s),r.append("Phone",n),fetch("https://astria.sutsanyuan.com/Astria_api/SecSignup",{method:"POST",body:r,redirect:"follow"}).then(u=>u.json()).then(u=>{console.log(u),this.remsg=u.Status,this.remsg==1&&(console.log(this.remsg),this.$router.push("/logIn"))}).catch(u=>console.log("error",u))}}}},i=l=>(I("data-v-0e03b642"),l=l(),V(),l),U={class:"BG"},T={class:"container-xl mt-5"},F={class:"row justify-content-center myInfor"},q={class:"col-12 buttonForm"},w={class:"page"},B={class:"card inputForm"},k=i(()=>e("h2",null,"\u57FA\u672C\u8CC7\u6599",-1)),M={class:"d-flex inputItem"},P=i(()=>e("label",{for:""},"\u59D3\u540D",-1)),E={class:"el-form-item__error"},N={class:"d-flex inputItem radiocontent"},O=i(()=>e("label",{class:"l1"},"\u6027\u5225",-1)),G=i(()=>e("p",{class:"radioTxt"},"Male",-1)),j=i(()=>e("p",{class:"radioTxt"},"Female",-1)),A=i(()=>e("p",{class:"radioTxt"},"Others",-1)),C={class:"d-flex inputItem"},z=i(()=>e("label",{for:""},"\u751F\u65E5",-1)),H={class:"el-form-item__error"},L={class:"d-flex inputItem"},R=i(()=>e("label",{for:""},"\u51FA\u751F\u6642\u9593",-1)),W={class:"el-form-item__error"},X={class:"d-flex inputItem"},J=i(()=>e("label",{for:""},"\u51FA\u751F\u5730",-1)),K=i(()=>e("option",{value:"",disabled:""},"-- \u8ACB\u9078\u64C7\u51FA\u751F\u5730 --",-1)),Q=["value"],Y={class:"d-flex inputItem"},Z=i(()=>e("label",null,"\u96FB\u8A71",-1)),$={class:"el-form-item__error"},ee=["disabled"];function se(l,t,d,m,s,n){return h(),v("div",U,[e("div",T,[e("div",F,[e("div",q,[e("div",w,[e("div",B,[k,e("div",M,[P,a(e("input",{type:"text",class:"t1","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.name.value=o),placeholder:"\u8ACB\u8F38\u5165\u59D3\u540D",required:"",autofocus:""},null,512),[[p,s.form.name.value]]),e("div",E,c(s.form.name.msg),1)]),e("div",N,[O,a(e("input",{class:"t2","onUpdate:modelValue":t[1]||(t[1]=o=>s.form.gender.value=o),type:"radio",value:"1"},null,512),[[f,s.form.gender.value]]),G,a(e("input",{class:"t2","onUpdate:modelValue":t[2]||(t[2]=o=>s.form.gender.value=o),type:"radio",value:"2"},null,512),[[f,s.form.gender.value]]),j,a(e("input",{class:"t2","onUpdate:modelValue":t[3]||(t[3]=o=>s.form.gender.value=o),type:"radio",value:"0"},null,512),[[f,s.form.gender.value]]),A]),e("div",C,[z,a(e("input",{type:"date",class:"t1","onUpdate:modelValue":t[4]||(t[4]=o=>s.form.date.value=o),name:"getday",required:""},null,512),[[p,s.form.date.value]]),e("div",H,c(s.form.date.msg),1)]),e("div",L,[R,a(e("input",{type:"time",class:"t1","onUpdate:modelValue":t[5]||(t[5]=o=>s.form.time.value=o),name:"gettime",required:""},null,512),[[p,s.form.time.value]]),e("div",W,c(s.form.time.msg),1)]),e("div",X,[J,a(e("select",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.address.value=o),class:"t1",required:""},[K,(h(!0),v(y,null,x(s.form.addresslist,o=>(h(),v("option",{key:o,value:o},c(o),9,Q))),128))],512),[[b,s.form.address.value]])]),e("div",Y,[Z,a(e("input",{type:"text",class:"t1","onUpdate:modelValue":t[7]||(t[7]=o=>s.form.phone.value=o),onChange:t[8]||(t[8]=o=>n.nativeValidate(s.form,"phone")),placeholder:"\u8ACB\u8F38\u5165\u96FB\u8A71",required:""},null,544),[[p,s.form.phone.value]]),e("div",$,c(s.form.phone.msg),1)]),e("div",null,[e("button",{onClick:t[9]||(t[9]=S((...o)=>n.nativeSubmit&&n.nativeSubmit(...o),["prevent"])),disabled:l.status}," \u9001\u51FA ",8,ee)])])])])])])])}const le=_(D,[["render",se],["__scopeId","data-v-0e03b642"]]);export{le as default};