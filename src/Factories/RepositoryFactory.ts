import { DataSource } from "typeorm";
import { CurrencyDataNotFoundException } from "../Entities/Domain/Exceptions/CurrencyDataNotFoundException";
import { ICurrencyRepository } from "../Entities/Domain/Interfaces/ICurrencyRepository";
import { CurrencyRepository } from "../Repositories/CurrencyRepository";
import { DataMapperFactory } from "./DataMapperFactory";

export class RepositoryFactory {
  private currencyRepository: ICurrencyRepository;

  constructor(
    private readonly dataSource: DataSource,
    private readonly dataMapperFactory: DataMapperFactory
  ) {}

  public buildCurrencyRepository(): ICurrencyRepository {
    if (!this.currencyRepository) {
      this.currencyRepository = new CurrencyRepository(
        this.dataSource,
        this.dataMapperFactory.buildCurrencyDataMapper(),
        new CurrencyDataNotFoundException()
      );
    }

    return this.currencyRepository;
  }
}
