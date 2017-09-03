const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteOne
  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  // db.collection('Users').deleteMany({name: "Andrew"});

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59ab5d2d726147996abb7e64')
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
