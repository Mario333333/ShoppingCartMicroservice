import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
require("express-async-errors");

export const router = ({ ProductRoutes }: { ProductRoutes: any }) => {
  const router = express.Router();
  const apiRoutes: Router = express.Router();


  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());
  apiRoutes.use("/product", ProductRoutes);

  router.use("/v1/api", apiRoutes);

  return router;
};
