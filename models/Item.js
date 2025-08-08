const mongoose=require('mongoose');
const ItemSchema=new mangoose.Schema({
    name:{type:String, required:true},
    quantity:{type:Number,required:true}
});
module.exports=mongoose.model('Item',ItemSchema);