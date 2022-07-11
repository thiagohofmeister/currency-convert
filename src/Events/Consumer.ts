import { FacadeFactory } from "../Factories/FacadeFactory";

export class Consumer {
  constructor(private readonly facadeFactory: FacadeFactory) {}

  public async updateCurrency(msg: any) {
    await this.facadeFactory
      .buildCurrencyFacade()
      .updateAmount(msg.currency.code);
  }
}
