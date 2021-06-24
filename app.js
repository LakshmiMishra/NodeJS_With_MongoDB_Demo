const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema= new mongoose.Schema({
  name:{type:String,
  required:[true,"please enter fruit name"]},
  rating:{
    type:Number,
     min:1,
     max:10},
    review:String
});

const Fruit= new mongoose.model("Fruit",fruitSchema);

const mango=new Fruit({
  name:"Mango",
  rating: 9,
  review:"They are delicious"
});

mango.save();
//Fruit.insertMany([kiwi,banana,orange],function(err){
  //if(!err){  console.log("Fruits added")}
  //else{console.log("Error")}
//})
const peopleSchema=new mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruit:fruitSchema
});

const People=new mongoose.model("People",peopleSchema);

const people=new People({
  name:"yashi",
  age:2,
  favoriteFruit:mango
});

//people.save();

//  Fruit.updateOne({_id:"60d4024f239a5403d6924bc8"},{name:"Peach"},function(err){
    //if(err){
      //console.log(err);
  //  }else{
    //  console.log("updated")

  //  }
//  })

//Fruit.deleteOne({name:"Peach"},function(err){
  //if(err){console.log(err)}
  //else{console.log("deleted")}
//})

People.updateOne({name:"lakshmi"},{favoriteFruit:mango},function(err){
  if(err){console.log(err);}
  else{console.log("updated")}
})
Fruit.find(function(err,fruits){
  if(err){
    console.log("No fruits")
  }
else{
  mongoose.connection.close();
fruits.forEach(function(fruit){
  console.log(fruit.name);
})

}
  });
