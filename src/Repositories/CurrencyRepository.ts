import { DataSource } from "typeorm";
import { CurrencyDataMapper } from "../DataMappers/CurrencyDataMapper";
import { CurrencyDao } from "../Entities/Dao/CurrencyDao";
import { Currency } from "../Entities/Domain/Currency";
import { DataNotFoundException } from "../Entities/Domain/Exceptions/DataNotFoundException";
import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";
import { TypeOrmMongoDBRepositoryContract } from "./Contracts/TypeOrmMongoDBRepository";

export class CurrencyRepository
  extends TypeOrmMongoDBRepositoryContract<Currency, CurrencyDao>
  implements ICurrencyRepository
{
  constructor(
    dataSource: DataSource,
    dataMapper: CurrencyDataMapper,
    dataNotFoundException: DataNotFoundException
  ) {
    super(
      dataSource.getMongoRepository(CurrencyDao),
      dataMapper,
      dataNotFoundException
    );
  }

  async deleteByCode(code: string) {
    return !!(await this.repository.deleteOne({ code })).deletedCount;
  }

  async findOneByCode(code: string): Promise<Currency> {
    const currency = await this.repository.findOne({ where: { code } });

    if (!currency) throw this.dataNotFoundException;

    return this.getDomainEntityByDaoEntity(currency);
  }
}
