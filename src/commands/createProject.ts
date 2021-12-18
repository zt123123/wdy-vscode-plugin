import * as fs from "fs-extra";
import * as path from "path";
import * as vscode from "vscode";
const spawn = require("cross-spawn");

import { PROJECT_TEMPLATE_PATH } from "../constants";

export async function createProject(targetDir: string) {
  try {
    const files = fs.readdirSync(targetDir);
    const isEmpty = !files.length;
    if (!isEmpty) {
      return vscode.window.showErrorMessage(
        "cant not create a project in a empty dir"
      );
    }
    const result = spawn.sync("npm", ["-v"]);
    console.log("result", result);

    const tplPath = path.join(__dirname, PROJECT_TEMPLATE_PATH);
    await fs.copy(tplPath, targetDir);
  } catch (error) {
    console.log(error);
  }
}
