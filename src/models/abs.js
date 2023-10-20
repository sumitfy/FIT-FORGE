const mongoose = require('mongoose');
const absSchema = mongoose.Schema({
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
const absM = mongoose.model("abs",absSchema);
module.exports = absM;