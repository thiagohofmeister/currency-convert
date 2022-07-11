import { AxiosRequest } from "../Modules/Request/AxiosRequest";
import { CurrencyProvider } from "../Providers/CurrencyProvider";

export class ProviderFactory {
  public buildCurrencyProvider() {
    return new CurrencyProvider(new AxiosRequest(process.env.CURRENCY_API_URL));
  }
}
