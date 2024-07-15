class CustomError extends Error {
  status: number | undefined;
}

let _productRepository: any = null;
export class ProductService {
  constructor({ ProductRepository }: { ProductRepository: any }) {
    _productRepository = ProductRepository;
  }

  
  async get(id: String) {
    if (!id) {
      const error = new CustomError();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const currentEntity = await _productRepository.get(id);

    if (!currentEntity) {
      const error = new CustomError();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return currentEntity;
  }

  async getAll(pageSize: number, pageNumber: number) {
    return await _productRepository.getAll(pageSize, pageNumber);
  }

  async create(entity: any) {
    return await _productRepository.create(entity);
  }

  async update(id: number, entity: any) {
    if (!id) {
      const error = new CustomError();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }
    return await _productRepository.update(id, entity);
  }

  async delete(id: number) {
    if (!id) {
      const error = new CustomError();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }
    return await _productRepository.delete(id);
  }
}
