"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[348],{32574:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(77810),r=a(75826),l=a.n(r),c=a(59146),i=a(21052);const s=({address:e})=>n.createElement(c.a,null,n.createElement(i.E,null,e.firstName," ",e.lastName),n.createElement(i.E,null,e.address1),n.createElement(i.E,null,e.city,", ",e.stateCode," ",e.postalCode),n.createElement(i.E,null,e.countryCode));s.propTypes={address:l().object};const o=s},33880:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(28407),r=a(10939),l=a(77810),c=a(41863),i=a(16602),s=a(59146),o=a(69290),m=a(65958),u=a(85353),d=a(21052),p=a(42504),E=a(28137),f=a(34466),g=a(76944),y=a(3411),h=a(99378),v=a(67234),b=a(49785),A=a(64965),_=a(90031),x=a(41159),S=a(84470),k=a(47021),w=a(32574),j=a(64180),B=a(75826),M=a.n(B),O=a(55939),D=a(54666),I=a(89891);const N=({form:e,prefix:t=""})=>{const a=(0,O.A)({form:e,prefix:t}),n=e.watch(`${t}password`);return l.createElement(s.a,null,l.createElement(m.B,{spacing:5},l.createElement(I.A,a.email),l.createElement(m.B,{spacing:3,paddingBottom:2},l.createElement(I.A,a.password),l.createElement(D.A,{value:n}))),l.createElement(I.A,(0,j.A)({},a.firstName,{type:"hidden"})),l.createElement(I.A,(0,j.A)({},a.lastName,{type:"hidden"})))};N.propTypes={form:M().object.isRequired,prefix:M().string};const C=N;var T=a(12410),P=a(53872),L=a(65275),z=a(20535),W=a(25029),G=a(29307),H=a(5332),F=a(66322),$=a(45495);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){(0,r.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const R="undefined"!=typeof window,U=()=>{var e,t,a,r,j,B,M,O,D,I,N,q,U,Y;const{orderNo:J}=(0,A.g)(),Q=(0,S.A)(),{data:V}=(0,H.J)(),X=(0,_.useAuthHelper)(_.AuthHelpers.Register),{data:Z}=(0,_.useOrder)({parameters:{orderNo:J}},{enabled:!!J&&R}),{currency:ee}=(0,$.H2)(),te=null==Z?void 0:Z.productItems.map((e=>e.productId)),{data:ae}=(0,_.useProducts)({parameters:{ids:null==te?void 0:te.join(",")}}),ne=null==ae?void 0:ae.data.reduce(((e,t)=>K(K({},e),{},{[t.id]:t})),{}),re=(0,b.mN)();if((0,l.useEffect)((()=>{var e,t,a;re.reset({email:(null==Z||null===(e=Z.customerInfo)||void 0===e?void 0:e.email)||"",password:"",firstName:null==Z||null===(t=Z.billingAddress)||void 0===t?void 0:t.firstName,lastName:null==Z||null===(a=Z.billingAddress)||void 0===a?void 0:a.lastName})}),[Z]),!Z||!Z.orderNo)return null;const le=(0,x.N0)(null===(e=Z.paymentInstruments[0].paymentCard)||void 0===e?void 0:e.cardType),ce=function(){var e=(0,n.A)((function*(e){try{const t={customer:{firstName:e.firstName,lastName:e.lastName,email:e.email,login:e.email},password:e.password};yield X.mutateAsync(t),Q("/account")}catch(e){if(!e.response)return void re.setError("global",{type:"manual",message:F.gS});const t=yield e.response.json(),a=l.createElement(l.Fragment,null,l.createElement(c.A,{defaultMessage:[{type:0,value:"This email already has an account."}],id:"checkout_confirmation.message.already_has_account"})," ",l.createElement(k.A,{to:"/login",color:"blue.600"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Log in here"}],id:"checkout_confirmation.link.login"}))),n=/the login is already in use/i.test(t.detail)?a:F.gS;re.setError("global",{type:"manual",message:n})}}));return function(t){return e.apply(this,arguments)}}();return l.createElement(s.a,{background:"gray.50"},l.createElement(o.m,{maxWidth:"container.md",py:{base:7,md:16},px:{base:0,md:4},"data-testid":"sf-checkout-confirmation-container"},l.createElement(m.B,{spacing:4},l.createElement(s.a,{layerStyle:"card",rounded:[0,0,"base"],px:[4,4,6],py:[6,6,8]},l.createElement(m.B,{spacing:6},l.createElement(u.D,{align:"center",fontSize:["2xl"]},l.createElement(c.A,{defaultMessage:[{type:0,value:"Thank you for your order!"}],id:"checkout_confirmation.heading.thank_you_for_order"})),l.createElement(s.a,null,l.createElement(o.m,{variant:"form"},l.createElement(m.B,{spacing:3},l.createElement(d.E,{align:"center"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Order Number"}],id:"checkout_confirmation.label.order_number"}),":"," ",l.createElement(d.E,{as:"span",fontWeight:"bold"},Z.orderNo)),l.createElement(d.E,{align:"center"},l.createElement(c.A,{defaultMessage:[{type:0,value:"We will send an email to "},{type:8,value:"b",children:[{type:1,value:"email"}]},{type:0,value:" with your confirmation number and receipt shortly."}],id:"checkout_confirmation.message.will_email_shortly",values:{b:e=>l.createElement("b",null,e),email:Z.customerInfo.email}})),l.createElement(p.h,null),l.createElement(E.$,{as:k.A,href:"/",variant:"outline"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Continue Shopping"}],id:"checkout_confirmation.link.continue_shopping"}))))))),V.isGuest&&l.createElement(s.a,{layerStyle:"card",rounded:[0,0,"base"],px:[4,4,6],py:[6,6,8]},l.createElement(o.m,{variant:"form"},l.createElement(u.D,{fontSize:"lg",marginBottom:6},l.createElement(c.A,{defaultMessage:[{type:0,value:"Create an account for faster checkout"}],id:"checkout_confirmation.heading.create_account"})),l.createElement("form",{onSubmit:re.handleSubmit(ce)},l.createElement(m.B,{spacing:4},(null===(t=re.formState.errors)||void 0===t?void 0:t.global)&&l.createElement(f.F,{status:"error"},l.createElement(g._,null),re.formState.errors.global.message),l.createElement(C,{form:re}),l.createElement(E.$,{type:"submit",width:"full",onClick:()=>re.clearErrors("global"),isLoading:re.formState.isSubmitting},l.createElement(c.A,{defaultMessage:[{type:0,value:"Create Account"}],id:"checkout_confirmation.button.create_account"})))))),l.createElement(s.a,{layerStyle:"card",rounded:[0,0,"base"],px:[4,4,6],py:[6,6,8]},l.createElement(o.m,{variant:"form"},l.createElement(m.B,{spacing:6},l.createElement(u.D,{fontSize:"lg"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Delivery Details"}],id:"checkout_confirmation.heading.delivery_details"})),l.createElement(y.r,{columns:[1,1,2],spacing:6},l.createElement(m.B,{spacing:1},l.createElement(u.D,{as:"h3",fontSize:"sm"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Shipping Address"}],id:"checkout_confirmation.heading.shipping_address"})),l.createElement(w.A,{address:Z.shipments[0].shippingAddress})),l.createElement(m.B,{spacing:1},l.createElement(u.D,{as:"h3",fontSize:"sm"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Shipping Method"}],id:"checkout_confirmation.heading.shipping_method"})),l.createElement(s.a,null,l.createElement(d.E,null,Z.shipments[0].shippingMethod.name),l.createElement(d.E,null,Z.shipments[0].shippingMethod.description))))))),l.createElement(s.a,{layerStyle:"card",rounded:[0,0,"base"],px:[4,4,6],py:[6,6,8]},l.createElement(o.m,{variant:"form"},l.createElement(m.B,{spacing:6},l.createElement(u.D,{fontSize:"lg"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Order Summary"}],id:"checkout_confirmation.heading.order_summary"})),l.createElement(m.B,{spacing:4},l.createElement(d.E,null,l.createElement(c.A,{defaultMessage:[{type:6,value:"itemCount",options:{"=0":{value:[{type:0,value:"0 items"}]},one:{value:[{type:7},{type:0,value:" item"}]},other:{value:[{type:7},{type:0,value:" items"}]}},offset:0,pluralType:"cardinal"}],values:{itemCount:Z.productItems.reduce(((e,t)=>e+t.quantity),0)},id:"checkout_confirmation.message.num_of_items_in_order"})),l.createElement(m.B,{spacing:5,align:"flex-start"},l.createElement(m.B,{spacing:5,align:"flex-start",width:"full",divider:l.createElement(h.c,null)},null===(a=Z.productItems)||void 0===a?void 0:a.map(((e,t)=>{const a=(null==ne?void 0:ne[e.productId])||{},n=K(K(K({},e),a),{},{price:e.price});return l.createElement(P.A,{key:e.productId,index:t,variant:n},l.createElement(v.s,{width:"full",alignItems:"flex-start"},l.createElement(L.A,{width:"80px",mr:2}),l.createElement(m.B,{spacing:1,marginTop:"-3px",flex:1},l.createElement(z.A,null),l.createElement(v.s,{width:"full",justifyContent:"space-between",alignItems:"flex-end"},l.createElement(W.A,{includeQuantity:!0}),l.createElement(G.A,{currency:ee})))))}))),l.createElement(m.B,{w:"full",py:4,borderY:"1px",borderColor:"gray.200"},l.createElement(v.s,{justify:"space-between"},l.createElement(d.E,{fontWeight:"bold"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Subtotal"}],id:"checkout_confirmation.label.subtotal"})),l.createElement(d.E,{fontWeight:"bold"},l.createElement(i.Gr,{style:"currency",currency:null==Z?void 0:Z.currency,value:null==Z?void 0:Z.productSubTotal}))),null===(r=Z.orderPriceAdjustments)||void 0===r?void 0:r.map((e=>l.createElement(v.s,{justify:"space-between",key:e.priceAdjustmentId},l.createElement(d.E,null,e.itemText),l.createElement(d.E,{color:"green.500"},l.createElement(i.Gr,{style:"currency",currency:null==Z?void 0:Z.currency,value:e.price}))))),l.createElement(v.s,{justify:"space-between"},l.createElement(v.s,{alignItems:"center"},l.createElement(d.E,{lineHeight:1},l.createElement(c.A,{defaultMessage:[{type:0,value:"Shipping"}],id:"checkout_confirmation.label.shipping"}),(null===(j=Z.shippingItems[0].priceAdjustments)||void 0===j?void 0:j.length)>0&&l.createElement(d.E,{as:"span",ml:1},"(",l.createElement(c.A,{defaultMessage:[{type:0,value:"Promotion applied"}],id:"checkout_confirmation.label.promo_applied"}),")")),(null===(B=Z.shippingItems)||void 0===B||null===(M=B[0])||void 0===M||null===(O=M.priceAdjustments)||void 0===O?void 0:O.length)>0&&l.createElement(T.A,{ml:2},l.createElement(m.B,null,null===(D=Z.shippingItems[0].priceAdjustments)||void 0===D?void 0:D.map((e=>l.createElement(d.E,{key:e.priceAdjustmentId,fontSize:"sm"},e.itemText)))))),null!==(I=Z.shippingItems[0].priceAdjustments)&&void 0!==I&&I.some((({appliedDiscount:e})=>"free"===(null==e?void 0:e.type)))?l.createElement(d.E,{as:"span",color:"green.500",textTransform:"uppercase"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Free"}],id:"checkout_confirmation.label.free"})):l.createElement(d.E,null,l.createElement(i.Gr,{value:Z.shippingTotal,style:"currency",currency:Z.currency}))),l.createElement(v.s,{justify:"space-between"},l.createElement(d.E,null,l.createElement(c.A,{defaultMessage:[{type:0,value:"Tax"}],id:"checkout_confirmation.label.tax"})),l.createElement(d.E,null,l.createElement(i.Gr,{value:Z.taxTotal,style:"currency",currency:Z.currency})))),l.createElement(v.s,{w:"full",justify:"space-between"},l.createElement(d.E,{fontWeight:"bold"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Order Total"}],id:"checkout_confirmation.label.order_total"})),l.createElement(d.E,{fontWeight:"bold"},l.createElement(i.Gr,{style:"currency",currency:null==Z?void 0:Z.currency,value:null==Z?void 0:Z.orderTotal})))))))),l.createElement(s.a,{layerStyle:"card",rounded:[0,0,"base"],px:[4,4,6],py:[6,6,8]},l.createElement(o.m,{variant:"form"},l.createElement(m.B,{spacing:6},l.createElement(u.D,{fontSize:"lg"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Payment Details"}],id:"checkout_confirmation.heading.payment_details"})),l.createElement(y.r,{columns:[1,1,2],spacing:6},l.createElement(m.B,{spacing:1},l.createElement(u.D,{as:"h3",fontSize:"sm"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Billing Address"}],id:"checkout_confirmation.heading.billing_address"})),l.createElement(w.A,{address:Z.billingAddress})),l.createElement(m.B,{spacing:1},l.createElement(u.D,{as:"h3",fontSize:"sm"},l.createElement(c.A,{defaultMessage:[{type:0,value:"Credit Card"}],id:"checkout_confirmation.heading.credit_card"})),l.createElement(m.B,{direction:"row"},le&&l.createElement(le,{layerStyle:"ccIcon"}),l.createElement(s.a,null,l.createElement(d.E,null,null===(N=Z.paymentInstruments[0].paymentCard)||void 0===N?void 0:N.cardType),l.createElement(m.B,{direction:"row"},l.createElement(d.E,null,"••••"," ",null===(q=Z.paymentInstruments[0].paymentCard)||void 0===q?void 0:q.numberLastDigits),l.createElement(d.E,null,null===(U=Z.paymentInstruments[0].paymentCard)||void 0===U?void 0:U.expirationMonth,"/",null===(Y=Z.paymentInstruments[0].paymentCard)||void 0===Y?void 0:Y.expirationYear))))))))))))}},41159:(e,t,a)=>{a.d(t,{N0:()=>l,OE:()=>r,i2:()=>c,v1:()=>i});var n=a(62345);const r=(e="",t={gaps:[],lengths:[]})=>{let a=e.replace(/[^0-9]/g,""),n=a.length;n===t.lengths[0]+1&&(a=a.substr(0,t.lengths[0]),n=a.length);let r=a.split("");return t.gaps.forEach(((e,t)=>{n>e&&r.splice(e+t,0," ")})),r.join("")},l=e=>{if(e)return{visa:n.nL,mastercard:n.uI,"master card":n.uI,"american express":n.Nx,"american-express":n.Nx,amex:n.Nx,discover:n.BP}[e.toLowerCase()]},c=e=>{if(e)return{visa:"Visa",mastercard:"Master Card","american-express":"Amex",discover:"Discover"}[e]},i=e=>{const t=e.replace(/\s/g,"");return t.slice(0,-4).replace(/\d/g,"*")+t.slice(-4)}}}]);