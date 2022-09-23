import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useBoardListManager } from '../../services/boards/board-list-manager';
import { socketService } from '../../services/socket';
import LoadErrorView from '../../views/LoadError';
import LoadingList from '../loading/loading-list';
import ReloadButton from '../reload-button';
import BoardCard from './board-card';

import { BoardListContainer, BoardTitleInput, CreateBoardContainer, MainCTA } from './styles';

export const BoardList: React.FC<any> = () => {
  const [title, setTitle] = React.useState('');
  const [disableCreate, setDisableCreate] = React.useState(true);

  const navigate = useNavigate();
  const { data, error, loading, addBoard, refetch } = useBoardListManager();

  React.useEffect(() => {
    socketService.on('board-created', ({ board }) => {
      addBoard(board);
    });

    return () => {
      socketService.off('board-created');
    }
  }, [addBoard]);

  const handleBoardCreation = () => {
    setTitle('');
    setDisableCreate(true);
    socketService.emit('create-board', { title });
  }

  const handleTitleUpdate = (newtitle: string) => {
    const hasMinLen = newtitle.length <= 0;
    setDisableCreate(hasMinLen);
    setTitle(newtitle);
  }

  const handleOpenBoard = (id: string) => {
    navigate(`/board/${id}`);
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
          value={title}
          onChange={(e) => { handleTitleUpdate(e.target.value) }}
          placeholder="Board title"
          name='create-board-input'
        />
        <MainCTA
          className={`${disableCreate ? 'disabled' : ''}`}
          disabled={disableCreate}
          onClick={handleBoardCreation}
        >
          Create board
        </MainCTA>
      </CreateBoardContainer>
      <div>
        {data.boards.map(b => <BoardCard onClick={() => handleOpenBoard(b.id)} key={b.id} data={b} />)}
      </div>
    </BoardListContainer>
  );
}