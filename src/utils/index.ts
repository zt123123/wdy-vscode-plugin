import * as vscode from "vscode";
import { PLUGIN_PREFIX } from "../constants";

export function showInfo(
  message: string,
  ...items: string[]
): Thenable<string | undefined> {
  return vscode.window.showInformationMessage(message, ...items);
}

export function showError(
  message: string,
  ...items: string[]
): Thenable<string | undefined> {
  return vscode.window.showErrorMessage(message, ...items);
}

export function showWarn(
  message: string,
  ...items: string[]
): Thenable<string | undefined> {
  return vscode.window.showWarningMessage(message, ...items);
}

export function getCommandName(command: string) {
  return `${PLUGIN_PREFIX}.${command}`;
}
