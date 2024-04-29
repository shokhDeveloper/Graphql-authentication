import { gql } from "apollo-server-express";
import {fileURLToPath} from "node:url";
import fs from "node:fs";
import path from "path";

function createSchema(url){
    const filePath = fileURLToPath(url);
    const _dirname = path.dirname(filePath);    
    const file = fs.readFileSync(path.join(_dirname, "schema.graphql"), "UTF-8");
    
    return gql`${file}`
}
export {createSchema};
