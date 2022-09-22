import React from 'react';
import { Board } from '../../types';
import moment from 'moment';

import './board-card-styles.css';

export interface BoardCardProps {
    data: Board;
}

const BoardCard = ({data}: React.PropsWithChildren<BoardCardProps>) => {
  return (
    <div className='board-card-container'>
        <div className='board-title-container'>
            <h3>{data.title}</h3>
        </div>
        <p className='card-subtext' >{moment(data.createdAt, false).format('dd mm yyyy, hh:mm a')}</p>
    </div>
  )
}

export default BoardCard