import {  Router } from "express";
import { ParseIntMiddleware } from "../middlewares/parse-int.midleware";

export const ProductRoutes = ({ ProductController }: {ProductController: any}) => {
  const router = Router();
  router.get("/:productId", ProductController.get);
  router.get("/", ParseIntMiddleware, ProductController.getAll);
  router.post("/", ProductController.create);
  router.patch("/:productId", ProductController.update);
  router.delete("/:productId", ProductController.delete);

  return router;
};
