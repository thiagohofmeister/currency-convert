import { schedule } from "node-cron";
import { Factory } from "./Factories/Factory";
import * as dotenv from "dotenv";
import { CronDispatcher } from "./Modules/Cron/CronDispatcher";
import { CronTimeEnum } from "./Modules/Cron/Enum/CronTimeEnum";
import { MongoDB } from "./Database/MongoDB";

dotenv.config();

(async () => {
  await new MongoDB().createDataSource();

  const factory = Factory.getInstance();
  const dispatcher = new CronDispatcher(
    factory.buildRepositoryFactory(),
    factory.buildQueueFactory()
  );

  schedule("* * * * *", async (a) => {
    dispatcher.dispatch(CronTimeEnum.ONE_MINUTE);
  });
})();
