!function(){var o,t,n,e="65fe0a1382dc25.48851936",r="ETFBM40TR",c=r.concat(".","WAR");(o=c,t=e,n="https://eodhd.com/api/eod/".concat(o,"?period=d&api_token=").concat(t,"&fmt=json"),fetch(n).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))).then((function(o){for(var t,n,e,c,s={yAxis:[],xAxis:[]},i=0;i<o.length;i++)s.yAxis.push(o[i].close),s.xAxis.push(o[i].date);return t=s.xAxis,n=s.yAxis,e=r,c=document.getElementById("myChart"),new Chart(c,{type:"line",data:{labels:t,datasets:[{label:e,data:n,borderWidth:1}]},options:{}}),{yAxis:s.yAxis,xAxis:s.xAxis}})).then((function(o){console.log("Wartość yAxis:",o.yAxis),console.log("Wartość xAxis:",o.xAxis)})).then(function(o,t){var n="https://eodhd.com/api/real-time/".concat(o,"?api_token=").concat(t,"&fmt=json");return console.log("start"),console.log(n),fetch(n).then((function(o){if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((function(o){return o})).catch((function(o){console.error("There was a problem with your fetch operation:",o)}))}(c,e)).then((function(o){return console.log("Dane codzienne:",o)})).catch((function(o){return console.error(o)}))}();
//# sourceMappingURL=index.686078bf.js.map
