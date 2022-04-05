import {join} from "path";
import { getTypeOrmConfig } from "./dbConfig";
import {loggerConfig} from "./logger";
const {version} = require("../../package.json");
export const rootDir = join(__dirname, "..");

export const config: Partial<TsED.Configuration> = {
  version,
  rootDir,
  logger: loggerConfig,
  // additional shared configuration
  CERAMIC_API_ENDPOINT: "https://ceramic-clay.3boxlabs.com",
  typeorm: [ getTypeOrmConfig()]
};
