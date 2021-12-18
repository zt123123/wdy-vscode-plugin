import * as vscode from "vscode";
import { createComponent, createProject } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  const createProjectCommand = vscode.commands.registerCommand(
    "wdy-vscode-plugin.createProject",
    (uri: vscode.Uri) => {
      if (uri) {
        const dirPath = uri.fsPath;
        createProject(dirPath);
      } else {
        // TODO
        console.log("open panel");
      }
    }
  );
  const createComponentCommand = vscode.commands.registerCommand(
    "wdy-vscode-plugin.createComponent",
    (uri: vscode.Uri) => {
      if (uri) {
        const dirPath = uri.fsPath;
        createComponent(dirPath);
      } else {
        // TODO
        console.log("open panel");
      }
    }
  );

  context.subscriptions.push(createProjectCommand, createComponentCommand);
}

// 插件卸载时调用
export function deactivate() {}
