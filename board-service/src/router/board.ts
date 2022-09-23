import IO from "socket.io";
import { Router } from "express";

import { createBoard } from "../domain/board";
import { getBoardById, getPaginatedBoards, saveBoard } from "../services/board";

const boardRouter = Router();

boardRouter.get("/boards", (req, res) => {
  const baords = getPaginatedBoards({});
  res.json(baords);
});

boardRouter.get("/boards/:id", (req, res) => {
  const {id} = req.params;
  const board = getBoardById(id);
  if(!board) return res.status(404);
  res.json(board);
});

export const registerBoardEvents = (
  socket: IO.Socket,
  globalEmmiter: IO.Server
) => {
  socket.on("create-board", ({ title }) => {
    const newBoard = createBoard({ title });
    saveBoard(newBoard);
    globalEmmiter.emit("board-created", { board: newBoard });
  });
};

export { boardRouter };
