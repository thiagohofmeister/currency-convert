import { CurrencyUpdateQueue } from "../Modules/Queue/CurrencyUpdateQueue";

export class QueueFactory {
  constructor(private readonly url: string) {}

  public buildCurrencyUpdateQueue() {
    return new CurrencyUpdateQueue(this.url);
  }
}
