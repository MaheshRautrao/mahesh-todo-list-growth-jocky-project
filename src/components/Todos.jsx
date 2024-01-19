import Todo from "./Todo";

export default function Todos() {
  return (
    <div className="Todos">
      <div className="Todohead">
        <h2>Task list</h2>
        <p>3/5 done</p>
      </div>
      <Todo todotext="this is first todo" />
      <Todo todotext="this is second todo" />
      <Todo todotext="this is third todo" />
      <Todo todotext="this is fourth todo" />
      <Todo todotext="this is fifth todo" />
    </div>
  );
}
