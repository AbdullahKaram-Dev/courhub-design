$(document).ready(function () {
  const applyFullWidthMode = () => {
    $("#lessonsList").addClass("hide-lessons");
    $("#videoContainer").addClass("video-container");
    $("#previewLesson").addClass("full-width");
    $(".showLessonsButton").removeClass("d-none");
  }

  const applyDefaultMode = () => {
    $("#lessonsList").removeClass("hide-lessons");
    $("#videoContainer").removeClass("video-container");
    $("#previewLesson").removeClass("full-width");
    $(".showLessonsButton").addClass("d-none");
  }

  const applyLayoutState = () => {
    const layoutState = localStorage.getItem("layoutState");

    if (layoutState === "fullWidth") {
      applyFullWidthMode()
    } else {
      applyDefaultMode()
    }
  };

  applyLayoutState();

  $(".fullPreviewButton").on("click", () => {
    applyFullWidthMode()
    localStorage.setItem("layoutState", "fullWidth");
  });

  $(".showLessonsButton").on("click", () => {
    applyDefaultMode()
    localStorage.setItem("layoutState", "default");
  });
});
