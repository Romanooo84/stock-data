export function particularData(id, stockIndex, currentlyData, historicalData) {
    let container = document.getElementById(`${id}`);
    container.innerHTML=''
    let map = `<div class='current-Data-Div'>
    <p class='pChange'>${stockIndex} <span>${currentlyData.change_p}%</span></p>
        <div class='ticker-data'>
            <div class='historical-data'>
                <p class='historical-paragraph-date'>${historicalData[0].date}</p>
                <p class='historical-paragraph'>Open: ${historicalData[0].open}</p>
                <p class='historical-paragraph'>Close: ${historicalData[0].close}</p>
                <p class='historical-paragraph'>High: ${historicalData[0].high}</p>
                <p class='historical-paragraph'>Low: ${historicalData[0].low}</p>
                <p class='historical-paragraph'>Volume: ${historicalData[0].volume}</p>
            </div>
            <div class='historical-data'>
                <p class='historical-paragraph-date'> ${historicalData[historicalData.length-1].date}</p>
                <p class='historical-paragraph'>Open: ${historicalData[historicalData.length-1].open}</p>
                <p class='historical-paragraph'>Close: ${historicalData[historicalData.length-1].close}</p>
                <p class='historical-paragraph'>High: ${historicalData[historicalData.length-1].high}</p>
                <p class='historical-paragraph'>Low: ${historicalData[historicalData.length-1].low}</p>
                <p class='historical-paragraph'>Volume: ${historicalData[historicalData.length-1].volume}</p>
            </div>
        </div> 
    </div>`

    container.insertAdjacentHTML('beforeEnd', map)
}
