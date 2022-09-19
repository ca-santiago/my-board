import IO from "socket.io";
import { Router } from "express";

import { createBoard } from "../domain/board";
import { getPaginatedBoards, saveBoard } from "../services/board";

const boardRouter = Router();

boardRouter.get("/boards", (req, res) => {
  const baords = getPaginatedBoards({});
  res.json(baords);
});

export const registerBoardEvents = (
  socket: IO.Socket,
  globalEmmiter: IO.Server
) => {
  socket.on("create-board", ({ title }) => {
    console.log("Trying to create a board");
    const newBoard = createBoard({ title });
    saveBoard(newBoard);
    globalEmmiter.emit("board-created", { board: newBoard });
  });
};

export { boardRouter };
