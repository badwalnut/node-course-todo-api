// const MongoClient = require('mongodb').MongoClient;
// next line is the same as that above:
// const {MongoClient} = require('mongodb');

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// above is just messing around with ObjectID


// example of using ES6 destructuring to make a new variable from an object's property:
// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('Users').insertOne({
    name: 'Albert Strasse',
    age: 66,
    location: 'Blue Bell'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user document', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });




  db.close();
});
