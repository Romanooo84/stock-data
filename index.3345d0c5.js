!function(){function o(o,t){console.log(o),console.log(t);var n=document.getElementById("myChart");new Chart(n,{type:"line",data:{labels:o,datasets:[{label:"# of Votes",data:t,borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}var t,n,e="65fe0a1382dc25.48851936",r="ETFBM40TR".concat(".","WAR");(t=e,n="https://eodhd.com/api/exchanges-list/?api_token=".concat(t,"&fmt=json"),fetch(n).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))).then((function(o){return console.log(o)})).catch((function(o){return console.error(o)})),function(o,t){var n="https://eodhd.com/api/real-time/".concat(o,"?api_token=").concat(t,"&fmt=json");return console.log("start"),console.log(n),fetch(n).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))}(r,e).then((function(o){return console.log(o)})).catch((function(o){return console.error(o)})),function(o,t){var n="https://eodhd.com/api/eod/".concat(o,"?period=d&api_token=").concat(t,"&fmt=json");return fetch(n).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))}(r,e).then((function(t){for(var n={yAxis:[],xAxis:[]},e=0;e<t.length;e++)n.yAxis.push(t[e].close),n.xAxis.push(t[e].date);o(n.xAxis,n.yAxis),chart.canvas.parentNode.style.height="1280px",chart.canvas.parentNode.style.width="1280px"}))}();
//# sourceMappingURL=index.3345d0c5.js.map
