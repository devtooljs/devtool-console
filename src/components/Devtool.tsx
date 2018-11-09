import * as React from 'react';
import styled from 'styled-components';
import { themeColor, themeColorLighten } from '../style/colors';
import { InputArea } from './InputArea';
import { Logger } from './Logger';
import { Client } from '../types/socket.interface';

const Wrapper = styled.div`
    float: left;
    width: 25%;
    height: 800px;
    margin-top: 16px;

    @media (max-width: 600px) {
        width: 100%;
    }
    @media (min-width: 600px) and (max-width: 700px) {
        width: 50%;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        width: 33.333%;
    }

    .wrapper {
        background-color: ${themeColorLighten};
        box-shadow: 1px 1px 10px #ccc;
        box-sizing: border-box;
        width: 96%;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .title {
            padding: 10px;
            flex: 1;
            background-color: ${themeColor};
        }
    }
`;

export class DevTool extends React.Component<Props> {
    public state = {
        isShowInputArea: true,
    };

    public toggleInput = () => {
        this.setState({
            isShowInputArea: !this.state.isShowInputArea,
        });
    };

    public render() {
        return (
            <Wrapper>
                <div className="wrapper">
                    <div className="title">
                        {this.props.url}
                        <button onClick={this.toggleInput}>toggle input</button>
                    </div>
                    <Logger logs={this.props.logs} />
                    {this.state.isShowInputArea && <InputArea />}
                </div>
            </Wrapper>
        );
    }
}

interface Props extends Client {}
