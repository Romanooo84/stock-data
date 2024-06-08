import { inProgres } from "../index";

export const setHeaderData = (data, headerData) =>{
    let newData = data
    let changeColor = '';
    newData.forEach(element => {
      element.change_p>0? changeColor='value-plus':changeColor='value-minus'
    });
    const markup = newData.map((ticker) => {
    let changeColor = ''; // Initialize changeColor variable
    if (ticker.change_p > 0) {
        changeColor = 'value-plus';
    } else if (ticker.change_p < 0) {
        changeColor = 'value-minus';
      }
      return `<div class='short-data-div'>
                <button class = 'delete-button'  type="button" id="${ticker.code}" >
                <svg id = '${ticker.code}' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill = '#ec7c7c'>
                  <path name = '${ticker.code}' d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                  <path name = '${ticker.code}' d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                </svg>
              </button>
              <div class='single-data' name = '${ticker.code}'>
                <p class='header-paragraph'>${ticker.code}</p>
                <p class='header-paragraph'>Close: ${ticker.close}</p>
                <p class='header-paragraph'>Change: <span class='${changeColor}'>${ticker.change_p}%</span></p>
              </div>          
            </div>`;
  }).join(""); 
    // Wstawianie wygenerowanego kodu HTML do elementu headerData
    headerData.innerHTML = ''
    headerData.insertAdjacentHTML("beforeend", markup);
  }