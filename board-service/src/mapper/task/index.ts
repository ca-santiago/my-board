import { Task, TaskDAO } from "../../models/task";

export const mapTaskDomainToDAO = (t: Task): TaskDAO =>  {
    return t;
}

export const mapTaskDaoToDomain = (t: TaskDAO): Task => {
    return t;
}
