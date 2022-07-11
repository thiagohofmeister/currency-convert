import { CurrencyDataMapper } from "../DataMappers/CurrencyDataMapper";

export class DataMapperFactory {
  public buildCurrencyDataMapper() {
    return new CurrencyDataMapper();
  }
}
