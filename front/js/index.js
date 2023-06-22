const sign = document.querySelector("#sign");
const h = document.querySelector("#hello");
const btn = document.querySelector("#btn");

btn.style.display = "none";

function getSessionId() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("id="));

  if (cookie) {
    const id = cookie.split("=")[1];
    return id;
  }

  return null;
}

// answer 쿠키를 읽어 세션 값(answer) 가져오기
function getSessionAnswer() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("answer="));

  if (cookie) {
    const answer = cookie.split("=")[1];
    return answer;
  }

  return null;
}

// 세션 값 사용 예시
let id = getSessionId();
let answer = getSessionAnswer();

if (parseInt(answer)) {
  sign.style.display = "none";
  btn.style.display = "flex";
  h.innerHTML = `${id}님 방가워요`;
} else {
  sign.style.display = "flex";
  btn.style.display = "none";
  h.innerHTML = ``;
}

btn.addEventListener("click", () => {
  answer = 0;
});
