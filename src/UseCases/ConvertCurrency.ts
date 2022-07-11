import { Currency } from "../Entities/Domain/Currency";
import { DataNotFoundException } from "../Entities/Domain/Exceptions/DataNotFoundException";
import { InvalidDataException } from "../Entities/Domain/Exceptions/InvalidDataException";
import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";
import { IErrorReason } from "../Entities/Domain/Interfaces/IErrorReason";
import { IConvertCurrencyDto } from "../Entities/Dto/IConvertCurrencyDto";
import { ConvertCurrencyValidator } from "../Validators/ConvertCurrencyValidator";

export class ConvertCurrency {
  constructor(
    private readonly currencyRepository: ICurrencyRepository,
    private readonly convertCurrencyValidator: ConvertCurrencyValidator
  ) {}

  public async execute(data: IConvertCurrencyDto) {
    await this.convertCurrencyValidator.convertCurrencyValidateData(data);

    const errorReasons: IErrorReason[] = [];

    const [fromCurrency, toCurrency] = await Promise.all([
      this.getCurrency(data.from, "from", errorReasons),
      this.getCurrency(data.to, "to", errorReasons),
    ]);

    if (!!errorReasons.length) {
      throw new InvalidDataException("Invalid data.", errorReasons);
    }

    const newAmount =
      data.amount * (toCurrency.getRate() / fromCurrency.getRate());

    return {
      newAmount,
    };
  }

  private async getCurrency(
    code: string,
    paramName: string,
    errorReasons: IErrorReason[]
  ): Promise<Currency> {
    try {
      return await this.currencyRepository.findOneByCode(code);
    } catch (e) {
      if (!(e instanceof DataNotFoundException)) {
        throw e;
      }

      errorReasons.push({
        id: `${paramName}.${code}.notFound`,
        message: `Param ${paramName}.${code} not found.`,
      });

      return null;
    }
  }
}
