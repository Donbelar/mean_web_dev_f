/**
 * Created by Administrator on 11/7/2016.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect(config.db);

    return db;
}