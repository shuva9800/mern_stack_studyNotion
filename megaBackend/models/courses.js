const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
 courseName:{
    type: 'string',
 },
 courseDescription:{
    type: 'string',
 },
 instractor:{
    type: 'string',
 },
 whatYouWillLearn:{
    type: 'string',
 },
 courseContent:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Section"
    }
 ],
 ratingandreview:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "RatingAndReview"
    }
 ],
 price:{
    type:Number,
    required: true,
 },
 thumbnil:{
    type:"string",
 },
 tags:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Tags"
 },
 studentEnrolled:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    }
 ]



})


module.exports= mongoose.model("Course", courseSchema);