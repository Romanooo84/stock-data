!function(){function t(t,n){var e=t.timestamp,o=new Date(1e3*e),r=o.getFullYear(),c=("0"+(o.getMonth()+1)).slice(-2),a=("0"+o.getDate()).slice(-2);o="".concat(r,"-").concat(c,"-").concat(a);var i=n.xAxis[n.xAxis.length-1];o>i?(n.xAxis.push(o),n.yAxis.push(t.close)):o===i&&(n.yAxis.pop(),n.yAxis.push(t.close))}function n(t,n){var e="https://eodhd.com/api/real-time/".concat(t,"?api_token=").concat(n,"&fmt=json");return fetch(e).then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There was a problem with your fetch operation:",t)}))}function e(t,n,e){var o=document.getElementById("".concat(t));o.innerHTML="";var r="<p>".concat(n," <span></span>").concat(e,"%</p>");o.insertAdjacentHTML("beforeEnd",r)}var o,r,c,a="65fd2d716aebf2.80647901",i="ETFBM40TR",s=i.concat(".","WAR");(r=a,c="https://eodhd.com/api/exchanges-list/?api_token=".concat(r,"&fmt=json"),fetch(c).then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There was a problem with your fetch operation:",t)}))).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)})),function(t,n){var e="https://eodhd.com/api/intraday/".concat(t,"?interval=5m&api_token=").concat(n,"&fmt=json");fetch(e).then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There was a problem with your fetch operation:",t)}))}(s,a),function(t,n){var e="https://eodhd.com/api/eod/".concat(t,"?period=d&api_token=").concat(n,"&fmt=json");return fetch(e).then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There was a problem with your fetch operation:",t)}))}(s,a).then((function(t){o={yAxis:[],xAxis:[]};for(var n=0;n<t.length;n++)o.yAxis.push(t[n].close),o.xAxis.push(t[n].date);return{chartData:o}})).then((function(){n(s,a).then((function(n){var r,c,a,s;t(n,o),e("currentData",i,n.change_p),r=o.xAxis,c=o.yAxis,a=i,s=document.getElementById("myChart"),new Chart(s,{type:"line",data:{labels:r,datasets:[{label:a,data:c,borderWidth:1}]},options:{}})}))}));var h=document.querySelector(".button");console.log(h),h.addEventListener("click",(function(){console.log(o)}));setInterval((function(){n(s,a).then((function(n){t(n,o),e("currentData",i,n.change_p),console.log("updated")}))}),5e4)}();
//# sourceMappingURL=index.216244d5.js.map
