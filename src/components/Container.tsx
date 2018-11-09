import * as React from 'react';
import styled from 'styled-components';
import { DevTool } from './Devtool';
import { SocketContext } from './SocketContext';

const Wrapper = styled.div`
    overflow: hidden;
    padding-bottom: 30px;
`;

interface MyState {}

interface Props {}

export class Container extends React.Component<Props, MyState> {
    state: MyState = {};

    render() {
        return (
            <Wrapper>
                <SocketContext.Consumer>
                    {context =>
                        context.clients.map((el, index) => (
                            <DevTool
                                key={index}
                                url={el.url}
                                logs={el.logs}
                                isConnected={el.isConnected}
                            />
                        ))
                    }
                </SocketContext.Consumer>
            </Wrapper>
        );
    }
}
