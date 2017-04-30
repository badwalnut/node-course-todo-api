// const MongoClient = require('mongodb').MongoClient;
// next line is the same as that above:
// const {MongoClient} = require('mongodb');

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  // db.collection('Users').deleteMany({name: 'Albert Strasse'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5904b8149ef3ab3dcc84b978')}).then((result) => {
    console.log(result);
  });


  // db.close();
});
