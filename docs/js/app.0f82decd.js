(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],d=0,y=[];d<c.length;d++)r=c[d],a[r]&&y.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(y.length)y.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5257:function(t,e,n){"use strict";var i=n("aa0b"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-view")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("city-select",{attrs:{cityList:t.cityList},on:{"city-to-display":function(e){return t.displayCityWeather(e)}}}),t.loading?n("div",{staticClass:"spinner"},[t._m(0)]):t._e(),""!==t.selectedCity?n("weather-information",{attrs:{selectedCity:t.selectedCity,cityWeatherInformation:t.cityWeatherInformations}}):t._e()],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner__inner"},[n("div"),n("div"),n("div"),n("div")])}],o=(n("7f7f"),n("7514"),n("bc3a")),l=n.n(o),u=l.a.create({baseURL:"https://dev-weather-api.azurewebsites.net/api/city"}),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"drop-down",on:{click:this.showDropDown}},[t.checkCityData?n("span",[t._v(t._s(""===t.cityToDisplay?"Select city....":t.cityToDisplay))]):t._e(),t.checkCityData?n("div",{class:[{"drop-down__inner--active":t.dropDown},"drop-down__inner"]},t._l(t.cityList,function(e){return n("div",{key:e.id,staticClass:"drop-down__item",on:{mouseover:function(n){return t.selectCityHover(e.name)},click:function(n){return t.selectCityToDisplay(e.name)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])}),0):n("span",{staticClass:"drop-down__error"},[t._v(t._s(t.cityList))])])},y=[],f={name:"city-select",props:{cityList:[Array,String],default:[],required:!0},data:function(){return{cityToDisplay:"",dropDown:!1}},methods:{selectCityToDisplay:function(t){this.$emit("city-to-display",t),this.cityToDisplay=t},showDropDown:function(){this.dropDown=!this.dropDown},selectCityHover:function(t){this.cityToDisplay=t}},computed:{checkCityData:function(){return"string"!==typeof this.cityList}}},p=f,_=(n("69a7"),n("2877")),m=Object(_["a"])(p,d,y,!1,null,"34c5ea6e",null),h=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.checkWeatherData?n("ul",{staticClass:"main-list"},t._l(t.cityWeatherInformation,function(e,i){return n("single-day",{key:i,attrs:{index:i,singleDayInformations:e,formattedDate:t.formattedDate[i]}})}),1):n("span",{staticClass:"error"},[t._v(t._s(t.cityWeatherInformation))])])},g=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:[{"single-city--big-display":0===t.index},"single-city"]},[0===t.index?n("span",{staticClass:"single-city__date"},[t._v(t._s(t.formattedDate.day)+", "+t._s(t.formattedDate.month)+" "+t._s(t.formattedDate.numericDay)),n("br"),t._v("Overcast")]):n("span",{staticClass:"single-city__date"},[t._v(t._s(t.formattedDate.day))]),n("div",{staticClass:"container"},[n("img",{staticClass:"single-city__img",attrs:{src:"static/"+t.singleDayInformations.type+".png",alt:t.singleDayInformations.type}}),n("div",{staticClass:"container__inner"},[n("span",{staticClass:"single-city__temp"},[t._v(t._s(t.singleDayInformations.temperature)+"\n        "),n("span",{staticClass:"single-city__temp--celcius"},[t._v("℃")])]),n("div",{staticClass:"single-city__desc--humidity"},[n("span",{staticClass:"single-city__desc single-city__desc--humidity"},[t._v("Humidity: ")]),t._v("\n        "+t._s(t.singleDayInformations.humidity)+"%\n      ")])]),n("div",{staticClass:"container__inner container__inner--informations"},[n("div",{staticClass:"single-city__desc"},[n("span",{staticClass:"grey-color"},[t._v("Precipitation: ")]),t._v(t._s(t.singleDayInformations.precipitation)+"%\n      ")]),n("div",{staticClass:"single-city__desc"},[n("span",{staticClass:"grey-color"},[t._v("Wind: ")]),t._v("\n        "+t._s(t.singleDayInformations.windInfo.speed)+"mph "+t._s(t.singleDayInformations.windInfo.direction)+"\n      ")]),n("div",{staticClass:"single-city__desc"},[n("span",{staticClass:"grey-color"},[t._v("Humidity: ")]),t._v("\n        "+t._s(t.singleDayInformations.humidity)+"%\n      ")]),n("div",{staticClass:"container__inner container__inner--big"},[n("span",{staticClass:"single-city__desc grey-color"},[t._v("Pollen Count: ")]),n("span",{staticClass:"single-city__desc single-city__desc--pollen"},[t._v("Pollen ")]),t._v("\n        "+t._s(t.singleDayInformations.pollenCount)+"\n      ")])])])])},C=[],b=(n("c5f6"),{name:"single-day",props:{singleDayInformations:{type:Object,required:!0,default:{}},index:{type:Number,required:!0,default:0},formattedDate:{type:Object,required:!0,default:{}}}}),w=b,I=(n("f70f"),Object(_["a"])(w,D,C,!1,null,"2369f2cc",null)),O=I.exports,W={name:"weather-information",components:{SingleDay:O},props:{cityWeatherInformation:{type:[Array,String],default:[],required:!0},selectedCity:{type:String,default:"Select city...",required:!0}},data:function(){return{formattedDate:[]}},computed:{checkWeatherData:function(){return"string"!==typeof this.cityWeatherInformation}},watch:{cityWeatherInformation:function(){var t={days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},e=this.cityWeatherInformation.map(function(t){return t.date.slice(0,10)}).map(function(e){var n=new Date(e).getDay(),i=new Date(e).getMonth();return{month:t.months[i],day:t.days[n],numericDay:e.slice(8,10)}});this.formattedDate=e}}},S=W,j=(n("5257"),Object(_["a"])(S,v,g,!1,null,"0a9a8375",null)),x=j.exports,T={name:"main-view",components:{CitySelect:h,WeatherInformation:x},data:function(){return{selectedCity:"",cityList:[],cityWeatherInformations:[],loading:!1}},methods:{displayCityWeather:function(t){var e=this;if(t!==this.selectedCity){this.loading=!0,this.selectedCity=t;var n=(new Date).toJSON().slice(0,10),i=this.cityList.find(function(e){return e.name===t});u.get("".concat(i.id,"/weather?date=").concat(n)).then(function(t){e.loading=!1,e.cityWeatherInformations=t.data}).catch(function(t){e.loading=!1,e.cityWeatherInformations="There was an error".concat(t,", please try again")})}}},created:function(){var t=this;u.get().then(function(e){t.cityList=e.data}).catch(function(e){t.cityList="There was an error, please try refreshing the page. ".concat(e)})}},k=T,L=Object(_["a"])(k,r,c,!1,null,null,null),M=L.exports,P={name:"app",components:{MainView:M}},$=P,q=(n("5c0b"),Object(_["a"])($,a,s,!1,null,null,null)),E=q.exports;n("b107");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5e25":function(t,e,n){},"5e27":function(t,e,n){},"69a7":function(t,e,n){"use strict";var i=n("5e25"),a=n.n(i);a.a},aa0b:function(t,e,n){},b107:function(t,e,n){},c74d:function(t,e,n){},f70f:function(t,e,n){"use strict";var i=n("c74d"),a=n.n(i);a.a}});
//# sourceMappingURL=app.0f82decd.js.map