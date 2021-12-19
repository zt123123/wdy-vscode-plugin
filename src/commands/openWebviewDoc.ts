import * as vscode from "vscode";
import { WDY_DOCUMENT_URL } from "../constants";
import { getCommandName } from "../utils";

export function openWebviewDocCommand(context?: vscode.ExtensionContext) {
  return vscode.commands.registerCommand(
    getCommandName("openWebviewDoc"),
    (uri: vscode.Uri) => {
      const panel = vscode.window.createWebviewPanel(
        "docWebview",
        "微店云开发文档",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
        }
      );
      panel.webview.html = `<iframe style='width:100vw;height:100vh;' src='${WDY_DOCUMENT_URL}'/>`;
      panel.onDidDispose(
        () => {
          panel.dispose();
        },
        null,
        context?.subscriptions
      );
      return panel;
    }
  );
}
