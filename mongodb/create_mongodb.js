const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://f20202358:root@cluster0.iq23vkt.mongodb.net/';
const databaseName = 'mydb';

MongoClient.connect(url)
  .then((client) => {
    console.log('Connected to the MongoDB server');
    const db = client.db(databaseName);
    // Perform database operations here
    const userSchema = mongoose.Schema({
      name : {
        type : String,
        required : true
      },
      email : {
        type : String,
        require : true,
        unique : true
      },
      password :{
        type:String,
        required : true,
        min:8
      },
      confirmPassword :{
        type:String,
        required : true,
        min:8
      }
    });
    // model
    const userModel = mongoose.model('userModel', userSchema);

    (async function createUser(){
      let user={
        name : 'Abhishek',
        email : 'abc@gmail.com',
        password : '12345678',
        confirmPassword : '12345678'
      };
      let data = await userModel.create(user);
      console.log(data);
    })();
  })
