webpackJsonp([44],{515:function(t,e,o){var n=o(0)(o(564),o(719),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/message/modal.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},564:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(626),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{open1:!1,open2:!1,open3:!1,open4:!1,open5:!1,test:s.default}},methods:{confirm:function(){this.$Message("确定了。"),this.close()},close:function(){this.open1=!1,this.open2=!1,this.open3=!1,this.open4=!1},confirm2:function(){var t=this;this.$Confirm("确定删除？").then(function(){t.$Message.success("确定删除！")})},modal:function(){this.$Modal({title:"自定义的弹出框",content:"<p>自定义的弹出框测试</p><p>自定义的弹出框测试</p>"})},modal2:function(){var t=this;this.$Modal({title:"自定义的弹出框2",content:"<p>自定义的弹出框测试2</p><p>自定义的弹出框测试2</p>",buttons:["cancel",{type:"delete",name:"删除",color:"red"}],events:{delete:function(e){e.close(),t.$Message.success("确定删除！")}}})},modalComponent:function(){this.open5=!0}}}},565:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:{param:Object}}},626:function(t,e,o){var n=o(0)(o(565),o(668),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/message/modalTest.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] modalTest.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},668:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",[t._v("测试")]),t._v(" "),o("div",[t._v(t._s(t.param.a))]),t._v(" "),o("footer")])},staticRenderFns:[]},t.exports.render._withStripped=!0},719:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"doc"},[o("h2",[t._v("Modal 弹出框")]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:function(e){t.open1=!0}}},[t._v("打开弹出框")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:function(e){t.open2=!0}}},[t._v("打开无遮罩弹出框")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:function(e){t.open3=!0}}},[t._v("点击遮罩无法关闭")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:function(e){t.open4=!0}}},[t._v("打开居中的弹出框")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:t.confirm2}},[t._v("使用方法调用Confirm")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:t.modal}},[t._v("使用方法调用Modal")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:t.modal2}},[t._v("使用方法调用Modal2")])]),t._v(" "),o("p",[o("button",{staticClass:"h-btn",on:{click:t.modalComponent}},[t._v("调用组件式的Modal")])]),t._v(" "),o("Modal",{model:{value:t.open1,callback:function(e){t.open1=e},expression:"open1"}},[o("div",{slot:"header"},[t._v("标题")]),t._v(" "),o("div",[t._v("这是一个普通的弹出框")]),t._v(" "),o("div",{slot:"footer"},[o("button",{staticClass:"h-btn h-btn-primary",on:{click:t.confirm}},[t._v("确定")]),o("button",{staticClass:"h-btn",on:{click:t.close}},[t._v("取消")])])]),t._v(" "),o("ModalComponent",{attrs:{component:t.test,"props-data":{a:1}},model:{value:t.open5,callback:function(e){t.open5=e},expression:"open5"}}),t._v(" "),o("Modal",{attrs:{"has-mask":!1},model:{value:t.open2,callback:function(e){t.open2=e},expression:"open2"}},[o("div",{slot:"header"},[t._v("标题")]),t._v(" "),o("div",[t._v("这是一个无遮罩的弹出框")]),t._v(" "),o("div",{slot:"footer"},[o("button",{staticClass:"h-btn h-btn-primary",on:{click:t.confirm}},[t._v("确定")]),o("button",{staticClass:"h-btn",on:{click:t.close}},[t._v("取消")])])]),t._v(" "),o("Modal",{attrs:{"close-on-mask":!1},model:{value:t.open3,callback:function(e){t.open3=e},expression:"open3"}},[o("div",{slot:"header"},[t._v("标题")]),t._v(" "),o("div",[t._v("这是一个点击遮罩无法关闭的弹出框")]),t._v(" "),o("div",{slot:"footer"},[o("button",{staticClass:"h-btn h-btn-primary",on:{click:t.confirm}},[t._v("确定")]),o("button",{staticClass:"h-btn",on:{click:t.close}},[t._v("取消")])])]),t._v(" "),o("Modal",{attrs:{middle:!0},model:{value:t.open4,callback:function(e){t.open4=e},expression:"open4"}},[o("div",{slot:"header"},[t._v("标题")]),t._v(" "),o("div",[t._v("这是一个居中的弹出框")]),t._v(" "),o("div",{slot:"footer"},[o("button",{staticClass:"h-btn h-btn-primary",on:{click:t.confirm}},[t._v("确定")]),o("button",{staticClass:"h-btn",on:{click:t.close}},[t._v("取消")])])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});