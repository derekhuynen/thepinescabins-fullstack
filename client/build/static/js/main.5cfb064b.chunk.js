(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,i){},101:function(e,a,i){},102:function(e,a,i){},103:function(e,a,i){},104:function(e,a,i){},105:function(e,a,i){},106:function(e,a,i){},112:function(e,a,i){},113:function(e,a,i){},114:function(e,a,i){},115:function(e,a,i){},122:function(e,a,i){"use strict";i.r(a);var s=i(1),t=i.n(s),r=i(8),c=i.n(r),n=(i(73),i(36),i(14),i(5),i(6)),l=(i(74),i(75),i(4)),o=(i(47),i(48),i(21),i(29),i(49),i(30),i(31),i(32),i(50),i(51),i(52),i(0));i(16),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_WEATHER_KEY;i(100),i(101),i(136);i(102);var d=i(17),p=i.n(d);i(103),i(34);i(104);var u=i.p+"static/media/GoldRushSmall.98c14d32.JPG";i.p,i.p,i(58),i(59),i(60);i(105);i(28);var m=i(65),_=i(62),g=i.n(_);i(106);function h(e){var a=e.info;return Object(o.jsxs)("div",{className:"location-info",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:a.image1,alt:a.title})}),Object(o.jsxs)("div",{className:"locationInfo_Bottom",onClick:function(){var e;e=a.link,window.open(e)},children:[Object(o.jsx)("h2",{children:a.title}),Object(o.jsxs)("div",{className:"rating",children:[Object(o.jsx)(l.Icon,{icon:p.a,color:"#e61e4d",width:"15",height:"15",inline:!0}),Object(o.jsx)("h5",{children:a.rating})]}),Object(o.jsxs)("div",{className:"locationInfo_guest",children:[Object(o.jsx)("h4",{children:Object(o.jsxs)("span",{children:["Guests: ",a.guests]})}),Object(o.jsx)("h4",{children:Object(o.jsxs)("span",{children:["Bedrooms: ",a.bedrooms]})})]})]})]})}var b=i(26),y=i.n(b);function v(e){var a=e.info;return Object(o.jsxs)("div",{className:"location-info",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:a.image_url,alt:a.title})}),Object(o.jsxs)("div",{className:"locationInfo_Bottom",onClick:function(){var e;e=a.url,window.open(e)},children:[Object(o.jsx)("h2",{children:a.name}),Object(o.jsxs)("div",{className:"restaurantRating",children:[Object(o.jsx)(y.a,{rating:a.rating,starRatedColor:"#FF385C",numberOfStars:5,name:"rating",starDimension:"15",starSpacing:"1",starEmptyColor:"gray"}),Object(o.jsxs)("h5",{className:"gray",children:["(",a.review_count," reviews)"]})]})]})]})}function B(e){var a=e.info;return Object(o.jsxs)("div",{className:"location-info",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:a.image1,alt:a.title})}),Object(o.jsxs)("div",{className:"locationInfo_Bottom",onClick:function(){var e;e=a.link,window.open(e)},children:[Object(o.jsx)("h2",{children:a.title}),Object(o.jsx)("h4",{children:a.number})]})]})}var j=function(e){var a=e.info,i=e.comp;return"cabin"===i?Object(o.jsx)(h,{info:a}):"restaurant"===i?Object(o.jsx)(v,{info:a}):"activities"===i?Object(o.jsx)(B,{info:a}):""},w=function(e){var a=e.onClick;return Object(o.jsx)("div",{className:"marker",onClick:a,children:Object(o.jsx)(l.Icon,{className:"icon",icon:g.a,color:"red",width:"25",height:"25"})})},A=function(e){var a=e.center,i=e.zoom,t=e.items,r=e.comp,c=Object(s.useState)(t[0]),l=Object(n.a)(c,2),d=l[0],p=l[1],u=t.map((function(e,a){return Object(o.jsx)(w,{lat:e.coordinates.latitude,lng:e.coordinates.longitude,text:"My Marker",onClick:function(a){p(e),console.log(a)}},a)}));return Object(o.jsx)("div",{className:"map",children:Object(o.jsxs)(m.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAP_KEY},defaultCenter:a,defaultZoom:i,onClick:function(e){p(null),console.log(e)},children:[u,d&&Object(o.jsx)(j,{lat:d.coordinates.latitude,lng:d.coordinates.longitude,info:d,comp:r})]})})};A.defaultProps={center:{lat:34.238815,lng:-116.88877},zoom:15};var C=i.p+"static/media/PapaBearSmall.53618405.JPG",k=i.p+"static/media/ScandiaSmall.ddcd234b.JPG",f=i.p+"static/media/PinesSmall.6f941b21.JPG",L=i.p+"static/media/TreehutSmall.9fceccc7.JPG",S=i.p+"static/media/BearHavenSmall.01644108.jpg",O=i.p+"static/media/AppleSmall.2ed1c2f6.jpg",U=i.p+"static/media/CozyFamilyChaletSmall.a38e2b2e.jpg",R=i.p+"static/media/WinterLandSmall.59921565.jpg",D=i.p+"static/media/FireSideSmall.c3b0c672.jpg",x=i.p+"static/media/HolidaySmall.43343d31.jpeg";i.p,i.p,i.p,i(111);var F=[{id:"biShABdafiViwLGNMADJmg",alias:"tropicali-big-bear-lake-2",name:"Tropicali",image_url:"https://s3-media3.fl.yelpcdn.com/bphoto/z0Mr4q27HOl_VukTEcEyJA/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/tropicali-big-bear-lake-2?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1794,categories:[{alias:"hawaiian",title:"Hawaiian"},{alias:"poke",title:"Poke"},{alias:"sushi",title:"Sushi Bars"}],rating:5,coordinates:{latitude:34.24113,longitude:-116.91569},transactions:[],price:"$$",location:{address1:"40616 Village Dr",address2:null,address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40616 Village Dr","Big Bear Lake, CA 92315"]},phone:"+19098780499",display_phone:"(909) 878-0499",distance:1178.0518778995936},{id:"TLzgGInAfx7fKFtoUgvx5w",alias:"grizzly-manor-cafe-big-bear-lake-2",name:"Grizzly Manor Cafe",image_url:"https://s3-media4.fl.yelpcdn.com/bphoto/lTdpimT-zyH_CtjWq3CTWQ/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/grizzly-manor-cafe-big-bear-lake-2?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:2321,categories:[{alias:"breakfast_brunch",title:"Breakfast & Brunch"},{alias:"tradamerican",title:"American (Traditional)"},{alias:"sandwiches",title:"Sandwiches"}],rating:4.5,coordinates:{latitude:34.243799,longitude:-116.901754},transactions:[],price:"$$",location:{address1:"41268 Big Bear Blvd",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["41268 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+19098666226",display_phone:"(909) 866-6226",distance:171.84280825811263},{id:"D00g6eURppfsUNXY1E_rew",alias:"peppercorn-grille-big-bear-lake",name:"Peppercorn Grille",image_url:"https://s3-media3.fl.yelpcdn.com/bphoto/vS7RO1F93U7P0hjcSZNkSQ/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/peppercorn-grille-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:2116,categories:[{alias:"seafood",title:"Seafood"},{alias:"steak",title:"Steakhouses"},{alias:"italian",title:"Italian"}],rating:4,coordinates:{latitude:34.2424411,longitude:-116.911209},transactions:[],price:"$$",location:{address1:"553 Pine Knot Ave",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["553 Pine Knot Ave","Big Bear Lake, CA 92315"]},phone:"+19098665405",display_phone:"(909) 866-5405",distance:746.2132702765057},{id:"2KE6LsNNI3x9uXrJ9_mSig",alias:"gabys-latin-flavors-big-bear-lake-4",name:"Gaby's Latin Flavors",image_url:"https://s3-media1.fl.yelpcdn.com/bphoto/J-NirsWx98PqxhsRKvCsXw/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/gabys-latin-flavors-big-bear-lake-4?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:740,categories:[{alias:"mexican",title:"Mexican"},{alias:"tradamerican",title:"American (Traditional)"},{alias:"cocktailbars",title:"Cocktail Bars"}],rating:4.5,coordinates:{latitude:34.24384,longitude:-116.89409},transactions:[],price:"$$",location:{address1:"41618 Big Bear Blvd",address2:null,address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["41618 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+19093538839",display_phone:"(909) 353-8839",distance:860.7749520731592},{id:"a4FyhMAzGV-Zsu24HucsyA",alias:"teddy-bear-restaurant-big-bear-lake",name:"Teddy Bear Restaurant",image_url:"https://s3-media4.fl.yelpcdn.com/bphoto/KzHyzoCNAblsQHrMqccYbw/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/teddy-bear-restaurant-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:2265,categories:[{alias:"tradamerican",title:"American (Traditional)"},{alias:"breakfast_brunch",title:"Breakfast & Brunch"},{alias:"diners",title:"Diners"}],rating:4,coordinates:{latitude:34.242051,longitude:-116.911278},transactions:[],price:"$$",location:{address1:"583 Pine Knot Ave",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["583 Pine Knot Ave","Big Bear Lake, CA 92315"]},phone:"+19098665415",display_phone:"(909) 866-5415",distance:768.3280731786788},{id:"51Xsw-SkLwmZi_Z51YO9BA",alias:"murrays-saloon-and-eatery-big-bear-lake",name:"Murray's Saloon",image_url:"https://s3-media1.fl.yelpcdn.com/bphoto/AZ02UJjwvNLev2RIt3Tv4w/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/murrays-saloon-and-eatery-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1117,categories:[{alias:"karaoke",title:"Karaoke"},{alias:"bars",title:"Bars"},{alias:"tradamerican",title:"American (Traditional)"}],rating:4.5,coordinates:{latitude:34.240375,longitude:-116.913871},transactions:[],price:"$$",location:{address1:"672 Cottage Ln",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["672 Cottage Ln","Big Bear Lake, CA 92315"]},phone:"+19098661444",display_phone:"(909) 866-1444",distance:1038.3113945419693},{id:"7lf5WqGx_tvBz5ZgTb2U6w",alias:"the-old-german-deli-big-bear-lake",name:"The Old German Deli",image_url:"https://s3-media2.fl.yelpcdn.com/bphoto/uhq9sQhbfJMd-9l4Ue80sQ/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/the-old-german-deli-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:453,categories:[{alias:"german",title:"German"},{alias:"delis",title:"Delis"},{alias:"sandwiches",title:"Sandwiches"}],rating:5,coordinates:{latitude:34.2404428,longitude:-116.91557},transactions:[],price:"$$",location:{address1:"40645 Village Dr",address2:"",address3:null,city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40645 Village Dr","Big Bear Lake, CA 92315"]},phone:"+19098780515",display_phone:"(909) 878-0515",distance:1198.6259261772439},{id:"roIR1CowViij9WMCJC_uvQ",alias:"saucy-mamas-big-bear-lake",name:"Saucy Mama's",image_url:"https://s3-media2.fl.yelpcdn.com/bphoto/O0QkFWzCqMwSf6B1mWE2pw/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/saucy-mamas-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1875,categories:[{alias:"pizza",title:"Pizza"},{alias:"bars",title:"Bars"}],rating:4,coordinates:{latitude:34.2414185403814,longitude:-116.911649610658},transactions:[],price:"$$",location:{address1:"618 B Pine Knot Ave",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["618 B Pine Knot Ave","Big Bear Lake, CA 92315"]},phone:"+19098780165",display_phone:"(909) 878-0165",distance:824.3494681017175},{id:"PS4x-8gLxA_H_pnacpeDwA",alias:"himalayan-restaurant-big-bear-lake",name:"Himalayan Restaurant",image_url:"https://s3-media4.fl.yelpcdn.com/bphoto/Anp-W0QKL15XF3Flgu_uXQ/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/himalayan-restaurant-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1653,categories:[{alias:"indpak",title:"Indian"},{alias:"himalayan",title:"Himalayan/Nepalese"}],rating:4,coordinates:{latitude:34.240367,longitude:-116.91168},transactions:["pickup","delivery"],price:"$$",location:{address1:"672 Pine Knot Ave",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["672 Pine Knot Ave","Big Bear Lake, CA 92315"]},phone:"+19098783068",display_phone:"(909) 878-3068",distance:881.9762107707238},{id:"dba9KFFlqRg6EcKMQ_2U5g",alias:"oakside-big-bear-lake-2",name:"Oakside",image_url:"https://s3-media1.fl.yelpcdn.com/bphoto/VOqhkyL8mpYlksofjjAdHg/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/oakside-big-bear-lake-2?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1214,categories:[{alias:"seafood",title:"Seafood"},{alias:"tradamerican",title:"American (Traditional)"},{alias:"sportsbars",title:"Sports Bars"}],rating:4,coordinates:{latitude:34.23977,longitude:-116.91395},transactions:[],price:"$$",location:{address1:"40701 Village Dr",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40701 Village Dr","Big Bear Lake, CA 92315"]},phone:"+19098665555",display_phone:"(909) 866-5555",distance:1095.8347318102437},{id:"lOs4hhlNwBqQprEexMvjaA",alias:"fire-rock-burgers-and-brews-big-bear-lake",name:"Fire Rock Burgers & Brews",image_url:"https://s3-media3.fl.yelpcdn.com/bphoto/MCIuE690gG3HfJVbkB2l-A/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/fire-rock-burgers-and-brews-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1170,categories:[{alias:"burgers",title:"Burgers"},{alias:"beerbar",title:"Beer Bar"}],rating:4,coordinates:{latitude:34.24135,longitude:-116.9118},transactions:[],price:"$$",location:{address1:"618 Pine Knot Ave",address2:"Ste B",address3:null,city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["618 Pine Knot Ave","Ste B","Big Bear Lake, CA 92315"]},phone:"+19098780696",display_phone:"(909) 878-0696",distance:839.5912133686192},{id:"a1XRkS1sM2BUg1WX94duTQ",alias:"masala-craft-indian-cuisine-big-bear-lake-3",name:"Masala Craft Indian Cuisine",image_url:"https://s3-media2.fl.yelpcdn.com/bphoto/0Vuar7JUv3bek1KqmZHWow/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/masala-craft-indian-cuisine-big-bear-lake-3?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:519,categories:[{alias:"indpak",title:"Indian"}],rating:4.5,coordinates:{latitude:34.2401170275865,longitude:-116.912643666865},transactions:[],price:"$$",location:{address1:"40760 Village Dr",address2:"Ste A",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40760 Village Dr","Ste A","Big Bear Lake, CA 92315"]},phone:"+19092730636",display_phone:"(909) 273-0636",distance:971.3715803602429},{id:"rY_oBeebUNK-JBDJw-NuLg",alias:"big-bear-lake-brewing-company-big-bear-lake",name:"Brewing Company",image_url:"https://s3-media3.fl.yelpcdn.com/bphoto/rCgFVIhHBvFE-qs0FfRhhw/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/big-bear-lake-brewing-company-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1784,categories:[{alias:"breweries",title:"Breweries"},{alias:"bars",title:"Bars"},{alias:"newamerican",title:"American (New)"}],rating:3.5,coordinates:{latitude:34.242516,longitude:-116.911008},transactions:[],price:"$$",location:{address1:"40827 Stone Rd",address2:null,address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40827 Stone Rd","Big Bear Lake, CA 92315"]},phone:"+19098780283",display_phone:"(909) 878-0283",distance:726.1009680168224},{id:"9KkORsEUWXYqsFRCl4R6JA",alias:"caf\xe9-cr\xeape-big-bear-lake",name:"Caf\xe9 Cr\xeape",image_url:"https://s3-media1.fl.yelpcdn.com/bphoto/ZJfJk7bZL71JQEhRZiiYpA/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/caf%C3%A9-cr%C3%AApe-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:230,categories:[{alias:"cafes",title:"Cafes"},{alias:"coffee",title:"Coffee & Tea"},{alias:"breakfast_brunch",title:"Breakfast & Brunch"}],rating:4.5,coordinates:{latitude:34.24337,longitude:-116.90759},transactions:[],price:"$",location:{address1:"41003 Big Bear Blvd",address2:null,address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["41003 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+19098092353",display_phone:"(909) 809-2353",distance:391.9333036521587},{id:"cwK8NADtCix-wwTkGMob0A",alias:"bone-side-down-barbecue-and-grill-big-bear-lake",name:"Bone-Side Down Barbecue",image_url:"https://s3-media1.fl.yelpcdn.com/bphoto/JhSdNPLrETDOr3pd0dNqrA/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/bone-side-down-barbecue-and-grill-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:366,categories:[{alias:"bbq",title:"Barbeque"},{alias:"sandwiches",title:"Sandwiches"},{alias:"tradamerican",title:"American (Traditional)"}],rating:4.5,coordinates:{latitude:34.241404,longitude:-116.919518},transactions:[],price:"$$",location:{address1:"40465 Big Bear Blvd",address2:"",address3:null,city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40465 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+17605085669",display_phone:"(760) 508-5669",distance:1514.2645164428675},{id:"8CtLze0xcg4ia0MME7IW7w",alias:"amangelas-sandwich-and-bagel-house-big-bear-lake-2",name:"Amangela's",image_url:"https://s3-media2.fl.yelpcdn.com/bphoto/WvsYhHX6KxqtOXdVR5VGhw/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/amangelas-sandwich-and-bagel-house-big-bear-lake-2?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:637,categories:[{alias:"bagels",title:"Bagels"},{alias:"sandwiches",title:"Sandwiches"}],rating:4,coordinates:{latitude:34.23965,longitude:-116.91329},transactions:[],price:"$$",location:{address1:"40729 Village Dr",address2:"Unit 1",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40729 Village Dr","Unit 1","Big Bear Lake, CA 92315"]},phone:"+19098780015",display_phone:"(909) 878-0015",distance:1043.0461126385526},{id:"s3K9ppox8iDF--1HL8wKUA",alias:"big-bear-coffee-roasting-big-bear-lake",name:"Big Bear Coffee Roasting",image_url:"https://s3-media1.fl.yelpcdn.com/bphoto/N6k4tdd9UX3NjaEYynwLbg/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/big-bear-coffee-roasting-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:313,categories:[{alias:"coffeeroasteries",title:"Coffee Roasteries"}],rating:4.5,coordinates:{latitude:34.2438094743851,longitude:-116.9059444},transactions:[],price:"$",location:{address1:"41080 Big Bear Blvd",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["41080 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+19098660859",display_phone:"(909) 866-0859",distance:238.9409037736576},{id:"cDFenpGfdQtumnalVlOoNw",alias:"572-social-kitchen-and-lounge-big-bear-lake",name:"572 Social Kitchen",image_url:"https://s3-media3.fl.yelpcdn.com/bphoto/MQFYRPpyhmgmCSeT1yh8lA/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/572-social-kitchen-and-lounge-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:1191,categories:[{alias:"newamerican",title:"American (New)"}],rating:3.5,coordinates:{latitude:34.2424231793167,longitude:-116.911523044109},transactions:[],price:"$$",location:{address1:"572 Pine Knot Ave",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["572 Pine Knot Ave","Big Bear Lake, CA 92315"]},phone:"+19098780307",display_phone:"(909) 878-0307",distance:774.3970231805016},{id:"xnEgY06FG7T-YGKnxXCzrg",alias:"sweet-basil-bistro-big-bear-lake",name:"Sweet Basil Bistro",image_url:"https://s3-media2.fl.yelpcdn.com/bphoto/uvQSBkX1wsafA42sdGh4qg/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/sweet-basil-bistro-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:707,categories:[{alias:"italian",title:"Italian"},{alias:"salad",title:"Salad"},{alias:"sandwiches",title:"Sandwiches"}],rating:4,coordinates:{latitude:34.2428734,longitude:-116.9153847},transactions:[],price:"$$",location:{address1:"40629 Big Bear Blvd",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["40629 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+19098669212",display_phone:"(909) 866-9212",distance:1110.0008793469676},{id:"r_QtcGY6S9rhZ9v61cJc-g",alias:"get-the-burger-big-bear-lake",name:"Get The Burger",image_url:"https://s3-media2.fl.yelpcdn.com/bphoto/t9I7UUDpPPOmnDgzNQajsA/o.jpg",is_closed:!1,url:"https://www.yelp.com/biz/get-the-burger-big-bear-lake?adjust_creative=4pc7F2eLJWD23C15UhsaRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4pc7F2eLJWD23C15UhsaRA",review_count:842,categories:[{alias:"burgers",title:"Burgers"}],rating:4,coordinates:{latitude:34.24914,longitude:-116.88275},transactions:[],price:"$",location:{address1:"42151 Big Bear Blvd",address2:"",address3:"",city:"Big Bear Lake",zip_code:"92315",country:"US",state:"CA",display_address:["42151 Big Bear Blvd","Big Bear Lake, CA 92315"]},phone:"+19098668800",display_phone:"(909) 866-8800",distance:1966.1204377726951}];F.map((function(e,a){return Object(o.jsxs)("div",{className:"restaurant",onClick:function(){var a;a=e.url,window.open(a)},children:[Object(o.jsx)("div",{className:"restaurantImage",children:Object(o.jsx)("img",{className:"restaurantImg ",src:e.image_url,alt:"Restaurant in Big Bear"})}),Object(o.jsxs)("div",{className:"restaurantInfo",children:[Object(o.jsxs)("div",{className:"restaurantTop",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("h4",{className:"price",children:e.price})]}),Object(o.jsxs)("div",{className:"restaurantBottom",children:[Object(o.jsxs)("div",{className:"restaurantRating",children:[Object(o.jsx)(y.a,{rating:e.rating,starRatedColor:"#FF385C",numberOfStars:5,name:"rating",starDimension:"17",starSpacing:"3",starEmptyColor:"gray"}),Object(o.jsxs)("h5",{className:"gray",children:["(",e.review_count," reviews)"]})]}),(i=e.categories,Object(o.jsx)("div",{className:"amenities",children:i.map((function(e,a){return Object(o.jsx)("div",{id:a,className:"amenity",children:Object(o.jsx)("h4",{children:e.title})},a)}))})),Object(o.jsx)("h4",{children:e.location.display_address.toString()}),Object(o.jsx)("h4",{children:e.display_phone})]})]})]},a);var i}));i(112),i.p,i.p;i.p,i(113),i.p;i(114),i(35),i(66);i(63),i(64),i(115),new Date;i(116);var z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,137)).then((function(a){var i=a.getCLS,s=a.getFID,t=a.getFCP,r=a.getLCP,c=a.getTTFB;i(e),s(e),t(e),r(e),c(e)}))};function J(){return Object(o.jsx)("div",{className:"app",children:"Hello"})}c.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root")),z()},28:function(e,a,i){},36:function(e,a,i){},73:function(e,a,i){},74:function(e,a,i){},75:function(e,a,i){}},[[122,1,2]]]);
//# sourceMappingURL=main.5cfb064b.chunk.js.map