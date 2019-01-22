const firebaseConfig = require("../config/dev");
const firebase = require("firebase");
const { firebaseApp } = require("../config/firebase");

module.exports = app => {
  app.get("/login", (req, res) => {
    res.send("admin login");
  });

  app.get("/parsleysoupadminsignup", (req, res) => {
    const config = {
      apiKey: "AIzaSyDoFw43xWv0-PLFwgwh2nCONEGWSQUHNe4",
      authDomain: "parsley-soup.firebaseapp.com",
      databaseURL: "https://parsley-soup.firebaseio.com",
      projectId: "parsley-soup",
      storageBucket: "parsley-soup.appspot.com",
      messagingSenderId: "630759794243"
    };
    const firebaseApp = firebase.initializeApp(config);
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("logged in", user);
        // redirect to dashboard
      } else {
        console.log("need to log in");
      }
    });
    res.send("admin sign up");
  });
};
//
