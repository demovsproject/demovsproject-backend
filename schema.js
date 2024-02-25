import mongoose from "mongoose";
const newSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    passwordd: {
        type: String,
        required: true
    },
})
const newSchema1 = new mongoose.Schema({
    userName: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    passwordd: {
        type: String,
        required: true
    },
})
const NgoSchema = new mongoose.Schema({
    ngoid : String,
    password : String

})
const detailsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    gender: String,
    dob: Date,
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    bloodGroup: String,
    bloodQuantity: Number,
    adhar: String
});
const detailsSchema1 = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    gender: String,
    dob: Date,
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    bloodGroup: String,
    donateOrgan: String,
    adhar: String
});
const ngoLog = new mongoose.model("ngolog",NgoSchema)
const donarReg = new mongoose.model("donarreg", newSchema)
const customerReg = new mongoose.model("customerreg", newSchema1)
const donateOrgans = mongoose.model('donateorgan', detailsSchema1);

// Create a model
const donateBlood = mongoose.model('donateBlood', detailsSchema);
export { ngoLog,customerReg,donarReg, donateBlood, donateOrgans }