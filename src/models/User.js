const UserStorage = require("../models/UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, pw } = UserStorage.getUserInfo(this.body.id);
    if (id) {
      if (id === this.body.id && pw === this.body.pw) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "존재하지 않는 아이디입니다." };
  }
}

module.exports = User;
