import React from 'react';
import { BoardList } from './components/board-list';
import { SocketContext, socket } from './context';

const App = () => {
  return (
  <SocketContext.Provider value={{ socket }} >
    <p>Status
      <span></span>
    </p>
    <BoardList />
  </SocketContext.Provider>
  );
}

export default App;
