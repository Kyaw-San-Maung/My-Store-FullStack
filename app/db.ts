const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "262019",
  database: "mystore_db",
});

export async function query(sql: any, values: any) {
  const [rows, field] = await connection.execute(sql, values);
  return rows;
}
