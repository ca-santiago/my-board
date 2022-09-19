import { Task, TaskStatus } from "../models/task";

const tasks: Task[] = [];

export const saveTask = (t: Task): Task => {
    tasks.push(t);
    return t;
} 

export const getTaskById = (id: string): Task | null => {
    return tasks.find(t => t.id === id) || null;
};

export const removeTask = (id: string) => {
    const index = tasks.findIndex(t => t.id === id);
    if(index < 0) return null;

    const existing = tasks[index];
    existing.status = TaskStatus.INACTIVE;
    tasks[index] = existing;
}

export const getTaskByFilter = () => {};
