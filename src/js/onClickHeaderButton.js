import { multipleDailyData } from "./import_data";
import { token, headerData, favButton, headerTickersList} from "../index.js";
import { setHeaderData } from "./headerData.js";

export const onClickHeaderButton = (event) => {
    event.preventDefault()
    let tickerToDelete = event.target.parentNode.id
    headerTickersList = headerTickersList.filter(ticker => ticker !== tickerToDelete);
    multipleDailyData(headerTickersList, token)
        .then(data => {
            setHeaderData(data, headerData)
            delButton = document.querySelectorAll('.delete-button')
            if (delButton.length < 3) {
                for (var i = 0; i < delButton.length; i++) {
                    delButton[i].disabled = true;
                }
            }
            if (headerTickersList.length < 5) {
                favButton.disabled = false
            }
        })
        .catch(error => {
            console.error("Wystąpił błąd podczas pobierania danych:", error);
        });
}