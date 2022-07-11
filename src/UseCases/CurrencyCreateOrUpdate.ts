import { Currency } from "../Entities/Domain/Currency";
import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";
import { CurrencyUpdateQueue } from "../Modules/Queue/CurrencyUpdateQueue";

export class CurrencyCreateOrUpdate {
  constructor(
    private readonly currencyRepository: ICurrencyRepository,
    private readonly currencyUpdateQueue: CurrencyUpdateQueue
  ) {}

  public async execute(code: string) {
    const currency = new Currency(code);

    await this.currencyRepository.save(currency);

    this.currencyUpdateQueue.sendToQueue("updateCurrency", {
      currency: { code },
    });

    return currency;
  }
}
