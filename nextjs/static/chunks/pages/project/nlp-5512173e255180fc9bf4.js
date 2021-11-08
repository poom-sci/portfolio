(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{6418:function(t,e,n){"use strict";var i=n(8216),r=n(5997),o=n(3444),s=n(268),c=n(2953),a=n(7294),l=n(2955),p=n.n(l),u=n(5893);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=(0,c.Z)(t);if(e){var r=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}var h=function(t){(0,o.Z)(n,t);var e=d(n);function n(){return(0,i.Z)(this,n),e.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,u.jsxs)("div",{className:p().TopicCover,children:[(0,u.jsx)("div",{className:p().box,children:(0,u.jsx)("h1",{className:p().text,children:this.props.title})}),(0,u.jsx)("img",{className:p().image,src:this.props.coverImage,alt:this.props.alt_text})]})}}]),n}(a.Component);e.Z=h},7129:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(5893);function r(t){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:t.description}),(0,i.jsx)("meta",{name:"keywords",content:t.keyword}),(0,i.jsx)("meta",{httpEquiv:"content-language",content:"th"}),(0,i.jsx)("meta",{httpEquiv:"content-type",content:"text/html",charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"revisit-after",content:"2 days"}),(0,i.jsx)("link",{rel:"canonical",href:"https://poomsci.web.app/"+t.path}),(0,i.jsx)("meta",{property:"og:title",content:t.title}),(0,i.jsx)("meta",{property:"og:site_name",content:"Poom-sci"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:image",content:"https://poomsci.web.app/cover/poom-web-cover.jpg"}),(0,i.jsx)("meta",{property:"og:description",content:t.description}),(0,i.jsx)("meta",{property:"og:url",content:"https://poomsci.web.app/"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:t.title}),(0,i.jsx)("meta",{name:"twitter:description",content:t.description}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://poomsci.web.app/cover/poom-web-cover.jpg"}),(0,i.jsx)("meta",{name:"twitter:site",content:"Poom-sci"})]})}},9074:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var i=n(9008),r=n(7129),o=n(266),s=n(809),c=n.n(s),a=(n(6995),n(6784)),l=n(5988),p=n(1564),u=n.n(p),d=n(6418),h=n(9573),x=n(8732),m=n(6926),f=n(7896),j=n(6011),g=n(3694),v=n(6501),Z=n(7294),_=n(6540),y=n(4895),w=n(1535),b=n(3343),k=n(9669),C=n.n(k),P=n(5893);function S(t){var e=(0,Z.useState)(0),n=e[0],i=e[1],r=(0,Z.useState)([]),s=r[0],p=r[1],k=function(t){s[n].label=t,s[n].isChecked=!0,s[n].updatedAt=(new Date).toUTCString(),i(n+1)},S=function(){var t=(0,o.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(0),t.next=3,C().get("https://fast-falls-78644.herokuapp.com/project/getNLPTexts");case 3:e=t.sent,p(e.data.texts);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=(0,o.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(0),p([]),e=s.slice(0,n),t.next=5,C().post("https://fast-falls-78644.herokuapp.com/project/NLPTexts",{data:e});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T="\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 fetch \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e34\u0e48\u0e21";return n<s.length?T=s[n].text:0!=s.length&&n>=s.length&&(T="\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22 \u0e01\u0e14 send data \u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e1b\u0e40\u0e01\u0e47\u0e1a"),(0,P.jsxs)("div",{className:u().container,children:[(0,P.jsx)(d.Z,{coverImage:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bert-and-ernie-gettyimages-1039579634.jpg?crop=1.00xw:0.754xh;0,0.0440xh&resize=480:*",alt_text:"homepage_cover_image",title:"Sentimental Analysis"}),(0,P.jsxs)("div",{className:u().textChooseSection,children:[(0,P.jsxs)("div",{style:{margin:"20px"},children:["\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 : ",s.length]}),(0,P.jsxs)("div",{style:{margin:"20px"},children:["\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e17\u0e33\u0e2d\u0e22\u0e39\u0e48 : ",n]}),(0,P.jsx)(l.Z,{variant:"outlined",onClick:function(){s[n].isInvalid=!0,i(n+1)},color:"warning",disabled:n>=s.length,startIcon:(0,P.jsx)(b.Z,{}),children:"Invalid"}),(0,P.jsx)("div",{style:{margin:"20px"},children:T}),(0,P.jsxs)(a.Z,{spacing:2,direction:"row",justifyContent:"center",sx:{marginBottom:"10px"},children:[(0,P.jsx)(l.Z,{variant:"outlined",color:"primary",onClick:function(){k(0)},disabled:n>=s.length,startIcon:(0,P.jsx)(_.Z,{}),children:"Positive"}),(0,P.jsx)(l.Z,{variant:"outlined",color:"secondary",onClick:function(){k(1)},disabled:n>=s.length,startIcon:(0,P.jsx)(w.Z,{}),children:"Neutral"}),(0,P.jsx)(l.Z,{variant:"outlined",onClick:function(){k(2)},color:"error",disabled:n>=s.length,startIcon:(0,P.jsx)(y.Z,{}),children:"Negative"})]}),(0,P.jsx)(f.Z,{component:v.Z,children:(0,P.jsxs)(h.Z,{sx:{},size:"small","aria-label":"a dense table",children:[(0,P.jsx)(j.Z,{children:(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(m.Z,{children:"Text \u0e17\u0e35\u0e48\u0e17\u0e33\u0e41\u0e25\u0e49\u0e27"}),(0,P.jsx)(m.Z,{align:"right",children:"Score"}),(0,P.jsx)(m.Z,{align:"right",children:"Edit"})]})}),(0,P.jsx)(x.Z,{children:s.map((function(t,e){return e>=n?null:(0,P.jsxs)(g.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,P.jsx)(m.Z,{component:"th",scope:"row",children:t.text}),(0,P.jsx)(m.Z,{align:"right",children:t.label}),(0,P.jsx)(m.Z,{align:"right",children:(0,P.jsx)(l.Z,{variant:"contained",onClick:function(){p((function(e){return i(n-1),e.filter((function(e,n){return t._id!=e._id}))}))},children:"Remove"})})]},t.text)}))})]})}),(0,P.jsxs)(a.Z,{spacing:2,direction:"row",justifyContent:"center",style:{margin:"20px"},children:[(0,P.jsx)(l.Z,{variant:"contained",onClick:function(){S()},children:"Fetch Data"}),(0,P.jsx)(l.Z,{variant:"outlined",onClick:function(){i(0),p([])},children:"Reset Data"}),(0,P.jsx)(l.Z,{variant:"contained",onClick:function(){N()},color:"success",disabled:n<=0,children:"Send Data"})]})]})]})}function N(){return(0,P.jsxs)("div",{children:[(0,P.jsxs)(i.default,{children:[(0,P.jsx)("title",{children:"Poom Suchao-in: Sentimental Analysis"}),(0,P.jsx)(r.Z,{path:"project/nlp",title:"Poom Suchao-in: Sentimental Analysis",keyword:"Poom,Suchao-in,Poom Suchao-in,developer,\u0e20\u0e39\u0e21\u0e34 \u0e2a\u0e38\u0e40\u0e0a\u0e32\u0e27\u0e4c\u0e2d\u0e34\u0e19\u0e17\u0e23\u0e4c,\u0e2a\u0e38\u0e40\u0e0a\u0e32\u0e27\u0e4c\u0e2d\u0e34\u0e19\u0e17\u0e23\u0e4c,\u0e08\u0e38\u0e2c\u0e32,Pomelo,intern",description:"Poom Suchao-in: portfolio website"})]}),(0,P.jsx)(S,{})]})}},2136:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/nlp",function(){return n(9074)}])},2955:function(t){t.exports={TopicCover:"TopicImage_TopicCover__27WRz",image:"TopicImage_image__1pK8k",text:"TopicImage_text__3PF54",box:"TopicImage_box__3s5vg"}},1564:function(t){t.exports={textChooseSection:"NLPPage_textChooseSection__17ge5"}}},function(t){t.O(0,[540,774,888,179],(function(){return e=2136,t(t.s=e);var e}));var e=t.O();_N_E=e}]);