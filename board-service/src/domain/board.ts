import { v4 } from "uuid";
import { Board, BoardStatus } from "../models/board";

export interface CreateBoardProps {
  title: string;
}

export const createBoard = ({ title }: CreateBoardProps): Board => {
  return {
    id: v4(),
    createdAt: new Date(),
    status: BoardStatus.DRAFT,
    title,
  };
};
