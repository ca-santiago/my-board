import React from 'react';
import { useBoardsManager } from '../../services/boards/boardsManager';
import { socketService } from '../../services/socket';
import LoadErrorView from '../../views/LoadError';
import LoadingList from '../loading/loading-list';
import ReloadButton from '../reload-button';

export const BoardList: React.FC<any> = () => {
  const [inputTitle, setInputTitle] = React.useState('');

  const { data, error, loading, addBoard, refetch } = useBoardsManager();

  React.useEffect(() => {
    socketService.on('board-created', ({ board }) => {
      addBoard(board);
    });

    return () => {
      socketService.off('board-created');
    }
  }, [addBoard]);

  const handleBoardCreation = () => {
    const title = inputTitle;
    setInputTitle('');
    socketService.emit('create-board', { title });
  }

  if (loading) return <LoadingList />

  if (error || !data) {
    return (
      <LoadErrorView>
        <ReloadButton onClick={refetch} />
      </LoadErrorView>
    );
  }

  return (
    <div>
      <input value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} name='create-board-input' />
      <button onClick={handleBoardCreation}>Yes</button>
      <div>
        {data.boards.map(b => {
          return <p key={b.id}>{b.title}</p>
        })}
      </div>
    </div>
  );
}