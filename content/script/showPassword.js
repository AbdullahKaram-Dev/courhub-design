$(".toggle-password").click(function () {
  var passwordInput = $(this).siblings("input");
  var icon = $(this);

  passwordInput.attr("type", function (_, attr) {
    return attr === "password" ? "text" : "password";
  });

  if (icon.hasClass("fa-eye-slash")) {
    icon.removeClass("fa-eye-slash").addClass("fa-eye");
  } else {
    icon.removeClass("fa-eye").addClass("fa-eye-slash");
  }
});
