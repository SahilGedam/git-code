import connection from "./db";

const User = function (user) {
  this.first_name = user.firstName;
  this.last_name = user.lastName;
  this.user_password = user.password;
  this.age = user.age;
};

User.read = function (result: any) {
  connection.query("SELECT user_id as user_id, first_name as firstName , last_name as lastName , user_password as password , age FROM user_table", (err, res) => {
    if (err) {
      throw err;
    }
    result(res);
  });
};

User.create = function (user: any, result: any) {
  connection.query("INSERT INTO user_table SET?", user, (err, res) => {
    if (err) {
      throw err;
    }
    result(res);
  });
};

User.findById = function (user_id: any, result: any) {
  connection.query(
    "SELECT user_id as user_id, first_name as firstName , last_name as lastName , user_password as password , age  FROM user_table WHERE user_id=?",
    [user_id],
    (err, res) => {
      if (err) {
        throw err;
      }
      if (res) {
        result(res);
      }
    }
  );
};

User.update = function (user_id: any, user: any, result: any) {
  connection.query(
    "UPDATE user_table SET? WHERE user_id=?",
    [user, user_id],
    function (err, res) {
      if (err) {
        throw err;
      }
      result(res);
    }
  );
};

User.delete = function (user_id: any, result: any) {
  connection.query(
    "DELETE FROM user_table WHERE user_id=?",
    [user_id],
    function (err, res) {
      if (err) {
        throw err;
      }
      result(res);
    }
  );
};

export default User;
