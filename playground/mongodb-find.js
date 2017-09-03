const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   completed: false
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // })
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('59a6e19b78c19b26a0698076')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // })
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count is ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // })

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data', err);
  })

  db.close();
});