import { ConvertFacade } from "../Facades/ConvertFacade";
import { CurrencyFacade } from "../Facades/CurrencyFacade";
import { ProviderFactory } from "./ProviderFactory";
import { QueueFactory } from "./QueueFactory,";
import { RepositoryFactory } from "./RepositoryFactory";

export class FacadeFactory {
  constructor(
    private readonly repositoryFactory: RepositoryFactory,
    private readonly providerFactory: ProviderFactory,
    private readonly queueFactory: QueueFactory
  ) {}

  public buildCurrencyFacade() {
    return new CurrencyFacade(
      this.repositoryFactory,
      this.providerFactory,
      this.queueFactory
    );
  }

  public buildConvertFacade() {
    return new ConvertFacade(this.repositoryFactory);
  }
}
