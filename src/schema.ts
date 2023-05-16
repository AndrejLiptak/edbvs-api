import { builder } from "./builder";
import "./models/genericDevice";
import "./models/user";
import "./models/circuitBreaker";
import "./models/enclosure";
import "./models/rcd";
import "./models/surgeProtector";
import "./models/plc"
import "./models/approval"

export const schema = builder.toSchema({});
