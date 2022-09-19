import { v4 } from "uuid";
import { Task, TaskStatus } from "../models/task";

interface CreateTaskProps {
  content?: string;
  title: string;
  boardId: string;
}

export const createTask = (props: CreateTaskProps): Task => {
  const { content, title, boardId } = props;
  const newTask: Task = {
    id: v4(),
    content,
    title,
    status: TaskStatus.DRAFT,
    createdAt: new Date(),
    parentId: boardId,
  };
  return newTask;
};
