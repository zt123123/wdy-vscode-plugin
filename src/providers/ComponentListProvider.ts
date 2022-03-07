import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export default class ComponentListProvider
  implements vscode.TreeDataProvider<ComponentItem>
{
  constructor(private workspaceRoot: string | undefined) {}

  onDidChangeTreeData?: vscode.Event<any> | undefined;
  getTreeItem(element: any): vscode.TreeItem | Thenable<vscode.TreeItem> {
    throw new Error("Method not implemented.");
  }
  getChildren(element?: any): vscode.ProviderResult<any[]> {
    throw new Error("Method not implemented.");
  }
}

class ComponentItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }
}
