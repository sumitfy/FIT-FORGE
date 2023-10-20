const mongoose = require('mongoose');
const latsSchema = mongoose.Schema({
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
const latsM = mongoose.model("lats",latsSchema);
module.exports = latsM;