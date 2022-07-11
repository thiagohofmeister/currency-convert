import { CurrencyDao } from "../Entities/Dao/CurrencyDao";
import { Currency } from "../Entities/Domain/Currency";
import { EntityDataMapperContract } from "./Contracts/EntityDataMapperContract";

export class CurrencyDataMapper extends EntityDataMapperContract<
  Currency,
  CurrencyDao
> {
  toDomainEntity(entity: CurrencyDao): Currency {
    return new Currency(entity.code)
      .setRate(entity.rate)
      .setId(entity._id.toString());
  }

  toDaoEntity(domain: Currency): CurrencyDao {
    return new CurrencyDao(domain.getCode(), domain.getRate(), domain.getId());
  }
}
