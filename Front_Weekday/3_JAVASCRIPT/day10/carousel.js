let cnt = 0;

const onCarouselButtonClick = (dir) => {
  let tmp = document.querySelectorAll(".carousel-item");
  console.log(tmp);

  if (dir === "right") {
    cnt++;
  } else if (dir === "left") {
    cnt--;
  }
  if (cnt === tmp.length) {
    cnt = 0;
  }

  if (cnt === -1) {
    cnt = 4;
  }
  let contentsDiv = document.querySelector(".carousel-contents");
  // 버튼을 클릭할때마다 contentsDiv의 css에서 transform을 transLateX(-200px)
  contentsDiv.style.transform = `translateX(-${200 * cnt}px)`;
};

// const onLeft = () => {
//   if (cnt === 0) {
//     return;
//   }
//   cnt--;
//   let contentsDiv = document.querySelector(".carousel-contents");
//   contentsDiv.style.transform = `translateX(-${200 * cnt}px)`;
// };
