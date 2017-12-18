const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const RequiredString = {
    type: String,
    required: true
};

const userSchema = new Schema ({
    email: RequiredString,
    hash: RequiredString
});

userSchema.statics.emailExists = function(email){
    return this.find({email})
        .count()
        .then(count => count > 0);
};

userSchema.methods.generateHash = function(password) {
    this.hash = bcrypt.hashSync(password, 7);
};

userSchema.methods.comparePassword = function(pass) {
    return bcrypt.compareSync(pass, this.hash);
};

module.exports = mongoose.model('User', userSchema);