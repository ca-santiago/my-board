import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useBoardManager from '../services/boards/board-manager';
import { Board } from '../types';

const BoardView = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {data, loading, error} = useBoardManager(`${id}`);

  const goToMainPage = () => {
    navigate('/');
  }

  if(loading) return <p>Loading your board... Please wait.</p>
  if(!data || error) {
    return (
      <p>We could not load your board, please try again later.</p>
    );
  }

  return (
    <div>
      <div>BoardView</div>
      <p>{data.title}</p>
      <p>{data.createdAt}</p>
      <p>{data.id}</p>
      <button onClick={goToMainPage}>Go to main page</button>
    </div>
  )
}

export default BoardView;
