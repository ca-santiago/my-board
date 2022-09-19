import React from 'react';
import { useFetch } from "../../hook/useFetch";
import { Board } from "../../types";

interface BoardsResult {
  boards: Board[];
  count: number;
  offset: number;
}

const boardsURL = "http://localhost:3001/boards";

export const useBoardsManager = () => {
  const [boardsState, setBoards] = React.useState<BoardsResult>({
    boards: [],
    count: 0,
    offset: 0
  });
  const { data, loading, error, refetch } = useFetch<BoardsResult, any>(boardsURL);

  React.useEffect(() => {
    if(data) setBoards(data)
  }, [data]);

  const addBoard = React.useCallback((b: Board) => {
    const newBoards = boardsState.boards.concat([b]);
    setBoards({
      ...boardsState,
      boards: newBoards,
    });
    console.log({
      boardsState,
      newBoards
    });
  }, [boardsState]);

  return { data: boardsState, loading, error, refetch, addBoard };
};
