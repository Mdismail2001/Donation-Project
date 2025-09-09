// this function for rimove page using id
function pageRelod(id) {
  // check the id
  // console.log(id);

  // hide both section first
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("blog-section").classList.add("hidden");

  // show the section which id is passed in the function for clicked button
  document.getElementById(id).classList.remove("hidden");
}

function pageRelod(id) {
  // check the id
  // console.log(id);

  // hide both section first
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("blog-section").classList.add("hidden");

  // show the section which id is passed in the function for clicked button
  document.getElementById(id).classList.remove("hidden");
}

//  this function for change button color when clicked
function buttonColorChange(id) {
  // console.log(id);

  // first remove all button bg color
  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
  // document.getElementById('blog-btn').classList.remove('bg-[#B4F461]');

  // then add the bg color to the clicked button using id
  document.getElementById(id).classList.add("bg-[#B4F461]");
}

// // alert box message
// function alertBox() {
//   const divBox = document.createElement("div");
//   divBox.innerText = "Congrates!";
//   divBox.classList.add(
//     "bg-white-200",
//     "text-green-800",
//     "p-2",
//     "rounded",
//     "text-center"
//   );
//   console.log(divBox);
//   return divBox;
// }
