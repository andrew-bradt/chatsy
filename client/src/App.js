import './App.css';
import {io} from 'socket.io-client';

const socket = io('http://localhost:8080', { transports: ['websocket', 'polling', 'flashsocket'] });
socket.on('message', (data) => {
  console.log(data);
});

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
