import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";
import { CurrencyProvider } from "../Providers/CurrencyProvider";

export class CurrencyUpdateRate {
  constructor(
    private readonly currencyRepository: ICurrencyRepository,
    private readonly currencyProvider: CurrencyProvider
  ) {}

  public async execute(code: string) {
    const currency = await this.currencyRepository.findOneByCode(code);
    const rate = await this.currencyProvider.getLast(code);

    currency.setRate(rate);

    await this.currencyRepository.save(currency);
  }
}
