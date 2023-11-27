const express = require("express");
const app = express();
const cors = require("cors")
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
//create user
app.post("/createUser", (req, res) => {db.query(
"insert into studentdetails (regno,name,age,department,isactive) values(?,?,?,?,?)                  ",
[req.body.regno, req.body.name,req.body.age,req.body.department,1],
function (error, results, fields) {
if (error) console.log(error);
console.log("Created successfully");
res.json(results);
}
);
});
// get all users
app.get("/getAllUsers",(req, res) => {
db.query(
"SELECT regno,name,age,department from studentdetails where isactive=1 ",
function (error, results, fields) {
if (error) console.log(error);
console.log("All Users:", results);
res.json(results);
}
);
});
// // get user by id++++
app.get("/getUserById/:regno", (req, res) => {
// let user = usersList.filter(e=>e.id==req.params.id)
// res.json(user)
db.query("SELECT * from studentdetails where regno=?",
[req.params.regno],
function (error, results, fields) {
if (error) console.log(error);
console.log("one user:", results);
res.json(results);
}
);
});
app.put("/updateUserById/:regno", (req, res) => {
db.query(
"update studentdetails set name=?,age=?, department=? where regno=?",
[req.body.name,req.body.age,req.body.department, req.params.regno],
function (error, results, fields) {
if (error) console.log(error);
console.log("updated successfully");
res.json(results);
}
);
});
app.put("/deleteUserById/:regno", (req, res) => {
db.query(
"update studentdetails set isActive=0 where regno=?",
[req.params.regno],
function (error, results, fields) {
if (error) console.log(error);console.log("updated successfully");
res.json(results);
}
);
});
app.listen(3000, () => {
console.log("listening on port 3000");
});