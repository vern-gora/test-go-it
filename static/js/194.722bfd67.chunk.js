"use strict";(self.webpackChunktest_go_it=self.webpackChunktest_go_it||[]).push([[194],{5125:function(e,n,a){a(2791);n.Z=a.p+"static/media/sprite.bd1fddc82d5d6199470ebc4b638e6778.svg"},4194:function(e,n,a){a.r(n),a.d(n,{default:function(){return K}});var s=a(2791),i=a(9439),c=a(5125),l="CarListItem_listItem__dnilI",r="CarListItem_carImg__uutke",t="CarListItem_carName__KxhT8",o="CarListItem_accent__+G43r",d="CarListItem_icon__N8b3j",u="CarListItem_descrText__1OEcO",m="CarListItem_descrSpan__cQ9NW",h="CarListItem_wrapName__o7Nfs",x="CarListItem_price__mfbYx",p="CarListItem_iconStick__N1tJD",_="CarListItem_carButton__hcJlp",f=a(4164),j=function(e){var n=e.children,a=document.getElementById("portal-root");return a?(0,f.createPortal)(n,a):(console.error("Portal root element not found. Please create a div with id='portal-root' in your HTML."),null)},v="Modal_backdrop__xTnIT",C="Modal_container__Ha+Ky",N="Modal_closeIcon__9I0vC",g="Modal_childrenWrap__ByrAA",I=a(184),b=function(e){var n=e.children,a=e.onClick,i=function(e){"Escape"===e.code&&a()};(0,s.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));return(0,I.jsx)(j,{children:(0,I.jsx)("div",{className:v,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,I.jsxs)("div",{className:C,children:[(0,I.jsx)("svg",{className:N,onClick:function(){a()},children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-close-icon")})}),(0,I.jsx)("div",{className:g,children:n})]})})})},k={carImgModal:"ItemInfo_carImgModal__wOZLZ",carName:"ItemInfo_carName__h1ZhF",accent:"ItemInfo_accent__YrnNH",descrText:"ItemInfo_descrText__vX2xN",descrSpan:"ItemInfo_descrSpan__4gU30",iconStick:"ItemInfo_iconStick__L8afm",carModalBtn:"ItemInfo_carModalBtn__QnMkW",description:"ItemInfo_description__pzlaE",accessTitle:"ItemInfo_accessTitle__Gve+k"},y=function(e){e.onClick;var n=e.idCar,a=e.year,s=e.make,i=e.model,l=e.type,r=e.image,t=e.description,o=e.fuelConsumption,d=e.engineSize,u=e.accessories,m=e.functionalities,h=e.rentalPrice,x=(e.rentalCompany,e.address),p=e.rentalConditions,_=e.mileage;return(0,I.jsxs)("div",{className:k.CarInfoContainer,children:[(0,I.jsx)("img",{src:r,alt:i,className:k.carImgModal}),(0,I.jsxs)("div",{className:k.carName,children:[(0,I.jsx)("p",{children:s}),(0,I.jsxs)("p",{className:k.accent,children:[i,","]}),(0,I.jsx)("p",{children:a})]}),(0,I.jsxs)("div",{className:k.descrText,children:[(0,I.jsx)("span",{className:k.descrSpan,children:x}),(0,I.jsx)("svg",{className:k.iconStick,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsxs)("span",{className:k.descrSpan,children:["Id: ",n]}),(0,I.jsx)("svg",{className:k.iconStick,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsxs)("span",{className:k.descrSpan,children:["Year: ",a]}),(0,I.jsx)("svg",{className:k.iconStick,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsxs)("span",{className:k.descrSpan,children:["Type: ",l]}),(0,I.jsx)("svg",{className:k.iconStick,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsxs)("span",{className:k.descrSpan,children:["Fuel Consumption: ",o]}),(0,I.jsx)("svg",{className:k.iconStick,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsxs)("span",{className:k.descrSpan,children:["Engine size: ",d]})]}),(0,I.jsx)("p",{className:k.description,children:t}),(0,I.jsx)("p",{className:k.accessTitle,children:"Accessories and functionalities:"}),(0,I.jsxs)("div",{children:[(0,I.jsx)("span",{children:u}),(0,I.jsx)("span",{children:m})]}),(0,I.jsx)("p",{className:k.accessTitle,children:"Rental Conditions:"}),(0,I.jsxs)("div",{children:[(0,I.jsxs)("p",{children:["Minimum age: ",p]}),(0,I.jsxs)("p",{children:["Mileage: ",_]}),(0,I.jsxs)("p",{children:["Price: ",h]})]}),(0,I.jsx)("a",{href:"tel:+380730000000",className:k.carModalBtn,children:"Rental car"})]})},M=a(9434),S=a(5440),L=function(e){return e.ads},Z=function(e){return e.favorite},B=function(e){return e.priceFilter},T=function(e){var n=e.idCar,a=e.year,f=e.make,j=e.model,v=e.type,C=e.image,N=e.description,g=e.fuelConsumption,k=e.engineSize,L=e.accessories,B=e.functionalities,T=e.rentalPrice,E=e.rentalCompany,P=e.address,V=e.rentalConditions,w=e.mileage,z=(0,s.useState)(!1),A=(0,i.Z)(z,2),H=A[0],K=A[1],W=(0,s.useState)("".concat(c.Z,"#icon-normal")),F=(0,i.Z)(W,2),G=F[0],R=F[1],O=(0,s.useState)(!1),U=(0,i.Z)(O,2),Y=U[0],J=U[1],Q=(0,M.v9)(Z);(0,s.useEffect)((function(){null!==Q&&void 0!==Q&&Q.some((function(e){return e.idCar===n}))?(J(!0),R("".concat(c.Z,"#icon-active"))):(J(!1),R("".concat(c.Z,"#icon-normal")))}),[Q,n]);var X=(0,M.I0)(),D=function(){K((function(e){return!e}))},$={idCar:n,year:a,make:f,model:j,type:v,image:C,description:N,fuelConsumption:g,engineSize:k,accessories:L,functionalities:B,rentalPrice:T,rentalCompany:E,address:P,rentalConditions:V,mileage:w};return(0,I.jsxs)("li",{className:l,children:[(0,I.jsx)("img",{src:C,alt:j,className:r}),(0,I.jsx)("svg",{className:d,onClick:function(){X(Y?(0,S.KV)(n):(0,S.i$)($))},children:(0,I.jsx)("use",{href:G})}),(0,I.jsxs)("div",{className:h,children:[(0,I.jsxs)("div",{className:t,children:[(0,I.jsx)("p",{children:f}),(0,I.jsxs)("p",{className:o,children:[j,","]}),(0,I.jsx)("p",{children:a})]}),(0,I.jsx)("p",{className:x,children:T})]}),(0,I.jsxs)("div",{className:u,children:[(0,I.jsx)("span",{className:m,children:P}),(0,I.jsx)("svg",{className:p,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsx)("span",{className:m,children:E}),(0,I.jsx)("svg",{className:p,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsx)("span",{className:m,children:v}),(0,I.jsx)("svg",{className:p,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsx)("span",{className:m,children:n}),(0,I.jsx)("svg",{className:p,children:(0,I.jsx)("use",{href:"".concat(c.Z,"#icon-Vector-4")})}),(0,I.jsx)("span",{className:m,children:B})]}),(0,I.jsx)("button",{type:"button",className:_,onClick:D,children:"Learn more"}),H&&(0,I.jsx)(b,{onClick:D,children:(0,I.jsx)(y,{onClick:D,idCar:n,year:a,make:f,model:j,type:v,image:C,description:N,fuelConsumption:g,engineSize:k,accessories:L,functionalities:B,rentalPrice:T,rentalCompany:E,address:P,rentalConditions:V,mileage:w})})]})},E="CarList_carList__tm3hI",P=function(){var e=(0,M.v9)(L),n=(0,M.v9)(B),a=e.filter((function(e){return e.make.includes(n)}));return(0,I.jsx)("ul",{className:E,children:a.map((function(e){return(0,I.jsx)(T,{image:e.img,make:e.make,model:e.model,year:e.year,rentalPrice:e.rentalPrice,address:e.address,rentalCompany:e.rentalCompany,type:e.type,idCar:e.id,functionalities:e.functionalities,description:e.description,fuelConsumption:e.fuelConsumption,engineSize:e.engineSize,accessories:e.accessories,rentalConditions:e.rentalConditions,mileage:e.mileage},e.id)}))})},V=a(7234),w="Catalog_btnCatalog__kdFiy",z=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"HUMMER",label:"HUMMER"},{value:"Subaru",label:"Subaru"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"MINI",label:"MINI"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land",label:"Land"}],A=a(9500),H=function(){var e=(0,M.I0)();return(0,I.jsx)("div",{children:(0,I.jsx)(A.ZP,{options:z,placeholder:"Enter the text",onChange:function(n){e((0,S.Xi)(n.value))}})})},K=function(){var e=(0,M.I0)(),n=(0,M.v9)(L);return(0,s.useEffect)((function(){e(V.Z.fetchCars())}),[e]),(0,I.jsxs)("section",{children:[(0,I.jsx)(H,{}),(0,I.jsx)("div",{children:n&&(0,I.jsx)(P,{})}),(0,I.jsx)("button",{className:w,type:"button",children:"Load more"})]})}}}]);
//# sourceMappingURL=194.722bfd67.chunk.js.map