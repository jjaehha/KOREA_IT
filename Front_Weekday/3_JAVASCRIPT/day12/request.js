fetch("https://koreanjson.com/users")
  .then((a) => {
    console.log("데이터받기완료!");
    console.log("PromiseRuslt속에 있던 값:", a);
    // console.log(a.json());
    return a.json();
  })
  .then((bbb) => {
    console.log(bbb);
    for (let i = 0; i < bbb.length; i++) {
      let newP = document.createElement("p");
      newP.textContent = bbb[i].name;
      document.body.appendChild(newP);
    }
  })
  .catch((err) => {
    //err 에는 발생한 오류 객체가 들어간다
    console.log(err);
    alert("오류발생!");
  });

const fetchAwait = async () => {
  try {
    // 1. res 라는 변수 선언
    // 2. fetch()함수를 실행해줘
    //  fetch()함수 실행 결과를 res변수에 대입해줘
    let res = await fetch("https://koreanjson.com/users");
    // 동기적으로, fetch가 다 끝나고 데이터를 받아와야지만 다음줄 실행됨..

    // 2. res.json() 함수 실행결과를 가져다줘
    // 1. console.log() 함수를 실행해줘
    // console.log(await res.json());
    let data = await res.json();
    console.log(data);

    // 반복문 써서 data 배열 속 사람들 이름 보여주기
    //...
  } catch (err) {
    console.log(err, "에러 발생함");
  }
};

const axiosGet = () => {
  console.log("axios get 클릭됨");
  // axios.get(경로);

  axios
    .get("https://koreanjson.com/users")
    .then((a) => {
      console.log(a.data);
      for (let i = 0; i < a.data.length; i++) {
        let newP = document.createElement("p");
        newP.textContent = `이름${a.data[i].name}, 메일${a.data[i].email}`;
        document.body.appendChild(newP);
      }
    })
    .catch((err) => {
      console.log("오류발생!");
    });
};

// 위에있는 함수와 똑같은 결과가 나오게 만들기
// await 키워드를 이용해서 만들기

const axiosAwait = async () => {
  try {
    let res = await axios.get("https://koreanjson.com/users");
    console.log(res);
    console.log(res.data);

    res.data.forEach((v) => {
      let newP = document.createElement("p");
      newP.textContent = `dlfma:${v.name} 메일:${v.email}`;
      document.body.appendChild(newP);
    });
  } catch (err) {
    console.log("오류발생!");
  }
};
