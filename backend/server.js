const express = require("express");
const app = express();
const cors= require("cors")
// instead of using body parser we can use this
app.use(express.json())
app.use(cors())
var mysql = require("mysql");
var db = mysql.createConnection({
host: "localhost",
user: "muthuvel",
password: "muthuvel@123",
database: "Student",
});
db.connect(function (err) {
if (err) {
console.error("error connecting: " + err.stack);
return;
}
console.log("connected as id " + db.threadId);
});
// app.post("/createUser", (req, res) => {db.query(
// "insert into userdata (userName,email,message,isActive) values(?,?,?)",
// [req.body.name, req.body.email,req.body.message,1],
// function (error, results, fields) {
// if (error) console.log(error);
// console.log("Created successfully");
// res.json(results);
// }
// );
// });
// get all users
app.get("/getAllUsers",(req, res) => {
db.query(
"SELECT id,RegNo,Name,Department from Studentdetails where is_active=1 ",
function (error, results, fields) {
if (error) console.log(error);
console.log("All Users:", results);
res.json(results);
}
);
});
// // get user by id++++
// app.get("/getUserById/:id", (req, res) => {
// // let user = usersList.filter(e=>e.id==req.params.id)
// // res.json(user)
// db.query("SELECT * from userdata where id=?",
// [req.params.id],
// function (error, results, fields) {
// if (error) console.log(error);
// console.log("one user:", results);
// res.json(results);
// }
// );
// });
// app.put("/updateUserById/:id", (req, res) => {
// db.query(
// "update userdata set userName=?,email=?, message=? where id=?",
// [req.body.name,req.body.email,req.body.message, req.params.id],
// function (error, results, fields) {
// if (error) console.log(error);
// console.log("updated successfully");
// res.json(results);
// }
// );
// });
// app.put("/deleteUserById/:id", (req, res) => {
// db.query(
// "update userdata set isActive=0 where id=?",
// [req.params.id],
// function (error, results, fields) {
// if (error) console.log(error);console.log("updated successfully");
// res.json(results);
// }
// );
// });
app.listen(3008, () => {
console.log("listening on port 3008");
});