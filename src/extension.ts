import * as vscode from "vscode";
import {
  createComponentCommand,
  createProjectCommand,
  openWebviewDocCommand,
} from "./commands";

import ComponentListProvider from "./providers/ComponentListProvider";

export function activate(context: vscode.ExtensionContext) {
  vscode.window.registerTreeDataProvider(
    "",
    new ComponentListProvider(vscode.workspace.rootPath)
  );
  context.subscriptions.push(
    createProjectCommand(context),
    createComponentCommand(context),
    openWebviewDocCommand(context)
  );
}

// 插件卸载时调用
export function deactivate() {}
