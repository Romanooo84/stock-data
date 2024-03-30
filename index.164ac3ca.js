function e(e,n,r,t){return fetch(`https://eodhd.com/api/eod/${e}?from=${r}&to=${t}&period=d&api_token=${n}&fmt=json`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{let n=e;return console.log(n),n})).catch((e=>{console.error("There was a problem with your fetch operation:",e)}))}function n(e,n){return fetch(`https://eodhd.com/api/real-time/${e}?api_token=${n}&fmt=json`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>e)).catch((e=>{console.error("There was a problem with your fetch operation:",e)}))}function r(e){const n=e.getFullYear(),r=("0"+(e.getMonth()+1)).slice(-2),t=("0"+e.getDate()).slice(-2);return e=`${n}-${r}-${t}`}function t(e,n,r){let t=document.getElementById(`${e}`);t.innerHTML="";let C=`<p>${n} <span></span>${r.change_p}%</p>`;t.insertAdjacentHTML("beforeEnd",C)}function C(e,n,r){const t=document.getElementById("myChart");return new Chart(t,{type:"line",data:{labels:e,datasets:[{label:r,data:n,borderWidth:1,pointRadius:1}]},options:{}})}function o(e,n){let r={yAxis:[],xAxis:[]};for(let n=0;n<e.length;n++)r.yAxis.push(e[n].close),r.xAxis.push(e[n].date);return r.yAxis.push(n.close),r.xAxis.push(n.date),r}const a=[{Name:"USA Stocks",Code:"US",OperatingMIC:"XNAS, XNYS",Country:"USA",Currency:"USD",CountryISO2:"US",CountryISO3:"USA"},{Name:"London Exchange",Code:"LSE",OperatingMIC:"XLON",Country:"UK",Currency:"GBP",CountryISO2:"GB",CountryISO3:"GBR"},{Name:"Toronto Exchange",Code:"TO",OperatingMIC:"XTSE",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"NEO Exchange",Code:"NEO",OperatingMIC:"NEOE",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"TSX Venture Exchange",Code:"V",OperatingMIC:"XTSX",Country:"Canada",Currency:"CAD",CountryISO2:"CA",CountryISO3:"CAN"},{Name:"Berlin Exchange",Code:"BE",OperatingMIC:"XBER",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Hamburg Exchange",Code:"HM",OperatingMIC:"XHAM",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"XETRA Stock Exchange",Code:"XETRA",OperatingMIC:"XETR",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Dusseldorf Exchange",Code:"DU",OperatingMIC:"XDUS",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Hanover Exchange",Code:"HA",OperatingMIC:"XHAN",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Munich Exchange",Code:"MU",OperatingMIC:"XMUN",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Stuttgart Exchange",Code:"STU",OperatingMIC:"XSTU",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Frankfurt Exchange",Code:"F",OperatingMIC:"XFRA",Country:"Germany",Currency:"EUR",CountryISO2:"DE",CountryISO3:"DEU"},{Name:"Luxembourg Stock Exchange",Code:"LU",OperatingMIC:"XLUX",Country:"Luxembourg",Currency:"EUR",CountryISO2:"LU",CountryISO3:"LUX"},{Name:"Vienna Exchange",Code:"VI",OperatingMIC:"XWBO",Country:"Austria",Currency:"EUR",CountryISO2:"AT",CountryISO3:"AUT"},{Name:"Euronext Paris",Code:"PA",OperatingMIC:"XPAR",Country:"France",Currency:"EUR",CountryISO2:"FR",CountryISO3:"FRA"},{Name:"Euronext Brussels",Code:"BR",OperatingMIC:"XBRU",Country:"Belgium",Currency:"EUR",CountryISO2:"BE",CountryISO3:"BEL"},{Name:"Madrid Exchange",Code:"MC",OperatingMIC:"BMEX",Country:"Spain",Currency:"EUR",CountryISO2:"ES",CountryISO3:"ESP"},{Name:"SIX Swiss Exchange",Code:"SW",OperatingMIC:"XSWX",Country:"Switzerland",Currency:"CHF",CountryISO2:"CH",CountryISO3:"CHE"},{Name:"Euronext Lisbon",Code:"LS",OperatingMIC:"XLIS",Country:"Portugal",Currency:"EUR",CountryISO2:"PT",CountryISO3:"PRT"},{Name:"Euronext Amsterdam",Code:"AS",OperatingMIC:"XAMS",Country:"Netherlands",Currency:"EUR",CountryISO2:"NL",CountryISO3:"NLD"},{Name:"Iceland Exchange",Code:"IC",OperatingMIC:"XICE",Country:"Iceland",Currency:"ISK",CountryISO2:"IS",CountryISO3:"ISL"},{Name:"Irish Exchange",Code:"IR",OperatingMIC:"XDUB",Country:"Ireland",Currency:"EUR",CountryISO2:"IE",CountryISO3:"IRL"},{Name:"Helsinki Exchange",Code:"HE",OperatingMIC:"XHEL",Country:"Finland",Currency:"EUR",CountryISO2:"FI",CountryISO3:"FIN"},{Name:"Oslo Stock Exchange",Code:"OL",OperatingMIC:"XOSL",Country:"Norway",Currency:"NOK",CountryISO2:"NO",CountryISO3:"NOR"},{Name:"Copenhagen Exchange",Code:"CO",OperatingMIC:"XCSE",Country:"Denmark",Currency:"DKK",CountryISO2:"DK",CountryISO3:"DNK"},{Name:"Stockholm Exchange",Code:"ST",OperatingMIC:"XSTO",Country:"Sweden",Currency:"SEK",CountryISO2:"SE",CountryISO3:"SWE"},{Name:"Victoria Falls Stock Exchange",Code:"VFEX",OperatingMIC:"VFEX",Country:"Zimbabwe ",Currency:"ZWL",CountryISO2:"ZW",CountryISO3:"ZWE"},{Name:"Zimbabwe Stock Exchange",Code:"XZIM",OperatingMIC:"XZIM",Country:"Zimbabwe ",Currency:"ZWL",CountryISO2:"ZW",CountryISO3:"ZWE"},{Name:"Lusaka Stock Exchange",Code:"LUSE",OperatingMIC:"XLUS",Country:"Zambia ",Currency:"ZMW",CountryISO2:"ZM",CountryISO3:"ZMB"},{Name:"Uganda Securities Exchange",Code:"USE",OperatingMIC:"XUGA",Country:"Uganda",Currency:"UGX",CountryISO2:"UG",CountryISO3:"UGA"},{Name:"Dar es Salaam Stock Exchange",Code:"DSE",OperatingMIC:"XDAR",Country:"Tanzania",Currency:"TZS",CountryISO2:"TZ",CountryISO3:"TZA"},{Name:"Prague Stock Exchange ",Code:"PR",OperatingMIC:"XPRA",Country:"Czech Republic",Currency:"CZK",CountryISO2:"CZ",CountryISO3:"CZE"},{Name:"Rwanda Stock Exchange",Code:"RSE",OperatingMIC:"RSEX",Country:"Rwanda",Currency:"RWF ",CountryISO2:"RW",CountryISO3:"RWA"},{Name:"Botswana Stock Exchange ",Code:"XBOT",OperatingMIC:"XBOT",Country:"Botswana",Currency:"BWP",CountryISO2:"BW",CountryISO3:"BWA"},{Name:"Egyptian Exchange",Code:"EGX",OperatingMIC:"NILX",Country:"Egypt",Currency:"EGP",CountryISO2:"EG",CountryISO3:"EGY"},{Name:"Nigerian Stock Exchange",Code:"XNSA",OperatingMIC:"XNSA",Country:"Nigeria",Currency:"NGN",CountryISO2:"NG",CountryISO3:"NGA"},{Name:"Ghana Stock Exchange",Code:"GSE",OperatingMIC:"XGHA",Country:"Ghana",Currency:"GHS",CountryISO2:"GH",CountryISO3:"GHA"},{Name:"Malawi Stock Exchange",Code:"MSE",OperatingMIC:"XMSW",Country:"Malawi",Currency:"MWK",CountryISO2:"MW",CountryISO3:"MWI"},{Name:"Regional Securities Exchange",Code:"BRVM",OperatingMIC:"XBRV",Country:"Ivory Coast",Currency:"XOF",CountryISO2:"CI",CountryISO3:"CIV"},{Name:"Nairobi Securities Exchange",Code:"XNAI",OperatingMIC:"XNAI",Country:"Kenya",Currency:"KES",CountryISO2:"KE",CountryISO3:"KEN"},{Name:"Casablanca Stock Exchange",Code:"BC",OperatingMIC:"XCAS",Country:"Morocco",Currency:"MAD",CountryISO2:"MA",CountryISO3:"MAR"},{Name:"Stock Exchange of Mauritius",Code:"SEM",OperatingMIC:"XMAU",Country:"Mauritius",Currency:"MUR",CountryISO2:"MU",CountryISO3:"MUS"},{Name:"Tel Aviv Stock Exchange",Code:"TA",OperatingMIC:"XTAE",Country:"Israel",Currency:"ILS",CountryISO2:"IL",CountryISO3:"ISR"},{Name:"Korea Stock Exchange",Code:"KO",OperatingMIC:"XKRX",Country:"Korea",Currency:"KRW",CountryISO2:"KR",CountryISO3:"KOR"},{Name:"KOSDAQ",Code:"KQ",OperatingMIC:"XKOS",Country:"Korea",Currency:"KRW",CountryISO2:"KR",CountryISO3:"KOR"},{Name:"Budapest Stock Exchange",Code:"BUD",OperatingMIC:"XBUD",Country:"Hungary",Currency:"HUF",CountryISO2:"HU",CountryISO3:"HUN"},{Name:"Warsaw Stock Exchange",Code:"WAR",OperatingMIC:"XWAR",Country:"Poland",Currency:"PLN",CountryISO2:"PL",CountryISO3:"POL"},{Name:"Philippine Stock Exchange",Code:"PSE",OperatingMIC:"XPHS",Country:"Philippines",Currency:"PHP",CountryISO2:"PH",CountryISO3:"PHL"},{Name:"Karachi Stock Exchange",Code:"KAR",OperatingMIC:"XKAR",Country:"Pakistan",Currency:"PKR",CountryISO2:"PK",CountryISO3:"PAK"},{Name:"Australian Securities Exchange",Code:"AU",OperatingMIC:"XASX",Country:"Australia",Currency:"AUD",CountryISO2:"AU",CountryISO3:"AUS"},{Name:"Johannesburg Exchange",Code:"JSE",OperatingMIC:"XJSE",Country:"South Africa",Currency:"ZAR",CountryISO2:"ZA",CountryISO3:"ZAF"},{Name:"Chilean Stock Exchange",Code:"SN",OperatingMIC:"XSGO",Country:"Chile",Currency:"CLP",CountryISO2:"CL",CountryISO3:"CHL"},{Name:"Jakarta Exchange",Code:"JK",OperatingMIC:"XIDX",Country:"Indonesia",Currency:"IDR",CountryISO2:"ID",CountryISO3:"IDN"},{Name:"Thailand Exchange",Code:"BK",OperatingMIC:"XBKK",Country:"Thailand",Currency:"THB",CountryISO2:"TH",CountryISO3:"THA"},{Name:"Shenzhen Stock Exchange",Code:"SHE",OperatingMIC:"XSHE",Country:"China",Currency:"CNY",CountryISO2:"CN",CountryISO3:"CHN"},{Name:"Athens Exchange",Code:"AT",OperatingMIC:"ASEX",Country:"Greece",Currency:"EUR",CountryISO2:"GR",CountryISO3:"GRC"},{Name:"National Stock Exchange of India",Code:"NSE",OperatingMIC:"XNSE",Country:"India",Currency:"INR",CountryISO2:"IN",CountryISO3:"IND"},{Name:"Shanghai Stock Exchange",Code:"SHG",OperatingMIC:"XSHG",Country:"China",Currency:"CNY",CountryISO2:"CN",CountryISO3:"CHN"},{Name:"Colombo Stock Exchange",Code:"CM",OperatingMIC:"XCOL",Country:"Sri Lanka",Currency:"LKR",CountryISO2:"LK",CountryISO3:"LKA"},{Name:"Vietnam Stocks",Code:"VN",OperatingMIC:"HSTC",Country:"Vietnam",Currency:"VND",CountryISO2:"VN",CountryISO3:"VNM"},{Name:"Kuala Lumpur Exchange",Code:"KLSE",OperatingMIC:"XKLS",Country:"Malaysia",Currency:"MYR",CountryISO2:"MY",CountryISO3:"MYS"},{Name:"Bucharest Stock Exchange",Code:"RO",OperatingMIC:"XBSE",Country:"Romania",Currency:"RON",CountryISO2:"RO",CountryISO3:"ROU"},{Name:"Buenos Aires Exchange",Code:"BA",OperatingMIC:"XBUE",Country:"Argentina",Currency:"ARS",CountryISO2:"AR",CountryISO3:"ARG"},{Name:"Sao Paulo Exchange",Code:"SA",OperatingMIC:"BVMF",Country:"Brazil",Currency:"BRL",CountryISO2:"BR",CountryISO3:"BRA"},{Name:"Mexican Exchange",Code:"MX",OperatingMIC:"XMEX",Country:"Mexico",Currency:"MXN",CountryISO2:"MX",CountryISO3:"MEX"},{Name:"London IL",Code:"IL",OperatingMIC:"XLON",Country:"UK",Currency:"USD",CountryISO2:"GB",CountryISO3:"GBR"},{Name:"Zagreb Stock Exchange",Code:"ZSE",OperatingMIC:"XZAG",Country:"Croatia",Currency:"EUR",CountryISO2:"HR",CountryISO3:"HRV"},{Name:"Taiwan Stock Exchange",Code:"TW",OperatingMIC:"XTAI",Country:"Taiwan",Currency:"TWD",CountryISO2:"TW",CountryISO3:"TWN"},{Name:"MICEX Moscow Russia",Code:"MCX",OperatingMIC:null,Country:"Russia",Currency:"RUB",CountryISO2:"RU",CountryISO3:"RUS"},{Name:"Taiwan OTC Exchange",Code:"TWO",OperatingMIC:"ROCO",Country:"Taiwan",Currency:"TWD",CountryISO2:"TW",CountryISO3:"TWN"},{Name:"Bolsa de Valores de Lima",Code:"LIM",OperatingMIC:"XLIM",Country:"Peru",Currency:"PEN",CountryISO2:"PE",CountryISO3:"PER"},{Name:"Money Market Virtual Exchange",Code:"MONEY",OperatingMIC:null,Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""},{Name:"Europe Fund Virtual Exchange",Code:"EUFUND",OperatingMIC:null,Country:"Unknown",Currency:"EUR",CountryISO2:"",CountryISO3:""},{Name:"Istanbul Stock Exchange",Code:"IS",OperatingMIC:"XIST",Country:"Turkey",Currency:"TRY",CountryISO2:"TR",CountryISO3:"TUR"},{Name:"Cryptocurrencies",Code:"CC",OperatingMIC:"CRYP",Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""},{Name:"FOREX",Code:"FOREX",OperatingMIC:"CDSL",Country:"Unknown",Currency:"Unknown",CountryISO2:"",CountryISO3:""}];let u=document.getElementById("select1"),y=document.getElementById("select2"),S=[{placeholder:!0,text:"Select the stock exchange"}];for(let e=0;e<a.length;e++)S.push({text:`${a[e].Name}`});new SlimSelect({select:"#select1",data:S});let I=new SlimSelect({select:"#select2",data:[{placeholder:!0,text:"First select the stock exchange"}]});let c,O,i,E,g;let d="WAR",h="ACP",N=h.concat(".",d),s=new Date,M=new Date(s.getTime()-31104e6);g=r(s),M=r(M),e(N,"65fd2d716aebf2.80647901",M,g).then((e=>(O=e,n(N,"65fd2d716aebf2.80647901")))).then((e=>(c=e,t("currentData",N,c)))).then((()=>o(O,c))).then((e=>(E=e,C(E.xAxis,E.yAxis,h)))).then((e=>{i=e})),document.querySelector(".button").addEventListener("click",(function(r){r.preventDefault(),e(N,"65fd2d716aebf2.80647901",M,g).then((e=>(O=e,n(N,"65fd2d716aebf2.80647901")))).then((e=>(c=e,t("currentData",N,c)))).then((()=>o(O,c))).then((e=>(E=e,i.destroy(),C(E.xAxis,E.yAxis,h)))).then((e=>{i=e}))})),u.addEventListener("change",(function(e){e.preventDefault();let n=u.options[u.selectedIndex].value;for(let e=0;e<a.length;e++)if(a[e].Name===n){let n=[];I.setData(n);let r=a[e].Code;fetch(`https://eodhd.com/api/exchange-symbol-list/${r}?api_token=65fd2d716aebf2.80647901&fmt=json`).then((e=>e.json())).then((e=>{tickerList=e;for(let r=0;r<e.length;r++)n.push({text:`${e[r].Name}`});return I.setData(n),tickerList}))}})),y.addEventListener("change",(e=>{if(e.preventDefault(),null!=y.options[y.selectedIndex]){let e=y.options[y.selectedIndex].value;console.log(tickerList[0].Name);for(let n=0;n<tickerList.length;n++)e!=tickerList[n].Name||(h=tickerList[n].Code,d=tickerList[n].Exchange,N=h.concat(".",d),console.log(N))}}));
//# sourceMappingURL=index.164ac3ca.js.map
