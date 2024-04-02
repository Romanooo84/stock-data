!function(){function n(n){var e=n.getFullYear(),r=("0"+(n.getMonth()+1)).slice(-2),t=("0"+n.getDate()).slice(-2);return n="".concat(e,"-").concat(r,"-").concat(t)}function e(n,e,r){var t=document.getElementById("".concat(n));t.innerHTML="";var o="<p>".concat(e," <span></span>").concat(r.change_p,"%</p>");t.insertAdjacentHTML("beforeEnd",o)}function r(n,e,r){var t=document.getElementById("myChart");return new Chart(t,{type:"line",data:{labels:n,datasets:[{label:r,data:e,borderWidth:1,pointRadius:1}]},options:{}})}function t(n,e){for(var r={yAxis:[],xAxis:[]},t=0;t<n.length;t++)r.yAxis.push(n[t].close),r.xAxis.push(n[t].date);return r.yAxis.push(e.close),r.xAxis.push(e.date),r}var o,a,C,u,c,y=[{Name:"USA Stocks",Code:"US",OperatingMIC:"XNAS, XNYS",Country:"USA",Currency:"USD",CountryISO2:"US",CountryISO3:"USA"},{Name:"London Exchange",Code:"LSE",OperatingMIC:"XLON",Country:"UK",Currency:"GBP",CountryISO2:"GB",CountryISO3:"GBR"},{Name:"Toronto Exchange",Code:"TO",OperatingMIC:"XTSE",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"NEO Exchange",Code:"NEO",OperatingMIC:"NEOE",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"TSX Venture Exchange",Code:"V",OperatingMIC:"XTSX",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"Berlin Exchange",Code:"BE",OperatingMIC:"XBER",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Hamburg Exchange",Code:"HM",OperatingMIC:"XHAM",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"XETRA Stock Exchange",Code:"XETRA",OperatingMIC:"XETR",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Dusseldorf Exchange",Code:"DU",OperatingMIC:"XDUS",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Hanover Exchange",Code:"HA",OperatingMIC:"XHAN",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Munich Exchange",Code:"MU",OperatingMIC:"XMUN",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Stuttgart Exchange",Code:"STU",OperatingMIC:"XSTU",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Frankfurt Exchange",Code:"F",OperatingMIC:"XFRA",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Luxembourg Stock Exchange",Code:"LU",OperatingMIC:"XLUX",Country:"Luxembourg",Currency:"EUR",CountryISO2:"LU",CountryISO3:"LUX"},{Name:"Vienna Exchange",Code:"VI",OperatingMIC:"XWBO",Country:"Austria",Currency:"EUR",CountryISO2:"AT",CountryISO3:"AUT"},{Name:"Euronext Paris",Code:"PA",OperatingMIC:"XPAR",Country:"France",Currency:"EUR",CountryISO2:"FR",CountryISO3:"FRA"},{Name:"Euronext Brussels",Code:"BR",OperatingMIC:"XBRU",Country:"Belgium",Currency:"EUR",CountryISO2:"BE",CountryISO3:"BEL"},{Name:"Madrid Exchange",Code:"MC",OperatingMIC:"BMEX",Country:"Spain",Currency:"EUR",CountryISO2:"ES",CountryISO3:"ESP"},{Name:"SIX Swiss Exchange",Code:"SW",OperatingMIC:"XSWX",Country:"Switzerland",Currency:"CHF",CountryISO2:"CH",CountryISO3:"CHE"},{Name:"Euronext Lisbon",Code:"LS",OperatingMIC:"XLIS",Country:"Portugal",Currency:"EUR",CountryISO2:"PT",CountryISO3:"PRT"},{Name:"Euronext Amsterdam",Code:"AS",OperatingMIC:"XAMS",Country:"Netherlands",Currency:"EUR",CountryISO2:"NL",CountryISO3:"NLD"},{Name:"Iceland Exchange",Code:"IC",OperatingMIC:"XICE",Country:"Iceland",Currency:"ISK",CountryISO2:"IS",CountryISO3:"ISL"},{Name:"Irish Exchange",Code:"IR",OperatingMIC:"XDUB",Country:"Ireland",Currency:"EUR",CountryISO2:"IE",CountryISO3:"IRL"},{Name:"Helsinki Exchange",Code:"HE",OperatingMIC:"XHEL",Country:"Finland",Currency:"EUR",CountryISO2:"FI",CountryISO3:"FIN"},{Name:"Oslo Stock Exchange",Code:"OL",OperatingMIC:"XOSL",Country:"Norway",Currency:"NOK",CountryISO2:"NO",CountryISO3:"NOR"},{Name:"Copenhagen Exchange",Code:"CO",OperatingMIC:"XCSE",Country:"Denmark",Currency:"DKK",CountryISO2:"DK",CountryISO3:"DNK"},{Name:"Stockholm Exchange",Code:"ST",OperatingMIC:"XSTO",Country:"Sweden",Currency:"SEK",CountryISO2:"SE",CountryISO3:"SWE"},{Name:"Victoria Falls Stock Exchange",Code:"VFEX",OperatingMIC:"VFEX",Country:"Zimbabwe ",Currency:"ZWL",CountryISO2:"ZW",CountryISO3:"ZWE"},{Name:"Zimbabwe Stock Exchange",Code:"XZIM",OperatingMIC:"XZIM",Country:"Zimbabwe ",Currency:"ZWL",CountryISO2:"ZW",CountryISO3:"ZWE"},{Name:"Lusaka Stock Exchange",Code:"LUSE",OperatingMIC:"XLUS",Country:"Zambia ",Currency:"ZMW",CountryISO2:"ZM",CountryISO3:"ZMB"},{Name:"Uganda Securities Exchange",Code:"USE",OperatingMIC:"XUGA",Country:"Uganda",Currency:"UGX",CountryISO2:"UG",CountryISO3:"UGA"},{Name:"Dar es Salaam Stock Exchange",Code:"DSE",OperatingMIC:"XDAR",Country:"Tanzania",Currency:"TZS",CountryISO2:"TZ",CountryISO3:"TZA"},{Name:"Prague Stock Exchange ",Code:"PR",OperatingMIC:"XPRA",Country:"Czech Republic",Currency:"CZK",CountryISO2:"CZ",CountryISO3:"CZE"},{Name:"Rwanda Stock Exchange",Code:"RSE",OperatingMIC:"RSEX",Country:"Rwanda",Currency:"RWF ",CountryISO2:"RW",CountryISO3:"RWA"},{Name:"Botswana Stock Exchange ",Code:"XBOT",OperatingMIC:"XBOT",Country:"Botswana",Currency:"BWP",CountryISO2:"BW",CountryISO3:"BWA"},{Name:"Egyptian Exchange",Code:"EGX",OperatingMIC:"NILX",Country:"Egypt",Currency:"EGP",CountryISO2:"EG",CountryISO3:"EGY"},{Name:"Nigerian Stock Exchange",Code:"XNSA",OperatingMIC:"XNSA",Country:"Nigeria",Currency:"NGN",CountryISO2:"NG",CountryISO3:"NGA"},{Name:"Ghana Stock Exchange",Code:"GSE",OperatingMIC:"XGHA",Country:"Ghana",Currency:"GHS",CountryISO2:"GH",CountryISO3:"GHA"},{Name:"Malawi Stock Exchange",Code:"MSE",OperatingMIC:"XMSW",Country:"Malawi",Currency:"MWK",CountryISO2:"MW",CountryISO3:"MWI"},{Name:"Regional Securities Exchange",Code:"BRVM",OperatingMIC:"XBRV",Country:"Ivory Coast",Currency:"XOF",CountryISO2:"CI",CountryISO3:"CIV"},{Name:"Nairobi Securities Exchange",Code:"XNAI",OperatingMIC:"XNAI",Country:"Kenya",Currency:"KES",CountryISO2:"KE",CountryISO3:"KEN"},{Name:"Casablanca Stock Exchange",Code:"BC",OperatingMIC:"XCAS",Country:"Morocco",Currency:"MAD",CountryISO2:"MA",CountryISO3:"MAR"},{Name:"Stock Exchange of Mauritius",Code:"SEM",OperatingMIC:"XMAU",Country:"Mauritius",Currency:"MUR",CountryISO2:"MU",CountryISO3:"MUS"},{Name:"Tel Aviv Stock Exchange",Code:"TA",OperatingMIC:"XTAE",Country:"Israel",Currency:"ILS",CountryISO2:"IL",CountryISO3:"ISR"},{Name:"Korea Stock Exchange",Code:"KO",OperatingMIC:"XKRX",Country:"Korea",Currency:"KRW",CountryISO2:"KR",CountryISO3:"KOR"},{Name:"KOSDAQ",Code:"KQ",OperatingMIC:"XKOS",Country:"Korea",Currency:"KRW",CountryISO2:"KR",CountryISO3:"KOR"},{Name:"Budapest Stock Exchange",Code:"BUD",OperatingMIC:"XBUD",Country:"Hungary",Currency:"HUF",CountryISO2:"HU",CountryISO3:"HUN"},{Name:"Warsaw Stock Exchange",Code:"WAR",OperatingMIC:"XWAR",Country:"Poland",Currency:"PLN",CountryISO2:"PL",CountryISO3:"POL"},{Name:"Philippine Stock Exchange",Code:"PSE",OperatingMIC:"XPHS",Country:"Philippines",Currency:"PHP",CountryISO2:"PH",CountryISO3:"PHL"},{Name:"Karachi Stock Exchange",Code:"KAR",OperatingMIC:"XKAR",Country:"Pakistan",Currency:"PKR",CountryISO2:"PK",CountryISO3:"PAK"},{Name:"Australian Securities Exchange",Code:"AU",OperatingMIC:"XASX",Country:"Australia",Currency:"AUD",CountryISO2:"AU",CountryISO3:"AUS"},{Name:"Johannesburg Exchange",Code:"JSE",OperatingMIC:"XJSE",Country:"South Africa",Currency:"ZAR",CountryISO2:"ZA",CountryISO3:"ZAF"},{Name:"Chilean Stock Exchange",Code:"SN",OperatingMIC:"XSGO",Country:"Chile",Currency:"CLP",CountryISO2:"CL",CountryISO3:"CHL"},{Name:"Jakarta Exchange",Code:"JK",OperatingMIC:"XIDX",Country:"Indonesia",Currency:"IDR",CountryISO2:"ID",CountryISO3:"IDN"},{Name:"Thailand Exchange",Code:"BK",OperatingMIC:"XBKK",Country:"Thailand",Currency:"THB",CountryISO2:"TH",CountryISO3:"THA"},{Name:"Shenzhen Stock Exchange",Code:"SHE",OperatingMIC:"XSHE",Country:"China",Currency:"CNY",CountryISO2:"CN",CountryISO3:"CHN"},{Name:"Athens Exchange",Code:"AT",OperatingMIC:"ASEX",Country:"Greece",Currency:"EUR",CountryISO2:"GR",CountryISO3:"GRC"},{Name:"National Stock Exchange of India",Code:"NSE",OperatingMIC:"XNSE",Country:"India",Currency:"INR",CountryISO2:"IN",CountryISO3:"IND"},{Name:"Shanghai Stock Exchange",Code:"SHG",OperatingMIC:"XSHG",Country:"China",Currency:"CNY",CountryISO2:"CN",CountryISO3:"CHN"},{Name:"Colombo Stock Exchange",Code:"CM",OperatingMIC:"XCOL",Country:"Sri Lanka",Currency:"LKR",CountryISO2:"LK",CountryISO3:"LKA"},{Name:"Vietnam Stocks",Code:"VN",OperatingMIC:"HSTC",Country:"Vietnam",Currency:"VND",CountryISO2:"VN",CountryISO3:"VNM"},{Name:"Kuala Lumpur Exchange",Code:"KLSE",OperatingMIC:"XKLS",Country:"Malaysia",Currency:"MYR",CountryISO2:"MY",CountryISO3:"MYS"},{Name:"Bucharest Stock Exchange",Code:"RO",OperatingMIC:"XBSE",Country:"Romania",Currency:"RON",CountryISO2:"RO",CountryISO3:"ROU"},{Name:"Buenos Aires Exchange",Code:"BA",OperatingMIC:"XBUE",Country:"Argentina",Currency:"ARS",CountryISO2:"AR",CountryISO3:"ARG"},{Name:"Sao Paulo Exchange",Code:"SA",OperatingMIC:"BVMF",Country:"Brazil",Currency:"BRL",CountryISO2:"BR",CountryISO3:"BRA"},{Name:"Mexican Exchange",Code:"MX",OperatingMIC:"XMEX",Country:"Mexico",Currency:"MXN",CountryISO2:"MX",CountryISO3:"MEX"},{Name:"London IL",Code:"IL",OperatingMIC:"XLON",Country:"UK",Currency:"USD",CountryISO2:"GB",CountryISO3:"GBR"},{Name:"Zagreb Stock Exchange",Code:"ZSE",OperatingMIC:"XZAG",Country:"Croatia",Currency:"EUR",CountryISO2:"HR",CountryISO3:"HRV"},{Name:"Taiwan Stock Exchange",Code:"TW",OperatingMIC:"XTAI",Country:"Taiwan",Currency:"TWD",CountryISO2:"TW",CountryISO3:"TWN"},{Name:"MICEX Moscow Russia",Code:"MCX",OperatingMIC:null,Country:"Russia",Currency:"RUB",CountryISO2:"RU",CountryISO3:"RUS"},{Name:"Taiwan OTC Exchange",Code:"TWO",OperatingMIC:"ROCO",Country:"Taiwan",Currency:"TWD",CountryISO2:"TW",CountryISO3:"TWN"},{Name:"Bolsa de Valores de Lima",Code:"LIM",OperatingMIC:"XLIM",Country:"Peru",Currency:"PEN",CountryISO2:"PE",CountryISO3:"PER"},{Name:"Money Market Virtual Exchange",Code:"MONEY",OperatingMIC:null,Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""},{Name:"Europe Fund Virtual Exchange",Code:"EUFUND",OperatingMIC:null,Country:"Unknown",Currency:"EUR",CountryISO2:"",CountryISO3:""},{Name:"Istanbul Stock Exchange",Code:"IS",OperatingMIC:"XIST",Country:"Turkey",Currency:"TRY",CountryISO2:"TR",CountryISO3:"TUR"},{Name:"Cryptocurrencies",Code:"CC",OperatingMIC:"CRYP",Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""},{Name:"FOREX",Code:"FOREX",OperatingMIC:"CDSL",Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""}],S=document.getElementById("select1"),I=document.getElementById("select2"),i=[{placeholder:!0,text:"Select the stock exchange"}],O=[];(C="US",u="65fd2d716aebf2.80647901",c="https://eodhd.com/api/exchange-symbol-list/".concat(C,"?api_token=").concat(u,"&fmt=json"),fetch(c).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){return n})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))).then((function(n){return o=n})).then((function(){for(var n=0;n<o.length;n++)o[n].Exchange&&(O.includes(o[n].Exchange)||O.push(o[n].Exchange));for(var e=0;e<O.length;e++)i.push({text:"Usa Stock:  ".concat(O[e])})})).then((function(){for(var n=0;n<y.length;n++)"US"!=y[n].Code&&i.push({text:y[n].Name})})).then((function(){a.setData(i)})),a=new SlimSelect({select:"#select1",data:i});var g,E,h,d,s,N,p=new SlimSelect({select:"#select2",data:[{placeholder:!0,text:"First select the stock exchange"}]});flatpickr("#datepicker",{dateFormat:"Y-m-d",maxDate:(new Date).fp_incr(0),onClose:function(n,e,r){g=e,console.log(g)}});var m,l,M,x="65fd2d716aebf2.80647901",R="WAR",X="ACP",A=X.concat(".",R),U=new Date,f=new Date(U.getTime()-7776e6);s=n(U),f=n(f),M=X,function(n,e,r,t){var o="https://eodhd.com/api/eod/".concat(n,"?from=").concat(r,"&to=").concat(t,"&period=d&api_token=").concat(e,"&fmt=json");return console.log("https://eodhd.com/api/eod/".concat(n,"?from=").concat(r,"&to=").concat(t,"&period=d&api_token=").concat(e,"&fmt=json")),fetch(o).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){return n})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}))}(m=A,l=x,f,s).then((function(n){return historicalData=n,e=l,r="https://eodhd.com/api/real-time/".concat(m,"?api_token=").concat(e,"&fmt=json"),fetch(r).then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(n){return n})).catch((function(n){console.error("There was a problem with your fetch operation:",n)}));var e,r})).then((function(n){return dailyData=n,e("currentData",m,dailyData)})).then((function(){return t(historicalData,dailyData)})).then((function(n){return chartData=n,r(chartData.xAxis,chartData.yAxis,M)})).then((function(n){n})),document.querySelector(".button").addEventListener("click",(function(n){n.preventDefault(),historicalStockData(A,x,g,s).then((function(n){return h=n,dailyStockData(A,x)})).then((function(n){return e("currentData",A,E=n)})).then((function(){return t(h,E)})).then((function(n){return d=n,newDataChart.destroy(),r(d.xAxis,d.yAxis,X)})).then((function(n){newDataChart=n}))})),S.addEventListener("change",(function(n){n.preventDefault(),console.log(g);var e=[],r=S.options[S.selectedIndex].value;if(r.includes("Usa Stock:")){for(var t=0;t<o.length;t++)r.includes(o[t].Exchange)&&e.push({text:"".concat(o[t].Name)});N=o,console.log(N),p.setData(e)}else for(var a=0;a<y.length;a++)if(y[a].Name===r){var C=y[a].Code;fetch("https://eodhd.com/api/exchange-symbol-list/".concat(C,"?api_token=65fd2d716aebf2.80647901&fmt=json")).then((function(n){return n.json()})).then((function(n){N=n;for(var r=0;r<n.length;r++)e.push({text:"".concat(n[r].Name)});p.setData(e),console.log(N)}))}})),I.addEventListener("change",(function(n){if(n.preventDefault(),null!=I.options[I.selectedIndex])for(var e=I.options[I.selectedIndex].value,r=0;r<N.length;r++)e!=N[r].Name||(X=N[r].Code,R="USA"===N[r].Country?"US":N[r].Exchange,A=X.concat(".",R))}))}();
//# sourceMappingURL=index.b73fd585.js.map
