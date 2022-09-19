export enum TaskStatus {
  "ACTIVE",
  "INACTIVE",
  "DRAFT",
}

export interface Task {
  id: string;
  title: string;
  content?: string;
  status: TaskStatus;
  createdAt: Date;
  parentId: string;
}

export interface TaskDAO extends Task {}

export interface TaskPublicDTO extends Omit<Task, "status" | "parentId"> {}
