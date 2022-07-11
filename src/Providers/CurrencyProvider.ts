import { AxiosRequest } from "../Modules/Request/AxiosRequest";
import { ProviderContract } from "./Contracts/ProviderContract";
import { HttpMethod } from "./Enum/HttpMethod";

export class CurrencyProvider extends ProviderContract<AxiosRequest> {
  public async getLast(from: string) {
    try {
      const request = this.getRequest().withEndpoint(
        `/latest/currencies/usd.min.json`
      );

      const response = (await request.send(HttpMethod.GET)).getBody();

      return response.usd[`${from.toLowerCase()}`];
    } catch (e) {
      console.error("Failed to get last currencies.");
      throw e;
    }
  }
}
