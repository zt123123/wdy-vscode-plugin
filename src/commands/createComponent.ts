import * as fs from "fs-extra";
import * as path from "path";

import { COMPONENT_TEMPLATE_PATH } from "../constants";

export async function createComponent(targetDir: string) {
  try {
    const tplPath = path.join(__dirname, COMPONENT_TEMPLATE_PATH);
    await fs.copy(tplPath, targetDir);
  } catch (error) {
    console.log(error);
  }
}
