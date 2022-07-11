import { DataNotFoundException } from "./DataNotFoundException";

export class CurrencyDataNotFoundException extends DataNotFoundException {
  constructor() {
    super("Currency data not found.");
  }
}
