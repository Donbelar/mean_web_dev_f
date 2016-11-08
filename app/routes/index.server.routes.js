/**
 * Created by Administrator on 11/6/2016.
 */

module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};