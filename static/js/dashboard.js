let fileInput = document.getElementById("id_file");
let imageName = document.getElementById("imageName")
let extractButton = document.querySelector("#extract-button")

fileInput.addEventListener("change", ()=>{
extractButton.style.display = "flex"
let inputImage = document.querySelector("input[type=file]").files[0];

imageName.innerText = inputImage.name;
consoel.log(extractButton)

})
const shareLink = document.querySelectorAll(".shareLink")
const viewBtn = document.querySelector(".share-button"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close"),
field = popup.querySelector(".field"),
input = field.querySelector("input"),
copy = field.querySelector("button");


shareLink.forEach(share => {
  share.addEventListener('click', function (event) {
     event.preventDefault()
     input.value = share.href
   

  });
});



viewBtn.onclick = () => {
popup.classList.toggle("show");
input.value = shareLink[0].href
};
close.onclick = () => {
viewBtn.click();
};

copy.onclick = () => {
input.select(); //select input value
if (document.execCommand("copy")) {
  //if the selected text copy
  field.classList.add("active");
  copy.innerText = "Copied";
  setTimeout(() => {
    window.getSelection().removeAllRanges(); //remove selection from document
    field.classList.remove("active");
    copy.innerText = "Copy";
  }, 3000);
}
};