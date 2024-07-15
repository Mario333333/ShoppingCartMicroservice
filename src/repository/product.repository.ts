
import { Model } from "mongoose";
import { Product } from "../utils/productTypes";
let _product: Model<Product>;


export class ProductRepository {

    constructor({ Product} : { Product: Model<Product> }) {
      
        _product = Product;
    }

    async get(id:number) {
        return await _product.findById(id)
    }

    async getAll(pageSize = 5, pageNumber = 1) {
        const skips = pageSize * (pageNumber - 1);
        
        return await _product.find().skip(skips).limit(pageSize)
    }

    async create(entity: any) {
        return await _product.create(entity)
    }

    async update(id:number, entity: any) {
        
        return await _product.findByIdAndUpdate(id, entity, { new: true })
    }

    async delete(id:number) {
        return await _product.findByIdAndDelete(id)
    }


}

