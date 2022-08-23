const UserStorage = require("../models/UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    //client.id는 받아온 id고 걍 id는 DB에 있는거
    const client = this.body;
    const { id, pw } = UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "존재하지 않는 아이디입니다." };
  }

  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}

module.exports = User;
