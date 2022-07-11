import { AxiosRequest } from "../Modules/Request/AxiosRequest";
import { EconomiaProvider } from "../Providers/EconomiaProvider";

export class ProviderFactory {
  public buildEconomiaProvider() {
    return new EconomiaProvider(new AxiosRequest(process.env.CURRENCY_API_URL));
  }
}
