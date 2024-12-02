import mongoose from "mongoose";

//create product schema

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {timestamps: true} //adds updatAt and createdAt
)

const Product = mongoose.model('Product',productSchema)

export default Product