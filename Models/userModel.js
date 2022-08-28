import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {
        type: 'string', 
        required: true
    },
    password: {
        type: 'string', 
        required: true
    },
    firstname: {
        type: 'string', 
        required: true
    },
    lastname: {
        type: 'string', 
        required: true
    },
    isAdmin: {
        type: 'boolean', 
        default: false
    },
    profilePicture: 'string',
    coverPicture: 'string',
    about: 'string',
    livesIn: 'string',
    worksAt: 'string',
    relationships: 'string',
    followers: [],
    following: []
}, {timestamps: true}
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel