import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";

export class CurrencyGetOneByCode {
  constructor(private readonly currencyRepository: ICurrencyRepository) {}

  public async execute(code: string) {
    return this.currencyRepository.findOneByCode(code);
  }
}
