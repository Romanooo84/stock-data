export function particularData(id, stockIndex, currentlyData) {
    let container = document.getElementById(`${id}`);
    container.innerHTML=''
    let map = `<p>${stockIndex} <span>${currentlyData.change_p}%</span></p>`
    container.insertAdjacentHTML('beforeEnd', map)
}
