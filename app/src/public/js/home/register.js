const id = document.getElementById("id");
const name = document.getElementById("name");
const pw = document.getElementById("pw");
const checkPw = document.getElementById("checkPw");

const btn = document.getElementById("btn");

const register = async (e) => {
  e.preventDefault();
  try {
    if (!id.value) return alert("아이디를 입력해주세요");
    if (pw.value !== checkPw.value) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
      id: id.value,
      name: name.value,
      pw: pw.value,
    };
    const res = await fetch("/register", {
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
    console.error(new Error("회원가입 중 에러 발생"));
  }
};

btn.addEventListener("click", register);
