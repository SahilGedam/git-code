import connection from "./db";

const User = function (
  this: any,
  user: {
    password: string;
    age: number;
    firstName: string;
    lastName: string;
  }
) {
  (this.firstName = user.firstName),
    (this.lastName = user.lastName),
    (this.password = user.password),
    (this.age = user.age);
};

User.read = function (result: any) {
  connection.query("SELECT * FROM user_table", (err, res) => {
    if (err) {
      throw err;
    }
    result(res);
  });
};

export default User;
