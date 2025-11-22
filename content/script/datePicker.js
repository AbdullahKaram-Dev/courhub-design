// get today date to look the picker to filter untill today

const today = new Date();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const yyyy = today.getFullYear();

const formattedDate = `${mm}/${dd}/${yyyy}`;

// init the picker

$('input[name="daterange"]').daterangepicker({
  autoUpdateInput: false,
  maxDate: formattedDate,
  locale: {
    cancelLabel: "Clear",
  },
});

$('input[name="daterange"]').on("apply.daterangepicker", function (ev, picker) {
  $(this).attr("value", picker.startDate.format("MM/DD/YYYY") + " - " + picker.endDate.format("MM/DD/YYYY"));
});

$('input[name="daterange"]').on("cancel.daterangepicker", function (ev, picker) {
  $(this).attr("value", "");
});
