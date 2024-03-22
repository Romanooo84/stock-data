fetch("https://eodhd.com/api/real-time/ETFBM40TR.war?api_token=65fe0a1382dc25.48851936&fmt=json").then((o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((o=>{console.log(o)})).catch((o=>{console.error("There was a problem with your fetch operation:",o)}));
//# sourceMappingURL=index.398a9a1a.js.map
