const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    datevalue: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;


// export default mongoose.model('User', UserSchema);