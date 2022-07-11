import { AmqpQueueContract } from "./AmqpQueueContract";

export class CurrencyUpdateQueue extends AmqpQueueContract {
    constructor(url: string) {
        super(url, "currencyUpdate");
    }
}
