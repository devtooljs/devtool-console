import * as React from 'react';
import styled from 'styled-components';
import { fontCode, themeColorLighten } from '../style/colors';

const InputAreaWrapper = styled.div`
    padding: 15px;
    flex: 2;
    textarea {
        width: 100%;
        height: 75%;
        padding: 10px;
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid ${themeColorLighten};
        outline: 0;
        font-family: ${fontCode};
    }
    button {
        margin-top: 8px;
        border: 0;
        outline: 0;
        background-color: ${themeColorLighten};
        font-size: 110%;
        width: 100%;
    }
`;

export class InputArea extends React.Component {
    public state = {
        logs: [1, 2, 3, 4, 1, 1, 1, 1, 1],
    };

    public render() {
        return (
            <InputAreaWrapper>
                <textarea name="" id="" />
                <button>Execute!</button>
            </InputAreaWrapper>
        );
    }
}
