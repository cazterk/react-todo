import { TodoProps } from "../interface";

const TodoItem = ({
  todo: { id, task, title, isCompleted },
  handleDeleteTodo,
  handleCheckedTodo,
}: TodoProps) => {
  return (
    <div
      className={`flex w-full p-4 mb-2 justify-between items-center rounded ${
        isCompleted ? "bg-gray-400" : "bg-green-300"
      } `}
    >
      <p className="ml-2 text-xl font-sans font-medium">{task}</p>
      <div className="w=1/6 flex justify-between items-center mr-2">
        <button
          aria-label="Delete todo"
          onClick={() => handleDeleteTodo(id)}
          className=" flex h-7 w-7 justify-center bg-red-400 hover:bg-red-500 text-white font-bold rounded mr-4"
        >
          X
        </button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckedTodo(id)}
          className="form-check-box h-7 w-7"
        />
      </div>
    </div>
  );
};

export default TodoItem;
