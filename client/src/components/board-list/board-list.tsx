import React from 'react';
import { SocketContext } from '../../context';
import { useBoardsManager } from '../../services/boards/boardsManager';
import { Board } from '../../types';


export const BoardList: React.FC<any> = () => {
    const {socket} = React.useContext(SocketContext);
    const [inputTitle, setInputTitle] = React.useState('');

    const {data, error, loading, addBoard} = useBoardsManager();

    React.useEffect(() => {
        socket.on('board-created', ({ board }) => {
            addBoard(board);
        });

        return () => {
            socket.off('board-created');
        }
    }, [addBoard]);

    const handleBoardCreation = () => {
        const title = inputTitle;
        setInputTitle('');
        socket.emit('create-board', { title });
    }

    if(loading) return <p>Loading...</p>
    if(error || !data) return <p>Error loading data</p>

    return (
        <>
            <input value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} name='create-board-input' />
            <button onClick={handleBoardCreation}>Yes</button>
            <br />
            <br />
            <div>
                {data.boards.map(b => {
                    return <p key={b.id}>{b.title}</p>
                })}
            </div>
        </>
    );
}