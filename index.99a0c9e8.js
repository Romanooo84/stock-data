const o="ETFBM40TR".concat(".","WAR");var e,r;(e=o,r="65fe0a1382dc25.48851936",fetch(`https://eodhd.com/api/real-time/${e}?api_token=${r}&fmt=json`).then((o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((o=>o)).catch((o=>{console.error("There was a problem with your fetch operation:",o)}))).then((o=>console.log(o))).catch((o=>console.error(o))),function(o,e){return fetch(`https://eodhd.com/api/eod/${o}?period=d&api_token=${e}&fmt=json`).then((o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((o=>o)).catch((o=>{console.error("There was a problem with your fetch operation:",o)}))}(o,"65fe0a1382dc25.48851936").then((o=>console.log(o))).catch((o=>console.error(o)));
//# sourceMappingURL=index.99a0c9e8.js.map
