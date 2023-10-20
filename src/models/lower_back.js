const mongoose = require('mongoose');
const lowerSchema = mongoose.Schema({
    E_mainDesc:String,
    E_name:String,
    E_url:String,
    E_desc:String,
    step1:String,
    step2:String,
    step3:String,
    step4:String,
    step5:String,
    name:String
})
const lowerBackM = mongoose.model("lowerBack",lowerSchema);
module.exports = lowerBackM;