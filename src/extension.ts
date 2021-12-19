import * as vscode from "vscode";
import {
  createComponentCommand,
  createProjectCommand,
  openWebviewDocCommand,
} from "./commands";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    createProjectCommand(context),
    createComponentCommand(context),
    openWebviewDocCommand(context)
  );
}

// 插件卸载时调用
export function deactivate() {}
