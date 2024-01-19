import { IoIosMenu } from "react-icons/io";
export default function Todo({ todotext }) {
  return (
    <div className="Todo">
      <div className="todocheckcontainer">
        <IoIosMenu />
        <input type="checkbox" id="todocheck" />
      </div>
      <div>
        <p>{todotext}</p>
      </div>
    </div>
  );
}
