let carouselContentsDiv = document.querySelector(".carousel-contents");

const colors = ["red", "orange", "yellow", "green", "blue", "lightblue"];

for (let i = 0; i < colors.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.textContent = i + 1;
  newDiv.classList.add("carousel-item");
  newDiv.style.backgroundColor = colors[i];

  carouselContentsDiv.appendChild(newDiv);
}

// let tmp = document.createElement("div");
// tmp.textContent = "1";
// tmp.classList.add("carousel-item");
// tmp.style.backgroundColor = "red";

// let tmp2 = document.createElement("div");
// tmp2.textContent = "2";
// tmp2.classList.add("carousel-item");
// tmp2.style.backgroundColor = "orange";

// let tmp3 = document.createElement("div");
// tmp3.textContent = "3";
// tmp3.classList.add("carousel-item");
// tmp3.style.backgroundColor = "yello";

// let tmp4 = document.createElement("div");
// tmp4.textContent = "4";
// tmp4.classList.add("carousel-item");
// tmp4.style.backgroundColor = "green";

// let tmp5 = document.createElement("div");
// tmp5.textContent = "5";
// tmp5.classList.add("carousel-item");
// tmp5.style.backgroundColor = "blue";

// let contents = document.querySelector(".carousel-contents");
// contents.appendChild(tmp);
// contents.appendChild(tmp2);
// contents.appendChild(tmp3);
// contents.appendChild(tmp4);
// contents.appendChild(tmP5);
