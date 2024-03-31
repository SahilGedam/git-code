import mysql from "mysql2";
import dbConfig from "../Config/db.config";

export const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Database Connection Successfull");
});
export default connection;
