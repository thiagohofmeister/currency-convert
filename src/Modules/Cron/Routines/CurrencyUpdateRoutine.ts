import { ICurrencyRepository } from "../../../Entities/Domain/Interfaces/ICurrencyRepository";
import { CurrencyUpdateQueue } from "../../Queue/CurrencyUpdateQueue";
import { RoutineContract } from "./Contracts/RoutineContract";

export class CurrencyUpdateRoutine extends RoutineContract {
  constructor(
    private readonly currencyRepository: ICurrencyRepository,
    private readonly currencyUpdateQueue: CurrencyUpdateQueue
  ) {
    super();
  }

  public async run() {
    console.log("RODANDO ROTINA DE ATUALIZAÇÃO DE MOEDAS");
    let items = [];
    let page = 1;
    do {
      const currencies = await this.currencyRepository.findAll({
        size: 100,
        page,
      });

      currencies.items.forEach((currency) => {
        this.currencyUpdateQueue.sendToQueue("updateCurrency", {
          currency: { code: currency.getCode() },
        });
      });

      page++;
    } while (items.length);
  }
}
