webpackJsonp([24],{103:function(e,t,a){var o=a(0)(a(406),a(448),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/form/form3.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] form3.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},406:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{mode:"single",data:{input:"",textarea:"",radio:1,rate:null,checkbox:[1],select1:"人民币",select2:"",money:{min:null,max:null},date:null,inputs:[]},dataParam:{1:"男",2:"女",3:"其他"},param1:["美金","人民币","卢布"],isLoading:!1,modeParam:{single:"一个区块一行",block:"标题独立一行",twocolumn:"两列一行"},validationRules:{required:["select2","inputs[].value","input","textarea","radio","rate","checkbox","money","date","money.min","money.max"]}}},methods:{add:function(){this.data.inputs.push({value:""})},remove:function(e){this.data.inputs.splice(e,1)}}}},448:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"height",rawName:"v-height",value:50,expression:"50"}]},[a("SwitchList",{attrs:{datas:e.modeParam,small:!0},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}})],1),e._v(" "),a("Form",{attrs:{"label-width":90,mode:e.mode,model:e.data,rules:e.validationRules}},[a("FormItem",{attrs:{single:!0,label:"输入框",prop:"input",required:!0}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.input,expression:"data.input"}],attrs:{type:"text"},domProps:{value:e.data.input},on:{input:function(t){t.target.composing||(e.data.input=t.target.value)}}})]),e._v(" "),a("FormItem",{attrs:{label:"金额",required:!0}},[a("div",{staticClass:"h-input-group"},[a("div",{staticClass:"h-input-addon"},[a("Select",{attrs:{datas:e.param1,"no-border":!0,"null-option":!1},model:{value:e.data.select1,callback:function(t){e.data.select1=t},expression:"data.select1"}})],1),e._v(" "),a("FormItem",{attrs:{prop:"money.min",label:"起始金额","show-label":!1}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.money.min,expression:"data.money.min"}],attrs:{type:"text",placeholder:"起始金额"},domProps:{value:e.data.money.min},on:{input:function(t){t.target.composing||(e.data.money.min=t.target.value)}}})]),e._v(" "),a("span",{staticClass:"h-input-addon"},[e._v("-")]),e._v(" "),a("FormItem",{attrs:{prop:"money.max",label:"结束金额","show-label":!1}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.money.max,expression:"data.money.max"}],attrs:{type:"text",placeholder:"结束金额"},domProps:{value:e.data.money.max},on:{input:function(t){t.target.composing||(e.data.money.max=t.target.value)}}})]),e._v(" "),a("span",{staticClass:"h-input-addon"},[e._v("K")])],1)]),e._v(" "),a("FormItem",{attrs:{label:"选择",required:!0,prop:"select2"}},[a("Select",{attrs:{dict:"simple"},model:{value:e.data.select2,callback:function(t){e.data.select2=t},expression:"data.select2"}})],1),e._v(" "),a("FormItem",{attrs:{label:"日期",required:!0,prop:"date"}},[a("DatePicker",{attrs:{placeholder:"选择日期"},model:{value:e.data.date,callback:function(t){e.data.date=t},expression:"data.date"}})],1),e._v(" "),a("FormItem",{attrs:{label:"评分",required:!0,prop:"rate"}},[a("Rate",{attrs:{"show-text":!0},model:{value:e.data.rate,callback:function(t){e.data.rate=t},expression:"data.rate"}})],1),e._v(" "),a("FormItem",{attrs:{label:"多文本",single:!0,required:!0,prop:"textarea"}},[a("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model",value:e.data.textarea,expression:"data.textarea"}],attrs:{rows:"3"},domProps:{value:e.data.textarea},on:{input:function(t){t.target.composing||(e.data.textarea=t.target.value)}}})]),e._v(" "),a("FormItem",{attrs:{label:"单选",prop:"radio"}},[a("Radio",{attrs:{datas:e.dataParam},model:{value:e.data.radio,callback:function(t){e.data.radio=t},expression:"data.radio"}})],1),e._v(" "),a("FormItem",{attrs:{label:"多选",prop:"checkbox"}},[a("Checkbox",{attrs:{datas:e.dataParam},model:{value:e.data.checkbox,callback:function(t){e.data.checkbox=t},expression:"data.checkbox"}})],1),e._v(" "),a("FormItemList",e._l(e.data.inputs,function(t,o){return a("FormItem",{key:t,attrs:{label:"输入框"+(o+1),required:!0,prop:"inputs["+o+"].value"}},[a("Col",{attrs:{width:"18"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),e._v(" "),a("Col",{staticClass:"text-right",attrs:{width:"6"}},[a("Button",{directives:[{name:"width",rawName:"v-width",value:"90%",expression:"'90%'"}],attrs:{"text-color":"red",icon:"trash"},on:{click:function(t){e.remove(o)}}},[e._v("删除")])],1)],1)})),e._v(" "),a("FormItem",{attrs:{single:!0}},[a("Button",{attrs:{size:"s","text-color":"blue"},on:{click:e.add}},[e._v("添加输入框")])],1),e._v(" "),a("FormItem",{attrs:{"no-padding":!0}},[a("Button",{attrs:{color:"primary",loading:e.isLoading},on:{click:function(t){e.isLoading=!e.isLoading}}},[e._v("提交")]),e._v("   "),a("Button",{on:{click:function(t){e.isLoading=!e.isLoading}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});