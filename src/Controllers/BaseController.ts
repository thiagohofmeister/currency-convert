import { Response } from "express";

export abstract class BaseController {
  protected successResponseHandler(result: any, response: Response) {
    response.status(200).json(result);
  }
}
