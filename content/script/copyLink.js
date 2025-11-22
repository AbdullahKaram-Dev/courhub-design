$(".copy-btn").click(function () {
  var input = $(this).closest(".modal-body").find(".copyInput");
  if (input.length) {
    var textToCopy = input.val();
    navigator.clipboard.writeText(textToCopy).catch(function (err) {
      console.error("Could not copy text: ", err);
    });
  }
});
