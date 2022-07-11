import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";

export class CurrencyDeleteByCode {
  constructor(private readonly currencyRepository: ICurrencyRepository) {}

  public async execute(code: string): Promise<boolean> {
    return this.currencyRepository.deleteByCode(code);
  }
}
