const mongoose=require('mongoose');

const GC=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    github:{type:Object,required:true},
    cert:{type:Object,required:true},
    deploy:{type:Object,required:true}
})

module.exports =mongoose.model('gcd',GC);