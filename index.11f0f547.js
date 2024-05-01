!function(){function n(n,e,r,t){var o="https://eodhd.com/api/eod/".concat(n,"?from=").concat(r,"&to=").concat(t,"&period=d&api_token=").concat(e,"&fmt=json");return fetch(o).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){return n})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))}function e(n,e){var r="https://eodhd.com/api/real-time/".concat(n,"?api_token=").concat(e,"&fmt=json");return fetch(r).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){var e=new Date(1e3*n.timestamp);e=t(e),close=n.close;var r=n.change_p;return{realTimeDay:e,close:close,change_p:r}})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))}function r(n,e){var r="https://eodhd.com/api/news?".concat(n,"S&offset=0&limit=10&api_token=").concat(e,"&fmt=json");return fetch(r).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){return n})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))}function t(n){var e=n.getFullYear(),r=("0"+(n.getMonth()+1)).slice(-2),t=("0"+n.getDate()).slice(-2);return n="".concat(e,"-").concat(r,"-").concat(t)}function o(n,e,r){var t=document.getElementById("".concat(n));t.innerHTML="";var o="<p>".concat(e," <span></span>").concat(r.change_p,"%</p>");t.insertAdjacentHTML("beforeEnd",o)}var a;function C(n,e,r){var t=document.getElementById("myChart");return a=new Chart(t,{type:"line",data:{labels:n,datasets:[{label:r,data:e,borderWidth:3,pointRadius:0}]},options:{responsive:!0}})}function u(n,e){for(var r={yAxis:[],xAxis:[]},t=0;t<n.length;t++)"NA"!==n[t].close&&r.yAxis.push(n[t].close),r.xAxis.push(n[t].date);return n[n.length-1].date!=e.realTimeDay?("NA"!==e.close&&r.yAxis.push(e.close),r.xAxis.push(e.realTimeDay)):console.log("brak aktualnych danych"),r}function c(){a.data.datasets[1].borderWidth=0,a.data.datasets[2].borderWidth=0,a.data.datasets[3].borderWidth=0,a.update()}var i,y,S=[{Name:"USA Stocks",Code:"US",OperatingMIC:"XNAS, XNYS",Country:"USA",Currency:"USD",CountryISO2:"US",CountryISO3:"USA"},{Name:"London Exchange",Code:"LSE",OperatingMIC:"XLON",Country:"UK",Currency:"GBP",CountryISO2:"GB",CountryISO3:"GBR"},{Name:"Toronto Exchange",Code:"TO",OperatingMIC:"XTSE",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"NEO Exchange",Code:"NEO",OperatingMIC:"NEOE",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"TSX Venture Exchange",Code:"V",OperatingMIC:"XTSX",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"Berlin Exchange",Code:"BE",OperatingMIC:"XBER",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Hamburg Exchange",Code:"HM",OperatingMIC:"XHAM",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"XETRA Stock Exchange",Code:"XETRA",OperatingMIC:"XETR",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Dusseldorf Exchange",Code:"DU",OperatingMIC:"XDUS",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Hanover Exchange",Code:"HA",OperatingMIC:"XHAN",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Munich Exchange",Code:"MU",OperatingMIC:"XMUN",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Stuttgart Exchange",Code:"STU",OperatingMIC:"XSTU",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Frankfurt Exchange",Code:"F",OperatingMIC:"XFRA",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Luxembourg Stock Exchange",Code:"LU",OperatingMIC:"XLUX",Country:"Luxembourg",Currency:"EUR",CountryISO2:"LU",CountryISO3:"LUX"},{Name:"Vienna Exchange",Code:"VI",OperatingMIC:"XWBO",Country:"Austria",Currency:"EUR",CountryISO2:"AT",CountryISO3:"AUT"},{Name:"Euronext Paris",Code:"PA",OperatingMIC:"XPAR",Country:"France",Currency:"EUR",CountryISO2:"FR",CountryISO3:"FRA"},{Name:"Euronext Brussels",Code:"BR",OperatingMIC:"XBRU",Country:"Belgium",Currency:"EUR",CountryISO2:"BE",CountryISO3:"BEL"},{Name:"Madrid Exchange",Code:"MC",OperatingMIC:"BMEX",Country:"Spain",Currency:"EUR",CountryISO2:"ES",CountryISO3:"ESP"},{Name:"SIX Swiss Exchange",Code:"SW",OperatingMIC:"XSWX",Country:"Switzerland",Currency:"CHF",CountryISO2:"CH",CountryISO3:"CHE"},{Name:"Euronext Lisbon",Code:"LS",OperatingMIC:"XLIS",Country:"Portugal",Currency:"EUR",CountryISO2:"PT",CountryISO3:"PRT"},{Name:"Euronext Amsterdam",Code:"AS",OperatingMIC:"XAMS",Country:"Netherlands",Currency:"EUR",CountryISO2:"NL",CountryISO3:"NLD"},{Name:"Iceland Exchange",Code:"IC",OperatingMIC:"XICE",Country:"Iceland",Currency:"ISK",CountryISO2:"IS",CountryISO3:"ISL"},{Name:"Irish Exchange",Code:"IR",OperatingMIC:"XDUB",Country:"Ireland",Currency:"EUR",CountryISO2:"IE",CountryISO3:"IRL"},{Name:"Helsinki Exchange",Code:"HE",OperatingMIC:"XHEL",Country:"Finland",Currency:"EUR",CountryISO2:"FI",CountryISO3:"FIN"},{Name:"Oslo Stock Exchange",Code:"OL",OperatingMIC:"XOSL",Country:"Norway",Currency:"NOK",CountryISO2:"NO",CountryISO3:"NOR"},{Name:"Copenhagen Exchange",Code:"CO",OperatingMIC:"XCSE",Country:"Denmark",Currency:"DKK",CountryISO2:"DK",CountryISO3:"DNK"},{Name:"Stockholm Exchange",Code:"ST",OperatingMIC:"XSTO",Country:"Sweden",Currency:"SEK",CountryISO2:"SE",CountryISO3:"SWE"},{Name:"Victoria Falls Stock Exchange",Code:"VFEX",OperatingMIC:"VFEX",Country:"Zimbabwe ",Currency:"ZWL",CountryISO2:"ZW",CountryISO3:"ZWE"},{Name:"Zimbabwe Stock Exchange",Code:"XZIM",OperatingMIC:"XZIM",Country:"Zimbabwe ",Currency:"ZWL",CountryISO2:"ZW",CountryISO3:"ZWE"},{Name:"Lusaka Stock Exchange",Code:"LUSE",OperatingMIC:"XLUS",Country:"Zambia ",Currency:"ZMW",CountryISO2:"ZM",CountryISO3:"ZMB"},{Name:"Uganda Securities Exchange",Code:"USE",OperatingMIC:"XUGA",Country:"Uganda",Currency:"UGX",CountryISO2:"UG",CountryISO3:"UGA"},{Name:"Dar es Salaam Stock Exchange",Code:"DSE",OperatingMIC:"XDAR",Country:"Tanzania",Currency:"TZS",CountryISO2:"TZ",CountryISO3:"TZA"},{Name:"Prague Stock Exchange ",Code:"PR",OperatingMIC:"XPRA",Country:"Czech Republic",Currency:"CZK",CountryISO2:"CZ",CountryISO3:"CZE"},{Name:"Rwanda Stock Exchange",Code:"RSE",OperatingMIC:"RSEX",Country:"Rwanda",Currency:"RWF ",CountryISO2:"RW",CountryISO3:"RWA"},{Name:"Botswana Stock Exchange ",Code:"XBOT",OperatingMIC:"XBOT",Country:"Botswana",Currency:"BWP",CountryISO2:"BW",CountryISO3:"BWA"},{Name:"Egyptian Exchange",Code:"EGX",OperatingMIC:"NILX",Country:"Egypt",Currency:"EGP",CountryISO2:"EG",CountryISO3:"EGY"},{Name:"Nigerian Stock Exchange",Code:"XNSA",OperatingMIC:"XNSA",Country:"Nigeria",Currency:"NGN",CountryISO2:"NG",CountryISO3:"NGA"},{Name:"Ghana Stock Exchange",Code:"GSE",OperatingMIC:"XGHA",Country:"Ghana",Currency:"GHS",CountryISO2:"GH",CountryISO3:"GHA"},{Name:"Malawi Stock Exchange",Code:"MSE",OperatingMIC:"XMSW",Country:"Malawi",Currency:"MWK",CountryISO2:"MW",CountryISO3:"MWI"},{Name:"Regional Securities Exchange",Code:"BRVM",OperatingMIC:"XBRV",Country:"Ivory Coast",Currency:"XOF",CountryISO2:"CI",CountryISO3:"CIV"},{Name:"Nairobi Securities Exchange",Code:"XNAI",OperatingMIC:"XNAI",Country:"Kenya",Currency:"KES",CountryISO2:"KE",CountryISO3:"KEN"},{Name:"Casablanca Stock Exchange",Code:"BC",OperatingMIC:"XCAS",Country:"Morocco",Currency:"MAD",CountryISO2:"MA",CountryISO3:"MAR"},{Name:"Stock Exchange of Mauritius",Code:"SEM",OperatingMIC:"XMAU",Country:"Mauritius",Currency:"MUR",CountryISO2:"MU",CountryISO3:"MUS"},{Name:"Tel Aviv Stock Exchange",Code:"TA",OperatingMIC:"XTAE",Country:"Israel",Currency:"ILS",CountryISO2:"IL",CountryISO3:"ISR"},{Name:"Korea Stock Exchange",Code:"KO",OperatingMIC:"XKRX",Country:"Korea",Currency:"KRW",CountryISO2:"KR",CountryISO3:"KOR"},{Name:"KOSDAQ",Code:"KQ",OperatingMIC:"XKOS",Country:"Korea",Currency:"KRW",CountryISO2:"KR",CountryISO3:"KOR"},{Name:"Budapest Stock Exchange",Code:"BUD",OperatingMIC:"XBUD",Country:"Hungary",Currency:"HUF",CountryISO2:"HU",CountryISO3:"HUN"},{Name:"Warsaw Stock Exchange",Code:"WAR",OperatingMIC:"XWAR",Country:"Poland",Currency:"PLN",CountryISO2:"PL",CountryISO3:"POL"},{Name:"Philippine Stock Exchange",Code:"PSE",OperatingMIC:"XPHS",Country:"Philippines",Currency:"PHP",CountryISO2:"PH",CountryISO3:"PHL"},{Name:"Karachi Stock Exchange",Code:"KAR",OperatingMIC:"XKAR",Country:"Pakistan",Currency:"PKR",CountryISO2:"PK",CountryISO3:"PAK"},{Name:"Australian Securities Exchange",Code:"AU",OperatingMIC:"XASX",Country:"Australia",Currency:"AUD",CountryISO2:"AU",CountryISO3:"AUS"},{Name:"Johannesburg Exchange",Code:"JSE",OperatingMIC:"XJSE",Country:"South Africa",Currency:"ZAR",CountryISO2:"ZA",CountryISO3:"ZAF"},{Name:"Chilean Stock Exchange",Code:"SN",OperatingMIC:"XSGO",Country:"Chile",Currency:"CLP",CountryISO2:"CL",CountryISO3:"CHL"},{Name:"Jakarta Exchange",Code:"JK",OperatingMIC:"XIDX",Country:"Indonesia",Currency:"IDR",CountryISO2:"ID",CountryISO3:"IDN"},{Name:"Thailand Exchange",Code:"BK",OperatingMIC:"XBKK",Country:"Thailand",Currency:"THB",CountryISO2:"TH",CountryISO3:"THA"},{Name:"Shenzhen Stock Exchange",Code:"SHE",OperatingMIC:"XSHE",Country:"China",Currency:"CNY",CountryISO2:"CN",CountryISO3:"CHN"},{Name:"Athens Exchange",Code:"AT",OperatingMIC:"ASEX",Country:"Greece",Currency:"EUR",CountryISO2:"GR",CountryISO3:"GRC"},{Name:"National Stock Exchange of India",Code:"NSE",OperatingMIC:"XNSE",Country:"India",Currency:"INR",CountryISO2:"IN",CountryISO3:"IND"},{Name:"Shanghai Stock Exchange",Code:"SHG",OperatingMIC:"XSHG",Country:"China",Currency:"CNY",CountryISO2:"CN",CountryISO3:"CHN"},{Name:"Colombo Stock Exchange",Code:"CM",OperatingMIC:"XCOL",Country:"Sri Lanka",Currency:"LKR",CountryISO2:"LK",CountryISO3:"LKA"},{Name:"Vietnam Stocks",Code:"VN",OperatingMIC:"HSTC",Country:"Vietnam",Currency:"VND",CountryISO2:"VN",CountryISO3:"VNM"},{Name:"Kuala Lumpur Exchange",Code:"KLSE",OperatingMIC:"XKLS",Country:"Malaysia",Currency:"MYR",CountryISO2:"MY",CountryISO3:"MYS"},{Name:"Bucharest Stock Exchange",Code:"RO",OperatingMIC:"XBSE",Country:"Romania",Currency:"RON",CountryISO2:"RO",CountryISO3:"ROU"},{Name:"Buenos Aires Exchange",Code:"BA",OperatingMIC:"XBUE",Country:"Argentina",Currency:"ARS",CountryISO2:"AR",CountryISO3:"ARG"},{Name:"Sao Paulo Exchange",Code:"SA",OperatingMIC:"BVMF",Country:"Brazil",Currency:"BRL",CountryISO2:"BR",CountryISO3:"BRA"},{Name:"Mexican Exchange",Code:"MX",OperatingMIC:"XMEX",Country:"Mexico",Currency:"MXN",CountryISO2:"MX",CountryISO3:"MEX"},{Name:"London IL",Code:"IL",OperatingMIC:"XLON",Country:"UK",Currency:"USD",CountryISO2:"GB",CountryISO3:"GBR"},{Name:"Zagreb Stock Exchange",Code:"ZSE",OperatingMIC:"XZAG",Country:"Croatia",Currency:"EUR",CountryISO2:"HR",CountryISO3:"HRV"},{Name:"Taiwan Stock Exchange",Code:"TW",OperatingMIC:"XTAI",Country:"Taiwan",Currency:"TWD",CountryISO2:"TW",CountryISO3:"TWN"},{Name:"MICEX Moscow Russia",Code:"MCX",OperatingMIC:null,Country:"Russia",Currency:"RUB",CountryISO2:"RU",CountryISO3:"RUS"},{Name:"Taiwan OTC Exchange",Code:"TWO",OperatingMIC:"ROCO",Country:"Taiwan",Currency:"TWD",CountryISO2:"TW",CountryISO3:"TWN"},{Name:"Bolsa de Valores de Lima",Code:"LIM",OperatingMIC:"XLIM",Country:"Peru",Currency:"PEN",CountryISO2:"PE",CountryISO3:"PER"},{Name:"Money Market Virtual Exchange",Code:"MONEY",OperatingMIC:null,Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""},{Name:"Europe Fund Virtual Exchange",Code:"EUFUND",OperatingMIC:null,Country:"Unknown",Currency:"EUR",CountryISO2:"",CountryISO3:""},{Name:"Istanbul Stock Exchange",Code:"IS",OperatingMIC:"XIST",Country:"Turkey",Currency:"TRY",CountryISO2:"TR",CountryISO3:"TUR"},{Name:"Cryptocurrencies",Code:"CC",OperatingMIC:"CRYP",Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""},{Name:"FOREX",Code:"FOREX",OperatingMIC:"CDSL",Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""}],s=document.getElementById("select1"),I=document.getElementById("select2"),O=[{placeholder:!0,text:"Select the stock exchange",class:"custom-color"}],d=[];(function(n,e){var r="https://eodhd.com/api/exchange-symbol-list/".concat(n,"?api_token=").concat(e,"&fmt=json");return fetch(r).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){return n})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))})("US","65fd2d716aebf2.80647901").then((function(n){return i=n})).then((function(){for(var n=0;n<i.length;n++)i[n].Exchange&&(d.includes(i[n].Exchange)||d.push(i[n].Exchange));for(var e=0;e<d.length;e++)O.push({text:"Usa Stock:  ".concat(d[e])})})).then((function(){for(var n=0;n<S.length;n++)"US"!=S[n].Code&&O.push({text:S[n].Name})})).then((function(){y.setData(O)})),y=new SlimSelect({select:"#select1",data:O,options:[]});var h,g,l,p,E,m,N,M=new SlimSelect({select:"#select2",data:[{placeholder:!0,text:"First select the stock exchange",class:"custom-color"}]});function x(n){for(var e=[],r=0;r<n.length;r++){var t=[r+1,n[r]];e.push(t)}console.log(e);var o=regression.linear(e),C=o.equation[0],u=o.equation[1];console.log("y=".concat(C,"x+").concat(u));for(var c="y=".concat(C,"x+").concat(u),i=[],y=0;y<n.length;y++)i.push(C*y+u);return a.data.datasets.push({label:"linear regression",data:i,borderWidth:1,pointRadius:0,borderColor:"rgba(265, 20, 135, 1)",backgroundColor:"rgba(255, 255, 255, 1)"}),a.update(),{regYAxis:i,functionPattern:c}}function f(n,e){for(var r=[],t=0;t<e.length;t++)e[t]-n[t]>0&&r.push([t,e[t]]);var o=regression.linear(r);console.log(o);var C=o.equation[0],u=o.equation[1];console.log("y=".concat(C,"x+").concat(u));for(var c=[],i=0;i<e.length;i++)c.push(C*i+u);a.data.datasets.push({label:"top line",data:c,borderWidth:1,pointRadius:0,borderColor:"rgba(20, 265, 150, 1)",backgroundColor:"rgba(255, 255, 255, 1)"}),a.update()}function A(n,e){for(var r=[],t=0;t<e.length;t++)n[t]-e[t]>0&&r.push([t,e[t]]);var o=regression.linear(r);console.log(o);var C=o.equation[0],u=o.equation[1];console.log("y=".concat(C,"x+").concat(u));for(var c=[],i=0;i<e.length;i++)c.push(C*i+u);a.data.datasets.push({label:"bottom line",data:c,borderWidth:1,pointRadius:0,borderColor:"rgba(200, 100, 20, 1)",backgroundColor:"rgba(255, 255, 255, 1)"}),a.update()}flatpickr("#datepicker",{dateFormat:"Y-m-d",maxDate:(new Date).fp_incr(0),onClose:function(n,e){null!=(h=e)&&(P.disabled=!1)}});var R="65fd2d716aebf2.80647901",X="WAR",U="ALE",k=U.concat(".",X),w=new Date,D=new Date(w.getTime()-2592e6);m=t(w),D=t(D);var b,v,T,L,B,W,K=document.querySelector(".short-data");(b=k,v="GSPC.indx",T="APPL.US",L="EURPLN.FOREX",B="USDPLN.FOREX",W=R,url="https://eodhd.com/api/real-time/".concat(b,"?s=").concat(v,",").concat(T,",").concat(L,",").concat(B,"&api_token=").concat(W,"&fmt=json"),fetch(url).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){var e=new Date(1e3*n.timestamp);return e=t(e),close=n.close,n.change_p,{realTimeDay:e,data:n}})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))).then((function(n){var e=n.data;console.log(e),console.log(e);var r=e.map((function(n){return"<div class='single-data'><p class='header-paragraph'>Ticker: ".concat(n.code,"</p><p class='header-paragraph'>Close: ").concat(n.close,"</p><p class='header-paragraph'>Change: ").concat(n.change_p,"%</p></div>")})).join("");K.insertAdjacentHTML("beforeend",r)})).catch((function(n){console.error("Wystąpił błąd podczas pobierania danych:",n)})),n(k,R,D,m).then((function(n){return l=n,e(k,R)})).then((function(n){return o("currentData",k,g=n)})).then((function(){return u(l,g)})).then((function(n){return C((E=n).xAxis,E.yAxis,U)})).then((function(n){var e=x(E.yAxis).regYAxis;f(e,E.yAxis),A(e,E.yAxis),p=n})).then((function(){return r(k,R)})).then((function(n){var e=document.querySelector("#news"),r=n.map((function(n){return"<div class='newsDiv'><h2>".concat(n.title,"</h2><p>").concat(n.date,"</p><div class='div-afterp'><p>").concat(n.content,"</p></div></div>")})).join("");e.insertAdjacentHTML("beforeend",r)}));var P=document.querySelector(".button");P.disabled=!0,P.addEventListener("click",(function(t){t.preventDefault(),n(k,R,h,m).then((function(n){return console.log("pobrał1"),l=n,e(k,R)})).then((function(n){return o("currentData",k,g=n)})).then((function(){return u(l,g)})).then((function(n){return console.log("pobrał2"),E=n,p.destroy(),C(E.xAxis,E.yAxis,U)})).then((function(n){var e=x(E.yAxis).regYAxis;f(e,E.yAxis),A(e,E.yAxis),p=n,console.log("pobrał3"),"show regression lines"===H.textContent&&c()})).then((function(){return r(k,R)})).then((function(n){document.querySelector("#news")}))}));var H=document.querySelector(".regression-button");H.addEventListener("click",(function(n){n.preventDefault(),"hide regression lines"===H.textContent?(c(),H.textContent="show regression lines"):"show regression lines"===H.textContent&&(a.data.datasets[1].borderWidth=1,a.data.datasets[2].borderWidth=1,a.data.datasets[3].borderWidth=1,a.update(),H.textContent="hide regression lines")})),s.addEventListener("change",(function(n){n.preventDefault();var e=[],r=s.options[s.selectedIndex].value;if(r.includes("Usa Stock:")){for(var t=0;t<i.length;t++)r.includes(i[t].Exchange)&&e.push({text:"".concat(i[t].Name)});N=i,M.setData(e)}else for(var o=0;o<S.length;o++)if(S[o].Name===r){var a=S[o].Code;fetch("https://eodhd.com/api/exchange-symbol-list/".concat(a,"?api_token=65fd2d716aebf2.80647901&fmt=json")).then((function(n){return n.json()})).then((function(n){N=n;for(var r=0;r<n.length;r++)e.push({text:"".concat(n[r].Name)});M.setData(e)}))}})),I.addEventListener("change",(function(n){if(n.preventDefault(),null!=I.options[I.selectedIndex])for(var e=I.options[I.selectedIndex].value,r=0;r<N.length;r++)e!=N[r].Name||(U=N[r].Code,X="USA"===N[r].Country?"US":N[r].Exchange,k=U.concat(".",X))}))}();
//# sourceMappingURL=index.11f0f547.js.map
