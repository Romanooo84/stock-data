import { multipleDailyData } from "./import_data";
import { token, headerData, favButton} from "../index.js";
import { setHeaderData } from "./headerData.js";

export const onClickHeaderButton = (event, headerTickersList) => {
    event.preventDefault()
    let tickerToDelete = event.target.parentNode.id
    let newList = headerTickersList.filter(ticker => ticker !== tickerToDelete);
    multipleDailyData(newList, token)
        .then(data => {
            setHeaderData(data, headerData)
        })
        .then(() => {
            delButton = document.querySelectorAll('.delete-button')
            if (delButton.length < 3) {
                for (var i = 0; i < delButton.length; i++) {
                    delButton[i].disabled = true;
                }
            }
            if (newList.length < 5) {
                favButton.disabled = false
            }  
            headerTickersList = newList
            })
        .catch(error => {
            console.error("Wystąpił błąd podczas pobierania danych:", error);
        });
}