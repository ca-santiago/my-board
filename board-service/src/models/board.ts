export enum BoardStatus {
  "ACTIVE",
  "INACTIVE",
  "DRAFT",
}

export interface Board {
  id: string;
  title: string;
  status: BoardStatus;
  createdAt: Date;
}

export interface BoardDAO extends Board {}

export interface BoardPublicDTO extends Omit<Board, "status"> {}
