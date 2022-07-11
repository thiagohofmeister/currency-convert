import { Request, Response, NextFunction } from "express";
import { IConvertCurrencyDto } from "../Entities/Dto/IConvertCurrencyDto";
import { Factory } from "../Factories/Factory";
import { BaseController } from "./BaseController";

export class ConvertController extends BaseController {
  public async get(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const factory = Factory.getInstance();
      const result = await factory
        .buildFacadeFactory()
        .buildConvertFacade()
        .get(request.query as unknown as IConvertCurrencyDto);

      this.successResponseHandler(result, response);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
}
