$(document).ready(function () {
  // Loader
  setTimeout(function () {
    $(".loading-overlay").addClass("hidden");
  }, 1500);

  //bannar delete
  $(".alert-banner .close__btn").click(function () {
    $(".alert-banner").hide();
  });
});

// Toggle dropdown on click
$(".nav-item.dropdown").each(function () {
  $(this).on("click", function (event) {
    // Close any other open dropdowns
    $(".nav-item.dropdown.active").not(this).find(".dropdown__menu").css("display", "none");
    $(".nav-item.dropdown.active").not(this).removeClass("active");

    // Toggle the clicked dropdown
    var dropdownMenu = $(this).find(".dropdown__menu");
    if (dropdownMenu.css("display") === "none") {
      dropdownMenu.css("display", "block");
    } else {
      dropdownMenu.css("display", "none");
    }
    $(this).toggleClass("active");

    event.stopPropagation(); // Prevent the click event from bubbling up to the document
  });
});

// Remove dropdown if click outside
$(document).on("click", function (event) {
  if (!$(event.target).closest(".nav-item.dropdown").length) {
    $(".nav-item.dropdown.active .dropdown__menu").css("display", "none");
    $(".nav-item.dropdown.active").removeClass("active");
  }
});

  window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('fade-out');

 //login and  register

      $(".switch-to-register").on("click", function (e) {
        e.preventDefault();

        $(".login_inputs").hide();
        $(".register_inputs").show();
        $(".forget").hide();

        $(".new-account").hide();
        $(".back-to-login").removeClass("d-none").show();

        $(".login-submit-btn").text("إنشاء حساب");
      });

      $(".switch-to-login").on("click", function (e) {
        e.preventDefault();

        $(".login_inputs").show();
        $(".register_inputs").hide();
        $(".forget").show();

        $(".back-to-login").hide();
        $(".new-account").show();

        $(".login-submit-btn").text("تسجيل الدخول");

      });


    $(document).on("click", ".toggle-password", function () {
      let input = $(this).siblings(".password-input");

      if (input.attr("type") === "password") {
        input.attr("type", "text");
        $(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
      } else {
        input.attr("type", "password");
        $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
      }

    });


});
