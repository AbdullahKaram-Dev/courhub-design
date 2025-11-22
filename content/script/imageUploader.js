const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("img-preview");

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length) {
    const src = URL.createObjectURL(e.target.files[0]);
    imagePreview.src = src;
  }
});
