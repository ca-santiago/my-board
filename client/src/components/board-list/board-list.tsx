import React from 'react';

import { useBoardsManager } from '../../services/boards/boardsManager';
import { socketService } from '../../services/socket';
import LoadErrorView from '../../views/LoadError';
import LoadingList from '../loading/loading-list';
import ReloadButton from '../reload-button';
import BoardCard from './board-card';

import { BoardListContainer, BoardTitleInput, CreateBoardContainer, MainCTA } from './styles';

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
    <BoardListContainer>
      <CreateBoardContainer>
          <BoardTitleInput
            value={inputTitle}
            onChange={(e) => { setInputTitle(e.target.value) }}
            placeholder="Board title"
            name='create-board-input'
          />
          <MainCTA onClick={handleBoardCreation}>Yes</MainCTA>
      </CreateBoardContainer>
      <div>
        {data.boards.map(b => <BoardCard data={b} />)}
      </div>
    </BoardListContainer>
  );
}