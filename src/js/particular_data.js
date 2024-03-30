export function particularData(id, stockIndex, currentlyData) {
    let container = document.getElementById(`${id}`);
    container.innerHTML=''
    let map = `<p>${stockIndex} <span></span>${currentlyData.change_p}%</p>`
    container.insertAdjacentHTML('beforeEnd', map)
}
