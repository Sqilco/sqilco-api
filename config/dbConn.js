const mongoose = require("mongoose");
const password = encodeURI(process.env.MONGO_PASSWORD.trim());
const url = `mongodb+srv://sqilco_api:${password}@cluster0.8q9safv.mongodb.net`

mongoose.connect(url,).then(()=>{
    console.log("MongoDb Connect");
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})
