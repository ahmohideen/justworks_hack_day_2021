var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter'
    },
    last_name: {
        type: String,
        Required: 'Please enter'
    },
    position: {
        type: String,
        Required: 'Please enter'
    },
    experience: {
        type: String,
        Required: 'Please enter'
    },
    fun_fact: {
        type: String,
        Required: 'Please enter'
    },
    attack_power: {
        type: String,
        Required: 'Please enter'
    }

});

//one o instead of 2
module.exports = mongoose.model('Users', UserSchema);