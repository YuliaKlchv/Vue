const express = require('express')
const app = express()
var cors = require('cors')
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const argon2 = require('argon2');
const db = require('./database');
const jwt = require('jsonwebtoken')
const { pool } = require("./dbConfig")
require("dotenv").config();

app.use(express.json())

app.use(cors())



app.get('/Main.vue', (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.get('/posts', authenticateToken, (req, res,) => {

  res.status(200).send('Success!');
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }
  db.one("SELECT * FROM users WHERE username='" + req.body.username + "'")
    .then(async rows => {
      console.log(rows.password)
      // await argon2.verify(rows.password, req.body.password)
      if (await argon2.verify(rows.password, req.body.password)) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).send(('token', accessToken))
      } else {
        res.status(403).send('Login unsuccessful');
      }
    
    
    })

    .catch(error => {
      res.status(403).send('Login unsuccessful');

    })


  // const cookieConfig = {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: 'Strict'
  // }
 

})



//Register
app.get("/Register", (req, res) => {
  res.render("./Register");
});
app.post("/Register", async (req, res) => {
  let { username, password, password_confirm, name, email } = req.body;
  let errors = [];

  console.log({
    username,
    password,
    password_confirm,
    name,
    email,
  });

  if (password !== password_confirm) {
    console.log("Passwords do not match");
    return res.status(400).send("Passwords do not match")

  }

  if (password.length < 6) {
    console.log("password must be min 6 characters")
    return res.status(400).send("password must be min 6 characters")

  }

  if (!username || !password || !password_confirm || !name || !email) {
    return res.status(400).send("Please enter all fields");
  }
  else {
    hashedPassword = await argon2.hash(password)
    console.log(hashedPassword);

    pool.query(
      `SELECT * FROM users
        WHERE username = $1  `,
      [username],
      (err, results) => {
        if (err) {
          console.log(err);
        }

        if (results !== undefined && results.rows.length > 0) {
          return res.status(400).send(
            "username is already registered"
          );

        }
        else {
          pool.query(
            `INSERT INTO users (username, password, name,email)
                VALUES ($1, $2, $3,$4)
                RETURNING username, password`,
            [username, hashedPassword, name, email],
            (err, results) => {
              if (err) {
                throw err;
              }
              res.status(200).send('successfull');
            }
          );

        }
      }
    );
  }
});




const userRouter = require('./users');
const { rawListeners } = require('process');
app.use('/users', userRouter);
const port = process.env.PORT || 3000;
app.listen(port, function () {                                            //Its gonna take the port number and also takes the callback if we wanna run after ' listen'.
  console.log(`Example app listening on port ${port}`);
})