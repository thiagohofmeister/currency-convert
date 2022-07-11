import { Currency } from "../Currency";
import { IFilterDefault } from "./IFilterDefault";
import { IItemListModel } from "./IItemListModel";

export interface ICurrencyRepository {
  save(currency: Currency): Promise<Currency>;
  findOneByCode(code: string): Promise<Currency>;
  deleteByCode(code: string): Promise<boolean>;
  update(currency: Currency, conditions?: {} | string): Promise<boolean>;
  findAll(filter: IFilterDefault): Promise<IItemListModel<Currency>>;
}
