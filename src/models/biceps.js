const mongoose = require('mongoose');
const bicepsSchema = mongoose.Schema({
    // E1_name:String,
    // E1_desc:String,
    // E2_name:String,
    // E2_desc:String,
    // E3_name:String,
    // E3_desc:String,
    // E4_name:String,
    // E4_desc:String,
    // E5_name:String,
    // E5_desc:String
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
module.exports = mongoose.model("biceps",bicepsSchema);
