/**
 * inyection dependencies container
 * All class, functions and file values are imoprted and registered in the container to be converted in a singleton instances and to to user DIP
 */
import {
  createContainer,
  asClass,
  asValue,
  asFunction,
  AwilixContainer,
} from "awilix";

/** Our server class to init app */
import Server from ".";

/** config file where set and get variables to process env  */
import config from "../config";

/**
 * Routes layer
 */

import { ProductRoutes } from "../routes/product.routes";

/**
 * Controllers layer
 */

import { ProductController } from "../controllers/ProductController";
/**
 * Service layer
 */
import { ProductService } from "../services/product.service";

/** Repository */
import { ProductRepository } from "../repository/product.repository";

/** Router */
import { router } from "../routes";
/** Models */
import { product } from "../models/product.model";

export const myContainer: AwilixContainer = createContainer();

myContainer
  .register({ Server: asClass(Server).singleton() })
  .register({ Config: asValue(config) })
  .register({
    Router: asFunction(router).singleton(),
  })
  .register({
    ProductRoutes: asFunction(ProductRoutes).singleton(),
  })
  .register({ ProductController: asClass(ProductController).singleton() })
  .register({
    ProductService: asClass(ProductService).singleton(),
  })
  .register({
    ProductRepository: asClass(ProductRepository).singleton(),
  })
  .register({
    Product: asValue(product),
  });

export default myContainer;
