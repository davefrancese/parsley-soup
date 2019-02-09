# parsley-soup

- npm install
- in client -> npm install
- in main directory npm run dev

#### Live site:

[Parsley Soup](https://parsley-soups.herokuapp.com/)

#### Walkthrough Video + dashboard

[Walkthrough](https://www.youtube.com/watch?v=FM3WQoJMSF4&t=180s)

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
- [x] Update Date action to put event.target in database -> Rerender
- [x] Date Validation
- [x] Finish styling
- [x] "Parsley Soups" as title
- [x] Give a unique favicon
- [x] Remove link to dashboard
- [x] Rename dashboard path
- [x] Redeploy
