const myModalEl = $("#videoProjectsModal");

$(".video-frame .play-button").each((_, box) => {
  $(box).on("click", function () {
    const modalTitle = $(this).data("title");
    const modalVideo = $(this).data("video");
    console.log(modalVideo);

    $("#videoProjectsModal .main-modal__title").text(modalTitle);
    $("#videoProjectsModal .video-frame").html(modalVideo);

    myModalEl.modal("show");
  });
});
