const mongoose = require('mongoose');
const chestSchema = mongoose.Schema({
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
const chestM = mongoose.model("chest",chestSchema);
module.exports = chestM;