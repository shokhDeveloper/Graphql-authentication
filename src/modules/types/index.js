import { createSchema } from "../../lib/index.js";

const schema = createSchema(import.meta.url);
import resolver from "./resolver.js";

export default {schema, resolver}