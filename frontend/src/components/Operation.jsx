import { useNavigate } from "react-router-dom";
const Operation = ({ route, operation }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="m-3 mb-10 p-3 text-white bg-blue-500 rounded hover:bg-blue-700 min-w-60"
        onClick={() => {
          navigate(route);
        }}
      >
        {operation}
      </button>
    </>
  );
};

export default Operation;
