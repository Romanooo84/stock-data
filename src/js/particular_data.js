export function particularData(id, stockIndex, currentlyData) {
    let container = document.getElementById(`${id}`);
    container.innerHTML=''
    let map = `<p>${stockIndex} <span></span>${currentlyData}%</p>`
    console.log(currentlyData)
    container.insertAdjacentHTML('beforeEnd', map)
}
