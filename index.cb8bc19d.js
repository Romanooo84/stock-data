!function(){function o(o,n){console.log(o),console.log(n);var t=document.getElementById("myChart");new Chart(t,{type:"line",data:{labels:o,datasets:[{label:"# of Votes",data:n,borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}var n,t,e="65fe0a1382dc25.48851936",r="ETFBM40TR".concat(".","WAR");(n=e,t="https://eodhd.com/api/exchanges-list/?api_token=".concat(n,"&fmt=json"),fetch(t).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))).then((function(o){return console.log(o)})).catch((function(o){return console.error(o)})),function(o,n){var t="https://eodhd.com/api/real-time/".concat(o,"?api_token=").concat(n,"&fmt=json");return fetch(t).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))}(r,e).then((function(o){return console.log(o)})).catch((function(o){return console.error(o)})),function(o,n){var t="https://eodhd.com/api/eod/".concat(o,"?period=d&api_token=").concat(n,"&fmt=json");return fetch(t).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))}(r,e).then((function(n){for(var t={yAxis:[],xAxis:[]},e=0;e<n.length;e++)t.yAxis.push(n[e].close),t.xAxis.push(n[e].date);o(t.xAxis,t.yAxis)}))}();
//# sourceMappingURL=index.cb8bc19d.js.map
