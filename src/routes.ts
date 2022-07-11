import { Router } from "express";
import { ConvertController } from "./Controllers/ConvertController";
import { CurrencyController } from "./Controllers/CurrencyController";

const router = Router();

const currencyController = new CurrencyController();
const convertController = new ConvertController();

router.put("/currency/:code", currencyController.put.bind(currencyController));
router.get("/currency/:code", currencyController.get.bind(currencyController));
router.delete(
  "/currency/:code",
  currencyController.delete.bind(currencyController)
);
router.get("/convert", convertController.get.bind(convertController));

export { router };
