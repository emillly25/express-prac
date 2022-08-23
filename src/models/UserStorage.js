class UserStorage {
  //static -> 클래스 자체에 직접 접근 가능하도록
  // #붙이면 private이 되므로 직접 접근 불가
  static #users = {
    id: ["em", "sw", "h", "lp"],
    pw: ["1", "2", "3", "4"],
    name: ["세희", "지훈", "해리", "밍키"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((acc, field) => {
      if (users.hasOwnProperty(field)) {
        acc[field] = users[field];
      }
      return acc;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
