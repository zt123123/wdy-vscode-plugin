import * as vscode from "vscode";
import * as fs from "fs-extra";
import * as path from "path";

import { COMPONENT_TEMPLATE_PATH } from "../constants";
import { getCommandName, showInfo } from "../utils";

async function createComponent(targetDir: string) {
  try {
    const tplPath = path.join(__dirname, COMPONENT_TEMPLATE_PATH);
    await fs.copy(tplPath, targetDir);
  } catch (error) {
    console.log(error);
  }
}

export const createComponentCommand = (context?: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    getCommandName("createComponent"),
    async (uri: vscode.Uri) => {
      if (uri) {
        const dirPath = uri.fsPath;
        await createComponent(dirPath);
        showInfo("创建组件成功");
      } else {
        // TODO
        console.log("open panel");
      }
    }
  );
