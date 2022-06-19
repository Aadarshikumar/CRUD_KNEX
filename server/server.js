const knex = require('../database/dbase')
const express = require("express")
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Yes this server is Connecting...")
})

app.get("/signup", (req, res) => {
    knex("students").where({ email: req.body.email }).then((result) => {
        if (result.length == 0) {
            knex("students").insert(req.body).then((result) => {
                res.send("Sign-up Successfully")
            })
        } else {
            res.send("Your data is already Exits, Please Login");
        }
    });
});

app.post('/login', (req, res) => {
    knex("students").where({ email: req.body.email, password: req.body.password }).then((result) => {
        if (result.length == 1) {
            res.send("login suceccfull")
        } else {
            res.send("Your Email or may be Password is wrong.")
        }
    });
});

app.put('/update', (req, res) => {
    knex("students").where({ id:req.body.id }).update(req.body).then((result) => {
        // console.log(result);
        if (result == 1){
            res.send("data has been updated...")
        }
        else {
            res.send('data is NOT updated')
        }
    });
});

app.delete('/delete', (req, res) => {
    knex("students").where({id:req.body.id}).delete(req.body).then((result) =>{
        if (result == 1) {
            res.send("Your Particular data has been Deleted.")
        }else {
            res.send("Your Data in NOT Deleted")
        }
    })
})

app.get("*", (req, res) => {
    res.send("Some Error in your API !!!")
});

app.listen(5000, () => {
    console.log("Your Port 5000 is working...");
});