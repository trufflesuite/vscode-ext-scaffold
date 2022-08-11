// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
    commands,
    Disposable,
    ExtensionContext,
    window,
} from 'vscode';

/**
 * This method is called when your extension is activated.
 * Your extension is activated the very first time the command is executed
 *
 * See https://code.visualstudio.com/api/get-started/extension-anatomy#extension-entry-file.
 *
 * @param context
 */
export function activate({ subscriptions }: ExtensionContext): void {
    /**
     * See `subscriptions` property in
     * https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.
     */
    function register(disposable: Disposable) {
        subscriptions.push(disposable);
    }

    /**
     * Wrapper around `registerCommand` that pushes the resulting `Disposable`
     * into the `context`'s `subscriptions`.
     */
    function registerCommand(command: string, callback: (...args: any[]) => any) {
        register(
            commands.registerCommand(command, function (...args: unknown[]): any {
                output.append(`[${command}] `);
                return callback(...args);
            })
        );
    }

    const output = window.createOutputChannel('VS Code Extension Scaffold');

    registerCommand('vscode-ext-scaffold.hello', () => {
        void window.showInformationMessage('Hello from VS Code Extension Scaffold!');
    });
}
