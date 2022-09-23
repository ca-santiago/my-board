import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BoardView = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  }

  return (
    <div>
      <div>BoardView</div>
      <p>{id}</p>
      <button onClick={goToMainPage}>Go to main page</button>
    </div>
  )
}

export default BoardView;
