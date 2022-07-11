import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("currency")
export class CurrencyDao {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  code: string;

  @Column()
  rate: number;

  constructor(code: string, rate: number, id?: string) {
    if (id) {
      this._id = new ObjectId(id);
    }
    this.code = code;
    this.rate = rate;
  }
}
