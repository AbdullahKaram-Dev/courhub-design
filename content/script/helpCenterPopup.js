const myModalEl = $("#videoModal");

$(".help-center__box").each((_, box) => {
  $(box).on("click", function () {
    const modalTitle = $(this).data("title");
    const modalVideo = $(this).data("video");

    $("#videoModal .main-modal__title").text(modalTitle);
    $("#videoModal .video-frame").html(modalVideo);

    myModalEl.modal("show");
  });
});
