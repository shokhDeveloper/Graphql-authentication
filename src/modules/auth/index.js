import { createSchema } from "#createSchema";
import resolver from "./resolver.js";
const schema = createSchema(import.meta.url);

export default {
    schema,
    resolver
}