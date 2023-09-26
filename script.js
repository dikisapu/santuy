// const card = document.querySelector(".card");
// const tangkap = document.querySelector(".close");
// tangkap.addEventListener("click", () => {
//   card.style.display = "none";
// });

// const tutup = document.querySelectorAll(".close");
// for (let i = 0; i <= tutup.length; i++) {
//   tutup[i].addEventListener("click", (event) => {
//     event.target.parentElement.style.display = "none";
//   });
// }

// tutup.forEach((event) => {
//   event.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//   });
// });

const nama = document.querySelector(".telp");
console.log(nama.nextElementSibling);
console.log(nama.parentElement.nextElementSibling.nextElementSibling);
