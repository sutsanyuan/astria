import{_,u as p,S as h,V as v,o as c,c as u,p as e,H as m,M as f,t as d,I as g,F as x,D as y,z as b,A as F,r as w,q as C}from"./index.210d9260.js";const k="/astria/assets/logo.c94094b0.png";const D={setup(){return p(),{}},mounted(){this.form.email.value=localStorage.getItem("myemail")},data(){return{remsg:"",remsgg:"",form:{name:{value:"",msg:""},gender:{value:"male",msg:""},date:{value:"1990-01-01",msg:""},time:{value:"12:00",msg:""},address:{value:"",msg:""},addresslist:["\u53F0\u5317\u5E02","\u65B0\u5317\u5E02","\u57FA\u9686\u5E02","\u6843\u5712\u5E02","\u65B0\u7AF9\u5E02","\u65B0\u7AF9\u7E23","\u82D7\u6817\u7E23","\u53F0\u4E2D\u5E02","\u5F70\u5316\u7E23","\u5357\u6295\u7E23","\u96F2\u6797\u7E23","\u5609\u7FA9\u5E02","\u5609\u7FA9\u7E23","\u53F0\u5357\u5E02","\u9AD8\u96C4\u5E02","\u5C4F\u6771\u7E23","\u5B9C\u862D\u7E23","\u82B1\u84EE\u7E23","\u53F0\u6771\u7E23","\u6F8E\u6E56\u7E23","\u91D1\u9580\u7E23","\u99AC\u7956\u7E23"],phone:{value:"",msg:""},email:{value:""}},submitDisabled:!0}},methods:{submitData(){this.form.name.value!=""&&this.form.date.value!=""&&this.form.time.value!=""&&this.form.address.value!=""?(this.$store.commit("setCurrentData",{name:this.form.name.value,birthday:this.form.date.value,birthTime:this.form.time.value,location:this.form.address.value}),this.$store.commit("setCurrentUTCtime"),this.$store.dispatch("addFriend",{email:localStorage.getItem("myemail"),name:this.form.name.value,birthday:this.form.date.value,birthTime:this.form.time.value,birthPlace:this.form.address.value}),this.$router.push("/currentChart")):h.fire({title:"\u7F3A\u4E00\u4E0D\u53EF\uFF01",text:"\u8ACB\u8F38\u5165\u5B8C\u6574\u8CC7\u6599",iconColor:"rgba(0,2,53,0.3)",showCancelButton:!1,confirmButtonColor:"rgba(0,2,53,0.5)",confirmButtonText:"\u7E7C\u7E8C\u8F38\u5165",allowOutsideClick:!1,imageUrl:k,imageWidth:150,imageHeight:150,imageAlt:"Astria Logo"}).then(a=>{a.isConfirmed})},nativeValidate(a,o){let r=v(a.phone.value);const n=[r];switch(o){case"phone":r==!0?a.phone.msg="":a.phone.msg="\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\u932F\u8AA4\u6216\u672A\u8F38\u5165";break}let s=n.find(l=>l==!1);s==null?this.submitDisabled=!1:this.submitDisabled=!0,console.log("form: ",n,s)}}},i=a=>(b("data-v-82555fe3"),a=a(),F(),a),S={class:"container m-auto mt-5 d-flex justify-content-center"},A={class:"row align-items-center justify-content-center w-100"},I={class:"block col-12 col-md-8 d-flex flex-column align-items-center justify-content-center"},V=i(()=>e("h1",{class:"my-5 align-self-center"},"\u65B0\u589E\u597D\u53CB",-1)),B={class:"d-flex flex-column w-md-75 fs-4"},T={class:"w-100 d-flex my-3"},U=i(()=>e("span",{class:"flex-shrink-1 px-3 px-md-4 ps-0"},"\u59D3\u540D",-1)),q={class:"el-form-item__error"},P={class:"w-100 d-flex my-3"},j=i(()=>e("span",{class:"flex-shrink-1 px-3 px-md-4 ps-0"},"\u51FA\u751F\u65E5\u671F",-1)),M={class:"el-form-item__error"},$={class:"w-100 d-flex my-3"},z=i(()=>e("span",{class:"flex-shrink-1 px-3 px-md-4 ps-0"},"\u51FA\u751F\u6642\u9593",-1)),H={class:"el-form-item__error"},L={class:"w-100 d-flex my-3"},N=i(()=>e("span",{class:"flex-shrink-1 px-3 px-md-4 ps-0"},"\u51FA\u751F\u5730\u9EDE",-1)),E=i(()=>e("option",{value:"",disabled:""},"-- \u8ACB\u9078\u64C7\u51FA\u751F\u5730 --",-1)),G=["value"],O={class:"my-5 mx-auto"};function W(a,o,r,n,s,l){return c(),u("div",S,[e("div",A,[e("div",I,[V,e("form",B,[e("div",T,[U,m(e("input",{class:"input-style flex-fill",type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name.value=t),placeholder:"\u8ACB\u8F38\u5165\u59D3\u540D",required:""},null,512),[[f,s.form.name.value]])]),e("div",q,d(s.form.name.msg),1),e("div",P,[j,m(e("input",{class:"input-style flex-fill",type:"date","onUpdate:modelValue":o[1]||(o[1]=t=>s.form.date.value=t),name:"getday",required:""},null,512),[[f,s.form.date.value]]),e("div",M,d(s.form.date.msg),1)]),e("div",$,[z,m(e("input",{class:"input-style flex-fill",type:"time","onUpdate:modelValue":o[2]||(o[2]=t=>s.form.time.value=t),name:"gettime",required:""},null,512),[[f,s.form.time.value]]),e("div",H,d(s.form.time.msg),1)]),e("div",L,[N,m(e("select",{class:"input-style flex-fill","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.address.value=t)},[E,(c(!0),u(x,null,y(s.form.addresslist,t=>(c(),u("option",{key:t,value:t},d(t),9,G))),128))],512),[[g,s.form.address.value]])])]),e("div",O,[e("button",{onClick:o[4]||(o[4]=(...t)=>l.submitData&&l.submitData(...t)),class:"btn btn-lg btn-customized btn-secondary"}," \u65B0\u589E\u597D\u53CB\u661F\u76E4 ")])])])])}const J=_(D,[["render",W],["__scopeId","data-v-82555fe3"]]);const K={components:{chartFormAddFriend:J}},Q={class:"BG"},R={class:"container my-5"},X={class:"row"};function Y(a,o,r,n,s,l){const t=w("chartFormAddFriend");return c(),u("div",Q,[e("div",R,[e("div",X,[C(t)])])])}const ee=_(K,[["render",Y],["__scopeId","data-v-f8ad889a"]]);export{ee as default};
