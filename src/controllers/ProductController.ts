import { Request, Response } from "express";

let _ProductService:any | null = null;

export class ProductController {

  constructor({ ProductService }: { ProductService: any }) {
    _ProductService = ProductService;
  }

  async get(req: Request, res: Response) {
    const { productId } = req.params;
    const product = await _ProductService.get(productId);
    return res.send(product);
  }

  async getAll(req: Request, res: Response) {
    const { pageSize, pageNumber } = req.query;
 
    
    const products = await _ProductService.getAll(pageSize, pageNumber);
    return res.send(products);
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    const createdProduct = await _ProductService.create(body);
    return res.status(201).send(createdProduct);
  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const { productId } = req.params;
    const updatedProduct = await _ProductService.update(productId, body);
    return res.send(updatedProduct);
  }

  async delete(req: Request, res: Response) {
    const { productId } = req.params;
    const deletedProduct = await _ProductService.delete(productId);
    return res.send(deletedProduct);
  }


}
