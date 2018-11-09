import * as React from 'react';
import { Client } from '../types/socket.interface';

export const SocketContext = React.createContext<State>({ clients: [] });

interface Props {}
interface State {
    clients: Client[];
}

export class SocketContextContainer extends React.Component<Props, State> {
    state: State = {
        clients: [],
    };

    render() {
        return (
            <SocketContext.Provider value={this.state}>
                {this.props.children}
            </SocketContext.Provider>
        );
    }

    public componentDidMount() {
        const socket = new WebSocket('ws://localhost:8088');

        socket.onopen = () => {
            console.log('connected');
            socket.send(
                JSON.stringify({
                    event: 'devtoolConnected',
                    data: {
                        clientInfo: {
                            host: location.origin,
                            port: location.port,
                        },
                    },
                }),
            );
        };

        socket.onclose = () => console.log('disconnected!');

        socket.onmessage = msg => {
            const { event, data } = JSON.parse(msg.data);
            const { clientInfo } = data;
            console.log({ event, data });
            if (event === 'clientConnected') {
                this.setState({
                    clients: this.state.clients.concat([
                        { url: clientInfo.url, isConnected: true, logs: [] },
                    ]),
                });
            }
            if (event === 'console') {
                const state = this.state;
                state.clients[0].logs.push({
                    timestamp: new Date().toLocaleTimeString(),
                    content: data.arguments
                        .map(el => JSON.stringify(el))
                        .join(', '),
                    line: '1',
                });
                this.setState(state);
            }
        };
    }
}
