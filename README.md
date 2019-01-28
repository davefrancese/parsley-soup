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

- save file in a directory called config and name the file dev.js

# TODO

- [ ] Rerender soupList component after updating soup action
- [ ] Update Date action to put event.target in database -> Rerender
- [ ] Finish styling
- [ ] "Parsley Soups" as title
- [ ] Give a unique favicon
- [ ] Remove link to dashboard
- [ ] Rename dashboard path
- [ ] Redeploy
