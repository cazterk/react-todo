import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../interface";
import { data } from "../todos";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");

  const todoLength = todos.length;
  let id = (todoLength + 1).toString();
  const hasTodos = todoLength > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: id,
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheckedTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="w-10/12 sm:w-10/11 lg:w-1/2 maxw-2xl flex flex-col items-center">
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckedTodo={handleCheckedTodo}
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase"> Please add todo!</p>
      )}
      {hasTodos && (
        <p>{`👉🏼${remainingTodos} of ${todoLength}👈🏼 todos remaining`}</p>
      )}
    </section>
  );
};

export default Todos;
