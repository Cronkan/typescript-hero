import { createConnection, IConnection, IPCMessageReader, IPCMessageWriter } from 'vscode-languageserver/lib/main';
import { InitializeResult, LogMessageParams, MessageType } from 'vscode-languageserver/lib/protocol';

const connection: IConnection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));

let workspaceRoot: string;
connection.onInitialize((params): InitializeResult => {
    workspaceRoot = params.rootPath;
    return {
        capabilities: {
        }
    }
});

connection.onInitialized(()=> {
    connection.sendNotification('window/logMessage', <LogMessageParams>{
        type: MessageType.Log,
        message: 'Hello world from the server'
    });
});

connection.onNotification('foobar', () => {
    connection.sendNotification('window/logMessage', <LogMessageParams>{
        type: MessageType.Log,
        message: 'Received foobar notification!'
    });
});

connection.listen();