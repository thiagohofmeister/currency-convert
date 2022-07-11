import { Factory } from "./Factories/Factory";
import * as dotenv from "dotenv";
import { MongoDB } from "./Database/MongoDB";
import { Consumer } from "./Events/Consumer";

dotenv.config();

(async () => {
  await new MongoDB().createDataSource();

  const factory = Factory.getInstance();
  const queue = factory.buildQueueFactory().buildCurrencyUpdateQueue();

  queue.consume(async (msg) => {
    const messageId = msg.properties.messageId;
    const payload = JSON.parse(msg.content.toString());

    const consumer = new Consumer(factory.buildFacadeFactory());

    if (!consumer[messageId]) {
      console.error(`MessageId (${messageId}) not implemented.`);
      return;
    }

    consumer[messageId](payload);
  });
})();
