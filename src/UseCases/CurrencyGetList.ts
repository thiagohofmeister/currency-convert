import { Currency } from "../Entities/Domain/Currency";
import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";
import { IItemListModel } from "../Entities/Domain/Interfaces/IItemListModel";

export class CurrencyGetList {
  constructor(private readonly currencyRepository: ICurrencyRepository) {}

  public async execute(): Promise<IItemListModel<Currency>> {
    return this.currencyRepository.findAll({});
  }
}
