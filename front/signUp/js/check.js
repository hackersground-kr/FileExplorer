const f1 = document.querySelector("#f1_sub");

f1.addEventListener("click", (e) => {
  const errorbox = document.querySelector("#errorbox1");
  const id = document.querySelector("#userid").value;
  const email = document.querySelector("#useremail").value;
  const pw = document.querySelector("#userpw").value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordSpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const passwordKoreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
  if (id == "") {
    errorbox.innerHTML = "이름을 입력해주세요.";
    e.preventDefault();
  } else if (id.includes(" ")) {
    errorbox.innerHTML = "이름에 공백을 사용할 수 없습니다.";
    e.preventDefault();
  } else if (nameSpecialCharRegex.test(id)) {
    errorbox.innerHTML = "이름에 특수 문자를 사용할 수 없습니다.";
    e.preventDefault();
  } else if (pw == "") {
    errorbox.innerHTML = "비밀번호를 입력해주세요.";
    e.preventDefault();
  } else if (!passwordSpecialCharRegex.test(pw)) {
    errorbox.innerHTML = "비밀번호에는 특수 문자를 반드시 포함해야 합니다.";
    e.preventDefault();
  } else if (passwordKoreanRegex.test(pw)) {
    errorbox.innerHTML = "비밀번호에는 한글을 사용할 수 없습니다.";
    e.preventDefault();
  } else if (!emailRegex.test(email)) {
    errorbox.innerHTML = "올바른 이메일 주소를 입력해주세요.";
    e.preventDefault();
  } else {
    return true;
  }
});

const f2 = document.querySelector("f2_sub");

f2.addEventListener("click", (e) => {
  const errorbox = document.querySelector("#errorbox2");
  const id = document.querySelector("#loginid").value;
  const pw = document.querySelector("#loginpw").value;
  const passwordSpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const passwordKoreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
  if (id == "") {
    errorbox.innerHTML = "이름을 입력해주세요.";
    e.preventDefault();
  } else if (id.includes(" ")) {
    errorbox.innerHTML = "이름에 공백을 사용할 수 없습니다.";
    e.preventDefault();
  } else if (nameSpecialCharRegex.test(id)) {
    errorbox.innerHTML = "이름에 특수 문자를 사용할 수 없습니다.";
    e.preventDefault();
  } else if (pw == "") {
    errorbox.innerHTML = "비밀번호를 입력해주세요.";
    e.preventDefault();
  } else if (!passwordSpecialCharRegex.test(pw)) {
    errorbox.innerHTML = "비밀번호에는 특수 문자를 반드시 포함해야 합니다.";
    e.preventDefault();
  } else if (passwordKoreanRegex.test(pw)) {
    errorbox.innerHTML = "비밀번호에는 한글을 사용할 수 없습니다.";
    e.preventDefault();
  } else {
    return true;
  }
});
