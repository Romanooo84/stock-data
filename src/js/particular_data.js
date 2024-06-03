export function particularData(id, stockIndex, currentlyData, historicalData) {
    let container = document.getElementById(`${id}`);
    container.innerHTML=''
    let map = `<div>
    <p>${stockIndex} <span>${currentlyData.change_p}%</span></p>
        <div>
            <div>
                <p>Date: ${historicalData[0].date}</p>
                <p>Open: ${historicalData[0].open}</p>
                <p>Close: ${historicalData[0].close}</p>
                <p>High: ${historicalData[0].high}</p>
                <p>Low: ${historicalData[0].low}</p>
                <p>Volume: ${historicalData[0].volume}</p>
            </div>
            <div>
                <p>Date: ${historicalData[historicalData.length-1].date}</p>
                <p>Open: ${historicalData[historicalData.length-1].open}</p>
                <p>Close: ${historicalData[historicalData.length-1].close}</p>
                <p>High: ${historicalData[historicalData.length-1].high}</p>
                <p>Low: ${historicalData[historicalData.length-1].low}</p>
                <p>Volume: ${historicalData[historicalData.length-1].volume}</p>
            </div>
        </div> 
    </div>`

    container.insertAdjacentHTML('beforeEnd', map)
}
