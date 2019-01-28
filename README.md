# parsley-soup

- npm install
- in client -> npm install
- in main directory npm run dev

### for database / cookie implementation

- setup an MLab account at mlab.com
- create a db and a user for the db
- set mongoURI in file with a cookieKey

```javascript
module.exports = {
  cookieKey: "someRandomNumbersAndLettersHere",
  mongoURI:
    "mongodb://<YOURMLABUSERNAME:YOURDATABASEPASSWORD@dsxxxxx.mlab.com:xxxxx/yourdatabasename"
};
```

- save file in directory called config and name the file dev.js
