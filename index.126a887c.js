function e(e,o){console.log(e),console.log(o);const t=document.getElementById("myChart");new Chart(t,{type:"line",data:{labels:e,datasets:[{label:"# of Votes",data:o,borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}const o="ETFBM40TR".concat(".","WAR");var t;(t="65fe0a1382dc25.48851936",fetch(`https://eodhd.com/api/exchanges-list/?api_token=${t}&fmt=json`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>e)).catch((e=>{console.error("There was a problem with your fetch operation:",e)}))).then((e=>console.log(e))).catch((e=>console.error(e))),function(e,o){return fetch(`https://eodhd.com/api/real-time/${e}?api_token=${o}&fmt=json`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>e)).catch((e=>{console.error("There was a problem with your fetch operation:",e)}))}(o,"65fe0a1382dc25.48851936").then((e=>console.log(e))).catch((e=>console.error(e))),function(e,o){return fetch(`https://eodhd.com/api/eod/${e}?period=d&api_token=${o}&fmt=json`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>e)).catch((e=>{console.error("There was a problem with your fetch operation:",e)}))}(o,"65fe0a1382dc25.48851936").then((o=>{let t={yAxis:[],xAxis:[]};for(let e=0;e<o.length;e++)t.yAxis.push(o[e].close),t.xAxis.push(o[e].date);e(t.xAxis,t.yAxis)}));
//# sourceMappingURL=index.126a887c.js.map
