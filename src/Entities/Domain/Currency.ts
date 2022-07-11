export class Currency {
  private id: string;
  private rate: number;

  constructor(private code: string) {}

  public getCode(): string {
    return this.code;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): this {
    this.id = id;
    return this;
  }

  public getRate(): number {
    return this.rate;
  }

  public setRate(rate: number): this {
    this.rate = rate;
    return this;
  }
}
