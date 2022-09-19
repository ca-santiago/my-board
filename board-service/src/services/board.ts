import { Board, BoardStatus } from "../models/board";

const _boards: Board[] = [];

export const saveBoard = (t: Board): Board => {
  _boards.push(t);
  return t;
};

export const getBoardById = (id: string): Board | null => {
  return _boards.find((t) => t.id === id) || null;
};

export const removeBoard = (id: string) => {
  const index = _boards.findIndex((t) => t.id === id);
  if (index < 0) return null;

  const existing = _boards[index];
  existing.status = BoardStatus.INACTIVE;
  _boards[index] = existing;
};

export interface GetPaginatedBoardsProps {
  offset?: number;
  count?: number;
}
export interface GetPaginatedBoardsResult {
  boards: Board[];
  offset: number;
  count: number;
}
export const getPaginatedBoards = ({
  offset = 1,
  count = 10,
}: GetPaginatedBoardsProps): GetPaginatedBoardsResult => {
  const fixedOffset = Math.max(0, offset);
  const fixedCount = Math.max(0, Math.min(10, count));
  return {
    count: fixedCount,
    offset: fixedOffset,
    boards: _boards.slice(fixedOffset - 1, fixedCount * fixedOffset),
  };
};
