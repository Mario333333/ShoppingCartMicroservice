import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

import { Product } from "../utils/productTypes";

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    available: { type: Boolean, },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },

});


ProductSchema.plugin(require("mongoose-autopopulate"))

export const product: Model< Product> = mongoose.model<Product>("product", ProductSchema)