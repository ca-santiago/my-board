import React from 'react';
import { Board } from '../../types';
import moment from 'moment';

import { BoardCardContainer, BoardCardHeader, SubText } from './styles';

export interface BoardCardProps {
  data: Board;
  onClick?: () => void;
}

const BoardCard = ({ data, onClick }: React.PropsWithChildren<BoardCardProps>) => {

  const handleOnClick = () => {
    if(onClick) onClick();
  }

  return (
    <BoardCardContainer onClick={handleOnClick} >
      <BoardCardHeader>{data.title}</BoardCardHeader>
      <SubText>{moment(data.createdAt, false).format('dd mm yyyy, hh:mm a')}</SubText>
    </BoardCardContainer>
  )
}

export default BoardCard