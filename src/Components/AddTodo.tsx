import { AddTodoProps } from "../interface";

const AddTodo = ({ task, handleChange, handleSubmitTodo }: AddTodoProps) => {
  return (
    <form onSubmit={handleSubmitTodo} className="flex justify-between w-full">
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        className="flex-1 rounded p-2 text-grey-dark mr-2 "
      />
      <button
        type="submit"
        aria-label=" Add todo"
        className=" flex justify-center items-center bg-indigo-500 w-12 rounded"
      >
        <ButtonIcons />
      </button>
    </form>
  );
};

export default AddTodo;

const ButtonIcons = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </>
  );
};
