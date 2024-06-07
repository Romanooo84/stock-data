import { multipleDailyData } from "./import_data.js";
import { token, headerData, favButton, headerTickersList, setInProgres} from "../index.js";
import { setHeaderData } from "./headerData.js";

export const onClickHeaderButton = (event) => {
    event.preventDefault();
    setInProgres(true);
    let tickerToDelete = event.target.parentNode.id;
    let newList = headerTickersList.filter(ticker => ticker !== tickerToDelete);
    multipleDailyData(newList, token)
        .then(data => {
            setHeaderData(data, headerData);
        })
        .then(() => {
            delButton = document.querySelectorAll('.delete-button');
            if (delButton.length < 3) {
                for (let i = 0; i < delButton.length; i++) {
                    delButton[i].disabled = true;
                }
            }
            if (newList.length < 5) {
                favButton.disabled = false;
            }
            headerTickersList.splice(0, headerTickersList.length, ...newList);
            setInProgres(false);
        })
        .catch(error => {
            console.error("Wystąpił błąd podczas pobierania danych:", error);
            setInProgres(false); // Upewnij się, że ustawiasz inProgres na false w przypadku błędu
        });
};