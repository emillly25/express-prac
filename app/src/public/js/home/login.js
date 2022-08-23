const id = document.getElementById("id");
const pw = document.getElementById("pw");
const btn = document.getElementById("btn");

//함수표현식은 hoisting이 안되므로 위에 작성
const login = async () => {
  try {
    const req = { id: id.value, pw: pw.value };
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    const data = await res.json();
    if (data.success) {
      location.href = "/";
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(new Error("로그인 중 에러 발생"));
  }
};

btn.addEventListener("click", login);
