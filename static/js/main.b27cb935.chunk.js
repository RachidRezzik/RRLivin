(this.webpackJsonpliving=this.webpackJsonpliving||[]).push([[0],{29:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(1),n=c.n(i),o=c(22),s=c.n(o),r=(c(29),c(2)),l=c(4),d=c(3),j=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};var m=function(){var e=Object(i.useState)(j()),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){a(j())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),c},p=c.p+"static/media/logo.aef198db.JPG";function u(e){var t=Object(i.useState)(!1),c=Object(d.a)(t,2),n=c[0],o=c[1],s=Object(i.useState)(m()<=650),l=Object(d.a)(s,2),j=l[0],u=l[1];!function(e,t){e>650&&!0===t?(u(!1),o(!1)):e<=650&&!1===t&&(u(!0),o(!1))}(m(),j);var b=function(){o(!1),window.scrollTo({top:0})};return Object(a.jsx)("div",{children:j?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)("div",{className:"logo_container",children:Object(a.jsx)(r.b,{onClick:b,to:"/",children:Object(a.jsx)("img",{src:p,alt:""})})}),Object(a.jsx)("div",{className:"menu_button",onClick:function(){o(!n)},children:Object(a.jsx)("span",{className:n?"hamburger open":"hamburger"})})]}),Object(a.jsxs)("div",{className:n?"links_container open":"links_container",children:[Object(a.jsx)(r.b,{onClick:b,to:"/About",children:"ABOUT"}),Object(a.jsx)(r.b,{onClick:b,to:"/Houses",children:"HOUSES"}),Object(a.jsx)(r.b,{onClick:b,to:"/Apartments",children:"APARTMENTS"}),Object(a.jsx)(r.b,{onClick:b,to:"/Contact",children:"CONTACT"})]})]}):Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)("div",{className:"logo_container",children:Object(a.jsx)(r.b,{onClick:b,to:"/",children:Object(a.jsx)("img",{src:p,alt:""})})}),Object(a.jsxs)("div",{className:n?"links_container open":"links_container",children:[Object(a.jsx)(r.b,{onClick:b,to:"/About",children:"ABOUT"}),Object(a.jsx)(r.b,{onClick:b,to:"/Houses",children:"HOUSES"}),Object(a.jsx)(r.b,{onClick:b,to:"/Apartments",children:"APARTMENTS"}),Object(a.jsx)(r.b,{onClick:b,to:"/Contact",children:"CONTACT"})]})]})})}var b=c(9),h=c.n(b),O=(c(14),c.p+"static/media/home1.d4f25a62.jpg"),x=c.p+"static/media/home2.5503f255.jpg",g=c.p+"static/media/home3.de527c5d.jpg",f=c.p+"static/media/home4.775ddaee.jpg",A=[{title:"House in Houston",img:O,price:"$450,000"},{title:"Apartment in Austin",img:g,price:"$1,175/Month"},{title:"House in Dallas",img:x,price:"$550,000"},{title:"Apartment in San Antonio",img:f,price:"$1,250/Month"}],v=c.p+"static/media/arrowDown.b227a878.png";function N(){var e=Object(i.useState)(0),t=Object(d.a)(e,2),c=t[0],n=t[1],o=A.length,s=Object(i.useRef)(null);Object(i.useEffect)((function(){h.a.init();return s.current=setTimeout((function(){n((function(e){return e===o-1?0:e+1}))}),3500),function(){s.current&&clearTimeout(s.current)}}),[c,o]);var l=function(){n(c===o-1?0:c+1)},j=function(){n(0===c?o-1:c-1)},m=function(){clearTimeout(s.current)},p=function(){s.current=setTimeout(l,4e3)},u=function(){window.scrollTo({top:0})};return Object(a.jsx)("div",{className:"hero_section",children:Object(a.jsx)("div",{className:"slide_container",children:A.map((function(e,t){return c===t?Object(a.jsxs)("div",{className:"slide","data-aos":"fade",duration:"1750",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(e.img,")")},children:[Object(a.jsx)("h1",{"data-aos":"new-animation",children:e.title}),Object(a.jsx)("p",{"data-aos":"new-animation",children:e.price}),e.title.includes("House")?Object(a.jsx)(r.b,{onClick:u,to:"/Houses",children:Object(a.jsx)("button",{onMouseEnter:m,onMouseLeave:p,children:"View Houses \u279c"})}):Object(a.jsx)(r.b,{onClick:u,to:"/Apartments",children:Object(a.jsx)("button",{onMouseEnter:m,onMouseLeave:p,children:"View Apartments \u279c"})}),Object(a.jsxs)("div",{className:"slide_buttons",children:[Object(a.jsx)("span",{id:"previous",onClick:j,children:"\u279c"}),Object(a.jsx)("span",{onClick:l,children:"\u279c"})]}),Object(a.jsx)("img",{src:v,alt:""})]},t):""}))})})}var y=c.p+"static/media/home_about.d16630f6.jpg",k=c.p+"static/media/home_houses.050de250.jpg",S=c.p+"static/media/home_apartments.e0628e0f.jpg";function U(){Object(i.useEffect)((function(){h.a.init({})}),[]);var e=function(){window.scrollTo({top:0})};return Object(a.jsxs)("div",{style:{overflow:"hidden",marginBottom:"75px"},children:[Object(a.jsx)("div",{style:{height:"65px"}}),Object(a.jsx)(N,{}),Object(a.jsxs)("div",{"data-aos":"fade-up","data-aos-delay":"125","data-aos-offset":"275","data-aos-duration":"800","data-aos-once":"true",children:[Object(a.jsx)("h1",{className:"difference",children:"Experience the RR Livin' Difference"}),Object(a.jsxs)("div",{className:"home_about",children:[Object(a.jsx)("img",{src:y,alt:""}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"RR Livin'"}),Object(a.jsx)("p",{children:"Operating in Texas since 2009, RR Livin' contains the experience and resources to get you into your dream home. Find out more about us or get in touch to see how we can help you!"}),Object(a.jsxs)("div",{className:"button_container",children:[Object(a.jsx)(r.b,{onClick:e,to:"/About",children:Object(a.jsx)("button",{children:"Learn More"})}),Object(a.jsx)(r.b,{onClick:e,to:"/Contact",children:Object(a.jsx)("button",{children:"Contact Agent"})})]})]})]})]}),Object(a.jsxs)("div",{className:"home_houses","data-aos":"fade-up","data-aos-delay":"125","data-aos-offset":"275","data-aos-duration":"800","data-aos-once":"true",children:[Object(a.jsxs)("div",{id:"houses_div",children:[Object(a.jsx)("h2",{children:"Houses"}),Object(a.jsx)("p",{children:"Looking to own your first home or find your dream home? Explore our house listings to make it a reality!"}),Object(a.jsx)("div",{className:"button_container",children:Object(a.jsx)(r.b,{onClick:e,to:"/Houses",children:Object(a.jsx)("button",{children:"Check Our House Listings"})})})]}),Object(a.jsx)("img",{id:"houses_img",src:k,alt:""})]}),Object(a.jsxs)("div",{className:"home_apartments","data-aos":"fade-up","data-aos-delay":"125","data-aos-offset":"275","data-aos-duration":"800","data-aos-once":"true",children:[Object(a.jsx)("img",{src:S,alt:""}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Apartments"}),Object(a.jsx)("p",{children:"Moving to a new city and need a cozy new apartment? Let RR Livin' help you find it!"}),Object(a.jsx)("div",{className:"button_container",children:Object(a.jsx)(r.b,{onClick:e,to:"/Apartments",children:Object(a.jsx)("button",{children:"Check Our Apartment Listings"})})})]})]})]})}var C=c.p+"static/media/founders.2de55d3f.jpg",w=c.p+"static/media/about_intro.03e499e6.jpg",R=c.p+"static/media/about_tech.bd563812.jpg";function K(){return Object(i.useEffect)((function(){h.a.init({})}),[]),Object(a.jsxs)("div",{style:{paddingTop:"65px"},children:[Object(a.jsx)("h1",{className:"about_headline",children:"About RR Livin'"}),Object(a.jsxs)("div",{className:"about_intro",children:[Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:C,alt:""})}),Object(a.jsx)("p",{children:"RR Livin's founders are Ryan and Rachel Dawson. The two met during their respective careers as real estate agents in the Texas hill country. "}),Object(a.jsx)("p",{children:"In 2009, the couple decided to offer a new approach to buying/renting homes in founding RR Livin'. Utilizing their experiences, they were able create a more streamlined process for potential homeowners seeking help in making their dreams come true."})]}),Object(a.jsxs)("div",{className:"tech_difference","data-aos":"fade-up","data-aos-duration":"700","data-aos-offset":"200","data-aos-once":"true",children:[Object(a.jsx)("h1",{className:"livin_difference",children:"The RR Livin' Difference"}),Object(a.jsx)("h4",{children:"Tech"}),Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:R,alt:""})}),Object(a.jsx)("p",{children:"RR Livin' leverages the latest data to help you find the right home at the right price. Clients can get personalized listings sent to them immediately or view the current listings posted on the site. "}),Object(a.jsx)("p",{children:"Homeowners seeking our help in listing their homes can utilize our platform to present their homes to our clients looking to purchase. This ecosystem of buyers and sellers has helped sell/rent over 200 Texas homes in the last year!"}),Object(a.jsxs)("div",{className:"tech_links",children:[Object(a.jsx)("button",{children:"Get Personalized Listings"}),Object(a.jsx)(r.b,{to:"/Houses",children:Object(a.jsx)("button",{children:"Current House Listings"})}),Object(a.jsx)(r.b,{to:"/Apartment",children:Object(a.jsx)("button",{children:"Current Apartment Listings"})})]})]}),Object(a.jsxs)("div",{className:"agents_difference","data-aos":"fade-up","data-aos-duration":"700","data-aos-offset":"200","data-aos-once":"true",children:[Object(a.jsx)("h4",{style:{marginTop:"80px"},children:"Agents"}),Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:w,alt:""})}),Object(a.jsx)("p",{children:"RR Livin's agents are the best in the game. Our agents will find you exactly what you are looking for and communicate with you every step of the way."}),Object(a.jsx)("p",{children:"In combination with our tech, our agents will either get you into a home or sell your home at the right price. With our ecosystem of buyers and sellers, many deals have been made to satisfy both parties. "}),Object(a.jsx)("button",{children:"Contact a Local Agent"})]})]})}var P=c(11),T=c.p+"static/media/home5.cb4bcac0.jpg",H=c.p+"static/media/home6.eef6eb83.jpg",M=c.p+"static/media/home7.af9964b4.jpg",E=c.p+"static/media/home8.74cf9f7b.jpg",B=c.p+"static/media/bedroom1.c1718c40.jpg",q=c.p+"static/media/bedroom2.ed24b761.jpg",G=c.p+"static/media/bedroom3.e6bb998f.jpg",I=c.p+"static/media/bedroom4.c3fb8fd3.jpg",V=c.p+"static/media/bedroom5.a77ebede.jpg",W=c.p+"static/media/bedroom6.5a52ea83.jpg",D=c.p+"static/media/bathroom1.b40c0475.jpg",F=c.p+"static/media/bathroom2.987e6ceb.jpg",L=c.p+"static/media/bathroom3.341eefd5.jpg",Q=c.p+"static/media/bathroom4.f4135206.jpg",z=c.p+"static/media/bathroom5.b4c28feb.jpg",Y=c.p+"static/media/bathroom6.5f7ae693.jpg",Z=[{images:[O,B,D,c.p+"static/media/living1.fe610289.jpg"],parking:"3 Car Garage (Attached)",year:1994,heating:"Natural Gas",cooling:"Electric",price:525e3,location:"Houston",address:"1250 Greene Street",bedrooms:4,bathrooms:3},{images:[x,q,F,c.p+"static/media/living2.e1d3f083.jpg"],parking:"3 Car Garage (Attached)",year:1994,heating:"Natural Gas",cooling:"Electric",price:7e5,location:"Dallas",address:"1560 Albert Drive",bedrooms:4,bathrooms:4},{images:[T,G,L,c.p+"static/media/living3.fe610289.jpg"],parking:"3 Car Garage (Attached)",year:1994,heating:"Natural Gas",cooling:"Electric",price:275e3,location:"San Antonio",address:"1710 Clariden Street",bedrooms:3,bathrooms:2},{images:[H,I,Q,c.p+"static/media/living4.afb14c86.jpg"],parking:"3 Car Garage (Attached)",year:1994,heating:"Natural Gas",cooling:"Electric",price:675e3,location:"Austin",address:"1298 South Parkway",bedrooms:4,bathrooms:3},{images:[M,V,z,c.p+"static/media/living5.6b22dd0e.jpg"],parking:"3 Car Garage (Attached)",year:1994,heating:"Natural Gas",cooling:"Electric",price:35e4,location:"Dallas",address:"1923 London Street",bedrooms:3,bathrooms:2},{images:[E,W,Y,c.p+"static/media/living6.850ed55a.jpg"],parking:"3 Car Garage (Attached)",year:1994,heating:"Natural Gas",cooling:"Electric",price:845e3,location:"Austin",address:"1440 Park Trail",bedrooms:5,bathrooms:4}],J=c.p+"static/media/x_mark.24f16f08.png";function _(e){var t=function(){e.handleImageModalToggle()},c=function(t){"previous"===t?e.handlePreviousImage():e.handleNextImage()};Object(i.useEffect)((function(){var c=function(c){!o.current.contains(c.target)&&e.imageModalOpen&&"exit_modal"!==c.target.className&&t()};return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}}));var o=n.a.useRef();return Object(a.jsxs)("div",{className:e.imageModalOpen?"image_modal open":"image_modal",children:[Object(a.jsxs)("div",{ref:o,className:"image_container",children:[Object(a.jsx)("img",{src:e.featuredImages[e.featuredIndex],alt:""}),Object(a.jsxs)("div",{className:"slide_buttons",children:[Object(a.jsx)("span",{id:"previous",onClick:function(){return c("previous")},children:"\u279c"}),Object(a.jsx)("span",{onClick:function(){return c("next")},children:"\u279c"})]})]}),Object(a.jsx)("img",{className:e.imageModalOpen?"exit_modal open":"exit_modal",src:J,onClick:t,alt:""})]})}function X(e){var t=Object(i.useState)("overview"),c=Object(d.a)(t,2),o=c[0],s=c[1],l=function(e){s(e)},j=function(){e.handleModalToggle("back"),s("overview")},u=Object(i.useState)(!1),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(i.useState)(""),g=Object(d.a)(x,2),f=g[0],A=g[1],v=function(e){O(!h),A(e)};Object(i.useEffect)((function(){var t=function(t){N.current.contains(t.target)||!e.modalOpen||document.querySelector(".image_modal").contains(t.target)||j()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}));var N=n.a.useRef();return Object(a.jsxs)("div",{className:e.modalOpen?"property_modal open":"property_modal",children:[Object(a.jsx)(_,{imageModalOpen:h,featuredIndex:f,featuredImages:e.featuredProperty.images,handleImageModalToggle:v,handleNextImage:function(){f!==e.featuredProperty.images.length-1?A(f+1):A(0)},handlePreviousImage:function(){A(0!==f?f-1:e.featuredProperty.images.length-1)}}),Object(a.jsxs)("div",{ref:N,className:"property_container",children:[Object(a.jsxs)("div",{className:"property_nav",children:[Object(a.jsx)("img",{src:p,alt:""}),Object(a.jsx)("span",{onClick:j,children:"\ud83e\udc78 BACK"})]}),Object(a.jsxs)("div",{className:"property_major_flex",children:[m()<800?Object(a.jsx)("div",{className:"property_images",children:Object(a.jsx)("div",{className:"property_flex",children:e.featuredProperty.images.map((function(e,t){return Object(a.jsx)("img",{src:e,alt:"",onClick:function(){return v(t)}},t)}))})}):Object(a.jsx)("div",{className:"property_images2",children:Object(a.jsx)("div",{className:"property_flex2",children:e.featuredProperty.images.map((function(e,t){return Object(a.jsx)("img",{src:e,alt:"",onClick:function(){return v(t)}},t)}))})}),Object(a.jsxs)("div",{className:"property_info",children:[Object(a.jsxs)("h1",{children:["$",window.location.href.includes("Houses")?e.featuredProperty.price.toLocaleString():"".concat(e.featuredProperty.price,"/Month")," ",Object(a.jsxs)("span",{children:[e.featuredProperty.bedrooms," Bed ",Object(a.jsx)("span",{children:"\u2502"})," ",e.featuredProperty.bathrooms," Bath"]})]}),Object(a.jsxs)("h3",{children:[e.featuredProperty.address,", ",e.featuredProperty.location,", Texas"]}),Object(a.jsx)(r.b,{to:"/Contact",children:Object(a.jsx)("button",{onClick:function(){e.handleModalToggle("back"),window.scrollTo({top:0})},children:"Contact Agent"})}),Object(a.jsxs)("div",{className:"more_details_header",children:[Object(a.jsx)("button",{className:"overview"===o?"active":"",onClick:function(){return l("overview")},children:"Overview"}),Object(a.jsx)("button",{className:"features"===o?"active":"",onClick:function(){return l("features")},children:"Features"})]}),Object(a.jsx)("div",{className:"more_details",children:"overview"===o?Object(a.jsx)("p",{children:"Tucked away in the quiet Crestview community, is a charming 2 bedroom, 2 bathroom condo on manicured grounds, within a private and secure complex. As a resident, you will have access to a pool, gazebo, hot tub, garden, and outdoor grill facilities in a secluded courtyard. "}):Object(a.jsxs)("div",{className:"features_flex",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"feature",children:"Build Year:"}),"  ",e.featuredProperty.year]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"feature",children:"Parking:"}),"  ",e.featuredProperty.parking]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"feature",children:"Heating:"}),"  ",e.featuredProperty.heating]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"feature",children:"Cooling:"}),"  ",e.featuredProperty.cooling]})]})})]})]})]})]})}function $(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),c=t[0],o=t[1],s=Object(i.useState)(Z[0]),r=Object(d.a)(s,2),l=r[0],j=r[1],m=function(e){o(!c),c?document.querySelector("body").classList.remove("modal_open"):document.querySelector("body").classList.add("modal_open"),"back"!==e&&j(U[e])},p=Object(i.useState)(["","","",""]),u=Object(d.a)(p,2),b=u[0],h=u[1],O=Object(i.useState)(!0),x=Object(d.a)(O,2),g=x[0],f=x[1],A=Object(i.useState)(!0),v=Object(d.a)(A,2),N=v[0],y=v[1],k=Object(i.useState)(Z),S=Object(d.a)(k,2),U=S[0],C=S[1],w=Object(i.useState)(!1),R=Object(d.a)(w,2),K=R[0],T=R[1],H=function(){T(!K)};Object(i.useEffect)((function(){var e=function(e){!M.current.contains(e.target)&&K&&"more"!==e.target.className&&"add"!==e.target.id&&T(!K)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[K]);var M=n.a.useRef();return Object(a.jsxs)("div",{className:"full_page",children:[Object(a.jsx)(X,{modalOpen:c,featuredProperty:l,handleModalToggle:m}),Object(a.jsxs)("div",{className:"filter_container",children:[Object(a.jsxs)("div",{children:["City:",Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{children:"All"}),Object(a.jsx)("option",{children:"Austin"}),Object(a.jsx)("option",{children:"Dallas"}),Object(a.jsx)("option",{children:"Houston"}),Object(a.jsx)("option",{children:"San Antonio"})]})]}),Object(a.jsxs)("div",{children:["Price:",Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{children:"Any"}),Object(a.jsx)("option",{children:"Low to High"}),Object(a.jsx)("option",{children:"High to Low"})]})]}),Object(a.jsxs)("div",{className:"rel_div",children:[Object(a.jsxs)("button",{className:"more",onClick:H,children:["More",N&&g?"":N||g?": 1":": 2"]}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Array.from(document.querySelectorAll(".more_popup input")).slice(0,4),c=[];t.forEach((function(e){c.push(e.value)})),h(c);var a=[].concat(c),i=Object(P.a)(a);f(a.splice(0,2).every((function(e){return""===e}))),y(i.splice(2,2).every((function(e){return""===e})))},ref:M,className:K?"more_popup open":"more_popup",children:[Object(a.jsx)("h4",{children:"Bedrooms:"}),Object(a.jsx)("input",{id:"bedroom_min",type:"text",autoComplete:"off",placeholder:"Min"}),Object(a.jsx)("input",{id:"bedroom_max",type:"text",autoComplete:"off",placeholder:"Max"}),Object(a.jsx)("h4",{children:"Bathrooms:"}),Object(a.jsx)("input",{id:"bathroom_min",type:"text",autoComplete:"off",placeholder:"Min"}),Object(a.jsx)("input",{id:"bathroom_max",type:"text",autoComplete:"off",placeholder:"Max"}),Object(a.jsxs)("div",{className:"popup_buttons",children:[Object(a.jsx)("input",{onClick:H,id:"add",type:"submit",value:"Add"}),Object(a.jsx)("button",{id:"clear",onClick:function(e){f(!0),y(!0),Array.from(document.querySelectorAll(".more_popup input")).slice(0,4).forEach((function(e){e.value=""})),h(["","","",""])},children:"Clear"})]})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{id:"apply",onClick:function(){var e=[],t=Object(P.a)(Z),c=document.querySelectorAll(".filter_container select")[0];e="All"!==c.value?t.filter((function(e){return e.location===c.value})):t;var a=document.querySelectorAll(".filter_container select")[1];"Low to High"===a.value?e=e.slice(0).sort((function(e,t){return e.price-t.price})):"High to Low"===a.value&&(e=e.slice(0).sort((function(e,t){return t.price-e.price}))),g||""===b[0]||(e=e.filter((function(e){return e.bedrooms>=Number(b[0])}))),g||""===b[1]||(e=e.filter((function(e){return e.bedrooms<=Number(b[1])}))),N||""===b[2]||(e=e.filter((function(e){return e.bathrooms>=Number(b[2])}))),N||""===b[3]||(e=e.filter((function(e){return e.bathrooms<=Number(b[3])}))),C(e)},children:"Apply Filters"})})]}),Object(a.jsxs)("h1",{className:"headline",children:["Houses (",U.length,")"]}),Object(a.jsx)("div",{className:"home_container",children:0!==U.length?U.map((function(e,t){return Object(a.jsxs)("div",{className:"property",onClick:function(){return m(t)},children:[Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:e.images[0],alt:""})}),Object(a.jsxs)("div",{className:"property_stats",children:[Object(a.jsxs)("h4",{children:["$",e.price.toLocaleString()]}),Object(a.jsxs)("p",{children:[e.bedrooms," Bed, ",e.bathrooms," Bath"]}),Object(a.jsxs)("p",{children:[e.address,", ",e.location,", Texas"]})]})]},t)})):Object(a.jsx)("h2",{className:"no_results",children:"Sorry, No Results Match the Applied Filters"})})]})}var ee=c.p+"static/media/apart_living1.77687d64.jpg",te=c.p+"static/media/apart_living2.93330f64.jpg",ce=c.p+"static/media/apart_living3.4f5286b9.jpg",ae=c.p+"static/media/apart_living4.4ba52424.jpg",ie=c.p+"static/media/bedroom7.0ec5660b.jpg",ne=c.p+"static/media/bedroom8.d339bd68.jpg",oe=c.p+"static/media/bedroom9.710ef7b2.jpg",se=c.p+"static/media/bedroom10.73441db4.jpg",re=c.p+"static/media/bedroom11.b5436aba.jpg",le=c.p+"static/media/bedroom12.c71513e7.jpg",de=[{images:[ce,ie,c.p+"static/media/bathroom7.636b6425.jpg"],parking:"Covered",year:2014,heating:"Natural Gas",cooling:"Electric",address:"12601 Garcon Drive",price:1775,location:"San Antonio",bedrooms:4,bathrooms:4},{images:[ee,ne,c.p+"static/media/bathroom8.d39c1ae6.jpg"],parking:"Covered",year:2011,heating:"Natural Gas",cooling:"Electric",address:"19605 Albert Parkway",price:975,location:"Houston",bedrooms:1,bathrooms:1},{images:[g,oe,c.p+"static/media/bathroom9.d39c1ae6.jpg"],parking:"Covered",year:2010,heating:"Natural Gas",cooling:"Electric",address:"15602 Porter Drive",price:1275,location:"San Antonio",bedrooms:3,bathrooms:2},{images:[te,se,c.p+"static/media/bathroom10.cfec90ed.jpg"],parking:"Covered",year:2011,heating:"Natural Gas",cooling:"Electric",address:"10501 Merk Street",price:1325,location:"Dallas",bedrooms:2,bathrooms:2},{images:[f,re,c.p+"static/media/bathroom11.c0fe86e5.jpg"],parking:"Covered",year:2015,heating:"Natural Gas",cooling:"Electric",address:"19450 Albert Drive",price:1150,location:"Austin",bedrooms:1,bathrooms:1},{images:[ae,le,c.p+"static/media/bathroom12.a10c7022.jpg"],parking:"Covered",year:2009,heating:"Natural Gas",cooling:"Electric",address:"17610 South Street",price:1675,location:"Houston",bedrooms:3,bathrooms:3}];function je(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),c=t[0],o=t[1],s=Object(i.useState)(de[0]),r=Object(d.a)(s,2),l=r[0],j=r[1],m=function(e){o(!c),c?document.querySelector("body").classList.remove("modal_open"):document.querySelector("body").classList.add("modal_open"),"back"!==e&&j(U[e])},p=Object(i.useState)(["","","",""]),u=Object(d.a)(p,2),b=u[0],h=u[1],O=Object(i.useState)(!0),x=Object(d.a)(O,2),g=x[0],f=x[1],A=Object(i.useState)(!0),v=Object(d.a)(A,2),N=v[0],y=v[1],k=Object(i.useState)((window.location.href.includes("Houses"),de)),S=Object(d.a)(k,2),U=S[0],C=S[1],w=Object(i.useState)(!1),R=Object(d.a)(w,2),K=R[0],T=R[1],H=function(){T(!K)};Object(i.useEffect)((function(){var e=function(e){!M.current.contains(e.target)&&K&&"more"!==e.target.className&&"add"!==e.target.id&&T(!K)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[K]);var M=n.a.useRef();return Object(a.jsxs)("div",{className:"full_page",children:[Object(a.jsx)(X,{modalOpen:c,featuredProperty:l,handleModalToggle:m}),Object(a.jsxs)("div",{className:"filter_container",children:[Object(a.jsxs)("div",{children:["City:",Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{children:"All"}),Object(a.jsx)("option",{children:"Austin"}),Object(a.jsx)("option",{children:"Dallas"}),Object(a.jsx)("option",{children:"Houston"}),Object(a.jsx)("option",{children:"San Antonio"})]})]}),Object(a.jsxs)("div",{children:["Price:",Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{children:"Any"}),Object(a.jsx)("option",{children:"Low to High"}),Object(a.jsx)("option",{children:"High to Low"})]})]}),Object(a.jsxs)("div",{className:"rel_div",children:[Object(a.jsxs)("button",{className:"more",onClick:H,children:["More",N&&g?"":N||g?": 1":": 2"]}),Object(a.jsxs)("form",{onSubmit:function(){var e=Array.from(document.querySelectorAll(".more_popup input")).slice(0,4),t=[];e.forEach((function(e){t.push(e.value)})),h(t);var c=[].concat(t),a=Object(P.a)(c);f(c.splice(0,2).every((function(e){return""===e}))),y(a.splice(2,2).every((function(e){return""===e})))},ref:M,className:K?"more_popup open":"more_popup",children:[Object(a.jsx)("h4",{children:"Bedrooms:"}),Object(a.jsx)("input",{id:"bedroom_min",type:"text",placeholder:"Min"}),Object(a.jsx)("input",{id:"bedroom_max",type:"text",placeholder:"Max"}),Object(a.jsx)("h4",{children:"Bathrooms:"}),Object(a.jsx)("input",{id:"bathroom_min",type:"text",placeholder:"Min"}),Object(a.jsx)("input",{id:"bathroom_max",type:"text",placeholder:"Max"}),Object(a.jsxs)("div",{className:"popup_buttons",children:[Object(a.jsx)("input",{onClick:H,id:"add",type:"submit",value:"Add"}),Object(a.jsx)("button",{id:"clear",onClick:function(e){f(!0),y(!0),Array.from(document.querySelectorAll(".more_popup input")).slice(0,4).forEach((function(e){e.value=""})),h(["","","",""])},children:"Clear"})]})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{id:"apply",onClick:function(){var e=[],t=[];t=(window.location.href.includes("Houses"),Object(P.a)(de));var c=document.querySelectorAll(".filter_container select")[0];e="All"!==c.value?t.filter((function(e){return e.location===c.value})):t;var a=document.querySelectorAll(".filter_container select")[1];"Low to High"===a.value?e=e.slice(0).sort((function(e,t){return e.price-t.price})):"High to Low"===a.value&&(e=e.slice(0).sort((function(e,t){return t.price-e.price}))),g||""===b[0]||(e=e.filter((function(e){return e.bedrooms>=Number(b[0])}))),g||""===b[1]||(e=e.filter((function(e){return e.bedrooms<=Number(b[1])}))),N||""===b[2]||(e=e.filter((function(e){return e.bathrooms>=Number(b[2])}))),N||""===b[3]||(e=e.filter((function(e){return e.bathrooms<=Number(b[3])}))),C(e)},children:"Apply Filters"})})]}),Object(a.jsxs)("h1",{className:"headline",children:["Apartments (",U.length,")"]}),Object(a.jsx)("div",{className:"home_container",children:0!==U.length?U.map((function(e,t){return Object(a.jsxs)("div",{className:"property",onClick:function(){return m(t)},children:[Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:e.images[0],alt:""})}),Object(a.jsxs)("div",{className:"property_stats",children:[Object(a.jsxs)("h4",{children:["$",e.price.toLocaleString(),"/Month"]}),Object(a.jsxs)("p",{children:[e.bedrooms," Bed, ",e.bathrooms," Bath"]}),Object(a.jsxs)("p",{children:[e.address,", ",e.location,", Texas"]})]})]},t)})):Object(a.jsx)("h2",{className:"no_results",children:"Sorry, No Results Match the Applied Filters"})})]})}function me(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("div",{className:"footer_left",children:Object(a.jsxs)("div",{className:"footer_left2",children:[Object(a.jsx)("h3",{children:"Find Your Perfect Place"}),Object(a.jsxs)("div",{className:"social_media",children:[Object(a.jsx)("i",{className:"fab fa-twitter fa-2x"}),Object(a.jsx)("i",{className:"fab fa-facebook fa-2x"}),Object(a.jsx)("i",{className:"fab fa-instagram fa-2x"})]})]})}),Object(a.jsxs)("div",{className:"footer_right",children:[Object(a.jsx)(r.b,{to:"/About",children:"ABOUT"}),Object(a.jsx)(r.b,{to:"/Apartments",children:"APARTMENTS"}),Object(a.jsx)(r.b,{to:"/Houses",children:"HOUSES"}),Object(a.jsx)(r.b,{to:"/Contact",children:"CONTACT"})]})]})}var pe=c.p+"static/media/austin.f3234d53.jpg",ue=c.p+"static/media/houston.af6ccf14.jpg",be=c.p+"static/media/san_antonio.2c877ea4.jpg";function he(){return Object(i.useEffect)((function(){h.a.init({})}),[]),Object(a.jsxs)("div",{style:{paddingTop:"65px"},children:[Object(a.jsx)("h1",{className:"contact_headline",children:"RR Livin' Locations"}),Object(a.jsx)("p",{className:"come_in",children:"Come in or give any of our offices a call and one of our expert agents will be sure to help!"}),Object(a.jsxs)("div",{className:"locations_container",children:[Object(a.jsxs)("div",{className:"location",children:[Object(a.jsx)("h2",{children:"Dallas"}),Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})}),Object(a.jsx)("h4",{children:"Address: 11520 Baker Street, Dallas, TX"}),Object(a.jsx)("h4",{children:"Phone: 214-350-8250"})]}),Object(a.jsxs)("div",{className:"location",children:[Object(a.jsx)("h2",{children:"San Antonio"}),Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:be,alt:""})}),Object(a.jsx)("h4",{children:"Address: 11850 Luella, San Antonio, TX"}),Object(a.jsx)("h4",{children:"Phone: 210-333-8921"})]}),Object(a.jsxs)("div",{className:"location",children:[Object(a.jsx)("h2",{children:"Houston"}),Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:ue,alt:""})}),Object(a.jsx)("h4",{children:"Address: 15601 Blue, Houston, TX"}),Object(a.jsx)("h4",{children:"Phone: 832-444-8321"})]}),Object(a.jsxs)("div",{className:"location",children:[Object(a.jsx)("h2",{children:"Austin"}),Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("img",{src:pe,alt:""})}),Object(a.jsx)("h4",{children:"Address: 19923 Jordan Avenue, Austin, TX"}),Object(a.jsx)("h4",{children:"Phone: 512-678-2233"})]})]})]})}var Oe=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(r.a,{basename:"/",children:[Object(a.jsx)(u,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:U}),Object(a.jsx)(l.a,{path:"/About",component:K}),Object(a.jsx)(l.a,{path:"/Apartments",component:je}),Object(a.jsx)(l.a,{path:"/Houses",component:$}),Object(a.jsx)(l.a,{path:"/Contact",component:he})]}),Object(a.jsx)(me,{})]})})},xe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),i(e),n(e),o(e)}))};s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(Oe,{})}),document.getElementById("root")),xe()}},[[34,1,2]]]);
//# sourceMappingURL=main.b27cb935.chunk.js.map