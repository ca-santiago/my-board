import React from 'react';
import { Board } from '../../types';
import moment from 'moment';

import { BoardCardContainer, BoardCardHeader, SubText } from './styles';

export interface BoardCardProps {
  data: Board;
}

const BoardCard = ({ data }: React.PropsWithChildren<BoardCardProps>) => {
  return (
    <BoardCardContainer>
      <BoardCardHeader>{data.title}</BoardCardHeader>
      <SubText>{moment(data.createdAt, false).format('dd mm yyyy, hh:mm a')}</SubText>
    </BoardCardContainer>
  )
}

export default BoardCard