import * as React from 'react';
import styled from 'styled-components';
import { fontCode, themeColorLighten } from '../style/colors';
import { Log } from '../types/socket.interface';

const LoggerWrapper = styled.div`
    height: 60%;
    padding: 15px;
    overflow-y: auto;
    flex: 5;
    .log {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        word-break: break-all;
        font-size: 80%;
        border-bottom: 1px solid ${themeColorLighten};
        .left {
            display: flex;
            .timestamp {
                margin-right: 10px;
                font-style: italic;
                white-space: nowrap;
            }
            .content {
                font-family: ${fontCode};
            }
        }
        .line {
            white-space: nowrap;
            font-style: italic;
        }
    }
`;

export class Logger extends React.Component<Props> {
    public state = {
        logs: [1, 2, 3, 4, 1, 1, 1, 1, 1].map(el => ({
            content: 'undefined undefined ',
            line: 'index.html:1',
            timestamp: '2018-08-01',
        })),
    };

    public render() {
        return (
            <LoggerWrapper>
                {this.props.logs.map((el, index) => (
                    <div className="log" key={index}>
                        <div className="left">
                            <div className="timestamp">{el.timestamp}</div>
                            <div className="content">{el.content}</div>
                        </div>
                        <div className="line">{el.line}</div>
                    </div>
                ))}
            </LoggerWrapper>
        );
    }
}

interface Props {
    logs: Log[];
}
