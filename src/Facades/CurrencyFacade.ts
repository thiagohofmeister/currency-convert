import { ProviderFactory } from "../Factories/ProviderFactory";
import { QueueFactory } from "../Factories/QueueFactory,";
import { RepositoryFactory } from "../Factories/RepositoryFactory";
import { CurrencyCreateOrUpdate } from "../UseCases/CurrencyCreateOrUpdate";
import { CurrencyGetOneByCode } from "../UseCases/CurrencyGetOneByCode";
import { CurrencyUpdateAmount } from "../UseCases/CurrencyUpdateAmount";

export class CurrencyFacade {
  constructor(
    private readonly repositoryFactory: RepositoryFactory,
    private readonly providerFactory: ProviderFactory,
    private readonly queueFactory: QueueFactory
  ) {}

  public async createOrUpdate(code: string) {
    const currencyCreateOrUpdateUseCase = new CurrencyCreateOrUpdate(
      this.repositoryFactory.buildCurrencyRepository(),
      this.queueFactory.buildCurrencyUpdateQueue()
    );

    return currencyCreateOrUpdateUseCase.execute(code);
  }

  public async get(code: string) {
    const currencyGetOneByCode = new CurrencyGetOneByCode(
      this.repositoryFactory.buildCurrencyRepository()
    );

    return currencyGetOneByCode.execute(code);
  }

  public async delete(code: string) {
    const currencyDeleteByCode = new CurrencyGetOneByCode(
      this.repositoryFactory.buildCurrencyRepository()
    );

    return currencyDeleteByCode.execute(code);
  }

  public async updateAmount(code: string) {
    const currencyUpdateAmount = new CurrencyUpdateAmount(
      this.repositoryFactory.buildCurrencyRepository(),
      this.providerFactory.buildCurrencyProvider()
    );

    return currencyUpdateAmount.execute(code);
  }
}
