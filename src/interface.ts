import { ChangeEvent, FormEvent } from "react";

export interface Todo {
  id: string;
  title?: string;
  task: string;
  isCompleted: boolean;
}

export interface TodoProps {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckedTodo: (id: string) => void;
}

export interface AddTodoProps {
  task: string;
  handleChange: (e: ChangeEvent) => void;
  handleSubmitTodo: (e: FormEvent) => void;
}
