import * as React from 'react';
import './App.css';
import { Container } from './components/Container';
import { SocketContextContainer } from './components/SocketContext';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <SocketContextContainer>
                    <Container />
                </SocketContextContainer>
            </div>
        );
    }
}

export default App;
