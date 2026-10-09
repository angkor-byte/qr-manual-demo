import{Y as d,an as f,ab as o,bx as h,af as m,o as i,p as r,w as a,ai as s,ah as v,E as b,aj as L,q as y,ak as S}from"./CLSwwQsh.js";import{s as w}from"./Bszus4kd.js";import k from"./B7ELE6AX.js";import"./CN6eg5tU.js";import"./D-LuMfol.js";var g=`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 300ms;
    }

    .p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 300ms;
    }
`,E={root:function(e){var l=e.props;return["p-scrolltop",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},$=d.extend({name:"scrolltop",style:g,classes:E}),C={name:"BaseScrollTop",extends:f,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:$,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},T={name:"ScrollTop",extends:C,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(o.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(h())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){o.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){o.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:w,Button:k}};function A(n,e,l,P,c,t){var p=m("Button");return i(),r(S,s({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},n.ptm("transition")),{default:a(function(){return[c.visible?(i(),r(p,s({key:0,ref:t.containerRef,class:n.cx("root"),onClick:t.onClick,"aria-label":t.scrollTopAriaLabel,unstyled:n.unstyled},n.buttonProps,{pt:n.ptm("root")}),{icon:a(function(u){return[v(n.$slots,"icon",{class:b(n.cx("icon"))},function(){return[(i(),r(L(n.icon?"span":"ChevronUpIcon"),s({class:[n.cx("icon"),n.icon,u.class]},n.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):y("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}T.render=A;export{T as default};
