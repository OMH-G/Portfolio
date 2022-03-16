const mongoose=require('mongoose');

const Feed=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    feed:{type:String}
})

module.exports =mongoose.model('Feed',Feed);