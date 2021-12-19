import * as vscode from "vscode";
import * as fs from "fs-extra";
import * as path from "path";
const spawn = require("cross-spawn");

import { PROJECT_TEMPLATE_PATH } from "../constants";
import { getCommandName, showError, showInfo } from "../utils";
import CustomError from "../common/CustomError";

async function createProject(targetDir: string) {
  try {
    const files = fs.readdirSync(targetDir);
    const isEmpty = !files.length;
    if (!isEmpty) {
      throw new CustomError(
        "You cannot create a project in a non empty folder"
      );
    }
    // TODO install dependency
    // const result = spawn.sync("npm", ["-v"]);
    // console.log("result", result);

    const tplPath = path.join(__dirname, PROJECT_TEMPLATE_PATH);
    await fs.copy(tplPath, targetDir);
    return true;
  } catch (error) {
    showError(`创建项目失败: ${(error as CustomError).message}`);
  }
}

export const createProjectCommand = (context?: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    getCommandName("createProject"),
    async (uri: vscode.Uri) => {
      if (uri) {
        const dirPath = uri.fsPath;
        const isSuccess = await createProject(dirPath);
        isSuccess && showInfo("创建项目成功");
      } else {
        // TODO
        console.log("open panel");
      }
    }
  );
