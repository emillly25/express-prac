const fs = require("fs").promises;

class UserStorage {
  //static -> 클래스 자체에 직접 접근 가능하도록
  static async getUsers(...fields) {
    try {
      const data = await fs.readFile("./src/db/users.json");
      const users = JSON.parse(data);
      const newUsers = fields.reduce((acc, field) => {
        if (users.hasOwnProperty(field)) {
          acc[field] = users[field];
        }
        return acc;
      }, {});
      return newUsers;
    } catch {
      console.error;
    }
  }

  static async getUserInfo(id) {
    try {
      const data = await fs.readFile("./src/db/users.json");
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const userInfo = Object.keys(users).reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});
      return userInfo;
    } catch {
      console.error;
    }
  }

  static async save(userInfo) {
    const users = await this.getUsers("id", "pw", "name");
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.pw.push(userInfo.pw);
    users.name.push(userInfo.name);
    fs.writeFile("./src/db/users.json", JSON.stringify(users));
    return { success: true };
  }
}
module.exports = UserStorage;
