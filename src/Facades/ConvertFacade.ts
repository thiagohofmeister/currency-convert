import { IConvertCurrencyDto } from "../Entities/Dto/IConvertCurrencyDto";
import { RepositoryFactory } from "../Factories/RepositoryFactory";
import { ConvertCurrency } from "../UseCases/ConvertCurrency";
import { ConvertCurrencyValidator } from "../Validators/ConvertCurrencyValidator";

export class ConvertFacade {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  public async get(data: IConvertCurrencyDto) {
    const currencyCreateOrUpdateUseCase = new ConvertCurrency(
      this.repositoryFactory.buildCurrencyRepository(),
      new ConvertCurrencyValidator()
    );

    return currencyCreateOrUpdateUseCase.execute(data);
  }
}
