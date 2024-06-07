import { button } from "../index.js";

export let selectedDate = ''

flatpickr("#datepicker", {
    dateFormat: "Y-m-d", // Format daty
  maxDate: new Date().fp_incr(0), // Maksymalna dozwolona data (30 dni od dzisiaj)
  onClose: function (selectedDates, dateStr) {
    selectedDate = dateStr;
    if (selectedDate != undefined) {
    button.disabled=false
    }
  }
});


