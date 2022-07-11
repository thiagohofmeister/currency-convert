import { Schema } from "joi";
import * as Joi from "joi";
import { JoiSchemaValidatorContract } from "./JoiSchemaValidatorContract";
import { IConvertCurrencyDto } from "../Entities/Dto/IConvertCurrencyDto";

export class ConvertCurrencyValidator extends JoiSchemaValidatorContract {
  private convertCurrencySchema: Schema;

  constructor() {
    super();

    this.convertCurrencySchema = Joi.object({
      from: Joi.string().required(),
      to: Joi.string().required(),
      amount: Joi.number().required(),
    });
  }

  public async convertCurrencyValidateData(data: IConvertCurrencyDto) {
    return this.validateBySchema<IConvertCurrencyDto>(
      data,
      this.convertCurrencySchema
    );
  }
}
