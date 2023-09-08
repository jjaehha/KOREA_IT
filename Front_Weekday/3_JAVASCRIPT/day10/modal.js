// const modalOpen = () => {
//   let modalWrap = document.querySelector(".modal-wrap");
//   modalWrap.style.display = "flex";
//   document.body.style.overflow = "hidden";
// };

// const modalClose = () => {
//   let modalWrap = document.querySelector(".modal-wrap");
//   modalWrap.style.display = "none";
//   document.body.style.overflow = "unset";
// };

const modalHandler = (isClose) => {
  let modalWrap = document.querySelector(".modal-wrap");
  modalWrap.style.display = isClose ? "none" : "flex";
  document.body.style.overflow = isClose ? "unset" : "hidden";
};
