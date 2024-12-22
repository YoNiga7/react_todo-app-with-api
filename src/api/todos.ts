import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2176;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = (todoTitle: string) => {
  return client.post<Todo>('/todos', {
    title: todoTitle,
    userId: USER_ID,
    completed: false,
  });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = (todoId: number, updatedFields: Partial<Todo>) => {
  return client.patch<Todo>(`/todos/${todoId}`, updatedFields);
};
// Add more methods here
