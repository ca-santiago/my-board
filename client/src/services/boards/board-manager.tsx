import React from 'react'
import { useFetch } from '../../hook/useFetch';
import { Board } from '../../types';

const useBoardManager = (boardId: string) => {
  const {data, error, loading, refetch} = useFetch<Board, {}>(`http://localhost:3001/boards/${boardId}`);
  return {data, error, loading, refetch};
}

export default useBoardManager;