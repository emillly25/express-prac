const fs = require("fs").promises;

class UserStorage {
  //static -> 클래스 자체에 직접 접근 가능하도록
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((acc, field) => {
      if (users.hasOwnProperty(field)) {
        acc[field] = users[field];
      }
      return acc;
    }, {});
    return newUsers;
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
}
module.exports = UserStorage;
