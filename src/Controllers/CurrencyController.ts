import { Request, Response, NextFunction } from "express";
import { Factory } from "../Factories/Factory";
import { BaseController } from "./BaseController";

export class CurrencyController extends BaseController {
  public async put(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const factory = Factory.getInstance();

      const result = await factory
        .buildFacadeFactory()
        .buildCurrencyFacade()
        .createOrUpdate(request.params.code);

      this.successResponseHandler(result, response);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  public async get(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const factory = Factory.getInstance();

      const result = await factory
        .buildFacadeFactory()
        .buildCurrencyFacade()
        .get(request.params.code);

      this.successResponseHandler(result, response);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const factory = Factory.getInstance();

      const result = await factory
        .buildFacadeFactory()
        .buildCurrencyFacade()
        .delete(request.params.code);

      this.successResponseHandler(result, response);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
